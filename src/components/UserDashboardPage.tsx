import { Sprout, ShoppingBag, CalendarDays, Bell, CalendarCheck } from 'lucide-react';
import { useAuth } from './AuthProvider';
import AccountHeader from './AccountHeader';
import Footer from './Footer';

export default function UserDashboardPage() {
  const { user } = useAuth();
  const rawName = user?.user_metadata?.full_name || '';
  const firstName = rawName ? rawName.split(/\s+/)[0] : '';
  const displayName = firstName || user?.email || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-0 transition-colors duration-300">
      <AccountHeader backHref="#accueil" backLabel="Retour" />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Bonjour{displayName ? `, ${displayName}` : ''} !</h1>
        <p className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] mt-2">Voici votre espace personnel. Commencez par explorer la boutique ou prendre rendez-vous avec un expert.</p>

        {/* Accès Rapides */}
        <h2 className="mt-8 text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Accès Rapides</h2>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#marketplace" className="block rounded-xl border border-emerald-200 dark:border-emerald-900/40 p-6 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400"><ShoppingBag className="h-6 w-6" /><span className="font-semibold">Accéder à la boutique</span></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Découvrez nos produits et services.</p>
          </a>
          <a href="#services#experts" className="block rounded-xl border border-emerald-200 dark:border-emerald-900/40 p-6 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400"><CalendarDays className="h-6 w-6" /><span className="font-semibold">Trouver un expert</span></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Réservez un créneau avec un spécialiste.</p>
          </a>
          <a href="#mon-compte/profil" className="block rounded-xl border border-emerald-200 dark:border-emerald-900/40 p-6 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400"><Bell className="h-6 w-6" /><span className="font-semibold">Compléter mon profil</span></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Ajoutez vos coordonnées et préférences.</p>
          </a>
        </section>

        {/* Prochaines échéances */}
        <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Mes Prochaines Échéances</h2>
        <div className="mt-4 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><CalendarCheck className="h-5 w-5 text-emerald-600" /> Aucune échéance pour le moment.</div>
          <a href="#mon-compte/rendez-vous" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif]">Voir mes rendez-vous</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}