# FileInput 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le FileInput permet à l'utilisateur d'importer un fichier, en le déposant ou en le choisissant sur son appareil.

## Quand l'utiliser

### À utiliser pour

- Joindre un fichier à une demande, comme un justificatif de domicile ou la photo d'un sinistre. Le plus souvent dans FileUpload, qui affiche ensuite les fichiers importés.

### À ne pas utiliser pour

- Montrer les fichiers déjà importés, avec leur chargement ou leur erreur : prendre le template FileUpload, qui contient le FileInput et la liste des fichiers.
- Saisir un texte : prendre TextInput ou TextArea.

## Règles selon les propriétés

### state=hover

Le pointeur survole la zone de dépôt.

### state=focus

La zone de dépôt a le focus, au clavier ou après un clic.

### tone=error

Le fichier est refusé, ou le champ est obligatoire et aucun fichier n'est importé.

### disabled=true

Le champ ne peut pas être utilisé. Les cas où le désactiver : Non documenté.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ, comme le titre de la section qui le contient.

### breakpoint=0

Sur un écran de moins de 1024 px de large. La zone n'affiche que le Button « Importer fichier », qui en prend toute la largeur. Le texte « Glisser et déposer un fichier » disparaît, car le glisser-déposer sert rarement sur un petit écran, souvent tactile.

## Exemples

- Justificatif de domicile : label « Justificatif de domicile », aide « PDF, JPEG ou PNG, 10 Mo maximum. »
- Format refusé : tone=error, message « Importez un fichier PDF, JPEG ou PNG. »
- Champ obligatoire resté vide : tone=error, message « Importez votre justificatif de domicile. »

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=error.
- Remplacer le libellé par les textes de la zone de dépôt.
- Modifier localement la taille, l'espacement ou les couleurs du FileInput, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Une zone de dépôt, avec les textes « Glisser et déposer un fichier » et « ou », puis un Button « Importer fichier », sans action propre : toute la zone réagit au clic.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous la zone.
- Un message, obligatoire en tone=error : un second _FormHelperText d'erreur, sous l'aide.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel, et nomme le document attendu. Exemple : « Justificatif de domicile ».
- **Aide.** Les formats acceptés et la taille maximale. Exemple : « PDF, JPEG ou PNG, 10 Mo maximum. »
- **Textes de la zone.** « Glisser et déposer un fichier », « ou » et « Importer fichier » ne changent pas.
- **Message.** En tone=error, comment corriger, avec un verbe à l'impératif. Exemple : « Importez un fichier PDF, JPEG ou PNG. »

## Comportement

- Un clic n'importe où dans la zone de dépôt ouvre la fenêtre de choix de fichier de l'appareil.
- Un fichier glissé et déposé dans la zone est importé, quelle que soit la largeur de l'écran.
- Après le choix d'un fichier, le FileInput garde le même aspect. Le fichier choisi s'affiche dans la liste de FileUpload, que la page remplit.
- Plusieurs fichiers dans un même FileInput : Non documenté.
- La page vérifie le fichier choisi, son format et sa taille, et passe le champ en tone=error s'il est refusé.
- La liste des fichiers importés n'appartient pas au FileInput : FileUpload l'affiche.
- En disabled=true, le champ ne réagit ni au clic, ni au glisser-déposer, ni au clavier.
- Le message d'erreur apparaît quand l'utilisateur choisit un fichier refusé, ou quand il envoie le formulaire sans avoir importé de fichier dans un champ obligatoire. Il disparaît quand un fichier accepté est importé.

## Accessibilité

Un élément `<input type="file">`, transparent, qui couvre toute la zone de dépôt. Il est relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ. Dans le code, le Button « Importer fichier » est un `<span>` qui en reprend le style. L'`<input>`, posé par-dessus, reçoit le clic et le focus.

- Le nom accessible est le libellé.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`. Elle donne les formats acceptés, que le lecteur d'écran n'annonce pas autrement.
- En tone=error, le champ porte `aria-invalid="true"`, et `aria-describedby` le relie au message, avec l'aide.
- Un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- Le champ entre dans l'ordre de tabulation, sauf en disabled=true. La touche Espace ou Entrée ouvre la fenêtre de choix de fichier. Le focus reste toujours visible.
- Les textes contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure atteint au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-fileupload-inputfile--inputfile) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-fileupload-inputfile--inputfile).

Code source : [dossier InputFile sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/FileUpload/InputFile).

Détail de l'implémentation : [page FileUpload du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/04-form-misc.md#fileupload), qui décrit aussi `InputFile`.

Cette fiche sur GitHub : [fileinput.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/fileinput/fileinput.md).

Import, selon le thème :

```tsx
import { InputFile } from "@axa-fr/canopee-react/prospect";
import { InputFile } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<InputFile
  label="Justificatif de domicile"
  helper="PDF, JPEG ou PNG, 10 Mo maximum."
  accept=".pdf,.jpg,.jpeg,.png"
  required
  onChange={handleChange}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| FileInput | `InputFile` |
