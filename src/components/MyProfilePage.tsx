import { useEffect, useState } from 'react';
import { useAuth, type Address } from './AuthProvider';
import AccountHeader from './AccountHeader';
import Footer from './Footer';
import { toast } from 'sonner';

export default function MyProfilePage() {
  const { user, getProfile, updateProfile, getPreferences, updatePreferences, getAddresses, addAddress, updateAddress, updatePassword } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [addresses, setAddresses] = useState<Array<Address>>([]);

  const [prefEmail, setPrefEmail] = useState(true);
  const [prefSms, setPrefSms] = useState(false);

  useEffect(() => {
    const load = async () => {
      const p = await getProfile();
      const prefs = await getPreferences();
      const addrs = await getAddresses();
      if (p) {
        const full = p.full_name || '';
        const parts = full.trim().split(/\s+/);
        setFirstName(parts[0] || '');
        setLastName(parts.slice(1).join(' ') || '');
        setEmail(p.email || '');
        setPhone(p.phone || '');
      }
      if (prefs) {
        setPrefEmail(!!prefs.email_notifications);
      }
      setAddresses(addrs || []);
    };
    load();
  }, [user?.id]);

  const validateEmail = (val: string) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const validatePhone = (val: string) => !val || /^[+\d][\d\s()-]{5,}$/.test(val);

  const saveProfile = async () => {
    if (!validateEmail(email)) {
      toast.error('Email invalide');
      return;
    }
    if (!validatePhone(phone)) {
      toast.error('Téléphone invalide');
      return;
    }
    const full = [firstName, lastName].filter(Boolean).join(' ').trim();
    const { error } = await updateProfile({ full_name: full || null, phone: phone || null, email: email || null });
    if (error) {
      toast.error(`Erreur lors de l’enregistrement: ${error}`);
      return;
    }
    await updatePreferences({ email_notifications: prefEmail });
    toast.success('Profil mis à jour');
  };

  const savePassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error('Veuillez saisir et confirmer le mot de passe');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('Mot de passe trop court (≥ 8 caractères)');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }
    const { error } = await updatePassword(newPassword);
    if (error) {
      toast.error(`Erreur: ${error}`);
      return;
    }
    setNewPassword('');
    setConfirmPassword('');
    toast.success('Mot de passe mis à jour');
  };

  const addAddressLocal = () => setAddresses([...addresses, { user_id: user?.id || '', line1: '', city: '', zip: '', country: '' }]);

  const saveAddresses = async () => {
    let saved = 0;
    for (const addr of addresses) {
      if (!addr.line1 || !addr.city || !addr.zip || !addr.country) {
        toast.error('Adresse incomplète — champs requis');
        continue;
      }
      if (addr.id) {
        const { error } = await updateAddress(addr.id, { label: addr.label || null, line1: addr.line1, city: addr.city, zip: addr.zip, country: addr.country });
        if (!error) saved++;
      } else {
        const res = await addAddress({ label: addr.label || null, line1: addr.line1, city: addr.city, zip: addr.zip, country: addr.country });
        if (res.id) {
          addr.id = res.id;
          saved++;
        }
      }
    }
    if (saved > 0) toast.success('Adresse(s) enregistrée(s)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-0 transition-colors duration-300">
      <AccountHeader backHref="#mon-compte/tableau-de-bord" backLabel="Mon compte" />
      <div className="max-w-3xl mx-auto space-y-8 py-12 px-4">
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Informations personnelles</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Prénom" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Nom" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 md:col-span-2" />
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Téléphone" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 md:col-span-2" />
          </div>
          <div className="mt-4">
            <button onClick={saveProfile} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Enregistrer</button>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Mot de passe</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirmer le mot de passe" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div className="mt-4">
            <button onClick={savePassword} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Mettre à jour le mot de passe</button>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Adresses de livraison</h2>
          {addresses.length === 0 ? (
            <div className="mt-2 text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Aucune adresse enregistrée.</div>
          ) : (
            <div className="space-y-4 mt-4">
              {addresses.map((addr, idx) => (
                <div key={addr.id ?? idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input value={addr.line1} onChange={(e)=>{
                    const next = [...addresses]; next[idx] = { ...next[idx], line1: e.target.value }; setAddresses(next);
                  }} placeholder="Adresse" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 md:col-span-2" />
                  <input value={addr.city} onChange={(e)=>{const next=[...addresses]; next[idx] = { ...next[idx], city: e.target.value }; setAddresses(next);}} placeholder="Ville" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                  <input value={addr.zip} onChange={(e)=>{const next=[...addresses]; next[idx] = { ...next[idx], zip: e.target.value }; setAddresses(next);}} placeholder="Code postal" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                  <input value={addr.country} onChange={(e)=>{const next=[...addresses]; next[idx] = { ...next[idx], country: e.target.value }; setAddresses(next);}} placeholder="Pays" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 md:col-span-2" />
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center gap-2">
            <button onClick={addAddressLocal} className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Ajouter une adresse</button>
            <button onClick={saveAddresses} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Enregistrer</button>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Préférences de notifications</h2>
          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={prefEmail} onChange={(e)=>setPrefEmail(e.target.checked)} />
              <span className="text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={prefSms} onChange={(e)=>setPrefSms(e.target.checked)} />
              <span className="text-gray-700 dark:text-gray-300">SMS</span>
            </label>
          </div>
          <div className="mt-4">
            <button onClick={saveProfile} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Enregistrer</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}