import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Calendar, TrendingUp, Users, ShoppingBag, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import AdminGuard from './AdminGuard';

// Données simulées pour les graphiques
const salesData = [
  { name: 'Jan', value: 4000, prev: 3200 },
  { name: 'Fév', value: 3000, prev: 2800 },
  { name: 'Mar', value: 5000, prev: 4200 },
  { name: 'Avr', value: 2780, prev: 2500 },
  { name: 'Mai', value: 1890, prev: 2100 },
  { name: 'Juin', value: 2390, prev: 2000 },
  { name: 'Juil', value: 3490, prev: 3000 },
  { name: 'Août', value: 3200, prev: 2800 },
  { name: 'Sept', value: 3800, prev: 3300 },
  { name: 'Oct', value: 4100, prev: 3600 },
  { name: 'Nov', value: 4500, prev: 3900 },
  { name: 'Déc', value: 5200, prev: 4500 },
];

const trafficData = [
  { name: 'Lun', value: 1200, organic: 800, paid: 400 },
  { name: 'Mar', value: 1400, organic: 950, paid: 450 },
  { name: 'Mer', value: 1300, organic: 850, paid: 450 },
  { name: 'Jeu', value: 1500, organic: 1000, paid: 500 },
  { name: 'Ven', value: 1800, organic: 1200, paid: 600 },
  { name: 'Sam', value: 2000, organic: 1400, paid: 600 },
  { name: 'Dim', value: 1700, organic: 1100, paid: 600 },
];

const categoryData = [
  { name: 'Électronique', value: 400 },
  { name: 'Vêtements', value: 300 },
  { name: 'Maison', value: 300 },
  { name: 'Jardin', value: 200 },
  { name: 'Autres', value: 100 },
];

const conversionData = [
  { name: 'Jan', rate: 2.8 },
  { name: 'Fév', rate: 2.9 },
  { name: 'Mar', rate: 3.1 },
  { name: 'Avr', rate: 3.0 },
  { name: 'Mai', rate: 3.2 },
  { name: 'Juin', rate: 3.5 },
  { name: 'Juil', rate: 3.6 },
  { name: 'Août', rate: 3.4 },
  { name: 'Sept', rate: 3.7 },
  { name: 'Oct', rate: 3.8 },
  { name: 'Nov', rate: 4.0 },
  { name: 'Déc', rate: 4.2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('sales');

  // Calculer les statistiques
  const currentSales = salesData.reduce((sum, item) => sum + item.value, 0);
  const previousSales = salesData.reduce((sum, item) => sum + item.prev, 0);
  const salesGrowth = ((currentSales - previousSales) / previousSales * 100).toFixed(1);
  
  const currentTraffic = trafficData.reduce((sum, item) => sum + item.value, 0);
  const organicTraffic = trafficData.reduce((sum, item) => sum + item.organic, 0);
  const paidTraffic = trafficData.reduce((sum, item) => sum + item.paid, 0);
  const organicPercentage = ((organicTraffic / currentTraffic) * 100).toFixed(1);

  const averageConversion = conversionData.reduce((sum, item) => sum + item.rate, 0) / conversionData.length;

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rapports & Statistiques</h1>
          
          {/* En-tête avec statistiques clés */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chiffre d'affaires</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{(currentSales / 1000).toFixed(1)}k €</p>
                </div>
                <div className={`flex items-center ${salesGrowth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {salesGrowth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  <span className="text-sm font-medium">{salesGrowth}%</span>
                </div>
              </div>
              <div className="mt-2 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded">
                <div className="h-1 bg-emerald-500 rounded" style={{ width: `${Math.min(100, (currentSales / (previousSales * 1.5)) * 100)}%` }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Visiteurs</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentTraffic}</p>
                </div>
                <div className="text-blue-500">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="text-green-500 font-medium">{organicPercentage}%</span>
                <span className="mx-1">trafic organique</span>
                <span className="ml-auto">{paidTraffic} visiteurs payants</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Taux de conversion</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{averageConversion.toFixed(1)}%</p>
                </div>
                <div className="text-yellow-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="text-green-500 font-medium">+0.8%</span>
                <span className="mx-1">vs période précédente</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Panier moyen</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">129 €</p>
                </div>
                <div className="text-purple-500">
                  <ShoppingBag className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="text-green-500 font-medium">+12%</span>
                <span className="mx-1">vs période précédente</span>
              </div>
            </div>
          </div>

          {/* Contrôles pour les rapports */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-6 gap-4">
            <div className="flex items-center gap-4">
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'sales' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                onClick={() => setReportType('sales')}
              >
                Ventes
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'traffic' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                onClick={() => setReportType('traffic')}
              >
                Trafic
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'conversion' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                onClick={() => setReportType('conversion')}
              >
                Conversion
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <select
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="week">7 derniers jours</option>
                  <option value="month">30 derniers jours</option>
                  <option value="quarter">3 derniers mois</option>
                  <option value="year">Année en cours</option>
                </select>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Exporter</span>
              </button>
            </div>
          </div>

          {/* Graphiques principaux */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {reportType === 'sales' ? 'Évolution des ventes' : 
               reportType === 'traffic' ? 'Trafic du site' : 'Taux de conversion'}
            </h2>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                {reportType === 'sales' ? (
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6b7280" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" name="Ventes (€)" />
                    <Area type="monotone" dataKey="prev" stroke="#6b7280" fillOpacity={1} fill="url(#colorPrev)" name="Période précédente (€)" />
                  </AreaChart>
                ) : reportType === 'traffic' ? (
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="organic" stackId="a" fill="#3b82f6" name="Trafic organique" />
                    <Bar dataKey="paid" stackId="a" fill="#8b5cf6" name="Trafic payant" />
                  </BarChart>
                ) : (
                  <LineChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="rate" stroke="#f59e0b" name="Taux de conversion (%)" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><TrendingUp className="h-5 w-5" /><span className="font-semibold">Produits les plus vendus</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{ name: 'Capteur IoT', sales: 320 }, { name: 'Semences Bio', sales: 270 }, { name: 'Consultation', sales: 180 }]}>
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
              <div className="flex items-center gap-3 text-gray-900 dark:text-white"><TrendingUp className="h-5 w-5" /><span className="font-semibold">Ventes par catégorie</span></div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}
