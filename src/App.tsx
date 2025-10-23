import { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./imports/Section";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MarketplacePage from "./components/MarketplacePage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage";
import ProductDetailPage from "./components/ProductDetailPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import ProfilePage from "./components/ProfilePage";

type Page = "home" | "login" | "signup" | "marketplace" | "services" | "contact" | "cart" | "product" | "profil";

function HomePage() {
  return (
    <>
      <Section />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const { user } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "login") setCurrentPage("login");
      else if (hash === "signup") setCurrentPage("signup");
      else if (hash === "marketplace") setCurrentPage("marketplace");
      else if (hash.startsWith("services")) setCurrentPage("services");
      else if (hash === "contact") setCurrentPage("contact");
      else if (hash === "cart") setCurrentPage("cart");
      else if (hash.startsWith("product/")) setCurrentPage("product");
      else if (hash === "profil") setCurrentPage("profil");
      else if (hash === "accueil" || hash === "") setCurrentPage("home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "signup":
        return <SignupPage />;
      case "marketplace":
        return (
          <>
            <MarketplacePage />
            <Footer />
          </>
        );
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactPage />;
      case "cart":
        return <CartPage />;
      case "product":
        return <ProductDetailPage />;
      case "profil":
        return user ? <ProfilePage /> : <LoginPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      {(currentPage === "home" || currentPage === "marketplace") ? <Header /> : null}
      {renderPage()}
      <Toaster 
        position="top-right" 
        richColors
        theme="system"
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}