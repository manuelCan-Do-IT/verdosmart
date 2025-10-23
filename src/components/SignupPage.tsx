import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowLeft, MailCheck } from "lucide-react";
import Logo from "./Logo";
import { useAuth } from "./AuthProvider";

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

function SignupHeader() {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h1 className="text-gray-900 dark:text-white font-['Lora',_serif] font-bold">Créer un compte</h1>
      <p className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
        Rejoignez VerdoSmart et transformez votre agriculture
      </p>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  required?: boolean;
}

function InputField({ label, type, placeholder, value, onChange, icon, showPassword, onTogglePassword, required = false }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        />
        {onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

function SelectField({ label, value, onChange, options, required = false }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    accountType: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const { signUpWithEmail, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Les mots de passe ne correspondent pas");
      return;
    }
    if (!acceptTerms) {
      setErrorMsg("Vous devez accepter les conditions d'utilisation");
      return;
    }
    setPending(true);
    const { error } = await signUpWithEmail(formData.email, formData.password, { full_name: formData.fullName });
    setPending(false);
    if (error) {
      setErrorMsg(error);
      return;
    }
    // Ne pas connecter automatiquement. Afficher le message de succès.
    setSubmittedEmail(formData.email);
  };

  const accountTypes = [
    { value: "", label: "Sélectionner un type de compte" },
    { value: "agriculteur", label: "Agriculteur" },
    { value: "agronome", label: "Agronome / Consultant" },
    { value: "entreprise", label: "Entreprise Agricole" },
    { value: "cooperative", label: "Coopérative" },
    { value: "fournisseur", label: "Fournisseur / Vendeur" }
  ];

  return (
    <>
      <PageHeader />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          <SignupHeader />
          {submittedEmail ? (
            <div className="mt-8 flex flex-col items-center text-center gap-4">
              <div className="rounded-full bg-emerald-100 text-emerald-700 p-4">
                <MailCheck className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Vérifiez votre boîte mail !</h2>
              <p className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] max-w-md">
                Un e-mail de confirmation vous a été envoyé à <span className="font-semibold">{submittedEmail}</span>.
                Veuillez cliquer sur le lien dans l'e-mail pour activer votre compte.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-['Inter',_sans-serif]">Si vous ne voyez pas l'e-mail, vérifiez le dossier spam.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Nom complet"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.fullName}
                  onChange={(value) => setFormData({ ...formData, fullName: value })}
                  icon={<User className="h-5 w-5" />}
                  required
                />
                
                <InputField
                  label="Email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                  icon={<Mail className="h-5 w-5" />}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Téléphone"
                  type="tel"
                  placeholder="+221 78 687 14 79"
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value })}
                  icon={<Phone className="h-5 w-5" />}
                  required
                />
                
                <InputField
                  label="Localisation"
                  type="text"
                  placeholder="Dakar, Sénégal"
                  value={formData.location}
                  onChange={(value) => setFormData({ ...formData, location: value })}
                  icon={<MapPin className="h-5 w-5" />}
                  required
                />
              </div>

              <SelectField
                label="Type de compte"
                value={formData.accountType}
                onChange={(value) => setFormData({ ...formData, accountType: value })}
                options={accountTypes}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Mot de passe"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(value) => setFormData({ ...formData, password: value })}
                  icon={<Lock className="h-5 w-5" />}
                  showPassword={showPassword}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  required
                />
                
                <InputField
                  label="Confirmer le mot de passe"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
                  icon={<Lock className="h-5 w-5" />}
                  showPassword={showConfirmPassword}
                  onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer flex-shrink-0"
                />
                <label className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif] cursor-pointer">
                  J'accepte les{" "}
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline font-['Inter',_sans-serif]">
                    conditions d'utilisation
                  </a>
                  {" "}et la{" "}
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline font-['Inter',_sans-serif]">
                    politique de confidentialité
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={pending}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/30 flex items-center justify-center disabled:opacity-60"
              >
                {pending ? "Création..." : "S'inscrire"}
              </button>
            </form>
          )}

          {!submittedEmail && (
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-['Inter',_sans-serif]">
                    Ou s'inscrire avec
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={async () => {
                    setErrorMsg(null);
                    setPending(true);
                    const { error } = await signInWithGoogle();
                    if (error) setErrorMsg(error);
                    setPending(false);
                  }}
                  className="flex items-center justify-center gap-3 w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-['Inter',_sans-serif] font-semibold"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continuer avec Google</span>
                </button>
              </div>
            </div>
          )}

          </div>

          {errorMsg && (
            <p className="mt-4 text-center text-red-600 dark:text-red-400 font-['Inter',_sans-serif]" aria-live="polite">
              {errorMsg}
            </p>
          )}

          {!submittedEmail && (
            <p className="mt-8 text-center text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
              Vous avez déjà un compte ?{" "}
              <a href="#login" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors">
                Se connecter
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}