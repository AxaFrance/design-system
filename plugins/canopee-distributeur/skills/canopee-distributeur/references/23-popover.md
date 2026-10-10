# Popover

Composant de popover/tooltip positionnable. Supporte deux modes de déclenchement : clic ou survol.

## Import

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `mode` | `"click" \| "hover"` | **Obligatoire** | Déclenchement par clic ou par survol |
| `popoverElement` | `ReactNode` | **Obligatoire** | Contenu affiché dans le popover |
| `children` | `ReactNode` | **Obligatoire** | Contenu du déclencheur |
| `triggerAriaLabel` | `string` | - | Nom accessible du déclencheur (`aria-label`) ; obligatoire si `children` n'a pas de texte (icône seule) |
| `placement` | `Placement` | `"top"` | Position du popover (`"top"`, `"bottom"`, `"left"`, `"right"`, `"top-start"`, …) |
| `className` | `string` | - | Classes CSS additionnelles |

`Placement` provient de `@floating-ui/react`.

Le déclencheur est rendu dans un `<div role="button" tabIndex={0}>` qui entoure `children` : ne pas y
placer un `<button>` (élément interactif imbriqué) ; donner du texte ou un `triggerAriaLabel`. Avec
`triggerAriaLabel`, le contenu ouvert décrit le déclencheur (`aria-describedby`).

## Utilisation

```tsx
import { Popover, Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/rounded/info_i-fill.svg";

// Déclenché au clic
<Popover
  mode="click"
  placement="top"
  popoverElement={<p>Contenu d'aide contextuelle</p>}
>
  <span>Aide</span>
</Popover>

// Déclencheur sans texte : nommé par triggerAriaLabel
<Popover
  mode="click"
  popoverElement={<p>Contenu d'aide contextuelle</p>}
  triggerAriaLabel="Aide sur la franchise"
>
  <Svg src={infoIcon} />
</Popover>

// Déclenché au survol
<Popover
  mode="hover"
  placement="right"
  popoverElement={<span>Informations supplémentaires</span>}
>
  <span>Survolez-moi</span>
</Popover>
```

> **Note :** Pour un bouton d'aide stylé avec icône info, préférer le composant `HelpButton` qui encapsule `Popover`.
