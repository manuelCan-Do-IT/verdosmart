import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Receipt, 
  BarChart2, 
  Settings, 
  LogOut,
  Shield
} from 'lucide-react';
import { useAuth } from '../AuthProvider';
import { cn } from '../../lib/utils';

export default function AdminSidebar() {
  const location = useLocation();
  const { signOut } = useAuth();
  
  const currentPath = location.hash.substring(1); // Remove the # from the hash
  
  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/admin/dashboard', 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      name: 'Utilisateurs', 
      path: '/admin/users', 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      name: 'Catalogue', 
      path: '/admin/catalog', 
      icon: <ShoppingBag className="h-5 w-5" /> 
    },
    { 
      name: 'Transactions', 
      path: '/admin/transactions', 
      icon: <Receipt className="h-5 w-5" /> 
    },
    { 
      name: 'Analytiques', 
      path: '/admin/analytics', 
      icon: <BarChart2 className="h-5 w-5" /> 
    },
    { 
      name: 'Paramètres', 
      path: '/admin/settings', 
      icon: <Settings className="h-5 w-5" /> 
    }
  ];

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await signOut();
      window.location.hash = '#login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Admin Verdo</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={`#${item.path}`}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              currentPath === item.path
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Déconnexion
        </button>
      </div>
    </div>
  );
}