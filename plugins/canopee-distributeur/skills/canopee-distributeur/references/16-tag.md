# Tag

## Présentation
Le composant Tag affiche des indicateurs de statut ou des catégories étiquetées avec différentes variantes de couleur.

## Import
```tsx
import { Tag } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | TagVariants | `"default"` | Couleur et style |
| `children` | `ReactNode` | - | Texte/contenu du tag |

## Variantes

```tsx
import { Tag } from "@axa-fr/canopee-react/distributeur";

// Par défaut
<Tag>Défaut</Tag>

// Variantes de statut
<Tag variant="success">Approuvé</Tag>
<Tag variant="warning">En attente</Tag>
<Tag variant="error">Rejeté</Tag>
<Tag variant="information">Info</Tag>

// Variantes de couleur
<Tag variant="dark">Sombre</Tag>
<Tag variant="purple">Violet</Tag>
<Tag variant="gray">Gris</Tag>
<Tag variant="white">Blanc</Tag>
```

## Cas d'utilisation

### Étiquette de statut
```tsx
<Tag variant="success">Actif</Tag>
<Tag variant="error">Inactif</Tag>
```

### Tag de catégorie
```tsx
<Tag variant="purple">Mis en avant</Tag>
<Tag variant="gray">Archive</Tag>
```

### Tags multiples
```tsx
<div style={{ display: "flex", gap: "0.5rem" }}>
  <Tag variant="information">React</Tag>
  <Tag variant="information">JavaScript</Tag>
  <Tag variant="information">Web</Tag>
</div>
```

## Classes CSS
- `.af-tag` - Classe de base du tag
- `.af-tag--success` - Variante succès
- `.af-tag--warning` - Variante avertissement
- `.af-tag--error` - Variante erreur
- `.af-tag--information` - Variante information
- `.af-tag--default` - Variante par défaut
- `.af-tag--dark` - Dark variant
- `.af-tag--purple` - Purple variant
- `.af-tag--gray` - Gray variant
- `.af-tag--white` - White variant
