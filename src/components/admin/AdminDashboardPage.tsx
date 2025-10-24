import { BarChart3, LineChart, Users, ShoppingBag, Wallet, AlertTriangle, CheckCircle } from 'lucide-react';
import AdminGuard from './AdminGuard';
import { LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const salesData = Array.from({ length: 30 }, (_, i) => ({ day: i + 1, amount: Math.round(2000 + Math.random() * 5000) }));
const revenueSplit = [
  { name: 'Marketplace', value: 62 },
  { name: 'Services', value: 25 },
  { name: 'Consultations', value: 13 },
];
const colors = ['#10B981','#34D399','#6EE7B7'];

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tableau de Bord Administrateur</h1>
          <p className="text-gray-600 dark:text-gray-400">Vue d'ensemble de l'activité des 30 derniers jours.</p>

          {/* KPIs */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-emerald-600"><Wallet className="h-6 w-6" /><span className="font-semibold">Chiffre d'affaires</span></div>
              <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">€{(salesData.reduce((s,d)=>s+d.amount,0)).toLocaleString('fr-FR')}</div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-emerald-600"><Users className="h-6 w-6" /><span className="font-semibold">Nouvelles inscriptions</span></div>
              <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(120+Math.random()*80)}</div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-emerald-600"><ShoppingBag className="h-6 w-6" /><span className="font-semibold">Commandes (semaine)</span></div>
              <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(80+Math.random()*40)}</div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-emerald-600"><BarChart3 className="h-6 w-6" /><span className="font-semibold">Panier moyen</span></div>
              <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">€{Math.floor(75+Math.random()*35)}</div>
            </div>
          </div>

          {/* Charts */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><LineChart className="h-5 w-5" /><span className="font-semibold">Courbe des ventes (30 jours)</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RLineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={2} dot={false} />
                  </RLineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><BarChart3 className="h-5 w-5" /><span className="font-semibold">Répartition des revenus</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={revenueSplit} dataKey="value" nameKey="name" outerRadius={80} label>
                      {revenueSplit.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Actions en attente */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <h2 className="font-semibold text-gray-900 dark:text-white">Actions en attente</h2>
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><AlertTriangle className="inline h-4 w-4 text-yellow-500" /> {Math.floor(3+Math.random()*3)} partenaires à valider <a href="#admin/users" className="text-emerald-600">Voir</a></li>
                <li><AlertTriangle className="inline h-4 w-4 text-yellow-500" /> {Math.floor(2+Math.random()*4)} litiges ouverts <a href="#admin/transactions" className="text-emerald-600">Gérer</a></li>
                <li><AlertTriangle className="inline h-4 w-4 text-yellow-500" /> {Math.floor(1+Math.random()*5)} produits signalés</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6 lg:col-span-2">
              <h2 className="font-semibold text-gray-900 dark:text-white">Activité récente</h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><CheckCircle className="inline h-4 w-4 text-emerald-500" /> Le fournisseur Alpha a ajouté un nouveau produit</li>
                <li><CheckCircle className="inline h-4 w-4 text-emerald-500" /> L'utilisateur Marie a passé une commande de €240</li>
                <li><CheckCircle className="inline h-4 w-4 text-emerald-500" /> Le prestataire Beta a mis à jour un service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}
