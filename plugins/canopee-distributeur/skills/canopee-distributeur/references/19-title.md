# Title (Titre)

Composant de titre stylé avec support d'éléments latéraux gauche et droit.

## Import

```tsx
import { Title } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `heading` | `"h2" \| "h3" \| "h4"` | `"h2"` | Balise HTML de titre rendue |
| `contentLeft` | `ReactElement` | - | Élément affiché à gauche, dans la balise de titre |
| `contentRight` | `ReactNode` | - | Élément affiché à droite, hors de la balise de titre |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

Tous les attributs HTML standard du `<h2>` (ou du heading choisi) sont supportés.

> **Note :** Le composant ne supporte pas `h1`. Pour les titres de page, utiliser directement la balise HTML `<h1>`.

## Utilisation

```tsx
import { Title } from "@axa-fr/canopee-react/distributeur";

// Titre h2 par défaut
<Title>Tableau de bord</Title>

// Niveaux de titre
<Title heading="h3">Section principale</Title>
<Title heading="h4">Sous-section</Title>

// Avec un bouton à droite
<Title heading="h2" contentRight={<Button small>Modifier</Button>}>
  Mes informations
</Title>

// Avec une icône à gauche (dans le titre)
import checkIcon from "@material-symbols/svg-400/outlined/check_circle.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

<Title contentLeft={<Svg src={checkIcon} />}>
  Dossier validé
</Title>
```
