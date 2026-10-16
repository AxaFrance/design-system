# Utilisation des icônes

## Librairie recommandée

Utiliser `@material-symbols/svg-400` (peer dependency) pour les icônes [Google Material Symbols](https://github.com/google/material-design-icons).

```bash
npm install @material-symbols/svg-400
```

N'importe quelle librairie exportant des SVG compatibles Material Symbols fonctionne, ainsi que des SVG personnalisés.

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
  alt?: string;                   // nom d'une icône porteuse d'information (sinon décorative)
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
- **Icône décorative** : rien à ajouter. Sans `alt`, `aria-label` ni `aria-labelledby`, `Icon` (et `Svg`) pose
  `aria-hidden="true"` et `focusable="false"` : un `aria-hidden` manuel n'est plus nécessaire
- **Icône dans un bouton texte** : si un `<Icon>` est dans un `<Button>` avec du texte, l'icône est décorative et déjà masquée
- **Icône porteuse d'information** (aucun texte voisin ne donne l'information) : passer `alt`, qui devient son nom
  (`role="img"` et `aria-label`)
- Une prop passée explicitement (`aria-hidden`, `aria-label`, `role`…) reste prioritaire sur ces défauts

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";
import checkCircle from "@material-symbols/svg-400/outlined/check_circle.svg";
import { Button, Icon, ClickIcon } from "@axa-fr/canopee-react/prospect";

// ✅ Bouton avec texte — l'icône est décorative, masquée par défaut
<Button iconLeft={<Icon src={home} />}>
  Accueil
</Button>

// ✅ Icône seule porteuse d'information — alt devient son nom
<Icon src={checkCircle} variant="success" alt="Fichier chargé" />

// ✅ Bouton icône seul — aria-label obligatoire
<ClickIcon src={deleteIcon} aria-label="Supprimer" onClick={handleDelete} />
```
