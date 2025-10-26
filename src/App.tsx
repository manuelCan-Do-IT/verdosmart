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
import AdminLoginPage from "./components/admin/AdminLoginPage";
import AdminDashboardPage from "./components/admin/AdminDashboardPage";
import AdminUsersPage from "./components/admin/AdminUsersPage";
import AdminCatalogPage from "./components/admin/AdminCatalogPage";
import AdminTransactionsPage from "./components/admin/AdminTransactionsPage";
import AdminAnalyticsPage from "./components/admin/AdminAnalyticsPage";
import AdminRouteGuard from "./components/admin/AdminRouteGuard";
import PaymentPage from "./components/PaymentPage";
import MyPaymentsPage from "./components/MyPaymentsPage";
import ProfessionalsPage from "./components/ProfessionalsPage";
import AppointmentPage from "./components/AppointmentPage";

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
  | "accountProfile"
  | "accountPayments"
  | "adminLogin"
  | "adminDashboard"
  | "adminUsers"
  | "adminCatalog"
  | "adminTransactions"
  | "adminAnalytics"
  | "payment"
  | "professionals"
  | "appointment";

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
      else if (path === "paiement" || path === "payment") setCurrentPage("payment");
      else if (path?.startsWith("product/")) setCurrentPage("product");
      else if (path === "profil") setCurrentPage("profil");
      else if (path === "confirmation") setCurrentPage("confirmation");
      else if (path === "professionals" || path === "experts") setCurrentPage("professionals");
      else if (path?.startsWith("rendez-vous/") || path?.startsWith("appointment/")) setCurrentPage("appointment");
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
          case "paiements":
            setCurrentPage("accountPayments");
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
      } else if (path?.startsWith("admin-v")) {
        const parts = path.split("/");
        const sub = parts[1] || "";
        switch (sub) {
          case "dashboard":
            setCurrentPage("adminDashboard");
            break;
          case "users":
            setCurrentPage("adminUsers");
            break;
          case "catalog":
            setCurrentPage("adminCatalog");
            break;
          case "transactions":
            setCurrentPage("adminTransactions");
            break;
          case "analytics":
            setCurrentPage("adminAnalytics");
            break;
          default:
            setCurrentPage("adminLogin");
        }
      } else if (path?.startsWith("admin")) {
        const parts = path.split("/");
        const sub = parts[1] || "dashboard";
        switch (sub) {
          case "login":
            setCurrentPage("adminLogin");
            break;
          case "dashboard":
            setCurrentPage("adminDashboard");
            break;
          case "users":
            setCurrentPage("adminUsers");
            break;
          case "catalog":
            setCurrentPage("adminCatalog");
            break;
          case "transactions":
            setCurrentPage("adminTransactions");
            break;
          case "analytics":
            setCurrentPage("adminAnalytics");
            break;
          default:
            setCurrentPage("adminDashboard");
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
      case "accountPayments":
        return user ? <MyPaymentsPage /> : <LoginPage />;
      case "adminLogin":
        return <AdminLoginPage />;
      case "adminDashboard":
        return (
          <AdminRouteGuard>
            <AdminDashboardPage />
          </AdminRouteGuard>
        );
      case "adminUsers":
        return (
          <AdminRouteGuard>
            <AdminUsersPage />
          </AdminRouteGuard>
        );
      case "adminCatalog":
        return (
          <AdminRouteGuard>
            <AdminCatalogPage />
          </AdminRouteGuard>
        );
      case "adminTransactions":
        return (
          <AdminRouteGuard>
            <AdminTransactionsPage />
          </AdminRouteGuard>
        );
      case "adminAnalytics":
        return (
          <AdminRouteGuard>
            <AdminAnalyticsPage />
          </AdminRouteGuard>
        );
      case "payment":
        return <PaymentPage />;
      case "professionals":
        return <ProfessionalsPage />;
      case "appointment":
        return <AppointmentPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {currentPage !== "adminLogin" && !currentPage.startsWith("admin") && <Header />}
      <main className="flex-grow">{renderPage()}</main>
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