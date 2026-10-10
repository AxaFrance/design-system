# Layout : Footer, FormLayout, ExitLayout, Fieldset, LevelSelector

---

## Footer

Pied de page avec navigation expandable, icônes réseaux sociaux et copyright.

### Import

```tsx
import { Footer, type FooterProps } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type FooterProps = {
    links: Link[];
    socialMedias?: SocialMedia[];
    copyright: string;
    expandLinkText: string; // Texte du bouton déroulant (ex: "À propos d'AXA")
    id?: string;
    newWindowLabel?: string; // Texte masqué, entre parenthèses, des liens ouverts dans un nouvel onglet (défaut : "nouvelle fenêtre")
};

type Link = {
    link: string; // href
    text: string; // Intitulé visible
    openInCurrentTab?: boolean; // Par défaut, le lien s'ouvre dans un nouvel onglet
};

type SocialMedia = {
    icon: 'facebook' | 'twitter' | 'youtube' | 'linkedin';
    link: string; // href, toujours ouvert dans un nouvel onglet
    label?: string; // Nom du réseau (défaut : "Facebook", "X (Twitter)", "YouTube", "LinkedIn")
};
```

### Accessibilité

- Sur petit écran (≤ 1023 px), les liens sont repliés derrière le bouton `expandLinkText` : il expose
  son état par `aria-expanded` et désigne la liste par `aria-controls` ; repliée, la liste est `inert`
  (ses liens ne sont ni focalisables ni lus). Si elle se replie pendant qu'un de ses liens a le focus
  (redimensionnement, zoom), le focus passe au bouton. Au clavier, le bouton affiche l'anneau de focus
  du navigateur.
- Chaque lien de réseau social est nommé par l'alternative de son icône : `label` suivi de
  « (nouvelle fenêtre) ». Ne pas ajouter d'`aria-label` sur le lien.
- Les liens de menu sans `openInCurrentTab` s'ouvrent dans un nouvel onglet : leur nom se termine par
  « (nouvelle fenêtre) », en texte masqué. `newWindowLabel` change ce texte, pour les liens de menu
  comme pour les réseaux sociaux.

### Exemple

```tsx
<Footer
    expandLinkText="À propos d'AXA"
    copyright="© 2024 AXA France IARD - Tous droits réservés"
    links={[
        { text: 'Mentions légales', link: '/mentions-legales' }, // « Mentions légales (nouvelle fenêtre) »
        { text: 'Politique de confidentialité', link: '/confidentialite' },
        { text: 'Cookies', link: '/cookies' },
        { text: 'Accessibilité', link: '/accessibilite', openInCurrentTab: true }, // onglet courant
    ]}
    socialMedias={[
        { icon: 'facebook', link: 'https://www.facebook.com/axafrance' },
        {
            icon: 'linkedin',
            link: 'https://www.linkedin.com/company/axa-france/',
            label: 'LinkedIn AXA France',
        },
    ]}
/>;
```

---

## FormLayout

Conteneur de formulaire responsive spécialisé. Gère automatiquement le placement grille des inputs enfants via leurs `containerProps`.

### Import

```tsx
import {
    FormLayout,
    type FormLayoutProps,
} from '@axa-fr/canopee-react/prospect';
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
            'data-cols-mobile': '12',
            'data-cols-tablet': '6',
            'data-cols-desktop-medium': '6',
        }}
    />
    <InputText
        label="Nom"
        name="lastname"
        required
        containerProps={{
            'data-cols-mobile': '12',
            'data-cols-tablet': '6',
            'data-cols-desktop-medium': '6',
        }}
    />
    <InputDate
        label="Date de naissance"
        name="birthdate"
        required
        containerProps={{
            'data-cols-mobile': '12',
            'data-cols-desktop-medium': '4',
        }}
    />
    <Button type="submit">Valider</Button>
</FormLayout>
```

---

## ExitLayout

Layout de page de sortie (validation ou erreur). Compose une icône, un heading, un contenu principal, un agent optionnel et une action.

### Import

```tsx
import {
    ExitLayout,
    type ExitLayoutProps,
    type ExitLayoutWithSubComponents,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type ExitLayoutProps = PropsWithChildren & {
    headingProps?: HeadingProps; // Props passées au composant Heading
    iconProps?: {
        // Icône thématique (success = vert, error = rouge)
        variant: IconVariants;
        src: string;
        hasBackground?: boolean;
    };
};
```

