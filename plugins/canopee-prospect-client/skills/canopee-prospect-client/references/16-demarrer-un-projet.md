# Démarrer un projet avec Canopée Prospect / Client

## Installation

```bash
npm install @axa-fr/canopee-react@latest @axa-fr/canopee-css@latest
# Peer dependency recommandée pour les icônes
npm install @material-symbols/svg-400
```

Pour une version préproduction :

```bash
npm install @axa-fr/canopee-react@next @axa-fr/canopee-css@next
```

## Imports dans l'application

Importer **une seule fois** l'entrée thématique à la racine de l'application (ex : `main.tsx` / `App.tsx`). Cet import inclut automatiquement les CSS reboot, les tokens et la grille.

### Thème Prospect (ex-Apollo)

```tsx
import "@axa-fr/canopee-react/prospect";
// Importe automatiquement :
//   @axa-fr/canopee-css/prospect/common/reboot.css
//   @axa-fr/canopee-css/prospect/common/tokens.css
//   @axa-fr/canopee-css/prospect/Grid/Grid.css
//   @fontsource/source-sans-pro
```

### Thème Client (ex-Look & Feel)

```tsx
import "@axa-fr/canopee-react/client";
// Importe automatiquement :
//   @axa-fr/canopee-css/client/common/rebootLF.css
//   @axa-fr/canopee-css/client/common/tokens.css
//   @axa-fr/canopee-css/client/Grid/Grid.css
//   @fontsource/source-sans-pro
```

Puis importer les composants depuis le thème choisi :

```tsx
import { Button, InputText, Modal } from "@axa-fr/canopee-react/prospect";
// ou
import { Button, InputText, Modal } from "@axa-fr/canopee-react/client";
```

## Application minimale (Prospect)

```tsx
// main.tsx
import "@axa-fr/canopee-react/prospect";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

```tsx
// App.tsx
import { Button, InputText } from "@axa-fr/canopee-react/prospect";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <main>
      <InputText
        id="field"
        name="field"
        label="Votre nom"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => alert(`Bonjour ${value}`)}>Valider</Button>
    </main>
  );
}
```

## Utilisation avec CSS uniquement (sans React)

Il est possible de n'importer que les styles CSS d'un composant spécifique :

```css
/* Prospect */
@import "@axa-fr/canopee-css/prospect/Button/buttonApollo.css";

/* Client */
@import "@axa-fr/canopee-css/client/Button/buttonLF.css";
```

## Typescript

Les types sont tous exportés depuis les entrées thématiques :

```tsx
import type { ButtonVariants, GridContainerProps, CardMessageVariants } from "@axa-fr/canopee-react/prospect";
```
