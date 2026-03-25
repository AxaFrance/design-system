# Formulaires — ItemLabel, ItemMessage, FileUpload

---

## ItemLabel

Label enrichi pour les champs de formulaire. Supporte description, bouton "en savoir plus" et bouton action secondaire.

> Normalement utilisé indirectement via InputText, Dropdown, etc. À utiliser directement seulement pour des compositions custom.

### Import

```tsx
import { ItemLabel } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ItemLabelProps = ComponentProps<"label"> & {
  /** @deprecated use children instead */ label?: ReactNode;
  description?: ReactNode;               // Texte descriptif additonnel
  required?: boolean;                    // Affiche un * visuel + attribut HTML required
  /** @deprecated use htmlFor instead */ inputId?: string;
  sideButtonLabel?: ReactNode;           // Label bouton secondaire (ex: "Modifier")
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
  sideButtonProps?: Partial<ButtonProps>;
  /** @deprecated use moreButtonLabel instead */ buttonLabel?: ReactNode;
  /** @deprecated use onMoreButtonClick instead */ onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  moreButtonLabel?: ReactNode;           // Label bouton info (ouvre un tooltip/modal)
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  moreButtonProps?: Partial<ButtonProps>;
};
```

### Exemple

```tsx
<ItemLabel
  htmlFor="email"
  required
  description="Utilisé pour vos notifications"
  moreButtonLabel="En savoir plus"
  onMoreButtonClick={() => openModal()}
  sideButtonLabel="Modifier"
  onSideButtonClick={() => startEdit()}
>
  Adresse email
</ItemLabel>
<input id="email" type="email" />
```

---

## ItemMessage

Message d'état sous un champ de formulaire. Affiche une icône + texte coloré.

### Import

```tsx
import { ItemMessage, itemMessageVariants, type ItemMessageVariants } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ItemMessageProps = {
  message?: ReactNode;            // Affiché uniquement si présent
  id?: string;                    // Pour aria-describedby
  messageType?: "error" | "success" | "warning"; // (défaut: "error")
};
```

### Comportement

- Si `message` est falsy, le composant retourne `null`.
- Type `error` et `warning` : `role="alert"` + `aria-live="assertive"`
- Type `success` : pas de role alert

### Exemple

```tsx
<ItemMessage message="Ce champ est obligatoire" messageType="error" />
<ItemMessage message="Format valide ✓" messageType="success" />
<ItemMessage message="Vérifiez bien votre saisie" messageType="warning" />
```

---

## FileUpload

Zone de dépôt de fichiers complète (drag & drop). Composition avec `InputFile` (zone de dépôt) et `ItemFile` (liste fichiers uploadés).

### Import

```tsx
import { FileUpload, InputFile, ItemFile } from "@axa-fr/canopee-react/prospect";
// ou client
```

### FileUpload Props

```tsx
type FileUploadProps = Omit<InputFileProps, "children"> & {
  children?: ReactElement<ItemFileProps> | ReactElement<ItemFileProps>[];
  fileListLabel?: ReactNode;       // Label de la liste (défaut: "Vos fichiers importés :")
  // + toutes les props InputFile
};
```

### InputFile Props (clés)

```tsx
type InputFileProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  label?: ReactNode;
  description?: ReactNode;
  sideButtonLabel?: ReactNode;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
  moreButtonLabel?: ReactNode;
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  helper?: ReactNode;
  // Labels de la zone de dépôt
  dropzoneLabels?: {
    dropzone?: string;   // texte zone de dépôt
    or?: string;         // texte "ou"
    button?: string;     // texte bouton
  };
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps;
};
```

### ItemFile Props

```tsx
type ItemFileProps = {
  file: File;                     // Objet File JS (obligatoire)
  isLoading?: boolean;            // Affiche un Spinner
  errorMessage?: string;          // Message d'erreur sous le fichier
  onRemove?: (file: File, event: MouseEvent<HTMLButtonElement>) => void;
  onPreview?: (file: File, event: MouseEvent<HTMLButtonElement>) => void;
  previewProps?: Partial<Omit<ClickIconProps, "src" | "onClick">>;
  removeProps?: Partial<Omit<ClickIconProps, "src" | "onClick">>;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;
```

### Exemple complet

```tsx
const [files, setFiles] = useState<File[]>([]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    setFiles([...files, ...Array.from(e.target.files)]);
  }
};

<FileUpload
  label="Justificatifs de domicile"
  description="PDF, JPEG ou PNG, max 10 Mo"
  multiple
  accept=".pdf,.jpg,.jpeg,.png"
  onChange={handleChange}
  fileListLabel="Fichiers sélectionnés :"
>
  {files.map((file) => (
    <ItemFile
      key={file.name}
      file={file}
      onRemove={(f) => setFiles(files.filter((x) => x !== f))}
      onPreview={(f) => window.open(URL.createObjectURL(f))}
    />
  ))}
</FileUpload>
```
