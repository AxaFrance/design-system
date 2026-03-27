# Divider (Séparateur)

Ligne de séparation visuelle horizontale ou verticale.

## Import

```tsx
import { Divider } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `mode` | `"horizontal" \| "vertical"` | `"horizontal"` | Orientation du séparateur |
| `className` | `string` | - | Classes CSS additionnelles |

Tous les attributs HTML standard du `<hr>` sont supportés.

## Utilisation

```tsx
// Séparateur horizontal (par défaut)
<Divider />

// Séparateur vertical (dans un layout flex)
<div style={{ display: "flex", height: "2rem" }}>
  <span>Gauche</span>
  <Divider mode="vertical" />
  <span>Droite</span>
</div>

// Avec classe personnalisée
<Divider className="mon-separateur" />
```
