# Utilisation des icônes en Distributeur

## Objectif
Ce guide décrit la stratégie recommandée pour afficher des icônes dans les composants Canopée Distributeur.

## Recommandation officielle
D’après le `README.md`, la librairie recommandée est :

```bash
npm install @material-symbols/svg-400
```

Toute librairie exportant des SVG Material Symbols, ou vos propres SVG, peut aussi fonctionner.

## Exemple minimal (recommandé)

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

const App = () => <Svg src={home} />;
```

## Utiliser une icône dans un `Button`

```tsx
import check from "@material-symbols/svg-400/outlined/check.svg";
import { Button, Svg } from "@axa-fr/canopee-react/distributeur";

<Button leftIcon={<Svg src={check} />} variant="primary">
  Confirmer
</Button>
```

## Utiliser une icône dans une `Card`

```tsx
import villa from "@material-symbols/svg-400/outlined/villa.svg";
import { Card } from "@axa-fr/canopee-react/distributeur";

<Card iconSrc={villa}>Maison</Card>
```

## Utiliser vos propres SVG

```tsx
import customIcon from "./assets/custom-icon.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

<Svg src={customIcon} />;
```

## Bonnes pratiques
- Favoriser le composant `Svg` pour homogénéiser le rendu.
- Utiliser les variantes `outlined`, `rounded`, etc. de manière cohérente dans un écran.
- Prévoir un texte adjacent explicite si l’icône porte un sens métier.
- Éviter de dépendre uniquement de la couleur d’icône pour transmettre l’état.

## Accessibilité
- Pour les icônes décoratives : masquer aux lecteurs d’écran si nécessaire.
- Pour les icônes porteuses d’information : fournir un label/texte équivalent.
- Vérifier le contraste sur fonds clairs/sombres.

## Références
- `README.md` racine → section « Utilisation des icones »
- Composants liés : `Svg`, `Button`, `Card`, `Message`
