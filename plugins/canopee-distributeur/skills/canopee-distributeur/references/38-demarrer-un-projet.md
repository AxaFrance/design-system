# Démarrer un projet avec Canopée Distributeur

## Objectif
Ce guide explique comment démarrer rapidement un projet utilisant l’univers **Distributeur** de Canopée.

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
import {
  Button,
  HeaderTitle,
  MainContainer,
  TextInput,
} from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");

  return (
    <>
      <HeaderTitle title="Mon projet Distributeur" />
      <MainContainer>
        <form className="af-form">
          <TextInput
            id="name"
            name="name"
            label="Nom"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button variant="primary">Valider</Button>
        </form>
      </MainContainer>
    </>
  );
};
```

## 5) Vérifications recommandées
- Vérifier l’import `@axa-fr/canopee-react/distributeur`.
- Vérifier la présence des tokens CSS (`tokens.css`) si personnalisation visuelle.
- Vérifier que les icônes SVG sont bien résolues (cf. documentation icônes).
- Vérifier l’accessibilité clavier des composants utilisés.

## Références
- `README.md` racine → section « Démarrer le projet »
- `README.md` racine → sections « Packages » et « Univers Collab-Distrib »
