# Composants supplémentaires

## Divider (Séparateur)

Ligne de séparation visuelle simple.

```tsx
import { Divider } from "@axa-fr/canopee-react/distributeur";

<Divider />
<Divider className="custom-divider" />
```

## Title (Titre)

Composant de titre stylé avec support d'éléments latéraux.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `heading` | `"h2" \| "h3" \| "h4"` | `"h2"` | Balise HTML de titre rendue |
| `contentLeft` | `ReactElement` | - | Élément affiché à gauche du titre (ex: icône) |
| `contentRight` | `ReactNode` | - | Élément affiché à droite du titre (ex: bouton) |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

```tsx
import { Title } from "@axa-fr/canopee-react/distributeur";

<Title>Titre principal (h2 par défaut)</Title>
<Title heading="h3">Sous-titre</Title>
<Title heading="h4">Titre de section</Title>

// Avec contenu à droite
<Title heading="h2" contentRight={<Button small>Action</Button>}>
  Titre avec bouton
</Title>
```

## Action

Lien stylé en cercle avec icône. C'est un élément `<a>` (pas un `<button>`).

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `icon` | `string` | **Obligatoire** | Nom de l'icône |
| `href` | `string` | - | URL de destination (hérité de `<a>`) |
| `onClick` | `function` | - | Gestionnaire de clic |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

```tsx
import { Action } from "@axa-fr/canopee-react/distributeur";

<Action icon="pencil" href="/modifier" aria-label="Modifier" />
<Action icon="trash" onClick={() => handleDelete()} aria-label="Supprimer" />
```

## Svg

Composant d'enveloppe SVG pour l'affichage d'icônes.

```tsx
import { Svg } from "@axa-fr/canopee-react/distributeur";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";

<Svg src={infoIcon} alt="Information" />
```

## MainContainer

Wrapper de mise en page pour la zone de contenu principale.

```tsx
import { MainContainer } from "@axa-fr/canopee-react/distributeur";

<MainContainer>
  <h1>Contenu de la page</h1>
  <p>Contenu ici</p>
</MainContainer>
```

## HelpButton

Bouton d'aide interactif qui affiche un Popover avec du contenu explicatif. Le `children` est le **contenu du popover** (tooltip), pas le label du bouton.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu affiché dans le popover |
| `helpButtonContent` | `ReactNode` | `<span>i</span>` | Contenu du bouton déclencheur (remplace le "i" par défaut) |
| `mode` | `"click" \| "over"` | `"click"` | Déclenchement par clic ou survol |
| `placement` | `Placement` | `"right"` | Position du popover (top, bottom, left, right, …) |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";

<HelpButton>
  Ce champ doit contenir votre numéro de contrat à 8 chiffres.
</HelpButton>

// Déclenchement au survol
<HelpButton mode="over" placement="top">
  Information contextuelle affichée au survol.
</HelpButton>
```

## Loader

Indicateur de chargement avec overlay sur un contenu existant.

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";

<Loader mode="get">
  <div>Contenu de la zone</div>
</Loader>

<Loader mode="error" text="Une erreur est survenue lors du chargement">
  <div>Contenu de la zone</div>
</Loader>
```

## CardData

Carte d'affichage de données avec en-tête.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | **Obligatoire** | Titre de la carte |
| `icon` | `string` | **Obligatoire** | Chemin SVG de l'icône (Material Symbols) |
| `subTitle` | `ReactNode` | - | Sous-titre |
| `description` | `ReactNode` | - | Description additionnelle |
| `variant` | `"default" \| "error" \| "warning" \| "information" \| "success" \| "dark" \| "gray" \| "purple"` | `"default"` | Style visuel |
| `contentRight` | `ReactNode` | - | Contenu affiché à droite du header |
| `withDivider` | `boolean` | `true` | Affiche un séparateur entre header et contenu |
| `contentFitAllSize` | `boolean` | `false` | Le contenu occupe toute la largeur |
| `children` | `ReactNode` | - | Contenu du corps de la carte |

```tsx
import { CardData } from "@axa-fr/canopee-react/distributeur";
import contractIcon from "@material-symbols/svg-400/outlined/description.svg";

<CardData
  title="Mon contrat"
  subTitle="Référence : 12345"
  icon={contractIcon}
  variant="default"
>
  <p>Contenu détaillé du contrat...</p>
</CardData>

// Variant informatif avec action
<CardData
  title="Alerte"
  icon={warningIcon}
  variant="warning"
  contentRight={<Button small>Voir</Button>}
>
  <p>Détails de l'alerte</p>
</CardData>
```

## EditorialMessage

Message éditorial visuel pour promouvoir des informations (accessibilité, promotions, éco-conception…). Son affichage ne dépend pas d'une action utilisateur.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `type` | `"green" \| "information" \| "promotion"` | **Obligatoire** | Style visuel |
| `icon` | `string` | **Obligatoire** | Chemin SVG de l'icône |
| `title` | `string` | - | Titre du message (`title` ou `children` requis) |
| `children` | `ReactNode` | - | Contenu du message (`title` ou `children` requis) |
| `className` | `string` | - | Classes CSS additionnelles |

```tsx
import { EditorialMessage } from "@axa-fr/canopee-react/distributeur";
import ecoIcon from "@material-symbols/svg-400/outlined/eco.svg";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";

<EditorialMessage type="green" icon={ecoIcon} title="Éco-conception">
  Cette fonctionnalité a été conçue pour minimiser son impact environnemental.
</EditorialMessage>

<EditorialMessage type="information" icon={infoIcon} title="Accessibilité">
  Ce service est conforme aux normes RGAA 4.1.
</EditorialMessage>

<EditorialMessage type="promotion" icon={promoIcon}>
  Offre spéciale jusqu'au 31 décembre.
</EditorialMessage>
```

