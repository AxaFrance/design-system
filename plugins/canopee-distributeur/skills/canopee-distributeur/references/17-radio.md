# Form Radio (Bouton radio)

## Présentation
Le composant Radio permet une sélection unique parmi plusieurs options, avec différents modes d'affichage (classic, default, inline, card).

## Import
```tsx
import { Radio, RadioItem, RadioInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants
- **Radio** : Groupe de boutons radio générés depuis une liste d'options
- **RadioItem** : Bouton radio individuel
- **RadioInput** : Wrapper haute niveau avec label et validation

## Utilisation de base

```tsx
import { Radio } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const SelecteurCivilite = () => {
  const [civilite, setCivilite] = useState("");
  
  return (
    <Radio
      id="civilite"
      name="civilite"
      mode="default"
      value={civilite}
      onChange={(e) => setCivilite(e.target.value)}
      options={[
        { value: "m", label: "M." },
        { value: "mme", label: "Mme" },
        { value: "autre", label: "Autre" }
      ]}
    />
  );
};
```

## Modes d'affichage

```tsx
// Classic (HTML natif)
<Radio mode="classic" options={options} />

// Default (stylé personnalisé)
<Radio mode="default" options={options} />

// Inline (disposition horizontale)
<Radio mode="inline" options={options} />

// Card (grandes cartes cliquables)
<Radio mode="cardRadio" options={options} />
```

## Props — RadioInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `options` | `Option[]` | Obligatoire | Tableau de `{value, label, disabled?, id?}` |
| `value` | `string` | - | Valeur sélectionnée |
| `mode` | `"default" \| "classic" \| "inline" \| "cardRadio"` | `"default"` | Mode d'affichage |
| `id` | `string` | - | Attribut HTML id |
| `name` | `string` | - | Attribut HTML name |
| `label` | `ReactNode` | - | Label du groupe |
| `disabled` | `boolean` | `false` | Désactive tous les boutons |
| `required` | `boolean` | `false` | Champ obligatoire |
| `helpMessage` | `ReactNode` | - | Message d'aide affiché par défaut sous le champ |
| `message` | `string` | - | Message de statut — affiché uniquement quand `forceDisplayMessage` est `true` |
| `messageType` | `MessageTypes` (`"error"` \| `"success"` \| `"warning"`) | - | Type du message de statut |
| `forceDisplayMessage` | `boolean` | `false` | Active l'affichage du `message` à la place de `helpMessage` |
| `onChange` | `function` | - | Gestionnaire de changement |

## Intégration en formulaire

```tsx
const FormulairePreferences = () => {
  const [preferences, setPreferences] = useState({
    frequence: "hebdomadaire",
    format: "email"
  });
  
  return (
    <form className="af-form">
      <RadioInput
        id="frequence"
        name="frequence"
        label="Fréquence des mises à jour"
        value={preferences.frequence}
        onChange={(e) => setPreferences({
          ...preferences,
          frequence: e.target.value
        })}
        options={[
          { value: "quotidien", label: "Quotidien" },
          { value: "hebdomadaire", label: "Hebdomadaire" },
          { value: "mensuel", label: "Mensuel" }
        ]}
      />
      
      <RadioInput
        id="format"
        name="format"
        label="Format de notification"
        mode="inline"
        value={preferences.format}
        onChange={(e) => setPreferences({
          ...preferences,
          format: e.target.value
        })}
        options={[
          { value: "email", label: "E-mail" },
          { value: "sms", label: "SMS" },
          { value: "push", label: "Notification push" }
        ]}
      />
      
      <button type="submit">Enregistrer</button>
    </form>
  );
};
```

## Classes CSS
- `.af-form__radio` - Mode classic
- `.af-form__radio-custom` - Mode default
- `.af-form__radio-inline` - Mode inline
- `.af-form__radio-card` - Mode card
