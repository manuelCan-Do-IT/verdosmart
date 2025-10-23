import { useState } from 'react';
import { Package, FileDown, ArrowRight } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  type: string;
  price: string;
  status: 'ongoing' | 'done';
}

export default function MyOrdersPage() {
  const [tab, setTab] = useState<'all' | 'ongoing' | 'done'>('all');
  const [orders] = useState<Order[]>([
    { id: '1001', date: '12/09/2025', type: 'Commande produit - Kit jardinage', price: '49,90€', status: 'ongoing' },
    { id: '0998', date: '08/09/2025', type: 'Devis service - Audit énergétique', price: '0,00€', status: 'done' },
  ]);

  const filtered = orders.filter((o) => (tab === 'all' ? true : o.status === tab));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Mes Commandes</h1>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setTab('all')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='all'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Tout</button>
          <button onClick={() => setTab('ongoing')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='ongoing'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>En cours</button>
          <button onClick={() => setTab('done')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='done'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Terminées</button>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6 text-center">
            <Package className="h-12 w-12 mx-auto text-emerald-600" />
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">Votre historique de commandes est vide.</p>
            <a href="#marketplace" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] font-semibold">
              Aller à la boutique <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {filtered.map((o) => (
              <div key={o.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white font-['Inter',_sans-serif]">Commande #{o.id}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Date: {o.date} · Type: {o.type} · Prix: {o.price}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${o.status==='ongoing'?'bg-yellow-100 text-yellow-700':'bg-emerald-100 text-emerald-700'}`}>{o.status==='ongoing'?'En cours':'Terminée'}</span>
                    <a href={`#mon-compte/commandes/${o.id}`} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif]">Voir les détails</a>
                    <button className="px-4 py-2 rounded-xl border text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] flex items-center gap-2">
                      <FileDown className="h-4 w-4" /> Télécharger la facture
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}