| Le libellé, un _FormLabel réglable depuis le FileInput | `label`, `description`, `required`, `moreButtonLabel` et `sideButtonLabel` |
| showLabel=false | `label` absent, et `aria-labelledby` sur le champ |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| Les textes de la zone de dépôt | `dropzoneLabels`, avec `dropzone`, `or` et `button` |
| disabled | `disabled`, sans rendu prévu dans le code, voir les points ouverts |
| state | Sans équivalent, le code utilise `:hover` et `:focus` |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code : une media query affiche les textes de la zone à partir de 1024 px. Le composant accepte les attributs d'un `<input>`, comme `accept`, `multiple`, `name` ou `onChange`, sauf `type`. `messageType` vaut `error` par défaut (`InputFileCommon.tsx:113`). Sans équivalent dans Figma : `onMoreButtonClick`, `onSideButtonClick`, `labelProps`, `containerProps`, et `children`, que FileUpload utilise pour afficher la liste des fichiers.

## Noms à ne pas employer

InputFile, Input File, champ fichier, sélecteur de fichier, upload.

Ces noms désignent FileInput. Le seul nom à employer est FileInput.

## Décisions

- **1.0.0 - 23/11/26.** FileInput est la zone de dépôt de FileUpload, devenue un composant à part, comme `InputFile` dans le code. Il s'utilise seul, ou dans FileUpload avec la liste des fichiers.
- **1.0.0 - 23/11/26.** FileInput reprend les choix du TextInput pour le libellé, l'aide, le message et les états du pattern Contour. Sa bordure est en pointillés color/gray/500 de 1 px, et passe à 2 px au hover. Au focus, elle devient pleine, en color/blue/400 de 2 px, comme le prévoient les principes d'interaction.
- **1.0.0 - 23/11/26.** Le Button « Importer fichier » est un Button tertiary, avec l'icône icon/add-circle-fill de la librairie Figma Fondations Canopée. Il remplace un ancien ButtonTertiary archivé. Il prend son hover quand le FileInput prend le hover ou le focus : c'est une exception à la règle des composants imbriqués.
- **1.0.0 - 23/11/26.** Les textes de la zone de dépôt sont en color/blue/600, comme le Button. La version précédente de FileUpload les mettait en color/blue/700.
- **1.0.0 - 23/11/26.** Sur un écran de moins de 1024 px, seul le Button s'affiche dans la zone, comme dans le code.
- **1.0.0 - 23/11/26.** FileInput n'a pas de ton d'avertissement, contrairement aux autres champs. Un avertissement porte presque toujours sur un fichier précis, comme un fichier lourd : il se montre sur la ligne de ce fichier, dans FileUpload. Le code ne donne d'ailleurs aucun rendu d'avertissement à la zone de dépôt (`InputFileCommon.tsx:162`).
- **1.0.0 - 23/11/26.** FileInput a 14 variantes : toutes les combinaisons de state et tone, et une variante en disabled=true, pour chaque breakpoint.
- **1.0.0 - 24/11/26.** FileInput n'a pas de propriété _theme, car le champ est le même dans les deux thèmes. Son Button change de forme : dans le thème client, le designer règle son _theme dans le panneau de FileInput, où il est exposé.
- **1.0.0 - 25/11/26.** Les textes de la zone de dépôt passent en color/blue/700, comme le Button. Cette décision remplace celle du 23/11/26.

## Points ouverts

- **Couleurs et épaisseurs dans le code.** Le code trace la bordure avec une outline en pointillés bleu foncé (`InputFileCommon.css:34`, `InputFileApollo.css:5`, `InputFileLF.css:5`), et met les textes de la zone en bleu foncé (`InputFileApollo.css:6`, `InputFileLF.css:6`). La bordure passe à 2 px au hover et au focus, sans changer de couleur (`InputFileCommon.css:56`). Dans le thème prospect, le Button prend un fond bleu foncé et un texte blanc au hover et au focus (`InputFileApollo.css:10`). En erreur, le rouge diffère entre les thèmes (`InputFileApollo.css:23`, `InputFileLF.css:22`). En attendant : signaler.
- **Focus dans le code.** Le code entoure le Button d'une outline au focus (`InputFileCommon.css:61`), alors que Figma met le focus sur la bordure de la zone. En attendant : signaler.
- **Désactivé dans le code.** Le code accepte `disabled`, mais n'a aucun rendu désactivé pour la zone de dépôt. En attendant : signaler.
- **Lien des messages dans le code.** Le code relie le message d'erreur avec `aria-errormessage` (`InputFileCommon.tsx:170`), au lieu de `aria-describedby`. En attendant : signaler.
- **Messages de succès et d'avertissement.** Le code accepte `messageType="success"` et `messageType="warning"`, que FileInput n'a pas dans Figma. En attendant : signaler.
- **Formats dans le plugin Copilot.** Sa page FileUpload met les formats acceptés dans `description`, alors que cette fiche les met dans l'aide. En attendant : l'aide.
- **Textes de la zone.** Le code permet de changer les textes de la zone avec `dropzoneLabels`, mais aucun usage ne le demande. En attendant : garder les textes par défaut.
- **FileInput sans FileUpload.** Utilisé seul, le FileInput ne montre pas le fichier choisi. Les cas où l'employer seul ne sont pas définis. En attendant : signaler.
- **Plusieurs fichiers.** Le code accepte `multiple`, mais la fiche ne dit pas quand permettre plusieurs fichiers, ni ce que devient un second choix. En attendant : signaler.
- **Texte du bouton et nom accessible.** Le nom accessible du champ, son libellé, ne contient pas le texte visible « Importer fichier ». Une personne qui pilote à la voix risque de ne rien déclencher en le prononçant (WCAG 2.5.3). En attendant : signaler.
- **Cas de désactivation.** Les cas où désactiver le FileInput ne sont pas définis. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
