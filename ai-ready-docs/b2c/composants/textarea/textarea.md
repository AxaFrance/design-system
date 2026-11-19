# TextArea 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le TextArea permet à l'utilisateur de saisir un texte long, sur plusieurs lignes.

## Quand l'utiliser

### À utiliser pour

- Saisir un texte libre de plusieurs phrases, comme une demande, un commentaire ou la description d'un sinistre.
- Afficher un texte déjà connu et bloqué, que l'utilisateur peut changer avec l'action « Modifier » de son libellé.

### À ne pas utiliser pour

- Un texte court sur une seule ligne, comme un nom ou une adresse e-mail : prendre TextInput.
- Un choix parmi une liste fermée : prendre Select.
- Un fichier à envoyer : prendre FileUpload.

## Règles selon les propriétés

### state=hover

Le pointeur survole le champ.

### state=focus

Le champ a le focus, au clavier ou après un clic. Un curseur apparaît, avant le placeholder ou après la valeur.

### filled=true

Le champ contient une valeur, saisie par l'utilisateur ou déjà connue. Il passe en filled=true dès le premier caractère saisi.

### tone=warning

La valeur est acceptée, mais elle mérite l'attention de l'utilisateur. Le message sous le champ dit pourquoi.

### tone=error

La valeur est refusée.

### disabled=true

Le champ ne peut pas être modifié. disabled=true sert aussi à montrer un texte bloqué, avec l'action « Modifier » du libellé.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Demande libre : label « Votre demande », avec l'aide « 1800 caractères maximum. »
- Champ obligatoire resté vide : tone=error, filled=false, message « Décrivez votre demande en quelques mots. »
- Texte connu et bloqué : disabled=true, filled=true, avec l'action « Modifier » du libellé.

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=warning ou tone=error.
- Remplacer le libellé par le placeholder.
- Modifier localement la taille, l'espacement ou les couleurs du TextArea, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Un placeholder, facultatif, que la valeur saisie remplace.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous le champ.
- Un message, obligatoire en tone=warning ou tone=error : un second _FormHelperText, du même ton que le champ, sous l'aide.
- Une poignée de redimensionnement, en bas à droite du champ, affichée par le navigateur.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel.
- **Placeholder.** Une consigne courte, comme « Décrivez votre demande ». Une consigne dont l'utilisateur a besoin pendant la saisie va dans l'aide, car le placeholder disparaît dès le premier caractère.
- **Aide.** Les consignes indispensables pour remplir le champ, comme le nombre maximum de caractères.
- **Message.** En tone=error, comment corriger la saisie, avec un verbe à l'impératif. Exemple : « Décrivez votre demande en quelques mots. » En tone=warning, pourquoi la valeur mérite l'attention.

## Comportement

- Un clic dans le champ ou sur son libellé donne le focus au champ.
- Quand le texte dépasse la hauteur du champ, il défile dans le champ. L'utilisateur peut agrandir le champ avec la poignée en bas à droite.
- La touche Entrée ajoute une ligne. Elle n'envoie pas le formulaire.
- Pendant le focus, le message reste affiché, même en tone=warning ou tone=error.
- En disabled=true, le champ ne réagit ni au clic ni au clavier. L'action « Modifier » du libellé reste cliquable.
- Un clic sur « Modifier » ne débloque pas le champ de lui-même : la page le repasse en disabled=false. La place du focus après ce clic : Non documenté.
- Le moment où le message d'erreur apparaît, à la sortie du champ ou à l'envoi du formulaire : Non documenté.

## Accessibilité

Un élément `<textarea>`, relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ.

- Le nom accessible est le libellé. Le placeholder ne le remplace jamais.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`.
- En tone=error, le champ porte `aria-invalid="true"`, et `aria-errormessage` le relie au message.
- En tone=warning, `aria-describedby` relie le message au champ, sans `aria-invalid`.
- Un nombre maximum de caractères passe par l'attribut `maxlength`, et l'aide l'annonce.
- Un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- Le champ entre dans l'ordre de tabulation, sauf en disabled=true. La touche Tab fait sortir du champ. Le focus reste toujours visible.
- Le texte et le placeholder contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure atteint au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-input-textarea--textarea) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-input-textarea--textarea).

Code source : [dossier TextArea sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/TextArea).

Détail de l'implémentation : [page TextArea du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/03-form-inputs.md#textarea).

Cette fiche sur GitHub : [textarea.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/textarea/textarea.md).

Import, selon le thème :

```tsx
import { TextArea } from "@axa-fr/canopee-react/prospect";
import { TextArea } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<TextArea
  label="Votre demande"
  helper="1800 caractères maximum."
  maxLength={1800}
  message="Décrivez votre demande en quelques mots."
  messageType="error"
  required
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Le libellé, un _FormLabel réglable depuis le TextArea | `label`, `description`, `required`, `moreButtonLabel` et `sideButtonLabel` |
| showLabel=false | `label` absent, et `aria-labelledby` sur le champ |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| placeholder, affiché par showPlaceholder | `placeholder` |
| value | `value` ou `defaultValue` |
| disabled | `disabled` |
| state et filled | Sans équivalent, le code utilise `:hover`, `:focus` et la valeur saisie |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. La poignée de redimensionnement n'a pas de code : le navigateur l'affiche lui-même. Le composant accepte tous les attributs d'un `<textarea>`, comme `name`, `rows` ou `maxLength`. Sans équivalent dans Figma : `onMoreButtonClick`, `onSideButtonClick` et `containerProps`.

