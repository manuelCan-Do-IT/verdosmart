import { useState } from "react";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "./ThemeProvider";
import { useCart } from "./CartContext";
import Logo from "./Logo";

function DesktopNav() {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  return (
    <div className="content-stretch hidden lg:flex items-center justify-between flex-1 relative shrink-0" data-name="Container">
      {/* Navigation Links - Center */}
      <div className="flex items-center gap-[40px] mx-auto">
        <a className="cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 dark:text-gray-300 text-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#accueil">
          <p className="leading-[28px] whitespace-pre">Accueil</p>
        </a>
        
        <a className="cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 dark:text-gray-300 text-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#services">
          <p className="leading-[28px] whitespace-pre">Services</p>
        </a>
        
        <a className="cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 dark:text-gray-300 text-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#marketplace">
          <p className="leading-[28px] whitespace-pre">Marketplace</p>
        </a>
        
        <a className="cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 dark:text-gray-300 text-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#contact">
          <p className="leading-[28px] whitespace-pre">Contact</p>
        </a>
      </div>
      
      {/* Right Side - Cart + Theme + Auth Buttons */}
      <div className="flex items-center gap-[16px]">
        {/* Panier */}
        <a
          href="#cart"
          className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Panier"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-in fade-in zoom-in duration-300">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </a>
        
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
        
        <a href="#login" className="flex items-center justify-center px-[24px] py-[12px] rounded-[12px] cursor-pointer transition-all border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 font-['Inter',_sans-serif] font-semibold text-[14.4px] text-nowrap">
          Se connecter
        </a>
        
        <a href="#signup" className="bg-gradient-to-r from-[#10b981] to-[#16a34a] flex items-center justify-center px-[28px] py-[12px] rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity font-['Inter',_sans-serif] font-semibold text-[14.4px] text-nowrap text-white">
          S'inscrire
        </a>
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="lg:hidden flex items-center gap-2 ml-auto">
      {/* Panier Mobile */}
      <a
        href="#cart"
        className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        aria-label="Panier"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-in fade-in zoom-in duration-300">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </a>
      
      <button
        onClick={toggleTheme}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <div className="flex flex-col gap-6 mt-8">
            <a 
              href="#accueil" 
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg"
              onClick={() => setOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a 
              href="#marketplace" 
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg"
              onClick={() => setOpen(false)}
            >
              Marketplace
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#login"
              className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-[12px] text-center font-['Inter',_sans-serif] font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              Se connecter
            </a>
            <a 
              href="#signup"
              className="bg-gradient-to-r from-[#10b981] to-[#16a34a] text-white px-6 py-3 rounded-[12px] text-center font-['Inter',_sans-serif] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              S'inscrire
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Header() {
  return (
    <div className="fixed backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(17,24,39,0.95)] box-border content-stretch flex flex-col items-start left-0 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[152.4px] py-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_2px_0px_rgba(255,255,255,0.05)] top-0 w-full z-50 transition-colors duration-300" data-name="Nav">
      <div className="content-stretch flex h-[64px] md:h-[80px] items-center relative shrink-0 w-full gap-8">
        <a href="#accueil">
          <Logo size="md" />
        </a>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
}
