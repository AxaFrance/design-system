# Utilisation des icônes

## Librairie recommandée

Utiliser `@material-symbols/svg-400` (peer dependency) pour les icônes [Google Material Symbols](https://github.com/google/material-design-icons).

```bash
npm install @material-symbols/svg-400
```

N'importe quelle librairie exportant des SVG compatibles Material Symbols fonctionne, ainsi que des SVG personnalisés.

## Composant Svg — wrapper SVG brut

`Svg` est un wrapper minimal qui rend le SVG importé directement dans le DOM (inline), sans conteneur ni fond.

### Import

```tsx
import { Svg } from "@axa-fr/canopee-react/prospect";
// ou
import { Svg } from "@axa-fr/canopee-react/client";
```

### Usage basique

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/canopee-react/prospect";

<Svg src={home} />
```

### Dans un Button

```tsx
import arrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import { Button, Svg } from "@axa-fr/canopee-react/prospect";

<Button variant="primary" iconRight={<Svg src={arrowForward} />}>
  Continuer
</Button>

<Button variant="secondary" iconLeft={<Svg src={arrowForward} />}>
  Retour
</Button>
```

## Composant Icon — icône avec variante et taille

`Icon` enveloppe le SVG dans un conteneur cliquable stylisé avec variante visuelle, taille et fond optionnel.

### Import

```tsx
import { Icon, iconVariants, iconSizeVariants } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type IconProps = {
  src: string;                    // SVG importé
  variant?: IconVariants;         // "primary" | "secondary" | "tertiary" | "ghost"
  size?: IconSizeVariants;        // "S" | "M" | "L"
  hasBackground?: boolean;        // ajoute un fond rond autour de l'icône
  onClick?: () => void;           // rend l'icône interactive (bouton)
  'aria-label'?: string;          // obligatoire si onClick fourni (bouton icône seul)
} & ComponentPropsWithoutRef<"span">;
```

### Variantes disponibles

| Variante | Usage |
|---|---|
| `primary` | Icône principale (bleu) |
| `secondary` | Icône secondaire |
| `tertiary` | Icône discrète |
| `ghost` | Icône sans fond ni couleur |

### Tailles disponibles

| Taille | Valeur CSS |
|---|---|
| `S` | Small |
| `M` | Medium (défaut) |
| `L` | Large |

### Exemples

```tsx
import settings from "@material-symbols/svg-400/outlined/settings.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";

// Icône simple
<Icon src={settings} variant="primary" size="M" />

// Icône avec fond
<Icon src={settings} variant="secondary" size="L" hasBackground />

// Icône cliquable (aria-label obligatoire)
<Icon
  src={deleteIcon}
  variant="ghost"
  size="S"
  onClick={() => handleDelete()}
  aria-label="Supprimer l'élément"
/>
```

## Composant ClickIcon — bouton icône

`ClickIcon` est spécifiquement conçu pour les boutons composés uniquement d'une icône.

### Props

```tsx
type ClickIconProps = {
  src: string;         // SVG importé
  onClick: () => void;
  'aria-label': string;  // OBLIGATOIRE pour l'accessibilité
  disabled?: boolean;
} & ComponentPropsWithoutRef<"button">;
```

### Exemple

```tsx
import close from "@material-symbols/svg-400/outlined/close.svg";
import { ClickIcon } from "@axa-fr/canopee-react/prospect";

<ClickIcon
  src={close}
  aria-label="Fermer"
  onClick={handleClose}
/>
```

## Accessibilité avec les icônes

- **Bouton icône seul** : fournir toujours un `aria-label` explicite
- **Icône décorative** : ajouter `aria-hidden="true"` si l'icône est uniquement décorative et qu'un texte adjacent décrit l'action
- **SVG dans un texte** : si un `<Svg>` est dans un `<Button>` avec du texte, le SVG est décoratif — ne pas mettre d'`aria-label` sur le composant `Svg`

```tsx
// ✅ Bouton avec texte — le SVG est décoratif
<Button iconLeft={<Svg src={home} aria-hidden="true" />}>
  Accueil
</Button>

// ✅ Bouton icône seul — aria-label obligatoire
<ClickIcon src={deleteIcon} aria-label="Supprimer" onClick={handleDelete} />
```
