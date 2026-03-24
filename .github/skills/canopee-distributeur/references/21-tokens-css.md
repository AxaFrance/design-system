# Utilisation des tokens CSS (variables) — Distributeur

## Objectif
Expliquer comment importer et exploiter les variables CSS Canopée pour l’univers Distributeur.

## Import des tokens Distributeur

D’après le `README.md`, il faut importer :

```ts
import "@axa-fr/canopee-css/distributeur/common/tokens.css";
```

## Où faire l’import ?
- Dans le point d’entrée applicatif (`main.tsx`, `index.tsx`) pour un usage global.
- Ou dans une feuille CSS globale chargée au démarrage.

Exemple :

```tsx
import "@axa-fr/canopee-css/distributeur/common/tokens.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(<App />);
```

## Usage des variables dans votre CSS

```css
.my-panel {
  color: var(--af-color-text-primary, #000);
  background: var(--af-color-background, #fff);
}
```

> Utilisez de préférence les classes des composants Canopée ; les variables servent surtout pour l’intégration applicative (layout global, zones custom, surcouches).

## Différence avec les autres univers
- Client : `@axa-fr/canopee-css/client/common/tokens.css`
- Prospect : `@axa-fr/canopee-css/prospect/common/tokens.css`
- Distributeur : `@axa-fr/canopee-css/distributeur/common/tokens.css`

Dans ce skill, seule la variante **Distributeur** doit être utilisée.

## Bonnes pratiques
- Importer un seul univers de tokens par application.
- Éviter de surcharger directement les classes internes Canopée sans nécessité.
- Préférer une couche applicative (`.app-shell`, `.custom-page`) pour vos personnalisations.
- Valider le rendu en mode clair/sombre si votre projet applique des thèmes.

## Références
- `README.md` racine → section « Utilisation des CSS variables »
- Dossier tokens : `/packages/canopee-css/src/distributeur/common/tokens`
