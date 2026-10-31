# ContentItemMono, DataAgent

---

## ContentItemMono

Item composite en mode `icon`, `picture` ou `stick`. Affiche un visuel à gauche et du texte à droite.

### Import

```tsx
import { ContentItemMono } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props (3 modes unionisés)

**Mode `icon`** :
```tsx
{
  type: "icon";
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  iconProps?: IconProps;
}
```

**Mode `picture`** :
```tsx
{
  type: "picture";
  size?: "medium" | "large";  // défaut: "medium"
  picture: string;             // src de l'image
  title: string;
  subtitle: string;
  basePictureProps?: Omit<ComponentProps<typeof BasePicture>, "src">;
}
```

L'image est décorative par défaut (`alt=""`) : le titre est déjà affiché à côté, un `alt` identique le ferait lire deux fois par les lecteurs d'écran. Passer `basePictureProps={{ alt: "…" }}` seulement si l'image porte une information que le texte ne donne pas.

**Mode `stick`** :
```tsx
{
  type: "stick";
  title: string;
  subtitle?: string;
}
```

### Exemples

```tsx
// Mode icon
<ContentItemMono
  type="icon"
  title="Adresse email"
  subtitle1="jean@exemple.fr"
  iconProps={{ src: emailIcon, variant: "primary" }}
/>

// Mode picture
<ContentItemMono
  type="picture"
  picture="/agent-photo.jpg"
  title="Jean Martin"
  subtitle="Votre conseiller AXA"
  size="large"
/>

// Mode stick (barre latérale colorée)
<ContentItemMono
  type="stick"
  title="Contrat n° 123456"
  subtitle="En cours de traitement"
/>
```

---

## DataAgent

Carte d'un agent AXA regroupant : profil, contrat, infos de contact et actions cliquables.

### Import

```tsx
import { DataAgent, type DataAgentProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TupleMax3<T> = [T] | [T, T] | [T, T, T]; // 1 à 3 éléments, comme les emplacements de la maquette

type DataAgentProps = {
  className?: string;
  agentProps: ContentMonoItemPictureProps;         // Profil agent (photo + nom + rôle), obligatoire
  agentContractProps?: ContentMonoItemStickProps;  // Contrat agent (titre + sous-titre avec stick)
  contents?: TupleMax3<ContentMonoItemIconProps>;  // 1 à 3 infos avec icône (email, tel, adresse…)
  clickContents?: TupleMax3<ClickItemProps>;       // 1 à 3 actions cliquables
  oriasText?: string;                              // Mention légale ORIAS
  texteOrias?: string;                             // Déprécié : utiliser oriasText
  isCompact?: boolean;                             // Variante compacte sur mobile  (défaut: true)
  variant?: "default" | "compact";                 // "compact" : variante compacte quelle que soit la taille d'écran
  compactClickItemProps?: Omit<ClickItemProps, "variant" | "basePictureProps" | "title" | "subtitle">;
                                                   // ClickItem de la variante compacte (onClick, ariaLabelForActionIcon…)
} & Omit<ComponentPropsWithoutRef<"section">, "children">; // aria-label, aria-labelledby, id, data-*…
```

La photo de l'agent est décorative dans les deux mises en page (`alt=""`), puisque son nom est affiché à côté. `agentProps.basePictureProps` est transmis à l'image, en mise en page normale comme compacte.

- **1 à 3 contenus et 1 à 3 actions** : la maquette a trois emplacements de chaque (Contenu 1 à 3, Click 1 à 3, les deux derniers optionnels). Ils sont rendus en listes (`ul`/`li`).
- **Actions toujours en ClickItem `small`** : c'est la seule variante de la maquette du DataAgent ; la `variant` passée dans `clickContents` est ignorée.
- **Variante compacte** : un seul ClickItem `agent` construit depuis `agentProps`. Sans `compactClickItemProps`, il n'est pas cliquable ; lui passer `onClick` pour le rendre interactif.
- **Région nommée** : les attributs natifs de la `section` racine sont transmis ; `aria-label="Votre conseiller"` ou `aria-labelledby` (id du titre affiché au-dessus) en fait une région pour les lecteurs d'écran.

### Exemple

```tsx
import emailIcon from "@material-symbols/svg-400/outlined/email.svg";
import phoneIcon from "@material-symbols/svg-400/outlined/phone.svg";
import locationIcon from "@material-symbols/svg-400/outlined/location_on.svg";

<DataAgent
  agentProps={{
    type: "picture",
    picture: "/photo-jean.jpg",
    title: "Jean Martin",
    subtitle: "Votre conseiller AXA",
  }}
  agentContractProps={{
    type: "stick",
    title: "Contrat n° 123456",
    subtitle: "Habitation - Paris 15",
  }}
  contents={[
    {
      type: "icon",
      title: "Email",
      subtitle1: "jean.martin@axa.fr",
      iconProps: { src: emailIcon },
    },
    {
      type: "icon",
      title: "Téléphone",
      subtitle1: "01 23 45 67 89",
      iconProps: { src: phoneIcon },
    },
    {
      type: "icon",
      title: "Adresse",
      subtitle1: "15 Av. de la Grande Armée, Paris 15",
      iconProps: { src: locationIcon },
    },
  ]}
  clickContents={[
    {
      state: "default",
      variant: "small",
      title: "Prendre rendez-vous",
      icon: calendarIcon,
      onClick: () => navigate("/rdv"),
      ariaLabelForActionIcon: "Prendre rendez-vous avec Jean Martin",
    },
  ]}
  oriasText="ORIAS n° 07 001 234"
/>
```
