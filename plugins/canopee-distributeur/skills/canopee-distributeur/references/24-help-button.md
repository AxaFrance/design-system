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
| `helpButtonContent` | `ReactNode` | icône info (`info_i-fill`, décorative) | Contenu du bouton déclencheur (remplace l'icône par défaut) |
| `triggerAriaLabel` | `string` | `"Aide"` avec l'icône par défaut | Nom accessible du déclencheur ; sans lui, un `helpButtonContent` personnalisé donne le nom par son texte |
| `mode` | `"click" \| "hover"` | `"click"` | Déclenchement par clic ou au survol |
| `placement` | `Placement` | `"right"` | Position du popover (`"top"`, `"bottom"`, `"left"`, `"right"`, …) |
| `variant` | `"default" \| "inverse"` | `"default"` | Bouton bleu, ou blanc pour un fond sombre |
| `className` | `string` | - | Classes CSS additionnelles |

## Accessibilité

Le déclencheur est un `role="button"` atteignable au clavier (Entrée ouvre le popover en mode `click`).
Avec l'icône par défaut, il est nommé « Aide » ; préciser le sujet avec `triggerAriaLabel` quand plusieurs
aides se côtoient. Un `helpButtonContent` sans texte (icône seule) demande un `triggerAriaLabel`.
Une fois ouvert, le texte d'aide décrit le déclencheur (`aria-describedby`) : le lecteur d'écran le lit
après le nom.

## Utilisation

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";

// Icône info par défaut (nommée « Aide »), clic pour afficher
<HelpButton>
  Ce champ doit contenir votre numéro de contrat à 8 chiffres.
</HelpButton>

// Déclenchement au survol, positionnement en haut
<HelpButton mode="hover" placement="top">
  Information contextuelle affichée au survol.
</HelpButton>

// Nom accessible précisé
<HelpButton triggerAriaLabel="Aide sur le numéro de contrat">
  Le numéro figure en haut de votre avis d'échéance.
</HelpButton>

// Avec contenu personnalisé dans le bouton déclencheur
import { Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";

<HelpButton
  helpButtonContent={<Svg src={infoIcon} />}
  triggerAriaLabel="Aide"
>
  Aide avec icône personnalisée
</HelpButton>
```

> **Lien avec Popover :** `HelpButton` est un composant de haut niveau basé sur `Popover`. Utiliser `Popover` directement si un déclencheur personnalisé est nécessaire.
