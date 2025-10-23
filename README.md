
# Recode Design Faithfully

This is a code bundle for Recode Design Faithfully. The original project is available at https://www.figma.com/design/K5bKAuCtCdHHojBcGOTIeE/Recode-Design-Faithfully.

## Prérequis

- Node.js 18+
- npm

## Installation

```bash
npm i
```

## Démarrer le serveur de développement

```bash
npm run dev
```

## Configuration Supabase

Le projet utilise Supabase pour l’authentification et les données.

1. Créez un fichier `.env.local` à la racine avec vos identifiants:

```
VITE_SUPABASE_URL=https://<votre-projet>.supabase.co
VITE_SUPABASE_ANON_KEY=<votre-anon-key>
```

2. Les variables sont lues par Vite dans `src/lib/supabaseClient.ts`. Si elles sont absentes, l’app reste fonctionnelle mais les actions liées à Supabase sont désactivées.

3. Un helper de test est disponible:

```ts
import { testSupabaseConnection } from './src/lib/supabaseClient';

(async () => {
  const res = await testSupabaseConnection();
  console.log(res);
})();
```

## Sécurité

- Ne commitez jamais `.env.local`. Le fichier `.gitignore` le protège.
- Les clés « anon » peuvent être utilisées côté client, mais ne partagez pas de clés « service_role ».

## Build

```bash
npm run build
```
