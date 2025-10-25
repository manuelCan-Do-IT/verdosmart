import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Sun,
  Moon,
  ShoppingCart,
  User as UserIcon,
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  MessageSquare,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "./ThemeProvider";
import { useCart } from "./CartContext";
import Logo from "./Logo";
import { useAuth } from "./AuthProvider";
import { toast } from "sonner";

function DesktopNav() {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const AccountDropdown = () => (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Menu du compte utilisateur"
      className="absolute right-0 mt-2 w-80 sm:w-[340px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-2 origin-top-right space-y-2"
    >
      <a href="#mon-compte/tableau-de-bord" role="menuitem" className="group flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
        <LayoutDashboard className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        Tableau de bord
      </a>
      <a href="#mon-compte/commandes" role="menuitem" className="group flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
        <ShoppingBag className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        Mes commandes
      </a>
      <a href="#mon-compte/rendez-vous" role="menuitem" className="group flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
        <CalendarDays className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        Mes rendez-vous
      </a>
      <a href="#mon-compte/messagerie" role="menuitem" className="group flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
        <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        Messagerie
      </a>
      <a href="#mon-compte/mon-profil" role="menuitem" className="group flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
        <UserIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        Mon profil
      </a>
      <div className="my-2 mx-2 h-px bg-gray-200 dark:bg-gray-700" />
      <button
        onClick={async () => {
          try {
            setSigningOut(true);
            toast.info("Déconnexion en cours...");
            await signOut();
            toast.success("Vous êtes déconnecté(e)");
            setMenuOpen(false);
            window.location.hash = "#accueil";
          } catch (e) {
            toast.error("Échec de la déconnexion");
          } finally {
            setSigningOut(false);
          }
        }}
        disabled={signingOut}
        role="menuitem"
        className="mt-1 w-full text-left flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
      >
        <LogOut className="h-5 w-5" />
        {signingOut ? "Déconnexion..." : "Se déconnecter"}
      </button>
    </div>
  );

  const renderAccount = () => {
    if (user) {
      return (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            className={`inline-flex items-center gap-2 h-[44px] px-6 rounded-xl cursor-pointer transition-all border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${menuOpen ? "-translate-y-[2px]" : ""}`}
          >
            <UserIcon className="h-5 w-5" />
            Mon Compte
            <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${menuOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {menuOpen ? <AccountDropdown /> : null}
        </div>
      );
    }
    return (
      <>
        <a href="#connexion" className="flex items-center justify-center h-[44px] px-6 rounded-xl border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold">
          Se connecter
        </a>
        <a href="#signup" className="bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-white hover:opacity-90">
          S'inscrire
        </a>
      </>
    );
  };

  return (
    <div className="hidden lg:flex items-center justify-between flex-1 max-w-7xl mx-auto px-8">
      {/* Center navigation */}
      <nav className="flex items-center gap-8 mx-auto">
        <a className="font-semibold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" href="#accueil">Accueil</a>
        <a className="font-semibold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" href="#services">Services</a>
        <a className="font-semibold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" href="#marketplace">Marketplace</a>
        <a className="font-semibold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" href="#contact">Contact</a>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a href="#cart" className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Panier">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </a>
        <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Basculer le thème">
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
        {renderAccount()}
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const { user, signOut } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center gap-2 ml-auto">
      <a href="#cart" className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Panier">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </a>
      <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Toggle theme">
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Ouvrir le menu">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="flex flex-col gap-6 mt-8 text-center">
            {[
              { href: "#accueil", label: "Accueil" },
              { href: "#services", label: "Services" },
              { href: "#marketplace", label: "Marketplace" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold text-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2" />
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className={`flex items-center gap-3 h-[44px] px-4 py-3 rounded-lg border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${accountOpen ? "-translate-y-[2px]" : ""}`}
            >
              <UserIcon className="h-5 w-5" />
              Mon Compte
              <ChevronDown className={`ml-auto h-5 w-5 transition-transform ${accountOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {accountOpen && (
              <div className="flex flex-col gap-2">
                {user ? (
                  <>
                    <a href="#mon-compte/tableau-de-bord" className="flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" onClick={() => setOpen(false)}>
                      Tableau de bord
                    </a>
                    <a href="#mon-compte/commandes" className="flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" onClick={() => setOpen(false)}>
                      Mes commandes
                    </a>
                    <a href="#mon-compte/rendez-vous" className="flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" onClick={() => setOpen(false)}>
                      Mes rendez-vous
                    </a>
                    <a href="#mon-compte/messagerie" className="flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" onClick={() => setOpen(false)}>
                      Messagerie
                    </a>
                    <a href="#mon-compte/mon-profil" className="flex items-center gap-3 p-3 min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" onClick={() => setOpen(false)}>
                      Mon profil
                    </a>
                    <button
                      onClick={async () => {
                        try {
                          setSigningOut(true);
                          toast.info("Déconnexion en cours...");
                          await signOut();
                          toast.success("Vous êtes déconnecté(e)");
                          setOpen(false);
                          window.location.hash = "#accueil";
                        } catch (e) {
                          toast.error("Échec de la déconnexion");
                        } finally {
                          setSigningOut(false);
                        }
                      }}
                      disabled={signingOut}
                      className="text-left w-full flex items-center justify-center gap-3 p-3 min-h-[44px] rounded-lg text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                    >
                      <LogOut className="h-5 w-5" />
                      {signingOut ? "Déconnexion..." : "Se déconnecter"}
                    </button>
                  </>
                ) : (
                  <>
                    <a href="#connexion" className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950" onClick={() => setOpen(false)}>
                      Se connecter
                    </a>
                    <a href="#signup" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90" onClick={() => setOpen(false)}>
                      S'inscrire
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Header() {
  return (
    <div className="fixed backdrop-blur-sm bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(17,24,39,0.95)] box-border flex flex-col left-0 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[152.4px] top-0 w-full z-50 shadow-sm">
      <div className="flex h-[64px] md:h-[80px] items-center w-full gap-8">
        <a href="#accueil" aria-label="Accueil">
          <Logo size="md" />
        </a>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
}