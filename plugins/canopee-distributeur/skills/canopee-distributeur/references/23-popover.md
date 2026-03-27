# Popover

Composant de popover/tooltip positionnable. Supporte deux modes de déclenchement : clic ou survol.

## Import

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `mode` | `"click" \| "over"` | **Obligatoire** | Déclenchement par clic ou par survol |
| `popoverElement` | `ReactNode` | **Obligatoire** | Contenu affiché dans le popover |
| `children` | `ReactNode` | **Obligatoire** | Élément déclencheur |
| `placement` | `Placement` | `"top"` | Position du popover (`"top"`, `"bottom"`, `"left"`, `"right"`, `"top-start"`, …) |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

`Placement` provient de `@floating-ui/react`.

## Utilisation

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";

// Déclenché au clic
<Popover
  mode="click"
  placement="top"
  popoverElement={<p>Contenu d'aide contextuelle</p>}
>
  <button type="button">Aide</button>
</Popover>

// Déclenché au survol
<Popover
  mode="over"
  placement="right"
  popoverElement={<span>Informations supplémentaires</span>}
>
  <span>Survolez-moi</span>
</Popover>
```

> **Note :** Pour un bouton d'aide stylé avec icône "i", préférer le composant `HelpButton` qui encapsule `Popover`.