## Noms à ne pas employer

Textarea, Text Area, zone de texte, champ multiligne.

Ces noms désignent TextArea. Le seul nom à employer est TextArea.

## Décisions

- **1.0.0 - 18/11/26.** Le TextArea reprend les choix du TextInput, sans l'icône ni le chargement : mêmes états, mêmes couleurs, même libellé, même aide et même message. Dans le code, TextArea a les mêmes props qu'`InputText`, sauf `unit`.
- **1.0.0 - 18/11/26.** Les états suivent les principes d'interaction du pattern Contour. Au hover, la bordure passe à 2 px sans changer de couleur, et au focus en color/blue/400, 2 px. Une valeur saisie passe en color/gray/900 sans toucher à la bordure. L'ancienne version et le code mettent du bleu foncé au hover, au focus et en filled=true.
- **1.0.0 - 18/11/26.** En tone=warning et tone=error, la bordure prend la couleur du ton, en 1 px au repos et en 2 px au hover, comme en tone=neutral. Le message porte le sens, en plus de la couleur.
- **1.0.0 - 18/11/26.** L'aide et le message sont deux _FormHelperText inclus dans le TextArea et réglables depuis lui, comme `helper` et `message` dans le code. Une consigne et une erreur peuvent ainsi s'afficher ensemble.
- **1.0.0 - 18/11/26.** En disabled=true, seul le champ passe en gris. Le libellé et l'aide restent lisibles, car un champ désactivé montre aussi un texte bloqué.
- **1.0.0 - 18/11/26.** La poignée de redimensionnement reste grise dans tous les états, car le navigateur l'affiche lui-même. Dans Figma, c'est le composant native/ResizeHandle, placé en position absolue dans le coin du champ.
- **1.0.0 - 18/11/26.** Le champ fait au moins deux lignes, soit 80 px de haut avec ses marges intérieures, sur desktop comme sur mobile.
- **1.0.0 - 18/11/26.** Le TextArea a 40 variantes : toutes les combinaisons de state, filled et tone, et deux variantes en disabled=true, pour chaque breakpoint.
- **1.0.0 - 18/11/26.** Dans Figma, les thèmes prospect et client avaient chacun leur TextArea, aux variantes identiques, avec un arrondi de 8 px. Un seul TextArea sert maintenant aux deux thèmes.

## Points ouverts

- **Couleurs et épaisseurs dans le code.** Le code met une bordure bleu foncé au hover, au focus et en filled=true (`TextAreaApollo.css:11`). En erreur et en avertissement, sa bordure fait 2 px au repos (`TextAreaCommon.css:19`) et 3 px au hover comme au focus (`TextAreaApollo.css:25`, `TextAreaCommon.css:47`), et garde la couleur du ton au focus. En attendant : signaler.
- **Texte saisi dans le code.** Le code affiche le texte saisi en semi-gras (`TextAreaCommon.css:11`), alors que Figma l'affiche en regular. En attendant : signaler.
- **Interligne et hauteur dans le code.** Le code utilise un interligne de 125 % (`TextAreaCommon.css:12`), soit 20 px sur mobile et 22,5 px sur desktop, au lieu des 24 px du style label/1/regular. Sur mobile, le champ fait 72 px de haut dans le code, au lieu de 80 (`TextAreaCommon.css:6`). En attendant : signaler.
- **Thème client dans le code.** Le code du thème client garde un arrondi de 4 px (`TextAreaLF.css:5`). En attendant : signaler.
- **Message de succès.** Le code accepte `messageType="success"`, que Figma n'a pas. En attendant : signaler.
- **Avertissement dans le code.** Le code ne relie pas le message d'avertissement au champ. `aria-describedby` ne pointe que vers l'aide (`TextAreaCommon.tsx:91`), et `aria-errormessage` ne sert qu'en erreur (`TextAreaCommon.tsx:90`). Le lecteur d'écran annonce l'avertissement quand il apparaît, mais ne le relit pas quand le champ reprend le focus. En attendant : signaler.
- **Focus après « Modifier ».** La place du focus après un clic sur « Modifier » n'est pas définie. En attendant : signaler.
- **Moment d'affichage de l'erreur.** Rien ne dit si le message d'erreur apparaît à la sortie du champ ou à l'envoi du formulaire. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