## Popover

Composant tooltip/popover pour des informations contextuelles.

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";

<Popover 
  mode="click"
  placement="top"
  popoverElement={<div>Contenu d'aide</div>}
>
  <button>Aide</button>
</Popover>
```

## Summary

Composant de résumé des erreurs de validation de formulaire. Affiche une liste de messages d'erreur dans un composant `Message`. Ne s'affiche pas si la liste est vide ou si `isVisible` est `false`.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `messages` | `ReactNode[]` | `[]` | Liste des messages d'erreur à afficher |
| `title` | `string` | `"Invalid form"` | Titre du récapitulatif |
| `isVisible` | `boolean` | `true` | Contrôle l'affichage |
| `classModifier` | `string` | `"error"` | Modificateur CSS (hérité de Message) |

```tsx
import { Summary } from "@axa-fr/canopee-react/distributeur";

const [errors, setErrors] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const validationErrors: string[] = [];
  if (!nom) validationErrors.push("Le nom est obligatoire");
  if (!email) validationErrors.push("L'e-mail est obligatoire");
  setErrors(validationErrors);
};

<Summary
  title="Votre formulaire contient des erreurs"
  messages={errors}
  isVisible={errors.length > 0}
/>
```

## Composants de formulaire (wrappers haute niveau)

### Textarea
```tsx
import { Textarea, TextareaInput } from "@axa-fr/canopee-react/distributeur";

<TextareaInput
  id="message"
  name="message"
  label="Votre message"
  placeholder="Saisissez votre message..."
/>
```

### Choice (Choix oui/non)

Groupe de boutons radio spécialisé pour les choix booléens. Les `options.value` sont des **booléens** par défaut (`true`/`false`).

```tsx
import { Choice, ChoiceInput } from "@axa-fr/canopee-react/distributeur";

// Avec les options par défaut (Oui/Non)
<Choice
  id="accord"
  name="accord"
  value={true}
  onChange={handleChange}
/>

// Avec options personnalisées
<ChoiceInput
  id="abonnement"
  name="abonnement"
  label="Souhaitez-vous vous abonner ?"
  options={[
    { value: true, label: "Oui, je veux m'abonner" },
    { value: false, label: "Non merci" }
  ]}
  value={abonnement}
  onChange={handleChange}
/>
```

### Date
```tsx
import { Date, DateInput } from "@axa-fr/canopee-react/distributeur";

<DateInput
  id="naissance"
  name="naissance"
  label="Date de naissance"
  type="date"
/>
```

### Mot de passe

`Pass` est le champ bas niveau ; `PassInput` est le wrapper complet avec label et validation. La prop `score` (0-4) permet d'afficher un indicateur de force du mot de passe.

```tsx
import { PassInput } from "@axa-fr/canopee-react/distributeur";

// Champ simple
<PassInput
  id="password"
  name="password"
  label="Mot de passe"
  required
/>

// Avec indicateur de force (score de 0 = faible à 4 = excellent)
<PassInput
  id="password"
  name="password"
  label="Mot de passe"
  score="3"
/>
```

### Nombre
```tsx
import { Number, NumberInput } from "@axa-fr/canopee-react/distributeur";

<NumberInput
  id="quantity"
  name="quantity"
  label="Quantité"
  min={1}
/>
```

### Téléchargement de fichier
```tsx
import { File, FileInput } from "@axa-fr/canopee-react/distributeur";

<FileInput
  id="document"
  name="document"
  label="Télécharger un document"
  accept=".pdf,.doc"
/>
```

### MultiSelect
```tsx
import { MultiSelect, MultiSelectInput } from "@axa-fr/canopee-react/distributeur";

<MultiSelectInput
  id="competences"
  name="competences"
  label="Sélectionner des compétences"
  options={competenceOptions}
/>
```

### Slider

> ⚠️ **DÉPRÉCIÉ** — Ce composant sera supprimé dans une prochaine version majeure. Évitez de l'utiliser pour de nouveaux projets.

Curseur de sélection de valeur numérique parmi un tableau d'options prédéfinies.

```tsx
import { SliderInput } from "@axa-fr/canopee-react/distributeur";

<SliderInput
  id="montant"
  name="montant"
  label="Montant de la couverture"
  options={[
    { value: 0, label: "0 €" },
    { value: 500, label: "500 €" },
    { value: 1000, label: "1 000 €" },
    { value: 2000, label: "2 000 €" }
  ]}
  value={1000}
  onChange={({ value }) => setMontant(value)}
/>
```

### NestedQuestion

Section imbriquée affichée visuellement en retrait, pour des questions conditionnelles. N'accepte que `children` et `className`.

```tsx
import { NestedQuestion } from "@axa-fr/canopee-react/distributeur";

<>
  <RadioInput
    id="assurance"
    label="Avez-vous une assurance habitation ?"
    options={[
      { value: "oui", label: "Oui" },
      { value: "non", label: "Non" }
    ]}
    value={assurance}
    onChange={handleChange}
  />

  {assurance === "oui" ? (
    <NestedQuestion>
      <TextInput
        id="assureur"
        name="assureur"
        label="Nom de votre assureur"
      />
    </NestedQuestion>
  ) : null}
</>
```

## Composants expérimentaux

Composants de formulaire avancés/expérimentaux disponibles via `canopee-react/distributeur-experimental` :
- InputContainer
- Label (haute niveau)
- Input wrapper
- ItemMessage
- InputUnit

Ces composants sont sujets à des changements d'API et doivent être utilisés avec précaution en production.
