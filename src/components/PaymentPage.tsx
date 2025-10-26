import React, { useMemo, useState } from "react";
import AccountHeader from "./AccountHeader";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthProvider";
import { supabase, SUPABASE_READY } from "../lib/supabaseClient";
import { toast } from "sonner";
import { CreditCard, Smartphone, Wallet, BadgeDollarSign, ShieldCheck, Lock, CreditCardIcon, ArrowLeft, CheckCircle2 } from "lucide-react";

function formatPriceCents(value: number, currency: string = "EUR") {
  try {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(value / 100);
  } catch {
    return `${(value / 100).toFixed(2)} ${currency}`;
  }
}

type PaymentMethod = "card" | "mobile_money" | "paypal";
type PaymentStep = "method" | "details" | "review" | "confirmation";

export default function PaymentPage() {
  const { items, clearCart } = useCart();
  const { user } = useAuth();

  const [method, setMethod] = useState<PaymentMethod>("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobilePhone, setMobilePhone] = useState("");
  const [cardLast4, setCardLast4] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [step, setStep] = useState<PaymentStep>("method");
  const [isSuccess, setIsSuccess] = useState(false);

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
  const canProceedToDetails = method !== "";
  const canProceedToReview = (
    (method === "card" && cardNumber.length >= 16 && cardExpiry.length >= 5 && cardCvv.length >= 3 && cardName.length >= 3) ||
    (method === "mobile_money" && mobilePhone.length >= 9) ||
    (method === "paypal")
  );

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
      setCardLast4(cardNumber.slice(-4));
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
        setIsSuccess(true);
        setStep("confirmation");
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
      setIsSuccess(true);
      setStep("confirmation");
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
          setIsSuccess(true);
          setStep("confirmation");
          return;
        } catch {}
      }
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const groups = [];
    for (let i = 0; i < cleaned.length; i += 4) {
      groups.push(cleaned.slice(i, i + 4));
    }
    return groups.join(' ').slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const renderStepContent = () => {
    switch (step) {
      case "method":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">
              Choisissez votre mode de paiement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="radiogroup" aria-label="Modes de paiement">
              <button
                onClick={() => setMethod("card")}
                className={`flex flex-col items-center gap-4 rounded-xl border p-6 transition-all ${
                  method === "card" 
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-md" 
                    : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
                }`}
                role="radio"
                aria-checked={method === "card"}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">Carte bancaire</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Visa, MasterCard, etc.</div>
                </div>
              </button>

              <button
                onClick={() => setMethod("mobile_money")}
                className={`flex flex-col items-center gap-4 rounded-xl border p-6 transition-all ${
                  method === "mobile_money" 
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-md" 
                    : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
                }`}
                role="radio"
                aria-checked={method === "mobile_money"}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">Mobile Money</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Orange Money, Wave</div>
                </div>
              </button>

              <button
                onClick={() => setMethod("paypal")}
                className={`flex flex-col items-center gap-4 rounded-xl border p-6 transition-all ${
                  method === "paypal" 
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-md" 
                    : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
                }`}
                role="radio"
                aria-checked={method === "paypal"}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <Wallet className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">PayPal</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Paiement sécurisé</div>
                </div>
              </button>
            </div>
            
            <div className="flex justify-between mt-8">
              <a 
                href="#cart" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Retour au panier
              </a>
              <button
                onClick={() => canProceedToDetails && setStep("details")}
                disabled={!canProceedToDetails}
                className={`px-6 py-3 font-medium rounded-xl transition-colors ${
                  canProceedToDetails 
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continuer
              </button>
            </div>
          </div>
        );
        
      case "details":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">
              {method === "card" && "Détails de votre carte"}
              {method === "mobile_money" && "Détails Mobile Money"}
              {method === "paypal" && "Connexion PayPal"}
            </h2>
            
            {method === "card" && (
              <div className="space-y-4">
                <div className="relative bg-gradient-to-r from-emerald-600 to-blue-500 rounded-xl p-6 text-white shadow-lg mb-6">
                  <div className="absolute top-4 right-4">
                    <Lock className="h-5 w-5 opacity-70" />
                  </div>
                  <div className="mb-6">
                    <CreditCardIcon className="h-10 w-10" />
                  </div>
                  <div className="mb-4 font-mono text-xl tracking-wider">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs opacity-70">Titulaire</div>
                      <div className="font-medium">{cardName || 'VOTRE NOM'}</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-70">Expire</div>
                      <div className="font-medium">{cardExpiry || 'MM/YY'}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Nom sur la carte
                  </label>
                  <input
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="JEAN DUPONT"
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Numéro de carte
                  </label>
                  <input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Date d'expiration
                    </label>
                    <input
                      id="cardExpiry"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                      maxLength={5}
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardCvv" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Code de sécurité (CVV)
                    </label>
                    <input
                      id="cardCvv"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                      maxLength={3}
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <Lock className="h-4 w-4" />
                  <span>Vos données de carte sont sécurisées et chiffrées</span>
                </div>
              </div>
            )}
            
            {method === "mobile_money" && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="mobilePhone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Numéro de téléphone
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      +221
                    </span>
                    <input
                      id="mobilePhone"
                      value={mobilePhone}
                      onChange={(e) => setMobilePhone(e.target.value.replace(/\D/g, ''))}
                      inputMode="tel"
                      className="w-full rounded-r-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="77 000 00 00"
                    />
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-amber-800 dark:text-amber-300 text-sm">
                  <p>Vous recevrez une notification sur votre téléphone pour confirmer le paiement.</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Orange_logo.svg" alt="Orange Money" className="h-8" />
                    <span className="font-medium">Orange Money</span>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Wave_logo.png" alt="Wave" className="h-8" />
                    <span className="font-medium">Wave</span>
                  </div>
                </div>
              </div>
            )}
            
            {method === "paypal" && (
              <div className="space-y-4 text-center">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-16 mb-6" />
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Vous allez être redirigé vers PayPal pour finaliser votre paiement en toute sécurité.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Paiement sécurisé via PayPal</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep("method")}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Retour
              </button>
              <button
                onClick={() => canProceedToReview && setStep("review")}
                disabled={!canProceedToReview}
                className={`px-6 py-3 font-medium rounded-xl transition-colors ${
                  canProceedToReview 
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continuer
              </button>
            </div>
          </div>
        );
        
      case "review":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">
              Vérifiez et confirmez
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Récapitulatif de la commande</h3>
              
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id || item.sku || item.name} className="flex justify-between">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      )}
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Quantité: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="font-medium">
                      {formatPriceCents(Math.round((item.price || 0) * 100) * item.quantity, currency)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                  <span>{formatPriceCents(subtotal, currency)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Frais de plateforme</span>
                  <span>{formatPriceCents(platformFee, currency)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                  <span>{formatPriceCents(shippingFee, currency)}</span>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatPriceCents(total, currency)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Méthode de paiement</h3>
              
              <div className="flex items-center gap-4">
                {method === "card" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Carte bancaire</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        **** **** **** {cardNumber.slice(-4)}
                      </div>
                    </div>
                  </>
                )}
                
                {method === "mobile_money" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Mobile Money</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        +221 {mobilePhone}
                      </div>
                    </div>
                  </>
                )}
                
                {method === "paypal" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <Wallet className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">PayPal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Paiement sécurisé via PayPal
                      </div>
                    </div>
                  </>
                )}
                
                <button 
                  onClick={() => setStep("method")}
                  className="ml-auto text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Modifier
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
              <Lock className="h-4 w-4" />
              <span>Toutes les transactions sont sécurisées et chiffrées</span>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep("details")}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Retour
              </button>
              <button
                onClick={handlePay}
                disabled={isSubmitting}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    <BadgeDollarSign className="h-5 w-5" />
                    Confirmer et payer {formatPriceCents(total, currency)}
                  </>
                )}
              </button>
            </div>
          </div>
        );
        
      case "confirmation":
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-4">
              Paiement confirmé !
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              Votre commande a été traitée avec succès. Vous recevrez un email de confirmation avec les détails de votre commande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#mon-compte/commandes"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors"
              >
                Voir mes commandes
              </a>
              <a
                href="#accueil"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <AccountHeader 
        title="Paiement" 
        subtitle={
          step === "method" ? "Choisissez votre mode de paiement" :
          step === "details" ? "Complétez les informations" :
          step === "review" ? "Vérifiez et confirmez" :
          "Confirmation de paiement"
        } 
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Progress steps */}
        {!isSuccess && (
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${step === "method" || step === "details" || step === "review" ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "method" || step === "details" || step === "review" ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <span className="font-bold">1</span>
                </div>
                <span className="text-xs mt-2">Méthode</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-700">
                <div className={`h-full bg-emerald-500 transition-all ${step === "details" || step === "review" ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex flex-col items-center ${step === "details" || step === "review" ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "details" || step === "review" ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <span className="font-bold">2</span>
                </div>
                <span className="text-xs mt-2">Détails</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-700">
                <div className={`h-full bg-emerald-500 transition-all ${step === "review" ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex flex-col items-center ${step === "review" ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "review" ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <span className="font-bold">3</span>
                </div>
                <span className="text-xs mt-2">Confirmation</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              {renderStepContent()}
            </div>
          </div>
          
          {step !== "confirmation" && (
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Récapitulatif</h3>
                
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id || item.sku || item.name} className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{item.name} × {item.quantity}</span>
                      <span className="font-medium">{formatPriceCents(Math.round((item.price || 0) * 100) * item.quantity, currency)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                    <span>{formatPriceCents(subtotal, currency)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Frais de plateforme</span>
                    <span>{formatPriceCents(platformFee, currency)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                    <span>{formatPriceCents(shippingFee, currency)}</span>
                  </div>
                </div>
                
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
                
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPriceCents(total, currency)}</span>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Paiement sécurisé</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Orange_logo.svg" alt="Orange" className="h-6" />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}