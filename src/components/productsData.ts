export interface ProductData {
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
  description?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
}

export const productsData: ProductData[] = [
  {
    id: 1,
    name: "Semences de Maïs Hybride Premium - Résistant à la Sécheresse",
    category: "Semences",
    price: "25 000 FCFA",
    rating: 4.8,
    reviews: 124,
    location: "Dakar, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
    vendor: "AgriSem Sénégal",
    description: "Semences de maïs hybride de haute qualité, spécialement sélectionnées pour leur résistance exceptionnelle à la sécheresse et leur rendement élevé. Idéales pour les conditions climatiques du Sahel, ces semences garantissent une production optimale même en période de faible pluviométrie.",
    features: [
      "Résistance exceptionnelle à la sécheresse",
      "Rendement jusqu'à 8 tonnes/hectare",
      "Cycle de production de 90-100 jours",
      "Certification CORAF/WECARD",
      "Taux de germination > 95%",
      "Adaptées aux sols sablonneux et argileux"
    ],
    specifications: [
      { label: "Variété", value: "Hybride F1" },
      { label: "Poids", value: "25 kg" },
      { label: "Durée de conservation", value: "12 mois" },
      { label: "Origine", value: "Sénégal" },
      { label: "Certification", value: "Bio certifié" }
    ]
  },
  {
    id: 2,
    name: "Engrais NPK 15-15-15 Sac 50kg - Formule Équilibrée",
    category: "Intrants",
    price: "18 500 FCFA",
    rating: 4.6,
    reviews: 89,
    location: "Thiès, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    vendor: "FertiPlus",
    description: "Engrais minéral complet NPK avec une formulation équilibrée 15-15-15, parfait pour tous types de cultures. Favorise une croissance vigoureuse, améliore le rendement et renforce la résistance des plantes aux maladies.",
    features: [
      "Formule équilibrée pour tous types de cultures",
      "Action rapide et durable",
      "Améliore la structure du sol",
      "Augmente le rendement de 30-40%",
      "Compatible avec l'agriculture biologique",
      "Soluble et facile à épandre"
    ],
    specifications: [
      { label: "Composition", value: "NPK 15-15-15" },
      { label: "Poids", value: "50 kg" },
      { label: "Type", value: "Engrais granulé" },
      { label: "Dosage recommandé", value: "200-300 kg/ha" },
      { label: "Certification", value: "Normes UEMOA" }
    ]
  },
  {
    id: 3,
    name: "Capteur d'Humidité du Sol IoT avec Alerte SMS",
    category: "Capteurs IoT",
    price: "45 000 FCFA",
    rating: 4.9,
    reviews: 67,
    location: "Dakar, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    vendor: "VerdoSmart Tech",
    description: "Capteur intelligent de surveillance de l'humidité du sol avec connexion IoT et système d'alerte en temps réel. Optimisez votre irrigation et économisez jusqu'à 40% d'eau grâce à des données précises et fiables.",
    features: [
      "Mesure en temps réel 24/7",
      "Alertes SMS et email automatiques",
      "Application mobile dédiée",
      "Autonomie batterie 12 mois",
      "Résistant aux intempéries (IP67)",
      "Installation facile sans câblage"
    ],
    specifications: [
      { label: "Type de capteur", value: "Capacitif" },
      { label: "Profondeur mesure", value: "0-30 cm" },
      { label: "Précision", value: "±2%" },
      { label: "Connectivité", value: "LoRaWAN / 4G" },
      { label: "Garantie", value: "2 ans" }
    ]
  },
  {
    id: 4,
    name: "Semences de Riz NERICA - Haute Productivité",
    category: "Semences",
    price: "32 000 FCFA",
    rating: 4.7,
    reviews: 103,
    location: "Saint-Louis, Sénégal",
    inStock: false,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    vendor: "RiceSem Africa",
    description: "Semences de riz NERICA (New Rice for Africa), spécialement développées pour les conditions africaines. Combinant les meilleures caractéristiques du riz africain et asiatique pour une productivité exceptionnelle.",
    features: [
      "Rendement élevé jusqu'à 6 tonnes/ha",
      "Résistance aux maladies",
      "Cycle court de 90-100 jours",
      "Faibles besoins en eau",
      "Grains de qualité premium",
      "Adaptée à différents types de sols"
    ],
    specifications: [
      { label: "Variété", value: "NERICA L-19" },
      { label: "Poids", value: "50 kg" },
      { label: "Type de culture", value: "Pluviale/Irriguée" },
      { label: "Origine", value: "AfricaRice" },
      { label: "Certification", value: "Certifiée WARDA" }
    ]
  },
  {
    id: 5,
    name: "Pesticide Bio Naturel 5L - Protection Complète",
    category: "Intrants",
    price: "15 750 FCFA",
    rating: 4.5,
    reviews: 76,
    location: "Kaolack, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=400&h=300&fit=crop",
    vendor: "BioProtect",
    description: "Pesticide biologique à base d'extraits naturels de plantes, offrant une protection efficace contre les ravageurs tout en respectant l'environnement et la santé des cultures.",
    features: [
      "100% naturel et biodégradable",
      "Action préventive et curative",
      "Sans résidus toxiques",
      "Compatible agriculture bio",
      "Large spectre d'action",
      "Utilisable jusqu'à la récolte"
    ],
    specifications: [
      { label: "Composition", value: "Extraits végétaux" },
      { label: "Volume", value: "5 litres" },
      { label: "Dilution", value: "1:100" },
      { label: "Application", value: "Pulvérisation" },
      { label: "Certification", value: "Ecocert" }
    ]
  },
  {
    id: 6,
    name: "Station Météo Connectée - Prévisions Locales",
    category: "Capteurs IoT",
    price: "85 000 FCFA",
    rating: 4.9,
    reviews: 45,
    location: "Dakar, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
    vendor: "VerdoSmart Tech",
    description: "Station météorologique professionnelle connectée fournissant des données précises sur les conditions climatiques locales. Planifiez vos travaux agricoles avec précision grâce à des prévisions fiables.",
    features: [
      "Mesures multiples (T°, humidité, vent, pluie)",
      "Prévisions locales précises",
      "Historique des données",
      "Alertes météo personnalisées",
      "Interface web et mobile",
      "Panneaux solaires intégrés"
    ],
    specifications: [
      { label: "Capteurs", value: "7 capteurs" },
      { label: "Portée", value: "100m" },
      { label: "Alimentation", value: "Solaire + batterie" },
      { label: "Connectivité", value: "WiFi / 4G" },
      { label: "Garantie", value: "3 ans" }
    ]
  },
  {
    id: 7,
    name: "Semences d'Arachide Sélectionnées - Variété 73-33",
    category: "Semences",
    price: "22 500 FCFA",
    rating: 4.6,
    reviews: 92,
    location: "Louga, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400&h=300&fit=crop",
    vendor: "SeedTech Sénégal",
    description: "Semences d'arachide de la variété 73-33, reconnue pour son rendement exceptionnel et sa qualité. Parfaitement adaptée aux conditions du Sénégal avec une excellente résistance.",
    features: [
      "Variété à haut rendement",
      "Résistance aux maladies foliaires",
      "Teneur élevée en huile",
      "Cycle de 90-110 jours",
      "Graines uniformes",
      "Certification ISRA"
    ],
    specifications: [
      { label: "Variété", value: "73-33" },
      { label: "Poids", value: "25 kg" },
      { label: "Rendement moyen", value: "2-3 tonnes/ha" },
      { label: "Type", value: "Arachide de bouche" },
      { label: "Origine", value: "ISRA Sénégal" }
    ]
  },
  {
    id: 8,
    name: "Engrais Organique Compost 50kg - 100% Naturel",
    category: "Intrants",
    price: "12 000 FCFA",
    rating: 4.8,
    reviews: 134,
    location: "Thiès, Sénégal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    vendor: "EcoFertil",
    description: "Compost organique 100% naturel enrichi en nutriments essentiels. Améliore la structure du sol, favorise la vie microbienne et augmente la rétention d'eau naturellement.",
    features: [
      "100% matières organiques",
      "Enrichi en microorganismes",
      "Améliore la fertilité du sol",
      "Action à long terme",
      "Sans produits chimiques",
      "Idéal pour agriculture bio"
    ],
    specifications: [
      { label: "Type", value: "Compost mûr" },
      { label: "Poids", value: "50 kg" },
      { label: "Matière organique", value: "> 30%" },
      { label: "pH", value: "6.5-7.5" },
      { label: "Certification", value: "Bio Ecocert" }
    ]
  }
];
