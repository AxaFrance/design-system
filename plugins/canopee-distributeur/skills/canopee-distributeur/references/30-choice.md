# Choice / ChoiceInput

Groupe de boutons radio spécialisé pour les choix binaires (oui/non, vrai/faux…). Les `options.value` sont des **booléens** (pas des strings).

## Import

```tsx
import { Choice, ChoiceInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### ChoiceInput (recommandé)

Wrapper complet avec label et gestion des erreurs.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du groupe |
| `id` | `string` | **Obligatoire** | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `value` | `boolean \| string` | - | Valeur sélectionnée |
| `options` | `Array<{ value: boolean, label: string }>` | `[{ value: true, label: "Oui" }, { value: false, label: "Non" }]` | Options disponibles |
| `onChange` | `function` | - | Gestionnaire de changement |
| `required` | `boolean` | `false` | Champ obligatoire |
| `disabled` | `boolean` | `false` | État désactivé |
| `message` | `string` | - | Message d'erreur |

### Choice (bas niveau)

Groupe radio sans label ni gestion d'erreur.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | **Obligatoire** | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `value` | `boolean \| string` | - | Valeur sélectionnée |
| `options` | `Array<{ value: boolean, label: string }>` | `[Oui/Non]` | Options (valeurs booléennes) |
| `onChange` | `function` | - | Gestionnaire de changement |

## Utilisation

```tsx
import { ChoiceInput } from "@axa-fr/canopee-react/distributeur";

// Options Oui/Non par défaut
<ChoiceInput
  id="accepte"
  name="accepte"
  label="Acceptez-vous les conditions ?"
  value={accepte}
  onChange={(e) => setAccepte(e.target.value === "true")}
/>

// Options personnalisées
<ChoiceInput
  id="abonnement"
  name="abonnement"
  label="Souhaitez-vous recevoir nos offres ?"
  options={[
    { value: true, label: "Oui, je m'abonne" },
    { value: false, label: "Non merci" }
  ]}
  value={abonnement}
  onChange={(e) => setAbonnement(e.target.value === "true")}
/>
```
