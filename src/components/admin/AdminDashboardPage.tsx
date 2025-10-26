import { BarChart3, LineChart, Users, ShoppingBag, Wallet, AlertTriangle, CheckCircle, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar } from 'recharts';
import { useState } from 'react';
import AdminLayout from './AdminLayout';

// Données simulées pour le tableau de bord
const salesData = Array.from({ length: 30 }, (_, i) => ({ day: i + 1, amount: Math.round(2000 + Math.random() * 5000) }));
const revenueSplit = [
  { name: 'Marketplace', value: 62 },
  { name: 'Services', value: 25 },
  { name: 'Consultations', value: 13 },
];
const userActivityData = [
  { name: 'Lun', value: 340 },
  { name: 'Mar', value: 420 },
  { name: 'Mer', value: 380 },
  { name: 'Jeu', value: 510 },
  { name: 'Ven', value: 470 },
  { name: 'Sam', value: 290 },
  { name: 'Dim', value: 240 },
];
const colors = ['#10B981','#34D399','#6EE7B7'];

export default function AdminDashboardPage() {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('month');
  
  // Calcul des totaux et pourcentages
  const totalRevenue = salesData.reduce((s,d)=>s+d.amount,0);
  const totalUsers = 1240;
  const totalOrders = 342;
  const avgBasket = 89;
  
  // Pourcentages de croissance (simulés)
  const revenueGrowth = 12.8;
  const userGrowth = 8.4;
  const orderGrowth = 5.2;
  const basketGrowth = -2.1;

  return (
    <AdminLayout title="Tableau de Bord" description="Vue d'ensemble de l'activité des 30 derniers jours">
      {/* Filtres de période */}
      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            onClick={() => setTimeRange('day')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeRange === 'day' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } border border-gray-200 dark:border-gray-600`}
          >
            Jour
          </button>
          <button 
            type="button" 
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 text-sm font-medium ${
              timeRange === 'week' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } border-t border-b border-gray-200 dark:border-gray-600`}
          >
            Semaine
          </button>
          <button 
            type="button" 
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeRange === 'month' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } border border-gray-200 dark:border-gray-600`}
          >
            Mois
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-emerald-600">
              <Wallet className="h-6 w-6" />
              <span className="font-semibold">Chiffre d'affaires</span>
            </div>
            <div className={`flex items-center text-sm ${revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {revenueGrowth >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              <span>{Math.abs(revenueGrowth)}%</span>
            </div>
          </div>
          <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">€{totalRevenue.toLocaleString('fr-FR')}</div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Comparé au mois précédent</div>
        </div>
        
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-emerald-600">
              <Users className="h-6 w-6" />
              <span className="font-semibold">Utilisateurs</span>
            </div>
            <div className={`flex items-center text-sm ${userGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {userGrowth >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              <span>{Math.abs(userGrowth)}%</span>
            </div>
          </div>
          <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{totalUsers.toLocaleString('fr-FR')}</div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Comparé au mois précédent</div>
        </div>
        
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-emerald-600">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-semibold">Commandes</span>
            </div>
            <div className={`flex items-center text-sm ${orderGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {orderGrowth >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              <span>{Math.abs(orderGrowth)}%</span>
            </div>
          </div>
          <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{totalOrders.toLocaleString('fr-FR')}</div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Comparé au mois précédent</div>
        </div>
        
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-emerald-600">
              <BarChart3 className="h-6 w-6" />
              <span className="font-semibold">Panier moyen</span>
            </div>
            <div className={`flex items-center text-sm ${basketGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {basketGrowth >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              <span>{Math.abs(basketGrowth)}%</span>
            </div>
          </div>
          <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">€{avgBasket}</div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Comparé au mois précédent</div>
        </div>
      </div>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
              <LineChart className="h-5 w-5" />
              <span className="font-semibold">Courbe des ventes (30 jours)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+{Math.floor(10+Math.random()*5)}%</span>
            </div>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RLineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                    border: 'none',
                    borderRadius: '4px',
                    color: '#F9FAFB'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#10B981" 
                  strokeWidth={2} 
                  dot={false}
                  activeDot={{ r: 6, fill: '#10B981', stroke: '#F9FAFB', strokeWidth: 2 }}
                />
              </RLineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <div className="flex items-center gap-3 text-gray-900 dark:text-white">
            <BarChart3 className="h-5 w-5" />
            <span className="font-semibold">Répartition des revenus</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={revenueSplit} 
                  dataKey="value" 
                  nameKey="name" 
                  outerRadius={80} 
                  label
                  labelLine={{ stroke: '#6B7280', strokeWidth: 1 }}
                >
                  {revenueSplit.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  formatter={(value) => <span className="text-gray-700 dark:text-gray-300">{value}</span>}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Pourcentage']}
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                    border: 'none',
                    borderRadius: '4px',
                    color: '#F9FAFB'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Troisième rangée avec activité utilisateur et actions en attente */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6 lg:col-span-1">
          <div className="flex items-center gap-3 text-gray-900 dark:text-white mb-4">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Activité utilisateurs (semaine)</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                    border: 'none',
                    borderRadius: '4px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Actions en attente
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" /> 
                <span>{Math.floor(3+Math.random()*3)} partenaires à valider</span>
              </div>
              <a href="#admin/users" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium">Voir</a>
            </li>
            <li className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" /> 
                <span>{Math.floor(2+Math.random()*4)} litiges ouverts</span>
              </div>
              <a href="#admin/transactions" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium">Gérer</a>
            </li>
            <li className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" /> 
                <span>{Math.floor(1+Math.random()*5)} produits signalés</span>
              </div>
              <a href="#admin/catalog" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium">Vérifier</a>
            </li>
          </ul>
        </div>
        
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-500" />
            Activité récente
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2 p-2 border-l-2 border-emerald-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> 
              <div>
                <p>Le fournisseur <span className="font-medium">Alpha</span> a ajouté un nouveau produit</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Il y a 2 heures</p>
              </div>
            </li>
            <li className="flex items-center gap-2 p-2 border-l-2 border-emerald-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> 
              <div>
                <p>L'utilisateur <span className="font-medium">Marie</span> a passé une commande de €240</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Il y a 4 heures</p>
              </div>
            </li>
            <li className="flex items-center gap-2 p-2 border-l-2 border-emerald-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> 
              <div>
                <p>Le prestataire <span className="font-medium">Beta</span> a mis à jour un service</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Il y a 6 heures</p>
              </div>
            </li>
            <li className="flex items-center gap-2 p-2 border-l-2 border-emerald-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> 
              <div>
                <p>Nouvelle inscription: <span className="font-medium">Thomas</span></p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Il y a 8 heures</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
