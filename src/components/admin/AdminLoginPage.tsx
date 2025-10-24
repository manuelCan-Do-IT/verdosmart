import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import Logo from '../Logo';
import { useAuth } from '../AuthProvider';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const { signInWithEmail, isAdmin } = useAuth();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const { error } = await signInWithEmail(formData.email, formData.password);
    if (error) {
      toast.error(error);
      setPending(false);
      return;
    }
    const allowed = await isAdmin();
    if (!allowed) {
      toast.error("Accès refusé: ce compte n'a pas les droits administrateur.");
      setPending(false);
      return;
    }
    toast.success('Connexion admin réussie');
    window.location.hash = 'admin/dashboard';
    setPending(false);
  };

  return (
    <>
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-4 transition-colors duration-300">
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

    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Connexion Administrateur</h1>
        <p className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] mt-2">Accédez à l'espace d'administration de Verdosmart.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <div className="mt-1 relative">
              <Mail className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="admin@exemple.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mot de passe</label>
            <div className="mt-1 relative">
              <Lock className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-sm text-emerald-600 dark:text-emerald-400">
                {showPassword ? 'Masquer' : 'Afficher'}
              </button>
            </div>
          </div>

          <button type="submit" disabled={pending} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
            {pending ? 'Connexion…' : 'Se connecter'}
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400">Accès strictement réservé aux administrateurs prévalidés.</p>
        </form>
      </div>
    </div>
    </>
  );
}
