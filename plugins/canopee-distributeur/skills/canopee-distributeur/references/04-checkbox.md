# Form Checkbox (Case à cocher)

## Présentation
Les cases à cocher permettent la sélection multiple. Le composant supporte plusieurs modes d'affichage (classic, default, inline, toggle) et la gestion de sélection groupée.

## Import
```tsx
import { Checkbox, CheckboxItem, CheckboxInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### CheckboxItem (individuelle)
Une seule case à cocher avec label.
```tsx
import { CheckboxItem } from "@axa-fr/canopee-react/distributeur";

<CheckboxItem id="accord" label="J'accepte les conditions" checked={true} />
```

### Checkbox (groupe de données)
Plusieurs cases à cocher générées depuis une liste d'options.
```tsx
import { Checkbox } from "@axa-fr/canopee-react/distributeur";

const options = [
  { value: "pomme", label: "Pomme" },
  { value: "banane", label: "Banane" }
];

<Checkbox options={options} values={["pomme"]} />
```

### CheckboxInput (haute niveau)
Wrapper complèt de formulaire avec label et validation.
```tsx
import { CheckboxInput } from "@axa-fr/canopee-react/distributeur";

<CheckboxInput
  id="fruits"
  name="fruits"
  label="Sélectionner des fruits"
  options={options}
/>
```

## Props

### Checkbox / CheckboxInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `options` | `Option[]` | Obligatoire | Tableau de `{value, label, disabled?, id?}` |
| `values` | `string[]` | - | Valeurs sélectionnées |
| `mode` | `"default" \| "classic" \| "inline" \| "toggle"` | `"default"` | Mode d'affichage |
| `id` | `string` | - | Attribut HTML id |
| `name` | `string` | - | Attribut HTML name |
| `label` | `string` | - | Label du groupe |
| `disabled` | `boolean` | `false` | Désactive toutes les cases |
| `readOnly` | `boolean` | `false` | Mode lecture seule |
| `required` | `boolean` | `false` | Champ obligatoire |
| `onChange` | `function` | - | Gestionnaire de changement |

### CheckboxItem

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `label` | `string \| ReactNode` | - | Label de la case |
| `value` | `string` | - | Valeur de l'option |
| `checked` | `boolean` | `false` | État coché |
| `disabled` | `boolean` | `false` | État désactivé |
| `readOnly` | `boolean` | `false` | État lecture seule |
| `onChange` | `function` | - | Gestionnaire de changement |

## Modes d'affichage

### Mode default (style personnalisé)
Case à cocher moderne avec style personnalisé.
```tsx
const options = [
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
  { value: "py", label: "Python" }
];

<Checkbox
  mode="default"
  options={options}
  values={["js"]}
/>
```

### Mode classic (HTML natif)
Cases à cocher HTML traditionnelles.
```tsx
<Checkbox
  mode="classic"
  options={options}
  values={["js"]}
/>
```

### Mode inline
Disposition horizontale.
```tsx
<Checkbox
  mode="inline"
  options={options}
  values={["js"]}
/>
```

### Mode toggle
Interrupteurs style iOS (pour sélections 2 options).
```tsx
const optionsToggle = [
  { value: "oui", label: "Oui" },
  { value: "non", label: "Non" }
];

<Checkbox
  mode="toggle"
  options={optionsToggle}
  values={["oui"]}
/>
```

## Case à cocher individuelle

### Case simple
```tsx
const [accepte, setAccepte] = useState(false);

<CheckboxItem
  id="conditions"
  label="J'accepte les conditions générales"
  checked={accepte}
  onChange={(e) => setAccepte(e.target.checked)}
/>
```

### Case désactivée
```tsx
<CheckboxItem
  id="desactivee"
  label="Option désactivée"
  disabled
/>
```

## Sélection multiple

### Groupe de base
```tsx
import { useCallback, useState } from "react";
import { Checkbox } from "@axa-fr/canopee-react/distributeur";

const centres = [
  { value: "sport", label: "Sport" },
  { value: "musique", label: "Musique" },
  { value: "jeux", label: "Jeux vidéo" },
  { value: "lecture", label: "Lecture" }
];

const SelecteurCentresInteret = () => {
  const [selection, setSelection] = useState<string[]>([]);
  
  const handleChange = useCallback((data) => {
    setSelection(data.values);
  }, []);
  
  return (
    <Checkbox
      id="centres"
      name="centres"
      options={centres}
      values={selection}
      onChange={handleChange}
    />
  );
};
```

### Avec validation
```tsx
const [centres, setCentres] = useState<string[]>([]);
const [erreur, setErreur] = useState("");

const handleChange = (data) => {
  setCentres(data.values);
  if (data.values.length === 0) {
    setErreur("Veuillez sélectionner au moins un centre d'intérêt");
  } else {
    setErreur("");
  }
};

<CheckboxInput
  id="centres"
  name="centres"
  label="Sélectionnez vos centres d'intérêt"
  options={centres}
  values={centres}
  onChange={handleChange}
  message={erreur}
  messageType={erreur ? "error" : undefined}
/>
```

### Options désactivées
```tsx
const optionsStatut = [
  { value: "actif", label: "Actif" },
  { value: "inactif", label: "Inactif", disabled: true },
  { value: "en-attente", label: "En attente" }
];

<Checkbox
  options={optionsStatut}
  values={["actif"]}
/>
```

## Intégration en formulaire

```tsx
const FormulaireInscription = () => {
  const [data, setData] = useState({
    centres: [],
    newsletter: false
  });
  
  return (
    <form className="af-form" onSubmit={(e) => {
      e.preventDefault();
      console.log("Données :", data);
    }}>
      <Checkbox
        id="centres"
        name="centres"
        label="Centres d'intérêt"
        options={[
          { value: "tech", label: "Technologie" },
          { value: "business", label: "Business" }
        ]}
        values={data.centres}
        onChange={(checkboxData) => setData(prev => ({
          ...prev,
          centres: checkboxData.values
        }))}
      />
      
      <CheckboxItem
        id="newsletter"
        name="newsletter"
        label="S'abonner à la newsletter"
        checked={data.newsletter}
        onChange={(e) => setData(prev => ({
          ...prev,
          newsletter: e.target.checked
        }))}
      />
      
      <button type="submit">S'inscrire</button>
    </form>
  );
};
```

## Structure de données du gestionnaire onChange

Le gestionnaire `onChange` reçoit un objet avec :
```tsx
{
  id?: string;           // id du composant
  name?: string;         // name du composant
  values: string[];      // Tableau des valeurs sélectionnées
  target: {
    value: string;       // Valeur de l'élément modifié
    checked: boolean;    // Nouvel état coché
  }
}
```

## Accessibilité
- Labels associés à chaque case à cocher
- Navigation clavier (Tab pour se déplacer, Espace/Entrée pour basculer)
- Indicateurs visuels pour les états coché, désactivé et focusé
- Attributs ARIA pour les lecteurs d'écran
- Indicateurs de champs obligatoires visibles

## Bonnes pratiques
- Regrouper les cases à cocher liées
- Utiliser `mode="default"` pour une UI moderne
- Fournir des labels clairs et descriptifs
- Utiliser l'état désactivé pour les options indisponibles
- Valider les minimums/maximums requis (ex : "sélectionner au moins 2")
- Organiser les cases à cocher logiquement
- Tester avec la navigation au clavier uniquement

## Classes CSS
- `.af-form__checkbox-custom` - Style du mode par défaut
- `.af-form__checkbox` - Style du mode classique
- `.af-form__checkbox-inline` - Style du mode en ligne
- `.af-form__checkbox-toggle` - Style du mode bascule
