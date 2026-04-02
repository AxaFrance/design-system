# MainContainer

Wrapper de mise en page pour la zone de contenu principale de la page. Rend un élément `<main>` avec les classes CSS Canopée.

## Import

```tsx
import { MainContainer } from "@axa-fr/canopee-react/distributeur";
```

## Props

Tous les attributs HTML standard du `<main>` sont supportés (`id`, `className`, `aria-label`, …).

> **Note :** Le composant applique automatiquement les classes `af-container` et `af-main-container`. Ne pas surcharger avec d'autres classes de conteneur.

## Utilisation

```tsx
import { HeaderTitle, MainContainer } from "@axa-fr/canopee-react/distributeur";

const App = () => (
  <>
    <HeaderTitle title="Bienvenue" />
    <MainContainer>
      <p>Contenu de la page...</p>
    </MainContainer>
  </>
);

// Avec aria-label pour accessibilité
<MainContainer aria-label="Contenu principal">
  {/* ... */}
</MainContainer>
```
