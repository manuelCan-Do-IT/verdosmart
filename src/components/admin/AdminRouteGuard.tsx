import { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';
import { Loader2, ShieldAlert } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import Logo from '../Logo';

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

export default function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const { user, isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        // Vérifier si l'utilisateur est connecté
        if (!user) {
          // Rediriger vers la page de connexion admin spécifique
          window.location.hash = 'admin-v';
          return;
        }
        
        // Vérifier le rôle admin dans la base de données
        const adminStatus = await isAdmin();
        setAllowed(adminStatus);
        
        if (!adminStatus) {
          // Journaliser la tentative d'accès non autorisée
          await supabase.from('security_logs').insert({
            user_id: user.id,
            action: 'unauthorized_admin_access',
            details: 'Tentative d'accès à une route admin par un utilisateur non-admin',
            ip_address: 'client-side',
            user_agent: navigator.userAgent
          }).catch(() => {
            // Non bloquant si la table n'existe pas encore
          });
          
          // Rediriger vers la page d'accueil
          setError("Accès non autorisé. Vous n'avez pas les droits administrateur nécessaires.");
          setTimeout(() => {
            window.location.hash = '';
          }, 3000);
          return;
        }
        
        // Journaliser l'accès admin réussi
        await supabase.from('admin_logs').insert({
          user_id: user.id,
          action: 'admin_route_access',
          details: `Accès à la route: ${window.location.hash}`,
          ip_address: 'client-side',
          user_agent: navigator.userAgent
        }).catch(() => {
          // Non bloquant si la table n'existe pas encore
        });
        
        setLoading(false);
      } catch (err: any) {
        setError(`Une erreur est survenue lors de la vérification des droits: ${err.message}`);
        setLoading(false);
      }
    };
    
    checkAdmin();
  }, [user, isAdmin]);

  // Afficher un écran de chargement pendant la vérification
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <Logo size="lg" className="mb-6" />
        <Loader2 className="h-10 w-10 animate-spin text-emerald-600 mb-4" />
        <p className="text-gray-600 dark:text-gray-400 font-medium">Vérification des droits d'accès...</p>
      </div>
    );
  }

  // Afficher un message d'erreur si l'accès est refusé
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-600 p-3 rounded-full">
              <ShieldAlert className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Accès refusé</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{error}</p>
          <p className="text-gray-500 dark:text-gray-500 text-center text-sm">Redirection en cours...</p>
        </div>
      </div>
    );
  }

  // Rendre le contenu protégé si l'accès est autorisé
  return allowed ? <>{children}</> : null;
}