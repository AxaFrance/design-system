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
| `alt` | `string` | - | Nom de l'icône porteuse d'information (`role="img"` et `aria-label`) ; aussi affiché en texte si le SVG échoue à charger |
| `width` | `number` | `24` | Largeur en pixels |
| `height` | `number` | `24` | Hauteur en pixels |
| `role` | `string` | `"presentation"` | Rôle ARIA (`"img"` quand `alt` est renseigné) |

Toutes les propriétés SVG standard (`className`, `aria-label`, `aria-hidden`, `style`, …) sont supportées.

## Accessibilité

- **Sans `alt`, `aria-label` ni `aria-labelledby`** : l'icône est décorative. `Svg` pose
  `role="presentation"`, `aria-hidden="true"` et `focusable="false"` : les lecteurs d'écran l'ignorent,
  rien à ajouter.
- **Avec un `alt` non vide** : l'icône porte une information. `Svg` pose `role="img"` et `aria-label={alt}`.
- Une prop passée explicitement (`role`, `aria-hidden`, `aria-label`…) reste prioritaire sur ces défauts.

## Utilisation

```tsx
import { Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import checkIcon from "@material-symbols/svg-400/outlined/check_circle.svg";

// Icône décorative (défaut) : masquée aux lecteurs d'écran
<Svg src={infoIcon} />

// Icône porteuse d'information : alt devient son nom (et le texte de secours si le SVG échoue)
<Svg src={checkIcon} alt="Validé" />

// Taille personnalisée
<Svg src={infoIcon} width={32} height={32} />
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
