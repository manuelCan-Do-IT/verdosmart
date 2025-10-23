import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase, SUPABASE_READY } from '../lib/supabaseClient';

// Domain types for profile, preferences, and login logs
export type Profile = {
  user_id: string; // maps to auth.users.id (UUID)
  email?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  phone?: string | null;
  created_at?: string;
  updated_at?: string;
};

export type Preferences = {
  user_id: string; // FK to profiles.user_id
  theme?: 'light' | 'dark' | 'system' | null;
  language?: 'fr' | 'en' | null;
  email_notifications?: boolean | null;
  created_at?: string;
  updated_at?: string;
};

export type LoginLog = {
  id: number;
  user_id: string;
  at: string;
  success: boolean;
  ip?: string | null;
  user_agent?: string | null;
  provider?: string | null;
};

// Context shape
interface AuthContextShape {
  user: User | null;
  session: Session | null;
  loading: boolean;
  // Auth actions
  signUpWithEmail: (email: string, password: string) => Promise<{ error?: string }>
  signInWithEmail: (email: string, password: string) => Promise<{ error?: string }>
  signInWithGoogle: () => Promise<{ error?: string }>
  signOut: () => Promise<{ error?: string }>
  // Data actions
  getProfile: () => Promise<Profile | null>
  updateProfile: (patch: Partial<Profile>) => Promise<{ error?: string }>
  getPreferences: () => Promise<Preferences | null>
  updatePreferences: (patch: Partial<Preferences>) => Promise<{ error?: string }>
  getLoginHistory: (limit?: number) => Promise<LoginLog[]>
}

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      if (!SUPABASE_READY) {
        setSession(null);
        setUser(null);
        setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      setLoading(false);
    };
    init();

    if (!SUPABASE_READY) return;
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
      // Log sign-in/out events to login_logs for auditing
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        await logLogin(true);
      }
      if (event === 'SIGNED_OUT') {
        await logLogin(false);
      }
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, []);

  const logLogin = async (success: boolean) => {
    try {
      if (!SUPABASE_READY || !user) return;
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : null;
      await supabase.from('login_logs').insert({ user_id: user.id, success, user_agent: ua });
    } catch (_) {
      // non-blocking: logging failures should not impact UX
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!SUPABASE_READY) return { error: 'Supabase non configuré' };
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    return {};
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!SUPABASE_READY) return { error: 'Supabase non configuré' };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return {};
  };

  const signInWithGoogle = async () => {
    if (!SUPABASE_READY) return { error: 'Supabase non configuré' };
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    });
    if (error) return { error: error.message };
    return {};
  };

  const signOut = async () => {
    if (!SUPABASE_READY) return { error: 'Supabase non configuré' };
    const { error } = await supabase.auth.signOut();
    if (error) return { error: error.message };
    return {};
  };

  const getProfile = async (): Promise<Profile | null> => {
    if (!SUPABASE_READY || !user) return null;
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) return null;
    return data as Profile | null;
  };

  const updateProfile = async (patch: Partial<Profile>) => {
    if (!SUPABASE_READY || !user) return { error: 'Not authenticated' };
    const payload = { ...patch, user_id: user.id };
    const { error } = await supabase.from('profiles').upsert(payload, { onConflict: 'user_id' });
    if (error) return { error: error.message };
    return {};
  };

  const getPreferences = async (): Promise<Preferences | null> => {
    if (!SUPABASE_READY || !user) return null;
    const { data, error } = await supabase
      .from('preferences')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) return null;
    return data as Preferences | null;
  };

  const updatePreferences = async (patch: Partial<Preferences>) => {
    if (!SUPABASE_READY || !user) return { error: 'Not authenticated' };
    const payload = { ...patch, user_id: user.id };
    const { error } = await supabase.from('preferences').upsert(payload, { onConflict: 'user_id' });
    if (error) return { error: error.message };
    return {};
  };

  const getLoginHistory = async (limit = 20): Promise<LoginLog[]> => {
    if (!SUPABASE_READY || !user) return [];
    const { data, error } = await supabase
      .from('login_logs')
      .select('*')
      .eq('user_id', user.id)
      .order('at', { ascending: false })
      .limit(limit);
    if (error) return [];
    return (data ?? []) as LoginLog[];
  };

  const value = useMemo<AuthContextShape>(() => ({
    user,
    session,
    loading,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    getProfile,
    updateProfile,
    getPreferences,
    updatePreferences,
    getLoginHistory,
  }), [user, session, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}