### Sub-composants

```tsx
ExitLayout.Content; // Zone de contenu principal
ExitLayout.Agent; // Zone pour DataAgent (optionnel)
ExitLayout.Action; // Zone pour un lien / bouton de retour
```

### Exemple

```tsx
<ExitLayout
    headingProps={{
        children: 'Votre demande a été validée !',
        firstSubtitle: 'Référence : 202401-001234',
    }}
    iconProps={{ src: checkIcon, variant: 'success', hasBackground: true }}
>
    <ExitLayout.Content>
        <p>Vous recevrez une confirmation par email dans les 24 heures.</p>
    </ExitLayout.Content>

    <ExitLayout.Agent>
        <DataAgent
            agentProps={{
                type: 'picture',
                picture: '/agent.jpg',
                title: 'Jean Martin',
                subtitle: 'Votre conseiller',
            }}
        />
    </ExitLayout.Agent>

    <ExitLayout.Action>
        <Link href="/" className="af-btn-client">
            Retour à l'accueil
        </Link>
    </ExitLayout.Action>
</ExitLayout>
```

> **Note** : Préférer `ValidPage` et `ErrorPage` pour les cas standards plutôt que `ExitLayout` directement.

## ExitLayoutSkeleton

Version skeleton de `ExitLayout`, utilisée pour afficher la structure de chargement avant les données finales.

### Import

```tsx
import {
    ExitLayoutSkeleton,
    type ExitLayoutSkeletonProps,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type ExitLayoutSkeletonProps = {
    hasAgent?: boolean;
    hasIcon?: boolean;
    hasAction?: boolean;
    hasContent?: boolean;
    hasHeading?: boolean;
};
```

### Exemple

```tsx
<ExitLayoutSkeleton hasAgent hasIcon hasAction hasContent hasHeading />
```

---

## Fieldset

Groupe de champs de formulaire dans une carte avec titre et icône optionnelle.

### Import

```tsx
import { Fieldset, type FieldsetProps } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type FieldsetProps = PropsWithChildren<{
    title: string; // Légende du fieldset (obligatoire)
    iconProps?: IconProps; // Icône dans le header de la carte
    className?: string;
}>;
```

### Exemple

```tsx
import homeIcon from '@material-symbols/svg-400/outlined/home.svg';

<Fieldset
    title="Adresse du logement"
    iconProps={{ src: homeIcon, variant: 'primary' }}
>
    <InputText label="Numéro et rue" name="street" required />
    <InputText label="Code postal" name="zipcode" required />
    <InputText label="Ville" name="city" required />
</Fieldset>;
```

---

## LevelSelector

Sélecteur de niveau par incréments (−/+ buttons) avec indicateurs radio visuels.

### Import

```tsx
import {
    LevelSelector,
    type LevelSelectorProps,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type LevelSelectorProps = {
    title: string; // Titre (légende du groupe, obligatoire)
    description?: string; // Description du niveau courant
    value?: number; // Niveau actuel (défaut: 0)
    stepsCount?: 1 | 2 | 3; // Nombre de niveaux (défaut: 2)
    minusAriaLabel?: string; // (défaut: "Diminuer le niveau")
    plusAriaLabel?: string; // (défaut: "Augmenter le niveau")
    onChange?: (value: number) => void;
};
```

Accessibilité : chaque radio est nommé « Niveau n » sur l'`input` lui-même ; la `description`,
quand elle est fournie, est reliée aux radios par `aria-describedby` et annoncée poliment
(`aria-live="polite"`) quand elle change.

### Exemple

```tsx
const [protection, setProtection] = useState(1);

<LevelSelector
    title="Niveau de protection"
    description={
        protection === 0
            ? 'Sans protection'
            : protection === 1
              ? 'Protection standard'
              : 'Protection maximale'
    }
    value={protection}
    stepsCount={2}
    onChange={setProtection}
/>;
```

---

## Card

Conteneur polymorphique avec padding et bordure. L'élément HTML sous-jacent est contrôlé via `as`.

### Import

```tsx
import { Card } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type CardProps<T extends ElementType = 'div'> = {
    as?: T; // Élément HTML ou composant (défaut: "div")
    variant?: 'default' | 'unstyled'; // (défaut: "default")
    className?: string;
    children?: ReactNode;
    // + toutes les props HTML de l'élément cible
};
```

### Exemple

