import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

export default function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const { user, loading, isAdmin } = useAuth();
  const [isAdminUser, setIsAdminUser] = useState<boolean | null>(null);
  const [checkingRole, setCheckingRole] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (loading) return;
      
      if (!user) {
        // Utilisateur non connecté -> redirection vers login
        window.location.hash = '#login';
        return;
      }

      try {
        const adminStatus = await isAdmin();
        setIsAdminUser(adminStatus);
        
        if (!adminStatus) {
          // Utilisateur connecté mais pas admin -> redirection vers accueil
          window.location.hash = '#';
          return;
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du rôle admin:', error);
        setIsAdminUser(false);
        window.location.hash = '#';
      } finally {
        setCheckingRole(false);
      }
    };

    checkAdminRole();
  }, [user, loading, isAdmin]);

  // Affichage du loading pendant la vérification
  if (loading || checkingRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Vérification des autorisations...</p>
        </div>
      </div>
    );
  }

  // Si l'utilisateur n'est pas admin, on ne rend rien (redirection en cours)
  if (!user || !isAdminUser) {
    return null;
  }

  // Utilisateur admin authentifié -> afficher le contenu
  return <>{children}</>;
}