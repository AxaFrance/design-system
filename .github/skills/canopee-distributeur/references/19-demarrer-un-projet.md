# Démarrer un projet avec Canopée Distributeur

## Objectif
Ce guide explique comment démarrer rapidement un projet utilisant l’univers **Distributeur** de Canopée, et comment lancer le monorepo Design System en local pour contribuer.

## 1) Installer les packages Canopée

### Installation stable (`latest`)
```bash
npm install @axa-fr/canopee-react@latest @axa-fr/canopee-css@latest
```

### Installation de préversion (`next`)
```bash
npm install @axa-fr/canopee-react@next @axa-fr/canopee-css@next
```

## 2) Importer les composants React Distributeur

```tsx
import { Button, TextInput, Modal } from "@axa-fr/canopee-react/distributeur";
```

## 3) Importer les styles CSS nécessaires

### Option A — CSS géré automatiquement par les composants React
Dans la majorité des cas, les composants React importent leurs styles.

### Option B — Mode CSS-only
Si vous utilisez seulement la couche CSS :
```css
@import "@axa-fr/canopee-css/distributeur/button.css";
```

## 4) Exemple minimal d’application

```tsx
import "@axa-fr/canopee-css/distributeur/common/tokens.css";
import { Button, TextInput } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");

  return (
    <main className="af-container">
      <h1>Mon projet Distributeur</h1>
      <TextInput
        id="name"
        name="name"
        label="Nom"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button variant="primary">Valider</Button>
    </main>
  );
};
```

## 5) Lancer le monorepo Design System en local (contribution)

Ces commandes viennent du `README.md` racine du monorepo :

```bash
npm run dev
```
Démarre l’ensemble du projet (build CSS + storybooks).

```bash
npm run dev:distributeur
```
Démarre uniquement la partie Distributeur.

```bash
npm run build
```
Génère le build global.

```bash
npm run build:distributeur
```
Génère le build Distributeur.

## 6) Vérifications recommandées
- Vérifier l’import `@axa-fr/canopee-react/distributeur`.
- Vérifier la présence des tokens CSS (`tokens.css`) si personnalisation visuelle.
- Vérifier que les icônes SVG sont bien résolues (cf. documentation icônes).
- Vérifier l’accessibilité clavier des composants utilisés.

## Références
- `README.md` racine → section « Démarrer le projet »
- `README.md` racine → sections « Packages » et « Univers Collab-Distrib »
