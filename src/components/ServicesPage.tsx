import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import svgPaths from "../imports/svg-rihjlsnlf2";
import { CheckCircle2, Sprout, Cpu, LineChart, Database, Cloud, Smartphone, TrendingUp, Users, Award, ArrowRight, Leaf, BarChart3, Zap, Shield, Droplets, Recycle, Plane, Bot, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white pt-32 pb-24 px-4 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1709888246813-71ff532defb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHNlcnZpY2VzJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3NjExODc5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-green-900/95"></div>
      </div>
      
      {/* Contenu */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Nos Services
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed">
            Des solutions complètes et personnalisées pour transformer votre exploitation agricole en une entreprise moderne, productive et durable
          </p>
        </div>
      </div>
      
      {/* Décoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
    </div>
  );
}

function AgronomyIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d="M9.33333 26.6667H22.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37a4f60} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p13e38e00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p68ee400} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ITIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d="M4 9.33333C4 8.62609 4.28095 7.94781 4.78105 7.44772C5.28115 6.94762 5.95942 6.66667 6.66667 6.66667H25.3333C26.0406 6.66667 26.7189 6.94762 27.219 7.44772C27.719 7.94781 28 8.62609 28 9.33333V20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H6.66667C5.95942 22.6667 5.28115 22.3857 4.78105 21.8856C4.28095 21.3855 4 20.7072 4 20V9.33333Z" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 26.6667H21.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 22.6667V26.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
}

function ServiceCard({ icon, title, description, image, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image de fond */}
      <div className="relative h-72 overflow-hidden flex-shrink-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        {/* Icon badge */}
        <div className="absolute top-6 left-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-['Lora',_serif] font-bold text-2xl text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Features list */}
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="font-['Inter',_sans-serif] text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="#contact"
          className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-['Inter',_sans-serif] font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
        >
          En savoir plus
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${color} mb-4`}>
        {icon}
      </div>
      <div className="font-['Lora',_serif] font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">
        {value}
      </div>
      <div className="font-['Inter',_sans-serif] text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

function AgronomyServicesSection() {
  const agronomyServices = [
    {
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: "Analyse et Diagnostic des Sols",
      description: "Analyse complète de la composition, du pH et de la structure de vos sols pour optimiser votre production agricole.",
      image: "/images/services/Analyse_et_Diagnostic_des_Sols.png",
      features: [
        "Analyse physico-chimique complète",
        "Cartographie détaillée des parcelles",
        "Recommandations personnalisées",
        "Suivi de l'évolution des sols"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Plans de Fertilisation sur Mesures",
      description: "Programmes de fertilisation personnalisés basés sur vos besoins spécifiques et les caractéristiques de vos cultures.",
      image: "/images/services/Plans_de_Fertilisation_sur_Mesure.png",
      features: [
        "Optimisation des apports nutritifs",
        "Réduction des coûts d'intrants",
        "Respect de l'environnement",
        "Calendrier d'application précis"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Accompagnement Terrain Expert",
      description: "Nos agronomes vous accompagnent directement sur vos parcelles avec des visites régulières et un suivi personnalisé.",
      image: "/images/services/Accompagnement_Terrain_Expert.png",
      features: [
        "Visites régulières programmées",
        "Diagnostic des problèmes en temps réel",
        "Ajustements stratégiques rapides",
        "Formation de vos équipes"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Protection Intégrée des Cultures",
      description: "Stratégies de protection respectueuses de l'environnement pour préserver vos cultures des maladies et ravageurs.",
      image: "/images/services/Protection_Intégrée_des_Cultures.png",
      features: [
        "Diagnostic phytosanitaire précis",
        "Solutions biologiques privilégiées",
        "Gestion raisonnée des traitements",
        "Prévention et anticipation"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      title: "Optimisation de l'Irrigation",
      description: "Systèmes d'irrigation intelligents pour maximiser l'efficacité hydrique et réduire le gaspillage d'eau.",
      image: "/images/services/Optimisation_de_l_Irrigation.png",
      features: [
        "Calcul des besoins hydriques",
        "Planification intelligente",
        "Économie d'eau jusqu'à 40%",
        "Pilotage à distance"
      ]
    },
    {
      icon: <Recycle className="w-8 h-8 text-white" />,
      title: "Transition Agroécologique",
      description: "Accompagnement vers des pratiques durables et régénératrices pour une agriculture respectueuse de l'environnement.",
      image: "/images/services/transition_agroécologique.png",
      features: [
        "Agriculture biologique certifiée",
        "Rotation des cultures optimisée",
        "Biodiversité et sols vivants",
        "Certification et étiquetage (pas encore dispo...)"
      ]
    }
  ];

  return (
    <section id="services-agronomiques" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <AgronomyIcon />
            <span className="font-['Inter',_sans-serif] font-semibold text-emerald-700 dark:text-emerald-400">
              Expertise Agronomique
            </span>
          </div>
          <h2 className="font-['Lora',_serif] font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Services Agronomiques
          </h2>
          <p className="font-['Inter',_sans-serif] text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Notre équipe d'agronomes expérimentés vous accompagne à chaque étape pour optimiser vos rendements 
            tout en préservant la santé de vos sols et l'environnement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            value="+30%"
            label="Augmentation des rendements"
            color="from-emerald-500 to-green-600"
          />
          <StatCard
            icon={<BarChart3 className="w-8 h-8 text-white" />}
            value="-20%"
            label="Réduction des coûts"
            color="from-emerald-500 to-green-600"
          />
          <StatCard
            icon={<Award className="w-8 h-8 text-white" />}
            value="5+"
            label="Années d'expérience"
            color="from-emerald-500 to-green-600"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agronomyServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ITServicesSection() {
  const itServices = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Capteurs IoT Intelligents",
      description: "Réseau de capteurs de pointe pour surveiller vos parcelles en temps réel, 24h/24 et 7j/7.",
      image: "/images/services/Capteurs_IoT_Intelligents.png",
      features: [
        "Surveillance de l'humidité du sol",
        "Mesure de température en continu",
        "Alertes automatiques SMS/Email",
        "Données en temps réel sur mobile"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Logiciels de Gestion Avancés",
      description: "Plateformes complètes pour gérer efficacement toutes les opérations de votre exploitation agricole.",
      image: "/images/services/Logiciels_de_Gestion_Avancés.png",
      features: [
        "Gestion des parcelles et cultures",
        "Planification des interventions",
        "Suivi des stocks et intrants",
        "Traçabilité complète"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Analyse de Données Prédictive",
      description: "Tableaux de bord intelligents et analyses avancées pour prendre les meilleures décisions au bon moment.",
      image: "/images/services/Analyse_de_Données_Prédictive.png",
      features: [
        "Tableaux de bord interactifs",
        "Rapports détaillés personnalisés",
        "Prévisions météo intégrées",
        "Analyses de performance"
      ]
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: "Drones & Imagerie Aérienne",
      description: "Surveillance par drones pour cartographier vos parcelles et détecter précocement les problèmes de culture.",
      image: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjExNDY5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Cartographie haute résolution",
        "Détection précoce des stress",
        "Calcul de biomasse et NDVI",
        "Rapports d'analyse détaillés"
      ]
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "Automatisation & Robotique",
      description: "Solutions robotisées pour automatiser les tâches répétitives et améliorer la productivité de votre exploitation.",
      image: "https://images.unsplash.com/photo-1630267693768-824c7b5aaa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYXV0b21hdGlvbiUyMHJvYm90c3xlbnwxfHx8fDE3NjEyMTM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Robots de désherbage autonomes",
        "Systèmes d'irrigation automatisés",
        "Monitoring automatique 24/7",
        "Intégration avec vos systèmes"
      ]
    },

  ];

  return (
    <section id="solutions-informatiques" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <ITIcon />
            <span className="font-['Inter',_sans-serif] font-semibold text-emerald-700 dark:text-emerald-400">
              Innovation Technologique
            </span>
          </div>
          <h2 className="font-['Lora',_serif] font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Solutions Informatiques
          </h2>
          <p className="font-['Inter',_sans-serif] text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transformez votre exploitation avec nos technologies de pointe. De la collecte de données à l'analyse prédictive, 
            prenez des décisions éclairées basées sur des données précises.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={<Zap className="w-8 h-8 text-white" />}
            value="24/7"
            label="Surveillance en temps réel"
            color="from-emerald-500 to-green-600"
          />
          <StatCard
            icon={<Database className="w-8 h-8 text-white" />}
            value="-25%"
            label="Économie d'eau"
            color="from-emerald-500 to-green-600"
          />
          <StatCard
            icon={<Leaf className="w-8 h-8 text-white" />}
            value="100%"
            label="Traçabilité garantie"
            color="from-emerald-500 to-green-600"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background avec image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1604330025923-b99efb59d767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmaWVsZCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzYxMTg5MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/95 to-green-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <Award className="w-5 h-5 text-emerald-300" />
          <span className="font-['Inter',_sans-serif] font-semibold text-emerald-100">
            Consultation Gratuite Offerte
          </span>
        </div>

        <h2 className="font-['Lora',_serif] font-bold text-4xl md:text-5xl text-white mb-6">
          Prêt à transformer votre exploitation ?
        </h2>
        <p className="font-['Inter',_sans-serif] text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed">
          Contactez-nous dès aujourd'hui et découvrez comment nos services peuvent augmenter 
          votre productivité et votre rentabilité de manière durable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-['Inter',_sans-serif] font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+221786871479"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 border-2 border-emerald-500 text-white font-['Inter',_sans-serif] font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300"
          >
            <Smartphone className="w-5 h-5" />
            +221 78 687 14 79
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    // Scroll to section if hash is present
    const fullHash = window.location.hash;
    
    // Handle double hash format: #services#section-name
    if (fullHash.includes('#services#')) {
      const sectionId = fullHash.split('#services#')[1];
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AgronomyServicesSection />
        <ITServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
