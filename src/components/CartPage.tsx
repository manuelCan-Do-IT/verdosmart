import { useCart } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles, Package } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* Icône animée */}
        <div className="relative inline-flex mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-full">
            <ShoppingCart className="h-24 w-24 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>

        {/* Message principal */}
        <h2 className="font-['Lora',_serif] font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
          Votre panier est vide
        </h2>
        
        <p className="font-['Inter',_sans-serif] text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Découvrez notre sélection de produits agricoles de qualité et commencez à construire votre exploitation de demain.
        </p>

        {/* Caractéristiques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Package className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300">
              Livraison rapide
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300">
              Produits certifiés
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300">
              Paiement sécurisé
            </span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#marketplace"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-['Inter',_sans-serif] font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          Découvrir nos produits
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

interface CartItemCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
}

function CartItemCard({ id, name, price, image, quantity, category }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(id, quantity + 1);
    toast.success("Quantité mise à jour");
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
      toast.success("Quantité mise à jour");
    } else {
      removeFromCart(id);
      toast.success("Produit retiré du panier");
    }
  };

  const handleRemove = () => {
    removeFromCart(id);
    toast.success("Produit retiré du panier");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-4 md:gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Détails */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 mb-2">
            <div className="flex-1 min-w-0">
              {category && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                  {category}
                </p>
              )}
              <h3 className="font-['Inter',_sans-serif] font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
                {name}
              </h3>
            </div>
            <button
              onClick={handleRemove}
              className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              aria-label="Supprimer"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          {/* Prix et contrôles */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecrement}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Diminuer"
              >
                <Minus className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </button>
              <span className="font-['Inter',_sans-serif] font-semibold text-gray-900 dark:text-white min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Augmenter"
              >
                <Plus className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-['Inter',_sans-serif] text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {(price * quantity).toLocaleString()} FCFA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  const { items, getTotalPrice, clearCart } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 2500 : 0; // Frais de livraison
  const total = subtotal + shipping;

  const handleClearCart = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vider votre panier ?")) {
      clearCart();
      toast.success("Panier vidé");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
      <h3 className="font-['Lora',_serif] font-bold text-xl text-gray-900 dark:text-white mb-6">
        Récapitulatif
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-300">
            Sous-total ({items.length} article{items.length > 1 ? "s" : ""})
          </span>
          <span className="font-['Inter',_sans-serif] font-semibold text-gray-900 dark:text-white">
            {subtotal.toLocaleString()} FCFA
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-300">
            Livraison
          </span>
          <span className="font-['Inter',_sans-serif] font-semibold text-gray-900 dark:text-white">
            {shipping > 0 ? `${shipping.toLocaleString()} FCFA` : "Gratuit"}
          </span>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-['Sora',_sans-serif] font-bold text-lg text-gray-900 dark:text-white">
              Total
            </span>
            <span className="font-['Sora',_sans-serif] font-bold text-2xl text-emerald-600 dark:text-emerald-400">
              {total.toLocaleString()} FCFA
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-['Inter',_sans-serif] font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
          Passer la commande
        </button>

        <button
          onClick={handleClearCart}
          className="w-full py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
        >
          Vider le panier
        </button>
      </div>

      {/* Garanties */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-['Inter',_sans-serif]">Paiement 100% sécurisé</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-['Inter',_sans-serif]">Livraison sous 48h</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-['Inter',_sans-serif]">Garantie satisfait ou remboursé</span>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="mb-8">
            <h1 className="font-['Lora',_serif] font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-3">
              Mon Panier
            </h1>
            <p className="font-['Inter',_sans-serif] text-lg text-gray-600 dark:text-gray-300">
              {items.length > 0 
                ? `${items.length} article${items.length > 1 ? "s" : ""} dans votre panier`
                : "Votre panier est actuellement vide"
              }
            </p>
          </div>

          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Liste des produits */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <CartItemCard key={item.id} {...item} />
                ))}

                {/* Continuer les achats */}
                <div className="mt-6">
                  <a
                    href="#marketplace"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-['Inter',_sans-serif] font-semibold hover:gap-3 transition-all"
                  >
                    <ArrowRight className="h-5 w-5 rotate-180" />
                    Continuer mes achats
                  </a>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="lg:col-span-1">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
