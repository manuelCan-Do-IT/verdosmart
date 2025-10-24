import AdminGuard from './AdminGuard';
import { useState } from 'react';
import { BarChart3, CalendarDays } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart as RLineChart, Line } from 'recharts';

const topProducts = [
  { name: 'Capteur IoT', sales: 320 },
  { name: 'Semences Bio', sales: 270 },
  { name: 'Consultation', sales: 180 },
];
const topSuppliers = [
  { name: 'Alpha SARL', revenue: 12500 },
  { name: 'AgriSeed', revenue: 8900 },
  { name: 'HydroPro', revenue: 5400 },
];
const userGrowth = Array.from({ length: 12 }, (_, i) => ({ month: i+1, users: 100 + i*25 + Math.floor(Math.random()*20) }));

export default function AdminAnalyticsPage() {
  const [period, setPeriod] = useState<'Semaine'|'Mois'|'Personnalisée'>('Mois');

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rapports & Statistiques</h1>
          <div className="mt-4 flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <select value={period} onChange={e=>setPeriod(e.target.value as any)} className="bg-white dark:bg-gray-800 border rounded-xl px-3 py-2 text-gray-900 dark:text-white">
              <option>Semaine</option>
              <option>Mois</option>
              <option>Personnalisée</option>
            </select>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><BarChart3 className="h-5 w-5" /><span className="font-semibold">Produits les plus vendus</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProducts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><BarChart3 className="h-5 w-5" /><span className="font-semibold">Fournisseurs les plus performants</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topSuppliers}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#34D399" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white"><BarChart3 className="h-5 w-5" /><span className="font-semibold">Courbe de croissance des utilisateurs</span></div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RLineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#6EE7B7" strokeWidth={2} dot={false} />
                </RLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}
