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
  state?: ClickItemStates;         // "default" | "disabled" | "loading" (défaut : "default")
  variant?: ClickItemVariants;     // "small" | "medium" | "large" | "agent" (défaut : "large")
  className?: string;

  // Action : href → lien <a>, sinon onClick → <button>, sinon simple affichage (<div>)
  href?: string;                   // navigation : rend un lien
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: MouseEventHandler<HTMLElement>; // action sur la page ; appelé aussi avec href
  ariaLabelForActionIcon?: string; // description de l'action, lue après le titre

  // Contenu texte (ClickItemContent)
  title: string;                   // nom accessible de l'item
  subtitle?: string;
  textSecondary?: string;
  textTertiary?: string;
  tagLabel?: string;
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
| `disabled` | Désactivé visuellement et via `disabled` ; en lien : sans `href`, avec `aria-disabled="true"` et `tabIndex={-1}` (le focus reste sur l'item) |
| `loading` | Affiche un indicateur de chargement ; désactivé comme `disabled` ; en variante `large`, « Chargement en cours » s'ajoute à la description |

### Lien ou bouton, nom accessible

- **Naviguer** (changer de page, ouvrir un détail) : `href`, l'item est rendu en `<a href>`. Avec un
  routeur, garder `href` et faire la navigation dans `onClick` (`event.preventDefault()` puis
  `navigate(…)`) : le lecteur d'écran annonce un lien et l'ouverture dans un nouvel onglet reste
  possible. Avec `target="_blank"`, le signaler dans `ariaLabelForActionIcon` (« … (nouvelle fenêtre) »).
- **Agir sur la page** (ouvrir une modale, déplier) : `onClick` seul, l'item est rendu en `<button>`.
- **Nom accessible** : le titre (`aria-labelledby`). Le sous-titre, les textes et le tag que la variante
  affiche, puis `ariaLabelForActionIcon`, forment la description (`aria-describedby`).
  `ariaLabelForActionIcon` s'ajoute donc au titre au lieu de le remplacer : y décrire l'action
  (« Voir le détail du contrat Auto »).

### Exemple

```tsx
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

// Item de navigation : un lien
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
  href="/contrat/auto"
/>

// Item désactivé
<ClickItem
  state="disabled"
  variant="medium"
  title="Contrat en attente"
  subtitle="En cours de souscription"
/>

// Avec image, action sur la page : un bouton
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
  position?: "horizontal" | "vertical";  // (défaut: "horizontal")
  size?: "small" | "large";             // (défaut: "large")
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
