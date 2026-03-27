# Form Select (Liste déroulante)

## Présentation
Le composant Select fournit une liste déroulante pour les formulaires. Il supporte les options simples et les enfants JSX personnalisés, avec deux modes de rendu.

## Import
```tsx
import { Select, SelectBase, SelectInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Select (composant intelligent)
Détecte automatiquement les enfants ou la prop options.
```tsx
import { Select } from "@axa-fr/canopee-react/distributeur";

// Avec tableau d'options
<Select 
  options={[
    { value: "pomme", label: "Pomme" },
    { value: "banane", label: "Banane" }
  ]}
/>

// Avec enfants
<Select>
  <option value="pomme">Pomme</option>
  <option value="banane">Banane</option>
</Select>
```

### SelectBase (bas niveau)
Élément select principal avec logique de rendu des options.
```tsx
import { SelectBase } from "@axa-fr/canopee-react/distributeur";

<SelectBase
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ]}
/>
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

### Select / SelectInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `options` | `Option[]` | - | Tableau d'objets `{value, label}` |
| `value` | `string` | - | Valeur sélectionnée |
| `mode` | `"default" \| "base"` | `"default"` | Mode de rendu |
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `label` | `string` | - | Label du champ |
| `placeholder` | `string` | `"- Sélectionner -"` | Texte de sélection par défaut |
| `disabled` | `boolean` | `false` | Désactive la liste |
| `readOnly` | `boolean` | `false` | Mode lecture seule |
| `required` | `boolean` | `false` | Champ obligatoire |
| `message` | `string` | - | Message de validation |
| `messageType` | `"error" \| "info" \| "success"` | - | Style du message |
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

## Modes

### Mode default (prop value)
API simplifiée avec tableau d'options.
```tsx
<Select
  mode="default"
  options={[
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" }
  ]}
/>
```

### Mode base (enfants JSX)
Contrôle total avec éléments option JSX.
```tsx
<Select mode="base">
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
  message="Sélectionnez le format du document"
  messageType="info"
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
