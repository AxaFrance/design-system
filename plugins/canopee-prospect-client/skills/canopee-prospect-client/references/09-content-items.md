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
  /** @deprecated Use iconProps */ icon?: string;  // SVG src
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
}
```

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
type TupleMax3<T> = [T] | [T, T] | [T, T, T];

type DataAgentProps = {
  className?: string;
  agentProps: ContentMonoItemPictureProps;         // Profil agent (photo + nom + rôle)
  agentContractProps?: ContentMonoItemStickProps;  // Contrat agent (titre + sous-titre avec stick)
  contents?: TupleMax3<ContentMonoItemIconProps>;  // 1 à 3 infos avec icône (email, tel, adresse…)
  clickContents?: TupleMax3<ClickItemProps>;       // 1 à 3 actions cliquables
  texteOrias?: string;                             // Mention légale ORIAS
  isCompact?: boolean;                             // Variante compacte sur mobile  (défaut: true)
};
```

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
  texteOrias="ORIAS n° 07 001 234"
/>
```
