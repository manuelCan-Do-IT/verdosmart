import { useEffect, useMemo, useState } from 'react';
import { CreditCard, Eye, AlertCircle } from 'lucide-react';
import AccountHeader from './AccountHeader';
import Footer from './Footer';
import { useAuth } from './AuthProvider';
import { supabase, SUPABASE_READY } from '../lib/supabaseClient';
import { toast } from 'sonner';

 type PaymentStatus = 'initiated' | 'created' | 'pending' | 'paid' | 'failed' | 'refunded';
 type Tab = 'all' | 'pending' | 'paid' | 'failed';

 interface PaymentRow {
  id: string | number;
  order_id: string | number;
  amount: number; // cents
  method: string;
  status: PaymentStatus;
  created_at: string;
 }

 export default function MyPaymentsPage() {
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>('all');
  const [rows, setRows] = useState<PaymentRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!user) {
          setRows([]);
          setLoading(false);
          return;
        }

        const localKey = `local_orders_${user.id}`;
        const localEntries: any[] = JSON.parse(localStorage.getItem(localKey) || '[]');
        const localPayments: PaymentRow[] = localEntries.map((e) => ({
          id: e.payment?.id || `local_${Math.random().toString(36).slice(2)}`,
          order_id: e.order?.id || 'local_order',
          amount: e.payment?.amount || e.order?.total_amount || 0,
          method: e.payment?.method || 'unknown',
          status: (e.payment?.status || 'initiated') as PaymentStatus,
          created_at: e.payment?.created_at || e.order?.created_at || new Date().toISOString(),
        }));

        let supaPayments: PaymentRow[] = [];
        if (SUPABASE_READY && supabase) {
          try {
            const { data: orders, error: ordersErr } = await supabase
              .from('orders')
              .select('id')
              .eq('user_id', user.id);
            if (ordersErr) throw ordersErr;
            const orderIds = (orders || []).map((o: any) => o.id);

            if (orderIds.length > 0) {
              const { data: payments, error: paymentsErr } = await supabase
                .from('payments')
                .select('id, order_id, amount, method, status, created_at')
                .in('order_id', orderIds);
              if (paymentsErr) throw paymentsErr;
              supaPayments = (payments || []).map((p: any) => ({
                id: p.id,
                order_id: p.order_id,
                amount: p.amount,
                method: p.method,
                status: p.status,
                created_at: p.created_at,
              }));
            }
          } catch (e: any) {
            const msg = e?.message || 'Erreur Supabase';
            const shouldFallback = /schema cache|relation .* does not exist|table .* not found|permission|policy|RLS|Unauthorized/i.test(msg);
            if (!shouldFallback) {
              setError(msg);
            } else {
              toast.info('Schéma/RLS indisponible: affichage des paiements locaux.');
            }
          }
        }

        const combined = [...supaPayments, ...localPayments];
        // Tri par date descendante
        combined.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
        setRows(combined);
      } catch (e: any) {
        setError(e?.message || 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const filtered = useMemo(() => {
    switch (tab) {
      case 'pending':
        return rows.filter((r) => r.status === 'pending' || r.status === 'initiated' || r.status === 'created');
      case 'paid':
        return rows.filter((r) => r.status === 'paid');
      case 'failed':
        return rows.filter((r) => r.status === 'failed');
      default:
        return rows;
    }
  }, [rows, tab]);

  const formatAmount = (cents: number) => {
    return `€${(cents / 100).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-0 transition-colors duration-300">
      <AccountHeader backHref="#mon-compte/tableau-de-bord" backLabel="Mon compte" />
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Mes Paiements</h1>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setTab('all')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='all'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Tout</button>
          <button onClick={() => setTab('pending')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='pending'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>En attente</button>
          <button onClick={() => setTab('paid')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='paid'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Payés</button>
          <button onClick={() => setTab('failed')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='failed'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Échoués</button>
        </div>

        {loading ? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6 text-center text-gray-700 dark:text-gray-300">Chargement…</div>
        ) : error ? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-red-600" />
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">{error}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6 text-center">
            <CreditCard className="h-12 w-12 mx-auto text-emerald-600" />
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">Aucun paiement enregistré pour l’instant.</p>
            <a href="#marketplace" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] font-semibold">
              Continuer mes achats
            </a>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {filtered.map((p) => (
              <div key={`${p.id}`} className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white font-['Inter',_sans-serif]">Paiement #{String(p.id)}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Commande: {String(p.order_id)} · Montant: {formatAmount(p.amount)} · Méthode: {p.method} · Date: {new Date(p.created_at).toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${p.status==='failed'?'bg-red-100 text-red-700':p.status==='paid'?'bg-emerald-100 text-emerald-700':'bg-yellow-100 text-yellow-700'}`}>{p.status==='failed'?'Échoué':p.status==='paid'?'Payé':'En attente'}</span>
                    <a href={`#mon-compte/commandes/${p.order_id}`} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] flex items-center gap-2">
                      <Eye className="h-4 w-4" /> Voir commande
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
 }
