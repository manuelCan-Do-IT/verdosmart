import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const SUPABASE_READY = Boolean(supabaseUrl && supabaseAnonKey);

if (!SUPABASE_READY) {
  // Helpful runtime message; avoids app crashing silently
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = SUPABASE_READY
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null as any;

// Simple connectivity test helper
export async function testSupabaseConnection(): Promise<{ ok: boolean; details?: string }>{
  if (!SUPABASE_READY || !supabase) {
    return { ok: false, details: 'Supabase non configuré: variables manquantes' };
  }
  try {
    // Ping auth endpoint (works sans session)
    const { data: sessionData, error: authError } = await supabase.auth.getSession();
    if (authError) {
      return { ok: false, details: `Auth error: ${authError.message}` };
    }

    // Attempt a benign select; handle RLS or missing table gracefully
    const { error: selectError } = await supabase.from('profiles').select('user_id').limit(1);
    if (selectError) {
      const msg = selectError.message || '';
      const isRls = /permission|policy|RLS|Unauthorized/i.test(msg);
      const notExist = /relation .* does not exist|table .* not found/i.test(msg);
      if (isRls) return { ok: true, details: 'Connexion OK (RLS bloque lecture non authentifiée)' };
      if (notExist) return { ok: true, details: 'Connexion OK (table absente, schéma non appliqué?)' };
      return { ok: false, details: `Erreur requête: ${msg}` };
    }

    return { ok: true, details: 'Connexion et requête réussies' };
  } catch (e: any) {
    return { ok: false, details: e?.message || 'Erreur inconnue' };
  }
}