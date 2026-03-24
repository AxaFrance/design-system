# Listes : List, ClickItem, ContentItemDuo, ContentItemDuoAction

---

## List

Conteneur de liste (`<ul>` ou `<ol>`) stylisé, polymorphique.

### Import

```tsx
import { List, type ListProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ListProps = PolymorphicComponent<
  "ul" | "ol",
  ComponentProps<"div">
>;
// as?: "ul" | "ol"  (défaut: "ul")
// className?, children?, …
```

Chaque enfant direct est automatiquement enveloppé dans un `<li>`.

### Exemple

```tsx
<List>
  <ClickItem title="Contrat Auto" state="default" variant="large" />
  <ClickItem title="Contrat Habitation" state="default" variant="large" />
</List>

<List as="ol" className="my-custom-list">
  <div>Item 1</div>
  <div>Item 2</div>
</List>
```

---

## ClickItem

Item de liste cliquable avec icône, titre, sous-titre, tag, image et actions d'état.

### Import

```tsx
import {
  ClickItem,
  clickItemVariants,
  clickItemStates,
  type ClickItemVariants,
  type ClickItemStates,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ClickItemProps = {
  // Identification
  state: ClickItemStates;          // "default" | "disabled" | "loading"
  variant: ClickItemVariants;      // "small" | "medium" | "large" | "agent"
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  ariaLabelForActionIcon?: string; // aria-label de l'icône d'action (obligatoire si onClick)

  // Contenu texte (ClickItemContent)
  title: ReactNode;
  subtitle?: ReactNode;
  textSecondary?: ReactNode;
  textTertiary?: ReactNode;
  tagLabel?: ReactNode;
  tagProps?: Partial<TagProps>;

  // Préfixe visuel (ClickItemPrefix)
  icon?: string;                   // SVG src
  basePictureProps?: { src: string; alt: string } & ComponentProps<"img">;
};
```

### Variantes de taille

| Variante | Affichage |
|---|---|
| `small` | Compact, icône petite |
| `medium` | Taille intermédiaire |
| `large` | Complet : titre + sous-titre + tag + texte secondaire/tertiaire |
| `agent` | Format agent (avec image carrée) |

### États

| État | Comportement |
|---|---|
| `default` | Normal |
| `disabled` | Désactivé visuellement et via `disabled` |
| `loading` | Affiche un indicateur de chargement |

### Exemple

```tsx
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

// Item cliquable
<ClickItem
  state="default"
  variant="large"
  icon={accountBalance}
  title="Assurance Auto"
  subtitle="Volkswagen Golf - AB-123-CD"
  textSecondary="Échéance : 01/03/2025"
  textTertiary="Mensualité : 45€"
  tagLabel="Actif"
  tagProps={{ variant: "success" }}
  ariaLabelForActionIcon="Voir le détail du contrat Auto"
  onClick={() => navigate("/contrat/auto")}
/>

// Item désactivé
<ClickItem
  state="disabled"
  variant="medium"
  title="Contrat en attente"
  subtitle="En cours de souscription"
/>

// Avec image
<ClickItem
  state="default"
  variant="agent"
  basePictureProps={{ src: "/photo-agent.jpg", alt: "Jean Martin" }}
  title="Jean Martin"
  subtitle="Votre conseiller"
  textSecondary="Agence Paris 15"
  onClick={() => openAgentModal()}
  ariaLabelForActionIcon="Contacter Jean Martin"
/>
```

---

## ContentItemDuo

Affiche une paire label / valeur avec bouton d'action optionnel. Utilisé pour la restitution de données.

### Import

```tsx
import { ContentItemDuo } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ContentItemDuoProps = {
  label: ReactNode;
  value: ReactNode;
  buttonText?: string;            // Texte du bouton modifier (si omit, pas de bouton)
  onButtonClick?: () => void;
  /** @deprecated Use position instead */ isVertical?: boolean;
  position?: "horizontal" | "vertical";  // (défaut: "horizontal")
  size?: "small" | "large";             // (défaut: "large")
  /** @deprecated Use size or className */ classModifier?: string;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
} & ComponentProps<"div">;
```

### Exemple

```tsx
<ContentItemDuo
  label="Nom complet"
  value="Jean Dupont"
  buttonText="Modifier"
  onButtonClick={() => startEdit()}
/>

<ContentItemDuo
  label="Adresse"
  value="15 rue de la Paix, 75001 Paris"
  position="vertical"
  size="small"
/>

<ContentItemDuo
  label="Numéro de contrat"
  value="123456789"
  message="Ce contrat expire bientôt"
  messageType="warning"
/>
```

---

## ContentItemDuoAction

Combine un `ContentItemMono` avec une action (Toggle ou boutons).

### Import

```tsx
import {
  ContentItemDuoAction,
  type ContentItemDuoActionState,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props (2 modes)

**Mode Toggle** :
```tsx
{
  state: "toggle";
  contentItemProps: ContentItemProps;  // Props ContentItemMono
  toggleProps?: ToggleProps;
}
```

**Mode Boutons** :
```tsx
{
  state: "edit";
  contentItemProps: ContentItemProps;
  buttons: ReactElement<ComponentType<ButtonProps>>;  // JSX de boutons
}
```

### Exemple

```tsx
// Mode toggle
<ContentItemDuoAction
  state="toggle"
  contentItemProps={{
    type: "icon",
    title: "Notifications email",
    subtitle1: "Recevoir les alertes par email",
    iconProps: { src: emailIcon },
  }}
  toggleProps={{
    checked: emailNotif,
    onChange: (e) => setEmailNotif(e.target.checked),
    "aria-label": "Activer les notifications email",
  }}
/>

// Mode boutons
<ContentItemDuoAction
  state="edit"
  contentItemProps={{
    type: "icon",
    title: "Adresse email",
    subtitle1: "jean@exemple.fr",
    iconProps: { src: emailIcon },
  }}
  buttons={
    <Button variant="tertiary" onClick={() => openEditEmail()}>
      Modifier
    </Button>
  }
/>
```
