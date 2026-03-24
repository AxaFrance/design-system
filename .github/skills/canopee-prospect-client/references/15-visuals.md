# Visuels : Tag, Icon, Heading, Divider, Card, Toggle

---

## Tag

Label de statut coloré.

### Import

```tsx
import { Tag, tagVariants, type TagVariants } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TagProps = ComponentProps<"div"> & {
  variant?: TagVariants;          // "info" | "success" | "warning" | "error" | "neutral"
                                  // (défaut: "info")
};
```

### Exemple

```tsx
<Tag variant="success">Actif</Tag>
<Tag variant="warning">En attente</Tag>
<Tag variant="error">Résilié</Tag>
<Tag variant="info">Nouveau</Tag>
<Tag variant="neutral">Archivé</Tag>
```

---

## Icon

Icône SVG avec variante de couleur, taille et fond optionnel.

### Import

```tsx
import {
  Icon,
  iconVariants,
  iconSizeVariants,
  type IconVariants,
  type IconSizeVariants,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type IconProps = ComponentProps<typeof Svg> & {
  variant?: IconVariants;         // "primary" | "secondary" | "disabled" | "success" | "error" | "warning"
                                  // (défaut: "primary")
  size?: IconSizeVariants;        // "L" | "M" | "S" | "XS"  (défaut: "S")
  hasBackground?: boolean;        // Cercle de fond (défaut: false)
};
```

### Correspondance tailles

| Code | Rendu CSS |
|---|---|
| `XS` | `extra-small` |
| `S` | `small` (défaut) |
| `M` | `medium` |
| `L` | `large` |

### Exemple

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";

<Icon src={home} />                                    // primaire, small
<Icon src={home} variant="success" size="M" />
<Icon src={home} variant="error" size="L" hasBackground />
<Icon src={home} variant="disabled" />
```

---

## Heading

Titre de page enrichi avec sous-titres, icône et tag.

### Import

```tsx
import {
  Heading,
  type HeadingLevel,
  type HeadingProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type HeadingProps = {
  level?: HeadingLevel;           // 1 | 2 | 3 | 4  (défaut: 1)
  icon?: string;                  // SVG src (optionnel)
  iconProps?: Omit<IconProps, "src">;
  tag?: ReactNode;                // Tag / Badge affiché en haut (niveau 1 et 2 uniquement)
  tagProps?: Omit<TagProps, "children">;  // (défaut: { variant: "neutral" })
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  className?: string;
  children?: ReactNode;           // Texte du titre
} & JSX.IntrinsicElements["div"];
```

### Tailles d'icônes automatiques

| Niveau | Desktop | Mobile |
|---|---|---|
| 1 | `L` | `S` |
| 2 | `M` | `S` |
| 3 | `S` | `S` |
| 4 | `S` | `XS` |

### Exemple

```tsx
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";

// H1 avec icône, sous-titres et tag
<Heading
  level={1}
  icon={bank}
  iconProps={{ variant: "secondary" }}
  tag={<Tag variant="info">Nouveau</Tag>}
  firstSubtitle="Contrat n° 2024-001234"
  secondSubtitle="Depuis le 01/01/2024"
>
  Assurance Habitation
</Heading>

// H2 simple
<Heading level={2}>Vos informations personnelles</Heading>

// H3 sans icône
<Heading level={3} firstSubtitle="Optionnel">
  Adresse de facturation
</Heading>
```

---

## Divider

Séparateur horizontal (`<hr>`).

### Import

```tsx
import { Divider } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type DividerProps = {
  className?: string;
  classModifier?: string;         // pour des modificateurs BEM custom
};
```

### Exemple

```tsx
<Divider />
<Divider classModifier="light" />
```

---

## Card

Conteneur carte polymorphique. Utilisé comme base pour de nombreux composants (`List`, `Fieldset`, etc.).

### Import

```tsx
import { Card, type CardProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type CardProps<T extends ElementType> = PolymorphicComponent<T, ComponentProps<"div">>;
// as?: ElementType  (défaut: "div")
// + tous props HTML de l'élément cible
```

### Exemple

```tsx
// Div classique
<Card className="my-card">
  <p>Contenu</p>
</Card>

// En tant que article
<Card as="article">
  <h2>Titre</h2>
  <p>Description</p>
</Card>

// En tant que fieldset (utilisé par Fieldset)
<Card as="fieldset" className="af-fieldset">
  <legend>Groupe de champs</legend>
</Card>
```

---

## Toggle

Interrupteur on/off accessible (basé sur `<input type="checkbox">`).

### Import

```tsx
import { Toggle } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, "style" | "type">;
// Supporte: checked, defaultChecked, onChange, disabled, id, name, aria-*, …
```

### Exemple

```tsx
const [enabled, setEnabled] = useState(false);

<Toggle
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  aria-label="Activer les notifications"
/>

// Avec label externe
<label htmlFor="notif-toggle">Notifications email</label>
<Toggle
  id="notif-toggle"
  checked={emailNotif}
  onChange={(e) => setEmailNotif(e.target.checked)}
/>

// Désactivé
<Toggle checked={true} disabled aria-label="Option non modifiable" />
```
