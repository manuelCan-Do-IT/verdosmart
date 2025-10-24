import { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, isAdmin } = useAuth();
  const [allowed, setAllowed] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      if (loading) return;
      if (!user) {
        setAllowed(false);
        setChecking(false);
        return;
      }
      const ok = await isAdmin();
      if (!mounted) return;
      setAllowed(ok);
      setChecking(false);
    };
    check();
    return () => { mounted = false; };
  }, [user, loading, isAdmin]);

  if (loading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-pulse text-gray-700 dark:text-gray-300">Vérification des droits…</div>
      </div>
    );
  }

  if (!allowed) {
    // Afficher un message clair, et lien vers la page de connexion admin
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Accès réservé</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center max-w-md">
          Cet espace est réservé aux administrateurs. Veuillez vous identifier.
        </p>
        <a href="#admin/login" className="mt-6 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Connexion Administrateur</a>
      </div>
    );
  }

  return <>{children}</>;
}
