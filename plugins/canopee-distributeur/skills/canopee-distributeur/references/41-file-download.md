# FileDownload

Composant de présentation d'un fichier avec son nom, son statut et des actions optionnelles pour le consulter ou le télécharger.

## Import

```tsx
import { FileDownload } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop                  | Type                  | Défaut          | Description                                                              |
| --------------------- | --------------------- | --------------- | ------------------------------------------------------------------------ |
| `label`               | `string`              | **Obligatoire** | Libellé principal du fichier, affiché comme titre de niveau 3            |
| `fileName`            | `string`              | -               | Nom du fichier affiché sous le libellé                                   |
| `status`              | `string`              | -               | Statut affiché dans un `Tag`                                             |
| `iconSrc`             | `string`              | Icône Security  | Chemin SVG de l'icône affichée à gauche                                  |
| `onConsult`           | `() => Promise<void>` | -               | Callback de consultation ; sa présence affiche le bouton correspondant   |
| `consultButtonLabel`  | `string`              | `"Consulter"`   | Libellé du bouton de consultation                                        |
| `consultDisabled`     | `boolean`             | `false`         | Désactive le bouton de consultation                                      |
| `onDownload`          | `() => Promise<void>` | -               | Callback de téléchargement ; sa présence affiche le bouton correspondant |
| `downloadButtonLabel` | `string`              | `"Télécharger"` | Libellé du bouton de téléchargement                                      |
| `downloadDisabled`    | `boolean`             | `false`         | Désactive le bouton de téléchargement                                    |
| `className`           | `string`              | -               | Classe CSS additionnelle appliquée au composant                          |

Chaque action est indépendante. Ne fournis pas `onConsult` ou `onDownload` lorsque le bouton correspondant ne doit pas être affiché.

## Utilisation

```tsx
import { FileDownload } from "@axa-fr/canopee-react/distributeur";

const consultDocument = async () => {
  // Ouvrir l'aperçu du document.
};

const downloadDocument = async () => {
  // Télécharger le document.
};

<FileDownload
  label="Conditions générales"
  fileName="conditions-generales.pdf"
  status="Disponible"
  onConsult={consultDocument}
  onDownload={downloadDocument}
/>;
```

## Personnalisation des actions et de l'icône

```tsx
import descriptionIcon from "@material-symbols/svg-400/outlined/description.svg";
import { FileDownload } from "@axa-fr/canopee-react/distributeur";

<FileDownload
  label="Relevé annuel"
  fileName="releve-2026.pdf"
  iconSrc={descriptionIcon}
  downloadButtonLabel="Récupérer"
  downloadDisabled={downloadPending}
  onDownload={downloadDocument}
/>;
```
