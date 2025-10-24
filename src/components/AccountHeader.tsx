import { ArrowLeft } from "lucide-react";
import Logo from "./Logo";

export default function AccountHeader({ backHref = "#accueil", backLabel = "Retour" }: { backHref?: string; backLabel?: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href={backHref} className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">{backLabel}</span>
        </a>
        <a href="#accueil">
          <Logo size="md" />
        </a>
      </div>
    </div>
  );
}
