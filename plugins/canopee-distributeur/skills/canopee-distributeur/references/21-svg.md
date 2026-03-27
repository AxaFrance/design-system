# Svg

Composant d'enveloppe SVG qui injecte inline un fichier SVG importé. Utilisé pour afficher les icônes Material Symbols ou tout autre SVG.

## Import

```tsx
import { Svg } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `src` | `string` | **Obligatoire** | Chemin vers le fichier SVG (import statique) |
| `alt` | `string` | - | Texte alternatif affiché si le SVG échoue à charger |
| `width` | `number` | `24` | Largeur en pixels |
| `height` | `number` | `24` | Hauteur en pixels |
| `role` | `string` | `"presentation"` | Rôle ARIA |

Toutes les propriétés SVG standard (`className`, `aria-label`, `aria-hidden`, `style`, …) sont supportées.

## Utilisation

```tsx
import { Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import checkIcon from "@material-symbols/svg-400/outlined/check_circle.svg";

// Icône décorative (default)
<Svg src={infoIcon} />

// Icône avec signification (accessible)
<Svg src={checkIcon} role="img" aria-label="Validé" />

// Taille personnalisée
<Svg src={infoIcon} width={32} height={32} />

// Avec fallback texte en cas d'erreur de chargement
<Svg src={infoIcon} alt="Information" />
```

## Utilisation avec Button

`Svg` est le composant recommandé pour les icônes dans les boutons :

```tsx
import { Button, Svg } from "@axa-fr/canopee-react/distributeur";
import arrowIcon from "@material-symbols/svg-400/outlined/arrow_forward.svg";

<Button rightIcon={<Svg src={arrowIcon} />}>
  Continuer
</Button>
```
