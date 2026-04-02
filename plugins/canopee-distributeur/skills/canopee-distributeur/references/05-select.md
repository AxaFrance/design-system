# Form Select (Liste déroulante)

## Présentation
Le composant Select fournit une liste déroulante pour les formulaires. Utiliser les enfants JSX (`<option>`, `<optgroup>`) pour construire les options.

## Import
```tsx
import { Select, SelectInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Select
Liste déroulante bas niveau à base d'enfants JSX.
```tsx
import { Select } from "@axa-fr/canopee-react/distributeur";

// Avec enfants
<Select>
  <option value="pomme">Pomme</option>
  <option value="banane">Banane</option>
</Select>
```

### SelectInput (haute niveau)
Wrapper complet de formulaire avec label et validation.
```tsx
import { SelectInput } from "@axa-fr/canopee-react/distributeur";

<SelectInput
  id="couleur"
  name="couleur"
  label="Choisir une couleur"
  options={[
    { value: "rouge", label: "Rouge" },
    { value: "bleu", label: "Bleu" }
  ]}
/>
```

## Props

### SelectInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `options` | `Option[]` | - | Tableau d'objets `{value, label}` |
| `value` | `string` | - | Valeur sélectionnée |
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `label` | `string` | - | Label du champ |
| `placeholder` | `string` | `"- Sélectionner -"` | Texte de sélection par défaut |
| `disabled` | `boolean` | `false` | Désactive la liste |
| `readOnly` | `boolean` | `false` | Mode lecture seule |
| `required` | `boolean` | `false` | Champ obligatoire |
| `helpMessage` | `ReactNode` | - | Message d'aide affiché par défaut sous le champ |
| `message` | `string` | - | Message de statut — affiché uniquement quand `forceDisplayMessage` est `true` |
| `messageType` | `MessageTypes` (`"error"` \| `"success"` \| `"warning"`) | - | Type du message de statut |
| `forceDisplayMessage` | `boolean` | `false` | Active l'affichage du `message` à la place de `helpMessage` |
| `onChange` | `function` | - | Gestionnaire de changement |
| `onBlur` | `function` | - | Gestionnaire de perte de focus |
| `children` | `ReactNode` | - | Éléments JSX d'options |

## Utilisation de base

### Select simple avec options
```tsx
import { useState } from "react";
import { Select } from "@axa-fr/canopee-react/distributeur";

const SelecteurCouleur = () => {
  const [couleur, setCouleur] = useState("");
  
  return (
    <Select
      id="couleur"
      name="couleur"
      placeholder="Choisir une couleur"
      options={[
        { value: "rouge", label: "Rouge" },
        { value: "vert", label: "Vert" },
        { value: "bleu", label: "Bleu" }
      ]}
      value={couleur}
      onChange={(e) => setCouleur(e.target.value)}
    />
  );
};
```

### Select avec enfants (JSX)
```tsx
<Select id="taille" name="taille">
  <optgroup label="Tailles vêtements">
    <option value="xs">Très petit</option>
    <option value="s">Petit</option>
    <option value="m">Moyen</option>
  </optgroup>
  <optgroup label="Grandes tailles">
    <option value="l">Grand</option>
    <option value="xl">Très grand</option>
  </optgroup>
</Select>
```

### SelectInput avec label
```tsx
<SelectInput
  id="pays"
  name="pays"
  label="Pays"
  placeholder="- Sélectionner un pays -"
  options={[
    { value: "fr", label: "France" },
    { value: "de", label: "Allemagne" },
    { value: "en", label: "Royaume-Uni" }
  ]}
  required
/>
```

### Select avec enfants JSX
```tsx
<Select id="taille" name="taille">
  <option value="">-- Sélectionner --</option>
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</Select>
```

## Validation

### Champ obligatoire
```tsx
<SelectInput
  id="role"
  name="role"
  label="Rôle utilisateur"
  required
  options={[
    { value: "admin", label: "Administrateur" },
    { value: "user", label: "Utilisateur standard" }
  ]}
/>
```

### Avec message d'erreur
```tsx
const [role, setRole] = useState("");
const [erreur, setErreur] = useState("");

const handleChange = (e) => {
  const valeur = e.target.value;
  setRole(valeur);
  if (!valeur) {
    setErreur("Veuillez sélectionner un rôle");
  } else {
    setErreur("");
  }
};

<SelectInput
  id="role"
  name="role"
  label="Rôle utilisateur"
  value={role}
  onChange={handleChange}
  message={erreur}
  messageType={erreur ? "error" : undefined}
  forceDisplayMessage={Boolean(erreur)}
  options={[
    { value: "admin", label: "Admin" },
    { value: "user", label: "Utilisateur" }
  ]}
/>
```

### Avec texte d'aide
```tsx
<SelectInput
  id="type"
  name="type"
  label="Type de document"
  options={[
    { value: "pdf", label: "PDF" },
    { value: "doc", label: "Document Word" }
  ]}
  helpMessage="Sélectionnez le format du document"
/>
```

## États

### Désactivé
```tsx
<SelectInput
  id="desactive"
  name="desactive"
  label="Désactivé"
  disabled
  options={[
    { value: "opt1", label: "Option 1" }
  ]}
/>
```

### Lecture seule
```tsx
<SelectInput
  id="lecture"
  name="lecture"
  label="Lecture seule"
  readOnly
  value="valeur-fixe"
  options={[
    { value: "valeur-fixe", label: "Valeur fixe" }
  ]}
/>
```

## Intégration en formulaire

```tsx
const FormulaireAbonnement = () => {
  const [formData, setFormData] = useState({
    pays: "",
    typePlan: ""
  });
  
  const handleChange = (champ) => (e) => {
    setFormData(prev => ({
      ...prev,
      [champ]: e.target.value
    }));
  };
  
  return (
    <form className="af-form" onSubmit={(e) => {
      e.preventDefault();
      console.log("Données :", formData);
    }}>
      <SelectInput
        id="pays"
        name="pays"
        label="Pays"
        value={formData.pays}
        onChange={handleChange("pays")}
        required
        options={[
          { value: "fr", label: "France" },
          { value: "de", label: "Allemagne" }
        ]}
      />
      
      <SelectInput
        id="plan"
        name="plan"
        label="Type de plan"
        value={formData.typePlan}
        onChange={handleChange("typePlan")}
        options={[
          { value: "basic", label: "Basique" },
          { value: "pro", label: "Professionnel" }
        ]}
      />
      
      <button type="submit">S'abonner</button>
    </form>
  );
};
```

## Groupes d'options (mode enfants)

```tsx
<Select>
  <optgroup label="Fruits">
    <option value="pomme">Pomme</option>
    <option value="banane">Banane</option>
  </optgroup>
  <optgroup label="Légumes">
    <option value="carotte">Carotte</option>
    <option value="brocoli">Brocoli</option>
  </optgroup>
</Select>
```

## Accessibilité
- Labels associés via la prop `label`
- Élément HTML `<select>` sémantique
- Navigation clavier (touches fléchées pour sélectionner)
- Indicateurs de champs obligatoires visibles
- Messages d'erreur liés via `aria-describedby`

## Bonnes pratiques
- Utiliser des labels d'options clairs et concis
- Fournir une option par défaut/placeholder
- Grouper les options liées en mode enfants
- Valider la sélection avant soumission
- Envisager Radio ou Checkbox pour 3 options ou moins

## Classes CSS
- `.af-form__select` - Classe de base de la liste déroulante
- `.af-form__select--required` - Champ obligatoire
- `.af-form__select--disabled` - État désactivé
