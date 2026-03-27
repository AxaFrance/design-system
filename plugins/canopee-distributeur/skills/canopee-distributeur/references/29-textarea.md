# Textarea / TextareaInput

Champ de saisie multiligne. `Textarea` est le composant bas niveau ; `TextareaInput` est le wrapper complet avec label et gestion des erreurs.

## Import

```tsx
import { Textarea, TextareaInput } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### TextareaInput (recommandé)

Wrapper complet avec label, message d'erreur et layout de formulaire.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `id` | `string` | Auto-généré | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `message` | `string` | - | Message d'erreur affiché sous le champ |
| `messageType` | `"error" \| "success" \| "info"` | - | Type du message |
| `required` | `boolean` | `false` | Champ obligatoire |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `helpMessage` | `ReactNode` | - | Message d'aide |
| `rows` | `number` | - | Nombre de lignes visibles (hérité de `<textarea>`) |
| `placeholder` | `string` | - | Texte placeholder |

Tous les attributs HTML standard du `<textarea>` sont supportés.

### Textarea (bas niveau)

Champ `<textarea>` stylé seul, sans label ni gestion d'erreur.

#### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `classModifier` | `string` | - | Modificateur CSS BEM |

Plus tous les attributs HTML standard de `<textarea>`.

## Utilisation

```tsx
import { TextareaInput } from "@axa-fr/canopee-react/distributeur";

// Utilisation standard
<TextareaInput
  id="message"
  name="message"
  label="Votre message"
  placeholder="Saisissez votre message..."
  rows={5}
/>

// Avec validation
<TextareaInput
  id="commentaire"
  name="commentaire"
  label="Commentaire"
  required
  message={erreurs.commentaire}
  messageType="error"
/>

// Avec message d'aide
<TextareaInput
  id="description"
  name="description"
  label="Description du sinistre"
  helpMessage="Décrivez en détail les circonstances du sinistre."
  rows={8}
/>
```
