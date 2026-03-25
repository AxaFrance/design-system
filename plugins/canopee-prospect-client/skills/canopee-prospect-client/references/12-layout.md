# Layout : Footer, FormLayout, ExitLayout, Fieldset, LevelSelector

---

## Footer

Pied de page avec navigation expandable, icônes réseaux sociaux et copyright.

### Import

```tsx
import { Footer, type FooterProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type FooterProps = {
  links: Link[];
  socialMedias?: SocialMedia[];
  copyright: string;
  expandLinkText: string;         // Texte du bouton déroulant (ex: "À propos d'AXA")
  id?: string;
};

type Link = {
  label: string;
  href: string;
  target?: string;
};

type SocialMedia = {
  svgSrc: string;                 // SVG src de l'icône
  label: string;                  // aria-label
  href: string;
};
```

### Exemple

```tsx
import facebook from "@material-symbols/svg-400/outlined/facebook.svg";

<Footer
  expandLinkText="À propos d'AXA"
  copyright="© 2024 AXA France IARD - Tous droits réservés"
  links={[
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Cookies", href: "/cookies" },
    { label: "Accessibilité", href: "/accessibilite" },
  ]}
  socialMedias={[
    { svgSrc: facebook, label: "Facebook", href: "https://facebook.com/axa" },
  ]}
/>
```

---

## FormLayout

Conteneur de formulaire responsive spécialisé. Gère automatiquement le placement grille des inputs enfants via leurs `containerProps`.

### Import

```tsx
import { FormLayout, type FormLayoutProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type FormLayoutProps = FormHTMLAttributes<HTMLFormElement> & PropsWithChildren;
// Accepte aussi des sous-composants pour le Header, Footer, et FAQ via slot implicite
```

### Sub-composants implicites

`FormLayout` reconnaît les `Header`, `Footer` et `Faq` slots — mais en pratique ils sont utilisés comme des zones naturelles dans le layout.

### Usage des `containerProps` sur les inputs enfants

```tsx
// Les inputs avec containerProps sont automatiquement positionnés sur la grille
<FormLayout onSubmit={handleSubmit}>
  <InputText
    label="Prénom"
    name="firstname"
    required
    containerProps={{
      "data-cols-mobile": "12",
      "data-cols-tablet": "6",
      "data-cols-desktop-medium": "6",
    }}
  />
  <InputText
    label="Nom"
    name="lastname"
    required
    containerProps={{
      "data-cols-mobile": "12",
      "data-cols-tablet": "6",
      "data-cols-desktop-medium": "6",
    }}
  />
  <InputDate
    label="Date de naissance"
    name="birthdate"
    required
    containerProps={{ "data-cols-mobile": "12", "data-cols-desktop-medium": "4" }}
  />
  <Button type="submit">Valider</Button>
</FormLayout>
```

---

## ExitLayout

Layout de page de sortie (validation ou erreur). Compose une icône, un heading, un contenu principal, un agent optionnel et une action.

### Import

```tsx
import { ExitLayout, type ExitLayoutProps, type ExitLayoutWithSubComponents } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ExitLayoutProps = PropsWithChildren & {
  headingProps?: HeadingProps;    // Props passées au composant Heading
  iconProps?: {                   // Icône thématique (success = vert, error = rouge)
    variant: IconVariants;
    src: string;
    hasBackground?: boolean;
  };
};
```

### Sub-composants

```tsx
ExitLayout.Content  // Zone de contenu principal
ExitLayout.Agent    // Zone pour DataAgent (optionnel)
ExitLayout.Action   // Zone pour un lien / bouton de retour
```

### Exemple

```tsx
<ExitLayout
  headingProps={{
    children: "Votre demande a été validée !",
    firstSubtitle: "Référence : 202401-001234",
  }}
  iconProps={{ src: checkIcon, variant: "success", hasBackground: true }}
>
  <ExitLayout.Content>
    <p>Vous recevrez une confirmation par email dans les 24 heures.</p>
  </ExitLayout.Content>

  <ExitLayout.Agent>
    <DataAgent agentProps={{ type: "picture", picture: "/agent.jpg", title: "Jean Martin", subtitle: "Votre conseiller" }} />
  </ExitLayout.Agent>

  <ExitLayout.Action>
    <Link href="/" className="af-btn-client">
      Retour à l'accueil
    </Link>
  </ExitLayout.Action>
</ExitLayout>
```

> **Note** : Préférer `ValidPage` et `ErrorPage` pour les cas standards plutôt que `ExitLayout` directement.

---

## Fieldset

Groupe de champs de formulaire dans une carte avec titre et icône optionnelle.

### Import

```tsx
import { Fieldset, type FieldsetProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type FieldsetProps = PropsWithChildren<{
  title: string;                  // Légende du fieldset (obligatoire)
  iconProps?: IconProps;          // Icône dans le header de la carte
  className?: string;
}>;
```

### Exemple

```tsx
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";

<Fieldset
  title="Adresse du logement"
  iconProps={{ src: homeIcon, variant: "primary" }}
>
  <InputText label="Numéro et rue" name="street" required />
  <InputText label="Code postal" name="zipcode" required />
  <InputText label="Ville" name="city" required />
</Fieldset>
```

---

## LevelSelector

Sélecteur de niveau par incréments (−/+ buttons) avec indicateurs radio visuels.

### Import

```tsx
import { LevelSelector, type LevelSelectorProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type LevelSelectorProps = {
  title: string;                  // Titre (légende du groupe, obligatoire)
  description?: string;           // Description du niveau courant
  value?: number;                 // Niveau actuel (défaut: 0)
  stepsCount?: 1 | 2 | 3;       // Nombre de niveaux (défaut: 2)
  minusAriaLabel?: string;        // (défaut: "Diminuer le niveau")
  plusAriaLabel?: string;         // (défaut: "Augmenter le niveau")
  onChange?: (value: number) => void;
};
```

### Exemple

```tsx
const [protection, setProtection] = useState(1);

<LevelSelector
  title="Niveau de protection"
  description={
    protection === 0 ? "Sans protection" :
    protection === 1 ? "Protection standard" :
    "Protection maximale"
  }
  value={protection}
  stepsCount={2}
  onChange={setProtection}
/>
```
