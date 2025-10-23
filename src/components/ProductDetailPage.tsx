import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import { productsData } from "./productsData";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  CheckCircle2, 
  MapPin,
  Package,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
        <ImageWithFallback
          src={images[activeIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
          </>
        )}
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-all ${
                activeIndex === index
                  ? "border-emerald-600 dark:border-emerald-400"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductInfo({ product }: { product: ProductData }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: numericPrice,
        image: product.image,
        category: product.category,
      });
    }
    toast.success(`${quantity} x ${product.name} ajouté${quantity > 1 ? "s" : ""} au panier !`);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <a href="#marketplace" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Marketplace
        </a>
        <span>/</span>
        <span className="text-emerald-600 dark:text-emerald-400">{product.category}</span>
      </div>

      {/* Catégorie et badges */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold rounded-full">
          {product.category}
        </span>
        {product.inStock && (
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4" />
            En stock
          </span>
        )}
      </div>

      {/* Titre */}
      <h1 className="font-['Lora',_serif] font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
        {product.name}
      </h1>

      {/* Rating et vendeur */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">{product.rating}</span>
          <span className="text-gray-500 dark:text-gray-400">({product.reviews} avis)</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4" />
          <span>{product.location}</span>
        </div>
      </div>

      {/* Vendeur */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
            <Package className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Vendu par</p>
            <p className="font-semibold text-gray-900 dark:text-white">{product.vendor}</p>
          </div>
        </div>
      </div>

      {/* Prix */}
      <div className="py-4 border-y border-gray-200 dark:border-gray-700">
        <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          {product.price}
        </p>
      </div>

      {/* Quantité et ajout au panier */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="font-semibold text-gray-900 dark:text-white">Quantité:</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-semibold text-lg min-w-[3rem] text-center text-gray-900 dark:text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-['Inter',_sans-serif] font-semibold transition-all ${
              product.inStock
                ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg hover:shadow-xl"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? "Ajouter au panier" : "Rupture de stock"}
          </button>
          <button
            onClick={() => {
              setIsFavorite(!isFavorite);
              toast.success(isFavorite ? "Retiré des favoris" : "Ajouté aux favoris");
            }}
            className={`p-4 border-2 rounded-xl transition-all ${
              isFavorite
                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-500"
            }`}
          >
            <Heart className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400"}`} />
          </button>
          <button className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors">
            <Share2 className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Garanties */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <Truck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="font-semibold text-sm text-gray-900 dark:text-white">Livraison rapide</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Sous 48h</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="font-semibold text-sm text-gray-900 dark:text-white">Paiement sécurisé</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">100% garanti</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <RotateCcw className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="font-semibold text-sm text-gray-900 dark:text-white">Retour gratuit</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">14 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetails({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-4 px-2 font-['Inter',_sans-serif] font-semibold transition-colors border-b-2 ${
            activeTab === "description"
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("specifications")}
          className={`pb-4 px-2 font-['Inter',_sans-serif] font-semibold transition-colors border-b-2 ${
            activeTab === "specifications"
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Spécifications
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 px-2 font-['Inter',_sans-serif] font-semibold transition-colors border-b-2 ${
            activeTab === "reviews"
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Avis ({product.reviews})
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {activeTab === "description" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-['Lora',_serif] font-bold text-xl text-gray-900 dark:text-white mb-4">
                Description du produit
              </h3>
              <p className="font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {product.features && (
              <div>
                <h3 className="font-['Lora',_serif] font-bold text-xl text-gray-900 dark:text-white mb-4">
                  Caractéristiques principales
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "specifications" && (
          <div>
            <h3 className="font-['Lora',_serif] font-bold text-xl text-gray-900 dark:text-white mb-4">
              Spécifications techniques
            </h3>
            <div className="space-y-3">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <span className="font-['Inter',_sans-serif] font-semibold text-gray-700 dark:text-gray-300">
                    {spec.label}
                  </span>
                  <span className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-400">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-8">
            <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="font-['Lora',_serif] font-bold text-xl text-gray-900 dark:text-white mb-2">
              Bientôt disponible
            </h3>
            <p className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-400">
              La section avis clients sera disponible prochainement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const [productId, setProductId] = useState<number>(1);
  const product = productsData.find(p => p.id === productId) || productsData[0];

  // Les images pour la galerie (pour la démo, on répète la même image)
  const images = [product.image, product.image, product.image, product.image];

  useEffect(() => {
    // Récupérer l'ID du produit depuis l'URL
    const hash = window.location.hash;
    const match = hash.match(/product\/(\d+)/);
    if (match) {
      setProductId(parseInt(match[1]));
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grille produit */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            <ProductGallery images={images} productName={product.name} />
            <ProductInfo product={product} />
          </div>

          {/* Détails */}
          <ProductDetails product={product} />

          {/* Produits similaires */}
          <div className="mt-16">
            <h2 className="font-['Lora',_serif] font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8">
              Produits similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map((similarProduct) => (
                <a
                  key={similarProduct.id}
                  href={`#product/${similarProduct.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <ImageWithFallback
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                      {similarProduct.category}
                    </p>
                    <h3 className="font-['Inter',_sans-serif] font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                      {similarProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {similarProduct.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
