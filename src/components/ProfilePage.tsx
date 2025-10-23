import { useEffect, useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Globe, Bell } from 'lucide-react';
import Logo from './Logo';
import { useAuth, type Profile, type Preferences, type LoginLog } from './AuthProvider';

function PageHeader() {
  return (
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
  );
}

export default function ProfilePage() {
  const { user, getProfile, updateProfile, getPreferences, updatePreferences, getLoginHistory, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [prefs, setPrefs] = useState<Preferences | null>(null);
  const [logs, setLogs] = useState<LoginLog[]>([]);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const p = await getProfile();
      const pr = await getPreferences();
      const lg = await getLoginHistory(10);
      setProfile(p);
      setPrefs(pr);
      setLogs(lg);
    };
    load();
  }, [user?.id]);

  const handleSave = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setSaving(true);
    const pErr = await updateProfile({ full_name: profile?.full_name ?? null, phone: profile?.phone ?? null });
    const prefErr = await updatePreferences({ theme: prefs?.theme ?? 'system', language: prefs?.language ?? 'fr', email_notifications: prefs?.email_notifications ?? true });
    setSaving(false);
    if (pErr.error || prefErr.error) {
      setErrorMsg(pErr.error || prefErr.error || 'Erreur lors de la mise à jour');
    } else {
      setSuccessMsg('Profil et préférences mis à jour');
    }
  };

  const formatDateTime = (iso?: string) => {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleString();
  };

  return (
    <>
      <PageHeader />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche: infos de base */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h1 className="text-gray-900 dark:text-white font-['Lora',_serif] font-bold text-xl">Mon profil</h1>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </label>
                <input
                  type="email"
                  value={user?.email ?? ''}
                  disabled
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  aria-readonly
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold flex items-center gap-2">
                  <User className="h-4 w-4" /> Nom complet
                </label>
                <input
                  type="text"
                  value={profile?.full_name ?? ''}
                  onChange={(e) => setProfile({ ...(profile ?? { id: user?.id || '' }), full_name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Téléphone
                </label>
                <input
                  type="tel"
                  value={profile?.phone ?? ''}
                  onChange={(e) => setProfile({ ...(profile ?? { id: user?.id || '' }), phone: e.target.value })}
                  placeholder="+33 6 12 34 56 78"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {saving ? 'Enregistrement...' : 'Enregistrer'}
              </button>
              {errorMsg && (
                <p className="mt-4 text-red-600 dark:text-red-400 font-['Inter',_sans-serif]" aria-live="polite">{errorMsg}</p>
              )}
              {successMsg && (
                <p className="mt-2 text-emerald-700 dark:text-emerald-400 font-['Inter',_sans-serif]" aria-live="polite">{successMsg}</p>
              )}
            </div>
          </div>

          {/* Colonne droite: préférences et sécurité */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-gray-900 dark:text-white font-['Lora',_serif] font-bold text-lg">Préférences</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold">Thème</label>
                <select
                  value={prefs?.theme ?? 'system'}
                  onChange={(e) => setPrefs({ ...(prefs ?? { user_id: user?.id || '' }), theme: e.target.value as Preferences['theme'] })}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="system">Système</option>
                  <option value="light">Clair</option>
                  <option value="dark">Sombre</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold">Langue</label>
                <select
                  value={prefs?.language ?? 'fr'}
                  onChange={(e) => setPrefs({ ...(prefs ?? { user_id: user?.id || '' }), language: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4 text-gray-500" />
                <label className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">
                  <input
                    type="checkbox"
                    checked={Boolean(prefs?.email_notifications)}
                    onChange={(e) => setPrefs({ ...(prefs ?? { user_id: user?.id || '' }), email_notifications: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  Recevoir les notifications par email
                </label>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {saving ? 'Enregistrement...' : 'Enregistrer les préférences'}
                </button>
              </div>

              <div className="mt-6">
                <button
                  onClick={async () => { await signOut(); window.location.hash = 'accueil'; }}
                  className="w-full sm:w-auto border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-xl font-['Inter',_sans-serif] font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Historique des connexions */}
        <div className="max-w-5xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors">
          <h2 className="text-gray-900 dark:text-white font-['Lora',_serif] font-bold text-lg mb-4">Historique des connexions</h2>
          {logs.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Aucune connexion récente.</p>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {logs.map((l) => (
                <li key={l.id} className="py-3 flex items-center justify-between">
                  <span className="text-gray-800 dark:text-gray-200 font-['Inter',_sans-serif]">{formatDateTime(l.at)}</span>
                  <span className={"text-sm " + (l.success ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400')}>{l.success ? 'Réussi' : 'Échec'}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm truncate max-w-[50%]">{l.user_agent ?? ''}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}