import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
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

function LoginHeader() {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h1 className="text-gray-900 dark:text-white font-['Lora',_serif] font-bold">Se connecter</h1>
      <p className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
        Connectez-vous à votre compte VerdoSmart
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
}

function InputField({ label, type, placeholder, value, onChange, icon, showPassword, onTogglePassword }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold">
        {label}
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

function SocialButton({ provider, icon, onClick }: { provider: string; icon: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center gap-3 w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-['Inter',_sans-serif] font-semibold" aria-label={`Continuer avec ${provider}`}>
      {icon}
      <span>Continuer avec {provider}</span>
    </button>
  );
}

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const { signInWithEmail, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setPending(true);
    const { error } = await signInWithEmail(formData.email, formData.password);
    setPending(false);
    if (error) {
      setErrorMsg(error);
      return;
    }
    window.location.hash = "accueil";
  };

  return (
    <>
      <PageHeader />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
        <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          <LoginHeader />
          
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <InputField
              label="Email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              icon={<Mail className="h-5 w-5" />}
            />
            
            <InputField
              label="Mot de passe"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(value) => setFormData({ ...formData, password: value })}
              icon={<Lock className="h-5 w-5" />}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-['Inter',_sans-serif]">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/30 flex items-center justify-center disabled:opacity-60"
            >
              {pending ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-['Inter',_sans-serif]">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <SocialButton 
                provider="Google" 
                icon={
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                }
                onClick={async () => {
                  setErrorMsg(null);
                  const { error } = await signInWithGoogle();
                  if (error) setErrorMsg(error);
                }}
              />
            </div>
          </div>

          {errorMsg && (
            <p className="mt-4 text-center text-red-600 dark:text-red-400 font-['Inter',_sans-serif]" aria-live="polite">
              {errorMsg}
            </p>
          )}

          <p className="mt-8 text-center text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
            Vous n'avez pas de compte ?{" "}
            <a href="#signup" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}