import { useState, useEffect } from 'react';
import { Mail, Lock, ArrowLeft, Shield, Eye, EyeOff, AlertCircle } from 'lucide-react';
import Logo from '../Logo';
import { useAuth } from '../AuthProvider';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabaseClient';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{email?: string; password?: string}>({});
  const { signInWithEmail, isAdmin, user } = useAuth();

  // Rediriger si déjà connecté en tant qu'admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        const adminStatus = await isAdmin();
        if (adminStatus) {
          window.location.hash = 'admin-v/dashboard';
        }
      }
    };
    checkAdminStatus();
  }, [user, isAdmin]);

  // Validation côté client
  const validateForm = () => {
    const errors: {email?: string; password?: string} = {};
    
    // Validation email
    if (!formData.email) {
      errors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Format d\'email invalide';
    }
    
    // Validation mot de passe
    if (!formData.password) {
      errors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier si l'utilisateur est bloqué après trop de tentatives
    if (isBlocked) {
      toast.error('Trop de tentatives échouées. Veuillez réessayer plus tard.');
      return;
    }
    
    // Validation du formulaire
    if (!validateForm()) {
      return;
    }
    
    setPending(true);
    setErrorMessage(null);
    
    try {
      // Enregistrer la tentative de connexion
      setAttempts(prev => {
        const newAttempts = prev + 1;
        if (newAttempts >= 5) {
          setIsBlocked(true);
          setTimeout(() => setIsBlocked(false), 300000); // Bloquer pendant 5 minutes
        }
        return newAttempts;
      });
      
      // Authentification avec Supabase
      const { error } = await signInWithEmail(formData.email, formData.password);
      
      if (error) {
        setErrorMessage(`Échec de connexion: ${error}`);
        toast.error(error);
        setPending(false);
        return;
      }
      
      // Vérification du rôle admin
      const adminStatus = await isAdmin();
      
      if (!adminStatus) {
        // Déconnexion si l'utilisateur n'est pas admin
        await supabase.auth.signOut();
        setErrorMessage('Accès refusé: Vous n\'avez pas les droits administrateur.');
        toast.error("Accès refusé: ce compte n'a pas les droits administrateur.");
        setPending(false);
        return;
      }
      
      // Journalisation de la connexion admin réussie
      await supabase.from('admin_logs').insert({
        user_id: (await supabase.auth.getUser()).data.user?.id,
        action: 'login',
        ip_address: 'client-side', // Côté client, on ne peut pas obtenir l'IP réelle
        user_agent: navigator.userAgent
      }).catch(() => {
        // Non bloquant si la table n'existe pas encore
      });
      
      // Connexion réussie
      toast.success('Connexion admin réussie');
      
      // Redirection vers le dashboard admin
      window.location.hash = 'admin-v/dashboard';
    } catch (err: any) {
      setErrorMessage(`Une erreur est survenue: ${err.message}`);
      toast.error(err.message || 'Erreur de connexion');
    } finally {
      setPending(false);
    }
  };

  return (
    <>
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Retour à l'accueil</span>
        </a>
        <a href="#accueil">
          <Logo size="md" />
        </a>
      </div>
    </div>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-emerald-600 p-3 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] text-center">Administration VerdoSmart</h1>
        <p className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif] mt-2 text-center">Accès sécurisé réservé au personnel autorisé</p>

        {errorMessage && (
          <div className="mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {isBlocked && (
          <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Trop de tentatives échouées. Veuillez réessayer dans 5 minutes.</span>
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse e-mail</label>
            <div className="mt-1 relative">
              <Mail className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (validationErrors.email) {
                    setValidationErrors({...validationErrors, email: undefined});
                  }
                }}
                required
                aria-invalid={!!validationErrors.email}
                aria-describedby={validationErrors.email ? "email-error" : undefined}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  validationErrors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500`}
                placeholder="admin@verdosmart.com"
                disabled={pending || isBlocked}
              />
              {validationErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.email}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mot de passe</label>
            <div className="mt-1 relative">
              <Lock className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (validationErrors.password) {
                    setValidationErrors({...validationErrors, password: undefined});
                  }
                }}
                required
                aria-invalid={!!validationErrors.password}
                aria-describedby={validationErrors.password ? "password-error" : undefined}
                className={`w-full pl-10 pr-12 py-3 rounded-xl border ${
                  validationErrors.password ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500`}
                placeholder="••••••••"
                disabled={pending || isBlocked}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                disabled={pending || isBlocked}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              {validationErrors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.password}</p>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={pending || isBlocked} 
            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center"
          >
            {pending ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connexion en cours...
              </>
            ) : (
              'Se connecter'
            )}
          </button>

          <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
            <p className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              Accès strictement réservé aux administrateurs autorisés
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
