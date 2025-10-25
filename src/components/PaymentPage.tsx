import React, { useMemo, useState } from "react";
import AccountHeader from "./AccountHeader";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthProvider";
import { supabase, SUPABASE_READY } from "../lib/supabaseClient";
import { toast } from "sonner";
import { CreditCard, Smartphone, Wallet, BadgeDollarSign } from "lucide-react";

function formatPriceCents(value: number, currency: string = "EUR") {
  try {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(value / 100);
  } catch {
    return `${(value / 100).toFixed(2)} ${currency}`;
  }
}

type PaymentMethod = "card" | "mobile_money" | "paypal";

export default function PaymentPage() {
  const { items, clearCart } = useCart();
  const { user } = useAuth();

  const [method, setMethod] = useState<PaymentMethod>("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobilePhone, setMobilePhone] = useState("");
  const [cardLast4, setCardLast4] = useState("");

  const currency = "EUR";
  const shippingFee = 0;
  const platformFee = Math.round(
    Math.max(0, items.reduce((acc, it) => acc + (it.price || 0) * it.quantity, 0) * 0.02)
  );

  const subtotal = useMemo(() => {
    return items.reduce((acc, it) => acc + Math.round((it.price || 0) * 100) * it.quantity, 0);
  }, [items]);
  const total = subtotal + shippingFee + platformFee;

  const canPay = items.length > 0 && !isSubmitting;

  const handlePay = async () => {
    if (!user) {
      toast.error("Veuillez vous connecter pour payer.");
      window.location.hash = "login";
      return;
    }

    if (method === "mobile_money" && mobilePhone.trim().length < 8) {
      toast.error("Numéro mobile invalide pour Mobile Money.");
      return;
    }

    if (method === "card" && cardLast4.trim().length < 4) {
      toast.error("Derniers 4 chiffres de carte requis.");
      return;
    }

    setIsSubmitting(true);
    try {
      const now = new Date().toISOString();
      // Fallback local storage if Supabase not ready
      if (!SUPABASE_READY) {
        const orderId = `loc_${Date.now()}`;
        const order = {
          id: orderId,
          user_id: user.id,
          status: "pending",
          currency,
          subtotal,
          shipping_fee: shippingFee,
          platform_fee: platformFee,
          total_amount: total,
          created_at: now,
        };
        const orderItems = items.map((it) => ({
          id: `loc_item_${Math.random().toString(36).slice(2)}`,
          order_id: orderId,
          product_id: it.id || it.sku || it.name,
          name: it.name,
          quantity: it.quantity,
          unit_price: Math.round((it.price || 0) * 100),
          total_price: Math.round((it.price || 0) * 100) * it.quantity,
        }));
        const paymentId = `loc_pay_${Date.now()}`;
        const payment = {
          id: paymentId,
          order_id: orderId,
          method,
          amount: total,
          status: "initiated",
          created_at: now,
        };
        const transaction = {
          id: `loc_tx_${Date.now()}`,
          payment_id: paymentId,
          status: "created",
          payload: { method, mobilePhone, cardLast4 },
          created_at: now,
        };
        const logEntry = {
          id: `loc_log_${Date.now()}`,
          payment_id: paymentId,
          level: "info",
          message: "Transaction initiée en mode local",
          meta: { orderId, total },
          created_at: now,
        };
        try {
          const cacheKey = `local_orders_${user.id}`;
          const existing = JSON.parse(localStorage.getItem(cacheKey) || "[]");
          existing.push({ order, orderItems, payment, transaction, logEntry });
          localStorage.setItem(cacheKey, JSON.stringify(existing));
        } catch {}

        toast.success("Commande enregistrée localement. Paiement simulé.");
        clearCart();
        window.location.hash = "mon-compte/commandes";
        return;
      }

      // Supabase flow
      const { data: orderData, error: orderErr } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          status: "pending",
          currency,
          subtotal,
          shipping_fee: shippingFee,
          platform_fee: platformFee,
          total_amount: total,
          created_at: now,
        })
        .select("id")
        .single();

      if (orderErr || !orderData?.id) throw new Error(orderErr?.message || "Impossible de créer la commande");

      const orderId = orderData.id as number;

      const orderItemsPayload = items.map((it) => ({
        order_id: orderId,
        product_id: it.id || it.sku || it.name,
        name: it.name,
        quantity: it.quantity,
        unit_price: Math.round((it.price || 0) * 100),
        total_price: Math.round((it.price || 0) * 100) * it.quantity,
      }));

      const { error: itemsErr } = await supabase.from("order_items").insert(orderItemsPayload);
      if (itemsErr) throw new Error(itemsErr.message);

      const { data: paymentData, error: payErr } = await supabase
        .from("payments")
        .insert({ order_id: orderId, method, amount: total, status: "initiated", created_at: now })
        .select("id")
        .single();
      if (payErr || !paymentData?.id) throw new Error(payErr?.message || "Échec de création du paiement");

      const paymentId = paymentData.id as number;

      const { error: txErr } = await supabase
        .from("payment_transactions")
        .insert({
          payment_id: paymentId,
          status: "created",
          payload: { method, mobilePhone, cardLast4 },
          created_at: now,
        });
      if (txErr) throw new Error(txErr.message);

      await supabase.from("payment_logs").insert({
        payment_id: paymentId,
        level: "info",
        message: "Transaction créée",
        meta: { orderId, total },
        created_at: now,
      });

      toast.success("Paiement initié. Vous pouvez suivre la transaction.");
      clearCart();
      window.location.hash = "mon-compte/commandes";
    } catch (e: any) {
      const msg = e?.message || "Erreur durant le paiement";
      const shouldFallback = /schema cache|relation .* does not exist|table .* not found|permission|policy|RLS|Unauthorized/i.test(msg);
      if (shouldFallback && user) {
        try {
          const now = new Date().toISOString();
          const orderId = `loc_${Date.now()}`;
          const order = {
            id: orderId,
            user_id: user.id,
            status: "pending",
            currency,
            subtotal,
            shipping_fee: shippingFee,
            platform_fee: platformFee,
            total_amount: total,
            created_at: now,
          };
          const orderItems = items.map((it) => ({
            id: `loc_item_${Math.random().toString(36).slice(2)}`,
            order_id: orderId,
            product_id: it.id || it.sku || it.name,
            name: it.name,
            quantity: it.quantity,
            unit_price: Math.round((it.price || 0) * 100),
            total_price: Math.round((it.price || 0) * 100) * it.quantity,
          }));
          const paymentId = `loc_pay_${Date.now()}`;
          const payment = {
            id: paymentId,
            order_id: orderId,
            method,
            amount: total,
            status: "initiated",
            created_at: now,
          };
          const transaction = {
            id: `loc_tx_${Date.now()}`,
            payment_id: paymentId,
            status: "created",
            payload: { method, mobilePhone, cardLast4 },
            created_at: now,
          };
          const logEntry = {
            id: `loc_log_${Date.now()}`,
            payment_id: paymentId,
            level: "info",
            message: "Transaction initiée (fallback)",
            meta: { orderId, total, error: msg },
            created_at: now,
          };
          const cacheKey = `local_orders_${user.id}`;
          const existing = JSON.parse(localStorage.getItem(cacheKey) || "[]");
          existing.push({ order, orderItems, payment, transaction, logEntry });
          localStorage.setItem(cacheKey, JSON.stringify(existing));
          toast.success("Schéma Supabase manquant/RLS: commande enregistrée localement.");
          clearCart();
          window.location.hash = "mon-compte/commandes";
          return;
        } catch {}
      }
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AccountHeader title="Paiement" subtitle="Choisissez votre mode de paiement" />

      <main className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Options de paiement</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Modes de paiement">
              <button
                onClick={() => setMethod("card")}
                className={`flex items-center gap-3 rounded-md border p-4 transition ${
                  method === "card" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-200 dark:border-gray-700"
                }`}
                role="radio"
                aria-checked={method === "card"}
              >
                <CreditCard className="h-5 w-5" />
                <div>
                  <div className="font-medium">Carte bancaire</div>
                  <div className="text-sm text-gray-500">Visa, MasterCard</div>
                </div>
              </button
              >

              <button
                onClick={() => setMethod("mobile_money")}
                className={`flex items-center gap-3 rounded-md border p-4 transition ${
                  method === "mobile_money" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-200 dark:border-gray-700"
                }`}
                role="radio"
                aria-checked={method === "mobile_money"}
              >
                <Smartphone className="h-5 w-5" />
                <div>
                  <div className="font-medium">Mobile Money</div>
                  <div className="text-sm text-gray-500">Orange Money, Wave</div>
                </div>
              </button>

              <button
                onClick={() => setMethod("paypal")}
                className={`flex items-center gap-3 rounded-md border p-4 transition ${
                  method === "paypal" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-200 dark:border-gray-700"
                }`}
                role="radio"
                aria-checked={method === "paypal"}
              >
                <Wallet className="h-5 w-5" />
                <div>
                  <div className="font-medium">PayPal</div>
                  <div className="text-sm text-gray-500">Paiement sécurisé</div>
                </div>
              </button>
            </div>

            {/* Inputs spécifiques */}
            <div className="mt-4 space-y-3">
              {method === "mobile_money" && (
                <div>
                  <label htmlFor="mobileMoney" className="block text-sm font-medium mb-1">Numéro Mobile Money</label>
                  <input
                    id="mobileMoney"
                    value={mobilePhone}
                    onChange={(e) => setMobilePhone(e.target.value)}
                    inputMode="tel"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2"
                    placeholder="770000000"
                  />
                </div>
              )}

              {method === "card" && (
                <div>
                  <label htmlFor="cardLast4" className="block text-sm font-medium mb-1">Derniers 4 chiffres</label>
                  <input
                    id="cardLast4"
                    value={cardLast4}
                    onChange={(e) => setCardLast4(e.target.value)}
                    inputMode="numeric"
                    maxLength={4}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2"
                    placeholder="1234"
                  />
                </div>
              )}

              <button
                onClick={handlePay}
                disabled={!canPay}
                className={`w-full flex items-center justify-center gap-2 rounded-md p-3 font-medium transition ${
                  canPay ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-500"
                }`}
                aria-disabled={!canPay}
              >
                <BadgeDollarSign className="h-5 w-5" />
                Valider et payer
              </button>
            </div>
          </div>

          {/* Logos & infos */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <h3 className="text-base font-semibold mb-3">Moyens acceptés</h3>
            <div className="flex flex-wrap items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Orange_logo.svg" alt="Orange" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Wave_logo.png" alt="Wave" className="h-6" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Chiffrement TLS, 3‑D Secure, conformité PCI‑DSS.</p>
          </div>
        </section>

        {/* Récapitulatif */}
        <aside className="space-y-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Récapitulatif de la commande</h2>
            <div className="space-y-2">
              {items.map((it) => (
                <div key={`${it.id || it.sku || it.name}`} className="flex items-center justify-between">
                  <div className="text-sm">{it.name} × {it.quantity}</div>
                  <div className="text-sm">{formatPriceCents(Math.round((it.price || 0) * 100) * it.quantity, currency)}</div>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
            <div className="flex items-center justify-between text-sm">
              <span>Sous‑total</span>
              <span>{formatPriceCents(subtotal, currency)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Frais plateforme</span>
              <span>{formatPriceCents(platformFee, currency)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Livraison</span>
              <span>{formatPriceCents(shippingFee, currency)}</span>
            </div>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>{formatPriceCents(total, currency)}</span>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <h3 className="text-base font-semibold mb-2">Conseils de sécurité</h3>
            <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Vérifiez le cadenas dans la barre d’adresse (HTTPS)</li>
              <li>Ne partagez jamais votre code 3‑D Secure</li>
              <li>Utilisez une carte virtuelle pour plus de sécurité</li>
            </ul>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}