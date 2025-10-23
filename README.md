# VerdoSmart

VerdoSmart est une plateforme numérique pensée pour moderniser et simplifier l’écosystème agricole en Afrique. Elle réduit la fracture numérique en offrant aux agriculteurs un accès direct, centralisé et fiable aux produits, services et expertises nécessaires pour prospérer.

## Mission
Donner aux agriculteurs les moyens d’accéder facilement à des intrants, des services techniques et des conseils d’experts, dans une interface moderne, accessible et sécurisée.

## Concept principal
Hub tout-en-un qui connecte trois acteurs clés du monde agricole :
- Agriculteurs — s’approvisionnent et améliorent leurs exploitations
- Fournisseurs — vendent des semences, engrais, matériel
- Techniciens/Experts — réalisent des prestations (irrigation, forage, conseil agronomique)

## Proposition de valeur
Contrairement aux plateformes spécialisées, VerdoSmart réunit trois services majeurs au même endroit :
- Marketplace de produits agricoles
- Plateforme de services techniques (installation, forage, serres, énergie solaire…)
- Système de prise de rendez‑vous avec des experts agronomes

## Public cible
- Utilisateurs: agriculteurs, exploitants et entreprises agricoles
- Partenaires: fournisseurs d’intrants/matériel, prestataires techniques, consultants indépendants

## Fonctionnalités clés développées
- Authentification sécurisée (inscription, e‑mail de confirmation), espace utilisateur personnel
- Marketplace: catalogue, fiches produits, panier, suivi de commande
- Services: fiches détaillées, formulaires de demande de devis
- Rendez‑vous: calendriers des experts et réservation en ligne
- Tableaux de bord: suivi des commandes, rendez‑vous et conversations dans `/mon-compte`
- Interface moderne: design épuré, mode sombre, accessibilité renforcée

## Pile technique
- React 18 + Vite
- Tailwind CSS + Radix UI + Lucide
- Supabase (authentification et données)

## Prérequis
- Node.js 18+
- npm

## Installation
```bash
npm i
```

## Démarrer en développement
```bash
npm run dev
```
L’application démarre sur `http://localhost:3000` (ou un port voisin si occupé).

## Configuration Supabase
Créer un fichier `.env.local` à la racine:
```
VITE_SUPABASE_URL=https://<votre-projet>.supabase.co
VITE_SUPABASE_ANON_KEY=<votre-anon-key>
```
Les variables sont lues dans `src/lib/supabaseClient.ts`. Sans ces valeurs, l’app reste fonctionnelle, mais les actions liées à Supabase sont désactivées.

## Scripts
- `npm run dev`: serveur de développement
- `npm run build`: build de production

## Roadmap (extrait)
- Paiement et facturation
- Recherche avancée dans la marketplace
- Gestion des stocks fournisseurs
- Notifications temps réel (commandes, rendez‑vous)

## Licence
Propriété du projet VerdoSmart. Usage interne et partenariats.
