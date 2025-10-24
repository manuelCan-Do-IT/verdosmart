import { useState } from "react";
import { Search, Filter, ShoppingCart, Star, MapPin, Package, Leaf, Sprout, Cpu } from "lucide-react";
import { useCart } from "./CartContext";
import { productsData, type ProductData } from "./productsData";
import { toast } from "sonner";

function MarketplaceHeader() {
  return (
    <div className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1729475976507-86e9aabab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1hcmtldHBsYWNlJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2MTE4NjQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Marketplace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-green-900/95"></div>
      </div>
      
      {/* Contenu */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Votre Marketplace Agricole
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-4">
            Trouvez tout ce dont vous avez besoin pour votre exploitation : semences certifiées, 
            intrants de qualité, capteurs IoT intelligents et solutions logicielles innovantes.
          </p>
          <p className="text-emerald-100 text-base md:text-lg">
            Des produits vérifiés, des vendeurs de confiance, livrés partout au Sénégal.
          </p>
        </div>
      </div>
      
      {/* Décoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
    </div>
  );
}

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 -mt-8 relative z-10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-['Inter:Semi_Bold',_sans-serif] font-semibold">
          <Filter className="h-5 w-5" />
          Filtres
        </button>
      </div>
    </div>
  );
}

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function CategoryCard({ title, icon, count, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
        isActive
          ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-500"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-600"
      }`}
    >
      <div className={`p-3 rounded-full ${isActive ? "bg-emerald-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400"}`}>
        {icon}
      </div>
      <div className="text-center">
        <h3 className={`text-sm font-['Inter:Semi_Bold',_sans-serif] font-semibold ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-gray-900 dark:text-white"}`}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{count} produits</p>
      </div>
    </button>
  );
}

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  location: string;
  inStock: boolean;
  image: string;
  vendor: string;
}

function ProductCard({ id, name, category, price, rating, reviews, location, inStock, image, vendor }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inStock) return;
    
    // Extraire le prix numérique de la chaîne
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    
    addToCart({
      id: id.toString(),
      name,
      price: numericPrice,
      image,
      category,
    });
    
    toast.success(`${name} ajouté au panier !`, {
      duration: 2000,
    });
  };
  
  return (
    <a 
      href={`#product/${id}`}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group block"
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Rupture de stock
            </span>
          </div>
        )}
        <button 
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-colors ${
            inStock
              ? "bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900 cursor-pointer"
              : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className={`h-5 w-5 ${inStock ? "text-emerald-600 dark:text-emerald-400" : "text-gray-500"}`} />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{category}</p>
            <h3 className="text-gray-900 dark:text-white font-['Inter:Semi_Bold',_sans-serif] font-semibold line-clamp-2">
              {name}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{rating}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">({reviews} avis)</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <Package className="h-4 w-4" />
          <span className="text-xs">Vendu par {vendor}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{price}</p>
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`px-4 py-2 rounded-lg font-['Inter:Semi_Bold',_sans-serif] font-semibold transition-all ${
              inStock
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed"
            }`}
          >
            {inStock ? "Ajouter" : "Indisponible"}
          </button>
        </div>
      </div>
    </a>
  );
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", title: "Tous les produits", icon: <Package className="h-6 w-6" />, count: 156 },
    { id: "semences", title: "Semences", icon: <Sprout className="h-6 w-6" />, count: 45 },
    { id: "intrants", title: "Intrants", icon: <Leaf className="h-6 w-6" />, count: 38 },
    { id: "iot", title: "Capteurs IoT", icon: <Cpu className="h-6 w-6" />, count: 24 },
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || 
                           product.category.toLowerCase().includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <MarketplaceHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        
        <div className="mt-12">
          <h2 className="text-gray-900 dark:text-white mb-6">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                count={category.count}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 dark:text-white">
              {filteredProducts.length} Produits disponibles
            </h2>
            <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Trier par popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Meilleures notes</option>
              <option>Nouveautés</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-gray-900 dark:text-white mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}