import AdminGuard from './AdminGuard';
import { useState } from 'react';
import { Eye, CreditCard, RotateCcw, AlertTriangle } from 'lucide-react';

type OrderRow = { id: string; client: string; vendor: string; amount: number; status: 'Traitée'|'En attente'|'Échouée'; payment: 'Payé'|'En attente'|'Échoué' };

const orders: OrderRow[] = [
  { id: 'C2025-001', client: 'Marie Dupont', vendor: 'Alpha SARL', amount: 240, status: 'Traitée', payment: 'Payé' },
  { id: 'C2025-002', client: 'Jean Martin', vendor: 'AgriSeed', amount: 79, status: 'En attente', payment: 'En attente' },
];

export default function AdminTransactionsPage() {
  const [tab, setTab] = useState<'Commandes'|'Paiements'|'Litiges'|'Remboursements'>('Commandes');

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
