# EditorialMessage

Composant de message éditorial visuel pour mettre en avant des informations transversales (accessibilité, promotions, éco-conception…). Son affichage est statique — il ne dépend pas d'une action utilisateur.

## Import

```tsx
import { EditorialMessage } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `type` | `"green" \| "information" \| "promotion"` | **Obligatoire** | Style visuel du message |
| `icon` | `string` | **Obligatoire** | Chemin SVG de l'icône (import statique) |
| `title` | `string` | - | Titre du message (`title` ou `children` est requis) |
| `children` | `ReactNode` | - | Contenu du message (`title` ou `children` est requis) |
| `className` | `string` | - | Classes CSS additionnelles |

> Au moins `title` ou `children` doit être fourni.

## Variantes

| Type | Usage recommandé |
|------|-----------------|
| `"green"` | Éco-conception, développement durable |
| `"information"` | Accessibilité, information légale |
| `"promotion"` | Offres commerciales, promotions |

## Utilisation

```tsx
import { EditorialMessage } from "@axa-fr/canopee-react/distributeur";
import ecoIcon from "@material-symbols/svg-400/outlined/eco.svg";
import accessibilityIcon from "@material-symbols/svg-400/outlined/accessibility.svg";
import promoIcon from "@material-symbols/svg-400/outlined/sell.svg";

// Message écologique
<EditorialMessage type="green" icon={ecoIcon} title="Éco-conception">
  Cette fonctionnalité a été conçue pour minimiser son impact environnemental.
</EditorialMessage>

// Message d'information (accessibilité)
<EditorialMessage type="information" icon={accessibilityIcon} title="Accessibilité">
  Ce service est conforme aux normes RGAA 4.1.
</EditorialMessage>

// Promotion — titre seul
<EditorialMessage type="promotion" icon={promoIcon} title="Offre spéciale" />

// Promotion — contenu seul
<EditorialMessage type="promotion" icon={promoIcon}>
  <p>Offre valable jusqu'au <strong>31 décembre 2026</strong>.</p>
</EditorialMessage>
```
