# Form Text Input (Saisie texte)

## Présentation
Le composant TextInput est un wrapper autour de l'élément HTML `<input type="text">` avec support du label, des messages de validation et du texte d'aide.

## Import
```tsx
import { Text, TextInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Text (base)
Wrapper bas niveau autour de l'élément `<input>`.
```tsx
import { Text } from "@axa-fr/canopee-react/distributeur";

const MonInput = () => <Text id="nom" name="nom" placeholder="Saisir le nom" />;
```

### TextInput (haute niveau)
Saisie complète avec label, validation et messages d'aide.
```tsx
import { TextInput } from "@axa-fr/canopee-react/distributeur";

const MonInput = () => (
  <TextInput
    id="email"
    name="email"
    label="Adresse e-mail"
    type="email"
    placeholder="vous@exemple.fr"
  />
);
```

## Props — TextInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | Obligatoire | Attribut HTML id |
| `name` | `string` | Obligatoire | Attribut HTML name |
| `label` | `string \| ReactNode` | - | Texte du label |
| `type` | `string` | `"text"` | Type HTML (text, email, password, tel, url...) |
| `value` | `string` | - | Valeur de la saisie |
| `placeholder` | `string` | - | Texte de placeholder |
| `disabled` | `boolean` | `false` | Désactive la saisie |
| `readOnly` | `boolean` | `false` | Mode lecture seule |
| `required` | `boolean` | `false` | Champ obligatoire (affiche astérisque) |
| `helpMessage` | `ReactNode` | - | Message d'aide affiché par défaut sous le champ |
| `message` | `string` | - | Message de statut (erreur, succès, avertissement) — affiché uniquement quand `forceDisplayMessage` est `true` |
| `messageType` | `MessageTypes` (`"error"` \| `"success"` \| `"warning"`) | - | Type du message de statut |
| `forceDisplayMessage` | `boolean` | `false` | Active l'affichage du `message` à la place de `helpMessage` |
| `onChange` | `function` | - | Gestionnaire de changement |
| `onBlur` | `function` | - | Gestionnaire de perte de focus |

## Props — Text (base)

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `type` | `string` | `"text"` | Type de saisie HTML |
| `value` | `string` | - | Valeur |
| `placeholder` | `string` | - | Texte de placeholder |
| `disabled` | `boolean` | `false` | État désactivé |
| `readOnly` | `boolean` | `false` | État lecture seule |
| `required` | `boolean` | `false` | Champ obligatoire |
| `classModifier` | `string` | - | Classes CSS modificatrices |

Attributs HTML standard `<input>` supportés.

## Utilisation de base

### Saisie texte simple
```tsx
const SaisieSimple = () => {
  const [valeur, setValeur] = useState("");
  
  return (
    <TextInput
      id="nom"
      name="nom"
      label="Nom complet"
      value={valeur}
      onChange={(e) => setValeur(e.target.value)}
      placeholder="Jean Dupont"
    />
  );
};
```

### Saisie e-mail
```tsx
<TextInput
  id="email"
  name="email"
  label="Adresse e-mail"
  type="email"
  placeholder="utilisateur@exemple.fr"
  required
/>
```

### Champ avec message d'aide
```tsx
<TextInput
  id="pseudo"
  name="pseudo"
  label="Pseudonyme"
  required
  helpMessage="Le pseudonyme doit contenir entre 3 et 20 caractères"
/>
```

## Validation

### Message d'erreur
```tsx
import { TextInput, MessageTypes } from "@axa-fr/canopee-react/distributeur";

const [erreur, setErreur] = useState("");

const handleChange = (e) => {
  const valeur = e.target.value;
  if (valeur.length < 3) {
    setErreur("Minimum 3 caractères requis");
  } else {
    setErreur("");
  }
};

<TextInput
  id="password"
  name="password"
  label="Mot de passe"
  type="password"
  message={erreur}
  messageType={MessageTypes.error}
  forceDisplayMessage={Boolean(erreur)}
  onChange={handleChange}
/>
```

### Message de succès
```tsx
<TextInput
  id="email-confirme"
  name="email-confirme"
  label="E-mail confirmé"
  message="E-mail vérifié avec succès"
  messageType={MessageTypes.success}
  forceDisplayMessage={true}
/>
```

### Message d'avertissement
```tsx
<TextInput
  id="telephone"
  name="telephone"
  label="Numéro de téléphone"
  type="tel"
  message="Le format recommandé est +33 X XX XX XX XX"
  messageType={MessageTypes.warning}
  forceDisplayMessage={true}
/>
```

## États

### Désactivé
```tsx
<TextInput id="desactive" name="desactive" label="Désactivé" disabled />
```

### Lecture seule
```tsx
<TextInput id="lecture" name="lecture" label="Lecture seule" readOnly value="Valeur fixe" />
```

### Obligatoire
```tsx
<TextInput id="obligatoire" name="obligatoire" label="Obligatoire" required />
```

## Types de saisie

```tsx
// Texte
<TextInput id="texte" type="text" label="Texte" />

// E-mail
<TextInput id="email" type="email" label="E-mail" />

// Mot de passe
<TextInput id="password" type="password" label="Mot de passe" />

// Téléphone
<TextInput id="tel" type="tel" label="Téléphone" />

// URL
<TextInput id="url" type="url" label="Site web" />

// Nombre
<TextInput id="nombre" type="number" label="Quantité" />

// Date
<TextInput id="date" type="date" label="Date de naissance" />
```

## Intégration en formulaire

```tsx
const FormulaireConnexion = () => {
  const [formData, setFormData] = useState({
    identifiant: "",
    password: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="af-form">
      <TextInput
        id="identifiant"
        name="identifiant"
        label="Identifiant"
        value={formData.identifiant}
        onChange={handleChange}
        required
      />
      <TextInput
        id="password"
        name="password"
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};
```

## Accessibilité
- Toujours fournir un label clair et descriptif
- Les champs obligatoires sont marqués avec un astérisque
- Les messages d'erreur sont liés via `aria-describedby` (géré automatiquement)
- Les types email, tel et number déclenchent le clavier mobile adapté
- Les champs lecture seule restent accessibles au clavier

## Bonnes pratiques
- Toujours fournir un `<label>` (la prop `label` le fait)
- Utiliser le type `type` approprié pour une meilleure UX et validation
- Afficher la validation tôt (au blur) plutôt qu'à la soumission
- Garder le placeholder différent du label
- Utiliser le texte d'aide pour expliquer les contraintes

## Classes CSS
- `.af-form__input-text` - Classe de base de la saisie
- `.af-form__input-text--required` - Champ obligatoire
- `.af-form__input-text--disabled` - État désactivé
