import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Users, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Heading() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="font-['Inter',_sans-serif] font-medium text-sm text-white">
          Disponible 24/7
        </span>
      </div>
      <h2 className="font-['Lora',_serif] font-bold text-4xl sm:text-5xl md:text-6xl text-white">
        Contactez-Nous
      </h2>
      <p className="font-['Inter',_sans-serif] text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto">
        Notre équipe d'experts est à votre écoute pour transformer vos ambitions agricoles en réalité
      </p>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  link?: string;
}

function InfoCard({ icon, title, info, link }: InfoCardProps) {
  const CardContent = (
    <div className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
          <div className="relative bg-white/20 p-4 rounded-full">
            <div className="text-white">
              {icon}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-['Lora',_serif] font-bold text-xl text-white">
            {title}
          </h3>
          <p className="font-['Inter',_sans-serif] text-emerald-50">
            {info}
          </p>
        </div>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );

  if (link) {
    return <a href={link} className="block h-full">{CardContent}</a>;
  }

  return CardContent;
}

function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
      <InfoCard
        icon={<Phone className="w-7 h-7" />}
        title="Téléphone"
        info="+221 78 687 14 79"
        link="tel:+221786871479"
      />
      <InfoCard
        icon={<Mail className="w-7 h-7" />}
        title="Email"
        info="contact@verdosmart.com"
        link="mailto:contact@verdosmart.com"
      />
      <InfoCard
        icon={<MapPin className="w-7 h-7" />}
        title="Adresse"
        info="Dakar, Sénégal"
      />
    </div>
  );
}

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatsCard({ icon, value, label }: StatsCardProps) {
  return (
    <div className="flex items-center gap-4 bg-emerald-50 dark:bg-gray-700/50 rounded-xl p-4 transition-colors">
      <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-lg text-white">
        {icon}
      </div>
      <div>
        <div className="font-['Lora',_serif] font-bold text-2xl text-gray-900 dark:text-white">
          {value}
        </div>
        <div className="font-['Inter',_sans-serif] text-sm text-gray-600 dark:text-gray-400">
          {label}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Le nom doit contenir au moins 3 caractères";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } else if (!/^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,}$/.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }

    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Veuillez corriger les erreurs du formulaire");
      return;
    }

    setIsSubmitting(true);
    
    // Configuration EmailJS
    const serviceId = "service_verdosmart"; // À remplacer par votre Service ID
    const templateId = "template_contact"; // À remplacer par votre Template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // À remplacer par votre clé publique
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    };
    
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message envoyé avec succès! Nous vous répondrons bientôt.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setErrors({});
      setFormSubmitted(true);
      
      // Enregistrement des données dans un système de gestion de clients (simulation)
      console.log("Données du client enregistrées:", templateParams);
      
      // Redirection après 3 secondes vers la page d'accueil (optionnel)
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-full transition-colors">
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Left side - Form */}
        <div className="lg:col-span-3 p-8 md:p-12">
          <div className="mb-8">
            <h3 className="font-['Lora',_serif] font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-3">
              Demander un Devis Gratuit
            </h3>
            <p className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-400">
              Remplissez le formulaire et notre équipe vous contactera dans les 24 heures
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-['Inter',_sans-serif] font-medium text-sm text-gray-700 dark:text-gray-300">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-emerald-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 font-['Inter',_sans-serif] outline-none focus:ring-2 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-['Inter',_sans-serif]">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-['Inter',_sans-serif] font-medium text-sm text-gray-700 dark:text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean@exemple.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-emerald-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 font-['Inter',_sans-serif] outline-none focus:ring-2 transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-['Inter',_sans-serif]">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-['Inter',_sans-serif] font-medium text-sm text-gray-700 dark:text-gray-300">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+221 78 687 14 79"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-emerald-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 font-['Inter',_sans-serif] outline-none focus:ring-2 transition-all`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-['Inter',_sans-serif]">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-['Inter',_sans-serif] font-medium text-sm text-gray-700 dark:text-gray-300">
                  Service *
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger
                    className={`w-full !px-4 !py-3 !h-[50px] rounded-xl border ${
                      errors.service 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus-visible:ring-emerald-500 focus-visible:border-emerald-500'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-['Inter',_sans-serif] focus-visible:ring-2 transition-all [&>span]:line-clamp-1`}
                  >
                    <SelectValue placeholder="Sélectionner un service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-[300px]">
                    <SelectItem 
                      value="agronomie"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Services Agronomiques
                    </SelectItem>
                    <SelectItem 
                      value="informatique"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Solutions Informatiques
                    </SelectItem>
                    <SelectItem 
                      value="semences"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Semences
                    </SelectItem>
                    <SelectItem 
                      value="intrants"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Intrants
                    </SelectItem>
                    <SelectItem 
                      value="iot"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Capteurs IoT
                    </SelectItem>
                    <SelectItem 
                      value="logiciels"
                      className="font-['Inter',_sans-serif] text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:bg-emerald-50 dark:focus:bg-emerald-900/30 cursor-pointer rounded-lg"
                    >
                      Logiciels
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-xs font-['Inter',_sans-serif]">{errors.service}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-['Inter',_sans-serif] font-medium text-sm text-gray-700 dark:text-gray-300">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez votre projet en détail..."
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-600 focus:ring-emerald-500'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 font-['Inter',_sans-serif] outline-none focus:ring-2 transition-all resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs font-['Inter',_sans-serif]">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-['Inter',_sans-serif] font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer la Demande
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right side - Stats & Info */}
        <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800 p-8 md:p-12 space-y-8">
          <div>
            <h4 className="font-['Lora',_serif] font-bold text-2xl text-gray-900 dark:text-white mb-6">
              Pourquoi nous choisir ?
            </h4>
            
            <div className="space-y-4">
              <StatsCard
                icon={<CheckCircle2 className="w-5 h-5" />}
                value="500+"
                label="Agriculteurs satisfaits"
              />
              <StatsCard
                icon={<Clock className="w-5 h-5" />}
                value="24h"
                label="Temps de réponse"
              />
              <StatsCard
                icon={<Users className="w-5 h-5" />}
                value="15+"
                label="Experts disponibles"
              />
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-900/30 rounded-xl p-6 space-y-4">
            <h5 className="font-['Lora',_serif] font-bold text-lg text-gray-900 dark:text-white">
              Horaires d'ouverture
            </h5>
            <div className="space-y-2 font-['Inter',_sans-serif] text-sm">
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Lundi - Vendredi</span>
                <span className="font-medium">8h - 18h</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Samedi</span>
                <span className="font-medium">9h - 14h</span>
              </div>
              <div className="flex justify-between text-gray-500 dark:text-gray-500">
                <span>Dimanche</span>
                <span className="font-medium">Fermé</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-white">
            <h5 className="font-['Lora',_serif] font-bold text-lg mb-2">
              Assistance d'urgence
            </h5>
            <p className="font-['Inter',_sans-serif] text-sm text-emerald-50 mb-4">
              Pour les situations urgentes, contactez-nous directement
            </p>
            <a 
              href="tel:+221786871479"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all font-['Inter',_sans-serif] font-medium"
            >
              <Phone className="w-4 h-4" />
              +221 78 687 14 79
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="relative w-full overflow-hidden" id="contact">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-7xl mx-auto space-y-16">
            <Heading />
            <InfoCards />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}