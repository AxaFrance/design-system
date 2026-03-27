# Composants supplémentaires

## Divider (Séparateur)

Ligne de séparation visuelle simple.

```tsx
import { Divider } from "@axa-fr/canopee-react/distributeur";

<Divider />
<Divider className="custom-divider" />
```

## Title (Titre)

Composant de titre stylé.

```tsx
import { Title } from "@axa-fr/canopee-react/distributeur";

<Title level={1}>Titre principal</Title>
<Title level={2}>Sous-titre</Title>
<Title level={3}>Titre de section</Title>
```

## Action

Composant de type bouton pour déclencher des opérations.

```tsx
import { Action } from "@axa-fr/canopee-react/distributeur";

<Action onClick={() => handleAction()}>
  Exécuter l'action
</Action>
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

Bouton d'aide interactif.

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";

<HelpButton>
  Texte d'aide expliquant le champ
</HelpButton>
```

## Loader

Indicateur de chargement.

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";

<Loader />
<Loader size="small" />
<Loader size="large" />
```

## CardData

Carte d'affichage de données.

```tsx
import { CardData } from "@axa-fr/canopee-react/distributeur";

<CardData variant="default">
  <h3>Titre de la carte</h3>
  <p>Contenu de la carte</p>
</CardData>
```

## EditorialMessage

Grand composant de message pour le contenu éditorial.

```tsx
import { EditorialMessage } from "@axa-fr/canopee-react/distributeur";

<EditorialMessage type="info">
  Information importante sur le système
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

Composant résumé repliable pour le contenu condensable.

```tsx
import { Summary } from "@axa-fr/canopee-react/distributeur";

<Summary label="Voir les détails">
  Contenu détaillé
</Summary>
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

### Choice (Choix toggle)
```tsx
import { Choice, ChoiceInput } from "@axa-fr/canopee-react/distributeur";

<Choice options={[
  { value: "oui", label: "Oui" },
  { value: "non", label: "Non" }
]} />
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
```tsx
import { Pass, PassInput } from "@axa-fr/canopee-react/distributeur";

<PassInput
  id="password"
  name="password"
  label="Mot de passe"
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
```tsx
import { Slider, SliderInput } from "@axa-fr/canopee-react/distributeur";

<SliderInput
  id="prix"
  name="prix"
  label="Fourchette de prix"
  min={0}
  max={1000}
/>
```

### NestedQuestion
```tsx
import { NestedQuestion } from "@axa-fr/canopee-react/distributeur";

<NestedQuestion label="Question parente">
  <p>Contenu affiché selon la réponse parente</p>
</NestedQuestion>
```

## Composants expérimentaux

Composants de formulaire avancés/expérimentaux disponibles via `canopee-react/distributeur-experimental` :
- InputContainer
- Label (haute niveau)
- Input wrapper
- ItemMessage
- InputUnit

Ces composants sont sujets à des changements d'API et doivent être utilisés avec précaution en production.
