# Button, ClickIcon, Link

## Button

Bouton d'action général avec 7 variantes et support des icônes + état de chargement.

### Import

```tsx
// Prospect
import { Button, buttonVariants, type ButtonVariants } from "@axa-fr/canopee-react/prospect";
// Client
import { Button, buttonVariants, type ButtonVariants } from "@axa-fr/canopee-react/client";
```

### Props

```tsx
type ButtonProps = {
  variant?: ButtonVariants;       // "primary" | "primary-business" | "primary-inverse"
                                  // | "secondary" | "secondary-inverse" | "tertiary" | "ghost"
  iconLeft?: ReactNode;           // icône à gauche du texte
  iconRight?: ReactNode;          // icône à droite du texte
  loading?: boolean;              // affiche un Spinner + désactive le bouton
} & ComponentPropsWithoutRef<"button">;
// Tous les attributs HTML <button> sont transmis (disabled, onClick, type, aria-*, …)
```

### Variantes disponibles

| Variante | Usage |
|---|---|
| `primary` | Action principale |
| `primary-business` | Action principale contexte business |
| `primary-inverse` | Sur fond coloré (fonds bleus) |
| `secondary` | Action secondaire |
| `secondary-inverse` | Secondaire sur fond coloré |
| `tertiary` | Action tertiaire |
| `ghost` | Action discrète, sans fond |

> La variante par défaut est `"primary"`.

### Comportement `disabled` et `loading`

Quand `disabled` OU `loading` est `true` :
- Un `<Spinner size={24} variant="gray" />` s'affiche
- Le `<button>` reçoit l'attribut `disabled`

### Exemples

```tsx
// Basique
<Button onClick={() => {}}>Valider</Button>

// Avec variante
<Button variant="secondary">Annuler</Button>

// Avec icônes
import arrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import { Icon } from "@axa-fr/canopee-react/prospect";

<Button
  variant="primary"
  iconRight={<Icon src={arrowForward} size="S" variant="primary" />}
>
  Continuer
</Button>

// Désactivé
<Button variant="ghost" disabled>Action indisponible</Button>

// État de chargement
<Button loading>Envoi en cours</Button>

// Fond bleu (variante inverse)
<div style={{ background: "blue", padding: "1rem" }}>
  <Button variant="primary-inverse">Action sur fond bleu</Button>
</div>
```

---

## ClickIcon

Bouton icône seul (sans texte visible).

### Import

```tsx
import { ClickIcon } from "@axa-fr/canopee-react/prospect";
// ou
import { ClickIcon } from "@axa-fr/canopee-react/client";
```

### Props

```tsx
type ClickIconProps = ComponentPropsWithRef<"button"> & {
  src: string;                    // chemin SVG de l'icône (required)
  className?: string;
  iconVariant?: IconVariants;     // "primary" | "secondary" | "disabled" | "success" | "error" | "warning"
  iconClassName?: string;
  size?: IconSizeVariants;        // "L" | "M" | "S" | "XS"  (défaut: "S")
  variant?: "default" | "ghost"; // style du bouton (défaut: "default")
};
// Tous les attributs <button> HTML transmis (onClick, disabled, aria-label, …)
```

> Quand `iconVariant === "disabled"`, le bouton reçoit automatiquement `disabled`.

### Exemple

```tsx
import close from "@material-symbols/svg-400/rounded/close.svg";
import edit from "@material-symbols/svg-400/outlined/edit.svg";

<ClickIcon
  src={close}
  aria-label="Fermer"
  onClick={handleClose}
/>

<ClickIcon
  src={edit}
  variant="ghost"
  size="M"
  aria-label="Modifier"
  onClick={handleEdit}
/>
```

---

## Link

Lien stylisé avec support ouverture nouvel onglet, icônes gauche/droite.

### Import

```tsx
import { Link, linkVariants, type LinkVariants, type LinkProps } from "@axa-fr/canopee-react/prospect";
// ou
import { Link, linkVariants, type LinkVariants, type LinkProps } from "@axa-fr/canopee-react/client";
```

### Props

```tsx
type LinkProps = {
  variant?: LinkVariants;         // "inverse" (optionnel — sur fond coloré)
  openInNewTab?: boolean;         // ajoute target="_blank" + icône externe (défaut: false)
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a">;
```

Quand `openInNewTab` est `true`, un SVG « open_in_new » s'affiche automatiquement à droite, et `rel="noopener noreferrer"` est ajouté.

### Exemples

```tsx
<Link href="https://www.axa.fr">Voir le site AXA</Link>

<Link href="https://www.axa.fr" openInNewTab>
  Ouvrir dans un nouvel onglet
</Link>

<Link href="/retour" variant="inverse">
  Retour (sur fond coloré)
</Link>
```
