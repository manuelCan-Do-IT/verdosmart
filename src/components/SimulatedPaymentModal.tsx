import { useState } from "react";

export type PaymentMethod = "mobile" | "visa" | "stripe";

export type SimulatedPaymentModalProps = {
  open: boolean;
  onClose: () => void;
  total: number;
  onConfirm: (method: PaymentMethod) => void;
};

export function SimulatedPaymentModal(props: SimulatedPaymentModalProps) {
  const { open, onClose, total, onConfirm } = props;
  const [method, setMethod] = useState<PaymentMethod>("mobile");
  const [operator, setOperator] = useState("Orange Money");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [expiry, setExpiry] = useState("12/28");
  const [cvc, setCvc] = useState("123");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-xl p-6">
        <h3 className="font-['Lora',_serif] text-2xl font-bold text-gray-900 dark:text-white">Paiement simulé</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Simulation de paiement — aucun débit réel. Intégration des API à venir.</p>

        <div className="mt-4 flex gap-2">
          <button onClick={() => setMethod("mobile")} className={`px-3 py-2 rounded-lg ${method==='mobile' ? 'bg-emerald-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>Mobile Money</button>
          <button onClick={() => setMethod("visa")} className={`px-3 py-2 rounded-lg ${method==='visa' ? 'bg-emerald-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>Carte Visa</button>
          <button onClick={() => setMethod("stripe")} className={`px-3 py-2 rounded-lg ${method==='stripe' ? 'bg-emerald-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>Stripe</button>
        </div>

        {method === 'mobile' && (
          <div className="mt-4 grid grid-cols-1 gap-4">
            <label className="text-sm text-gray-700 dark:text-gray-300">Opérateur</label>
            <select value={operator} onChange={(e)=>setOperator(e.target.value)} className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>Orange Money</option>
              <option>Wave</option>
              <option>Yas</option>
              <option>MTN</option>
            </select>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Téléphone (+221 ...)" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        )}

        {method === 'visa' && (
          <div className="mt-4 grid grid-cols-1 gap-4">
            <input value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} placeholder="Numéro de carte (ex: 4111 1111 1111 1111)" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            <div className="grid grid-cols-2 gap-4">
              <input value={expiry} onChange={(e)=>setExpiry(e.target.value)} placeholder="MM/AA" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <input value={cvc} onChange={(e)=>setCvc(e.target.value)} placeholder="CVC" className="rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Utilisez des identifiants au bon format (non fonctionnels).</p>
          </div>
        )}

        {method === 'stripe' && (
          <div className="mt-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">Exemple de carte de test Stripe: <span className="font-semibold">4242 4242 4242 4242</span>, exp: 12/28, CVC: 123.</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Interface prête pour une intégration future de <code>Stripe Elements</code>.</p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div className="text-gray-700 dark:text-gray-300">Total à payer: <span className="font-bold text-emerald-600 dark:text-emerald-400">{total.toLocaleString()} FCFA</span></div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded-xl border text-gray-700 dark:text-gray-300">Annuler</button>
            <button onClick={() => onConfirm(method)} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Simuler le paiement</button>
          </div>
        </div>
      </div>
    </div>
  );
}