```tsx
// Carte de base
<Card>
  <Heading level={2} className="af-card__title">Mon titre</Heading>
  <p>Mon contenu</p>
</Card>

// Carte cliquable rendue comme bouton
<Card as="button" type="button" onClick={handleClick}>
  <Heading level={2} className="af-card__title">Mon titre</Heading>
</Card>

// Sans style (retire bordure et padding — utilisé en interne par List)
<Card variant="unstyled">
  <p>Contenu</p>
</Card>
```

---

## AppName

Affiche le logo AXA et le nom de l'application. Utilisé typiquement à l'intérieur du `Header`.

### Import

```tsx
import { AppName } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type AppNameProps = ComponentPropsWithoutRef<'div'> & {
    label: string; // Nom de l'application (obligatoire)
    logoAlt?: string; // Alt du logo (défaut: "Logo AXA")
    LogoLinkComponent?: ElementType; // Composant de lien (défaut: "a")
    logoLinkProps?: Record<string, unknown>; // Props transmises au composant de lien
};
```

### Exemple

```tsx
// Sans lien
<AppName label="Mon application" />

// Avec lien natif <a>
<AppName label="Mon application" logoLinkProps={{ href: "/" }} />

// Avec React Router Link
import { Link } from "react-router";
<AppName
  label="Mon application"
  LogoLinkComponent={Link}
  logoLinkProps={{ to: "/" }}
/>
```

---

## Header

En-tête de page responsive avec logo, menu de navigation, menu burger et actions.

- **Mobile** : l'icône hamburger ouvre/ferme le bloc menu via un état React (Escape pour fermer).
- **Desktop** : le menu s'affiche en ligne, l'icône est masquée.

### Import

```tsx
import { Header } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'title'> & {
    appNameProps: AppNameProps; // Props du composant AppName (obligatoire)
    tabMenuProps?: TabMenuProps; // Navigation principale
    menuBurgerProps?: MenuBurgerProps; // Menu compte utilisateur
    clickIconProps?: ClickIconProps; // Props du bouton hamburger mobile
    title?: string; // Titre affiché dans la zone actions (desktop)
    actionChildren?: ReactNode; // Contenu libre dans la zone actions
};
```

### Exemple

```tsx
import {
    Header,
    Button,
    Icon,
    type MenuBurgerProps,
    type TabMenuProps,
} from '@axa-fr/canopee-react/prospect';
import logout from '@material-symbols/svg-400/rounded/logout.svg';
import accountBalance from '@material-symbols/svg-400/rounded/account_balance-fill.svg';

const tabMenuProps: TabMenuProps = {
    items: [
        { href: '#accueil', label: 'Accueil' },
        { href: '#contrats', label: 'Contrats' },
    ],
};

const menuBurgerProps: MenuBurgerProps = {
    buttonLabel: 'Mon espace',
    clickItems: [
        {
            title: 'Mon profil',
            subtitle: 'Informations personnelles',
            state: 'default',
            ariaLabelForActionIcon: 'Aller à mon profil',
            href: '/profil',
        },
    ],
    children: (
        <Button
            variant="tertiary"
            iconLeft={<Icon src={logout} size="S" />}
            onClick={() => {}}
        >
            Déconnexion
        </Button>
    ),
};

<Header
    appNameProps={{ label: 'Mon application', logoLinkProps: { href: '/' } }}
    tabMenuProps={tabMenuProps}
    menuBurgerProps={menuBurgerProps}
    actionChildren={
        <Button
            variant="secondary"
            iconLeft={<Icon src={accountBalance} size="S" />}
        >
            Accéder à AXA Banque
        </Button>
    }
/>;
```

### MenuBurger (sous-composant du Header)

Bouton compte utilisateur avec panneau popover.

- **Mobile** : bouton masqué, panneau affiché en ligne dans le menu ouvert.
- **Desktop** : bouton ouvre/ferme le panneau via la [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

```tsx
import { MenuBurger } from '@axa-fr/canopee-react/prospect';
// ou client

<MenuBurger
    buttonLabel="Mon espace"
    variant="primary" // "primary" | "secondary" (défaut: "primary")
    clickItems={[
        {
            title: 'Mon profil',
            state: 'default',
            ariaLabelForActionIcon: 'Aller à mon profil',
            href: '/profil',
        },
    ]}
>
    {/* Contenu libre sous les click items */}
    <Button variant="tertiary" onClick={() => {}}>
        Déconnexion
    </Button>
</MenuBurger>;
```
