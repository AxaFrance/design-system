# File / FileInput

Composant d'upload de fichiers avec support du glisser-déposer (drag-and-drop). `File` est le composant bas niveau basé sur `react-dropzone` ; `FileInput` est le wrapper complet avec label, liste des fichiers chargés et gestion des erreurs.

## Import

```tsx
import { FileInput } from "@axa-fr/canopee-react/distributeur";
// ou pour le composant bas niveau :
import { File } from "@axa-fr/canopee-react/distributeur";
```

## Types

```tsx
type FilePreview = File & { preview: string };

type CustomFile<T = FilePreview> = {
  id: string;
  file: T;
};

type FileRejection = /* react-dropzone FileRejection */;
```

## Composants

### FileInput (recommandé)

Wrapper complet avec label, tableau des fichiers ajoutés et gestion des erreurs.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `name` | `string` | `""` | Attribut HTML `name` |
| `onChange` | `(data: { id?, name?, fileAction?, values: CustomFile[], errors?: CustomFile<FileRejection>[] }) => void` | **Obligatoire** | Gestionnaire appelé à chaque ajout/suppression |
| `values` | `CustomFile[]` | `[]` | Liste des fichiers déjà chargés |
| `errors` | `CustomFile<FileRejection>[]` | - | Fichiers refusés (pour affichage d'erreur) |
| `fileLabel` | `string` | - | Texte du bouton "Parcourir" |
| `helpMessage` | `ReactNode` | - | Message d'aide |
| `multiple` | `boolean` | `true` | Autoriser plusieurs fichiers |
| `maxSize` | `number` | `20000000` | Taille maximale en octets (20 Mo par défaut) |
| `accept` | `Accept` | - | Types MIME acceptés (format react-dropzone) |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `message` | `string` | - | Message d'erreur global |

### File (bas niveau)

Zone de drop stylée seule.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `onChange` | `function` | **Obligatoire** | Gestionnaire de fichiers ajoutés |
| `label` | `string` | `"Parcourir"` | Texte du bouton |
| `placeholder` | `string` | `"Glissez/déposez vos fichiers"` | Texte de la zone de drop |
| `multiple` | `boolean` | `true` | Plusieurs fichiers |
| `maxSize` | `number` | `20000000` | Taille max en octets |
| `accept` | `Accept` | - | Types MIME acceptés |

## Utilisation

```tsx
import { useState } from "react";
import { FileInput, type CustomFile } from "@axa-fr/canopee-react/distributeur";

const MonFormulaire = () => {
  const [fichiers, setFichiers] = useState<CustomFile[]>([]);

  const handleChange = ({ values }: { values: CustomFile[] }) => {
    setFichiers(values);
  };

  return (
    <FileInput
      id="documents"
      name="documents"
      label="Pièces justificatives"
      values={fichiers}
      onChange={handleChange}
      accept={{ "application/pdf": [".pdf"], "image/*": [".jpg", ".png"] }}
      maxSize={5000000}
      helpMessage="Formats acceptés : PDF, JPG, PNG. Taille max : 5 Mo."
    />
  );
};
```
