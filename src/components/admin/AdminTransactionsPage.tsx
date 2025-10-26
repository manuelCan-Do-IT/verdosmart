import { useState } from 'react';
import AdminGuard from './AdminGuard';
import { Search, Filter, Download, Eye, AlertCircle, CheckCircle, CreditCard, RotateCcw, AlertTriangle } from 'lucide-react';

// Types pour les commandes existantes
type OrderRow = { id: string; client: string; vendor: string; amount: number; status: 'Traitée'|'En attente'|'Échouée'; payment: 'Payé'|'En attente'|'Échoué' };

// Données simulées pour les transactions
const mockTransactions = [
  { id: 'TX-2023-001', customer: 'Thomas Martin', date: '12/04/2023', amount: '289,99 €', status: 'completed', items: 3 },
  { id: 'TX-2023-002', customer: 'Marie Dubois', date: '23/05/2023', amount: '149,99 €', status: 'completed', items: 1 },
  { id: 'TX-2023-003', customer: 'Jean Petit', date: '05/06/2023', amount: '499,99 €', status: 'pending', items: 4 },
  { id: 'TX-2023-004', customer: 'Sophie Grand', date: '18/03/2023', amount: '59,99 €', status: 'completed', items: 1 },
  { id: 'TX-2023-005', customer: 'Lucas Bernard', date: '30/01/2023', amount: '1299,99 €', status: 'failed', items: 2 },
  { id: 'TX-2023-006', customer: 'Emma Leroy', date: '14/02/2023', amount: '129,99 €', status: 'completed', items: 1 },
  { id: 'TX-2023-007', customer: 'Hugo Moreau', date: '09/07/2023', amount: '349,99 €', status: 'pending', items: 3 },
];

// Données existantes pour les commandes
const orders: OrderRow[] = [
  { id: 'C2025-001', client: 'Marie Dupont', vendor: 'Alpha SARL', amount: 240, status: 'Traitée', payment: 'Payé' },
  { id: 'C2025-002', client: 'Jean Martin', vendor: 'AgriSeed', amount: 79, status: 'En attente', payment: 'En attente' },
];

export default function AdminTransactionsPage() {
  const [tab, setTab] = useState<'Commandes'|'Paiements'|'Litiges'|'Remboursements'>('Commandes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Filtrer les transactions
  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || transaction.status === selectedStatus;
    
    // Logique simplifiée pour le filtre de date
    let matchesDate = true;
    const today = new Date();
    const [day, month, year] = transaction.date.split('/').map(Number);
    const txDate = new Date(year, month - 1, day);
    
    if (dateRange === 'today') {
      matchesDate = 
        txDate.getDate() === today.getDate() && 
        txDate.getMonth() === today.getMonth() && 
        txDate.getFullYear() === today.getFullYear();
    } else if (dateRange === 'week') {
      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate() - 7);
      matchesDate = txDate >= weekAgo;
    } else if (dateRange === 'month') {
      const monthAgo = new Date(today);
      monthAgo.setMonth(today.getMonth() - 1);
      matchesDate = txDate >= monthAgo;
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Calculer les statistiques
  const totalAmount = filteredTransactions.reduce((sum, tx) => {
    const amount = parseFloat(tx.amount.replace('€', '').replace(',', '.'));
    return sum + amount;
  }, 0).toFixed(2).replace('.', ',');

  const completedCount = filteredTransactions.filter(tx => tx.status === 'completed').length;
  const pendingCount = filteredTransactions.filter(tx => tx.status === 'pending').length;
  const failedCount = filteredTransactions.filter(tx => tx.status === 'failed').length;

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gestion des Transactions</h1>

          <div className="mt-6 flex gap-3 flex-wrap">
            {(['Commandes','Paiements','Litiges','Remboursements'] as const).map(name => (
              <button key={name} onClick={()=>setTab(name)} className={`px-4 py-2 rounded-xl ${tab===name?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>{name}</button>
            ))}
          </div>

          {tab==='Commandes' && (
            <>
              {/* Statistiques */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total des transactions</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{filteredTransactions.length}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Montant total</div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">{totalAmount} €</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Transactions complétées</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-500">{completedCount}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Transactions en attente</div>
                  <div className="text-2xl font-bold text-yellow-500">{pendingCount}</div>
                </div>
              </div>

              {/* Filtres et recherche */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="search"
                    className="block w-full p-2.5 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Rechercher par ID ou client..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="all">Tous les statuts</option>
                      <option value="completed">Complétées</option>
                      <option value="pending">En attente</option>
                      <option value="failed">Échouées</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                    >
                      <option value="all">Toutes les dates</option>
                      <option value="today">Aujourd'hui</option>
                      <option value="week">7 derniers jours</option>
                      <option value="month">30 derniers jours</option>
                    </select>
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Download className="w-5 h-5" />
                    <span>Exporter</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-gray-700 dark:text-gray-300">
                      <th className="p-3">ID Commande</th>
                      <th className="p-3">Client</th>
                      <th className="p-3">Vendeur</th>
                      <th className="p-3">Montant</th>
                      <th className="p-3">Statut</th>
                      <th className="p-3">Paiement</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(o => (
                      <tr key={o.id} className="border-t border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                        <td className="p-3">{o.id}</td>
                        <td className="p-3">{o.client}</td>
                        <td className="p-3">{o.vendor}</td>
                        <td className="p-3">€{o.amount}</td>
                        <td className="p-3">{o.status}</td>
                        <td className="p-3">{o.payment}</td>
                        <td className="p-3 flex gap-2">
                          <a href="#" className="inline-flex items-center gap-1 text-emerald-600"><Eye className="h-4 w-4" /> Détails</a>
                          <button className="inline-flex items-center gap-1 text-emerald-600"><CreditCard className="h-4 w-4" /> Gérer paiement</button>
                          <button className="inline-flex items-center gap-1 text-red-600"><RotateCcw className="h-4 w-4" /> Initier remboursement</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {tab==='Litiges' && (
            <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
              <h2 className="font-semibold text-gray-900 dark:text-white">Litiges ouverts</h2>
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><AlertTriangle className="inline h-4 w-4 text-yellow-500" /> Produit non reçu — Client: Paul, Vendeur: Alpha SARL</li>
                <li><AlertTriangle className="inline h-4 w-4 text-yellow-500" /> Service non conforme — Client: Alice, Prestataire: Beta Conseil</li>
              </ul>
            </div>
          )}

          {tab==='Paiements' && (
            <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">Suivi des paiements (à implémenter)</div>
          )}
          {tab==='Remboursements' && (
            <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">Historique des remboursements (à implémenter)</div>
          )}
        </div>
      </div>
    </AdminGuard>
  );
}
