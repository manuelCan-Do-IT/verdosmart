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
import ConfirmationPage from "./components/ConfirmationPage";
import UserDashboardPage from "./components/UserDashboardPage";
import MyOrdersPage from "./components/MyOrdersPage";
import MyAppointmentsPage from "./components/MyAppointmentsPage";
import MessagingPage from "./components/MessagingPage";
import MyProfilePage from "./components/MyProfilePage";

type Page =
  | "home"
  | "login"
  | "signup"
  | "marketplace"
  | "services"
  | "contact"
  | "cart"
  | "product"
  | "profil"
  | "confirmation"
  | "accountDashboard"
  | "accountOrders"
  | "accountAppointments"
  | "accountMessaging"
  | "accountProfile";

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
      const rawHash = window.location.hash.slice(1);
      const [path] = rawHash.split("?");

      if (path === "login" || path === "connexion") setCurrentPage("login");
      else if (path === "signup") setCurrentPage("signup");
      else if (path === "marketplace") setCurrentPage("marketplace");
      else if (path?.startsWith("services")) setCurrentPage("services");
      else if (path === "contact") setCurrentPage("contact");
      else if (path === "cart") setCurrentPage("cart");
      else if (path?.startsWith("product/")) setCurrentPage("product");
      else if (path === "profil") setCurrentPage("profil");
      else if (path === "confirmation") setCurrentPage("confirmation");
      else if (path?.startsWith("mon-compte")) {
        const parts = path.split("/");
        const sub = parts[1] || "tableau-de-bord";
        switch (sub) {
          case "tableau-de-bord":
            setCurrentPage("accountDashboard");
            break;
          case "commandes":
            setCurrentPage("accountOrders");
            break;
          case "rendez-vous":
            setCurrentPage("accountAppointments");
            break;
          case "messagerie":
            setCurrentPage("accountMessaging");
            break;
          case "profil":
            setCurrentPage("accountProfile");
            break;
          default:
            setCurrentPage("accountDashboard");
        }
      } else if (path === "accueil" || path === "") setCurrentPage("home");
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
      case "confirmation":
        return <ConfirmationPage />;
      case "accountDashboard":
        return user ? <UserDashboardPage /> : <LoginPage />;
      case "accountOrders":
        return user ? <MyOrdersPage /> : <LoginPage />;
      case "accountAppointments":
        return user ? <MyAppointmentsPage /> : <LoginPage />;
      case "accountMessaging":
        return user ? <MessagingPage /> : <LoginPage />;
      case "accountProfile":
        return user ? <MyProfilePage /> : <LoginPage />;
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