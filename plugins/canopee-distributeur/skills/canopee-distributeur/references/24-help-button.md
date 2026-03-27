# HelpButton

Bouton d'aide interactif qui affiche un `Popover` avec du contenu explicatif. Le `children` est le **contenu du popover**, pas le label du bouton déclencheur.

## Import

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu affiché dans le popover |
| `helpButtonContent` | `ReactNode` | `<span className="af-more-help">i</span>` | Contenu du bouton déclencheur (remplace le "i" par défaut) |
| `mode` | `"click" \| "over"` | `"click"` | Déclenchement par clic ou au survol |
| `placement` | `Placement` | `"right"` | Position du popover (`"top"`, `"bottom"`, `"left"`, `"right"`, …) |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

## Utilisation

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";

// Bouton "i" par défaut, clic pour afficher
<HelpButton>
  Ce champ doit contenir votre numéro de contrat à 8 chiffres.
</HelpButton>

// Déclenchement au survol, positionnement en haut
<HelpButton mode="over" placement="top">
  Information contextuelle affichée au survol.
</HelpButton>

// Avec contenu personnalisé dans le bouton déclencheur
import { Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";

<HelpButton helpButtonContent={<Svg src={infoIcon} />}>
  Aide avec icône personnalisée
</HelpButton>
```

> **Lien avec Popover :** `HelpButton` est un composant de haut niveau basé sur `Popover`. Utiliser `Popover` directement si un déclencheur personnalisé est nécessaire.
