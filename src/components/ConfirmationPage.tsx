import { useEffect, useState } from 'react';
import { CheckCircle2, PartyPopper } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { supabase, SUPABASE_READY } from '../lib/supabaseClient';

export default function ConfirmationPage() {
  const { user } = useAuth();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState<string>('Validation du lien en cours...');

  useEffect(() => {
    const run = async () => {
      try {
        // Support both query string and hash-based query (/#confirmation?token_hash=...)
        const searchParams = new URLSearchParams(window.location.search);
        let tokenHash = searchParams.get('token_hash');
        let typeParam = searchParams.get('type');

        if (!tokenHash) {
          const rawHash = window.location.hash.slice(1);
          const [, query] = rawHash.split('?');
          const hashParams = new URLSearchParams(query || '');
          tokenHash = hashParams.get('token_hash');
          typeParam = typeParam || hashParams.get('type');
        }

        const type = (typeParam || 'signup') as 'signup' | 'email_change' | 'magiclink' | 'recovery';

        if (!tokenHash || !SUPABASE_READY) {
          setStatus('error');
          setMessage("Lien de confirmation invalide ou expiré.");
          return;
        }
        const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
        if (error) {
          setStatus('error');
          setMessage(error.message);
          return;
        }
        // If data.session exists, user is now logged in by the client
        setStatus('success');
        setMessage('Votre compte a été activé avec succès.');
      } catch (e: any) {
        setStatus('error');
        setMessage(e?.message || 'Une erreur est survenue lors de la confirmation.');
      }
    };
    run();
  }, []);

  const goToDashboard = () => {
    window.location.hash = 'mon-compte/tableau-de-bord';
  };

  const displayName = user?.user_metadata?.full_name || user?.email || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300 text-center">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-emerald-100 text-emerald-700 p-4">
                <PartyPopper className="h-12 w-12" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">
                Bienvenue sur Verdosmart{displayName ? `, ${displayName}` : ''} !
              </h1>
              <p className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">
                Votre compte a été activé avec succès. Vous pouvez maintenant accéder à toutes les fonctionnalités de la plateforme.
              </p>
              <button
                onClick={goToDashboard}
                className="mt-4 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] font-semibold"
              >
                Accéder à mon compte
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-red-100 text-red-600 p-4">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Échec de la confirmation</h1>
              <p className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">{message}</p>
            </div>
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}