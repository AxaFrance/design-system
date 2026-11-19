# TextInput 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le TextInput permet à l'utilisateur de saisir un texte court, sur une seule ligne.

## Quand l'utiliser

### À utiliser pour

- Saisir un texte court et libre, comme un nom, une adresse e-mail ou un numéro de contrat.
- Afficher une valeur déjà connue et bloquée, que l'utilisateur peut changer avec l'action « Modifier » de son libellé.

### À ne pas utiliser pour

- Un texte sur plusieurs lignes, comme un message : prendre TextArea.
- Un choix parmi une liste fermée : prendre Select.
- Un numéro de téléphone : prendre PhoneInput.
- Une date : prendre DateInput.
- Un fichier à envoyer : prendre FileInput.

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

Le champ ne peut pas être modifié. disabled=true sert aussi à montrer une valeur bloquée, avec l'action « Modifier » du libellé.

### loading=true

Une vérification est en cours sur la valeur saisie, comme la recherche d'une adresse. Un Spinner s'affiche dans le champ, à droite de la valeur.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ, comme l'en-tête d'une colonne de tableau.

### showIcon=true

Une icône précise la valeur, dans le champ, à droite de la valeur, comme icon/currency-euro pour un montant. L'icône se choisit avec icon, parmi les assets de la librairie Figma Fondations Canopée.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Adresse e-mail : label « Adresse e-mail », placeholder « Exemple : nom@domaine.fr ».
- Montant : label « Montant à investir », showIcon=true, avec l'icône icon/currency-euro.
- Adresse e-mail refusée : tone=error, filled=true, message « Saisissez une adresse e-mail valide, comme nom@domaine.fr. »
- Valeur connue et bloquée : disabled=true, filled=true, avec l'action « Modifier » du libellé.

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=warning ou tone=error.
- loading=true sans filled=true, avec disabled=true, ou avec state=hover, state=focus, tone=warning ou tone=error.
- Remplacer le libellé par le placeholder.
- Modifier localement la taille, l'espacement ou les couleurs du TextInput, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Un placeholder, facultatif, que la valeur saisie remplace.
- Une icône ou une unité à droite, facultative.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous le champ.
- Un message, obligatoire en tone=warning ou tone=error : un second _FormHelperText, du même ton que le champ, sous l'aide.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel.
- **Placeholder.** Une consigne courte, comme « Saisissez votre numéro de contrat », ou un exemple du format attendu, comme « Exemple : nom@domaine.fr ». Une consigne dont l'utilisateur a besoin pendant la saisie va dans l'aide, car le placeholder disparaît dès le premier caractère.
- **Aide.** Les consignes indispensables pour remplir le champ, comme le nombre de caractères attendu.
- **Message.** En tone=error, comment corriger la saisie, avec un verbe à l'impératif. Exemple : « Saisissez une adresse e-mail valide, comme nom@domaine.fr. » En tone=warning, pourquoi la valeur mérite l'attention.

## Comportement

- Un clic dans le champ ou sur son libellé donne le focus au champ.
- Pendant le focus, le message reste affiché, même en tone=warning ou tone=error.
- En disabled=true, le champ ne réagit ni au clic ni au clavier. L'action « Modifier » du libellé reste cliquable.
- Un clic sur « Modifier » ne débloque pas le champ de lui-même : la page le repasse en disabled=false. La place du focus après ce clic : Non documenté.
- Le message d'erreur apparaît quand l'utilisateur quitte le champ ou envoie le formulaire. Il disparaît quand la saisie est corrigée.

## Accessibilité

Un élément `<input type="text">`, relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ.

- Le nom accessible est le libellé. Le placeholder ne le remplace jamais.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`.
- En tone=error, le champ porte `aria-invalid="true"`, et `aria-describedby` le relie au message, avec l'aide.
- En tone=warning, `aria-describedby` relie le message au champ, sans `aria-invalid`.
- Une icône qui porte un sens a un texte pour le lecteur d'écran, comme `aria-label="en euros"`.
- Un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- Un champ qui demande une donnée personnelle porte l'attribut `autocomplete` adapté, comme `email` ou `family-name` (WCAG 1.3.5).
- Le type de champ s'adapte à la donnée, comme `type="email"`, pour afficher le bon clavier sur mobile.
- Le champ entre dans l'ordre de tabulation, sauf en disabled=true. Le focus reste toujours visible.
- Le texte et le placeholder contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure atteint au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-input-inputtext--inputtext) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-input-inputtext--inputtext).

Code source : [dossier InputText sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/InputText).

Détail de l'implémentation : [page InputText du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/03-form-inputs.md#inputtext).

Cette fiche sur GitHub : [textinput.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/textinput/textinput.md).

Import, selon le thème :

```tsx
import { InputText } from "@axa-fr/canopee-react/prospect";
import { InputText } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<InputText
  label="Adresse e-mail"
  type="email"
  autoComplete="email"
  placeholder="Exemple : nom@domaine.fr"
  message="Saisissez une adresse e-mail valide, comme nom@domaine.fr."
  messageType="error"
  required
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| TextInput | `InputText` |
| Le libellé, un _FormLabel réglable depuis le TextInput | `label`, `description`, `required`, `moreButtonLabel` et `sideButtonLabel` |
| showLabel=false | `label` absent, et `aria-labelledby` sur le champ |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| placeholder, affiché par showPlaceholder | `placeholder` |
| value | `value` ou `defaultValue` |
| disabled | `disabled` |
| L'icône, affichée par showIcon | `unit` |
| loading | Sans équivalent, voir les points ouverts |
| state et filled | Sans équivalent, le code utilise `:hover`, `:focus` et la valeur saisie |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Le composant accepte tous les attributs d'un `<input>`, comme `type`, `name` ou `autoComplete`. Sans équivalent dans Figma : `onMoreButtonClick`, `onSideButtonClick` et `containerProps`.

## Noms à ne pas employer

InputText, Input Text, champ texte, champ de saisie.

Ces noms désignent TextInput. Le seul nom à employer est TextInput.

## Décisions

- **1.0.0 - 18/11/26.** La propriété editable disparaît. L'action « Modifier » vient du _FormLabel inclus dans le TextInput, dont les propriétés se règlent depuis le TextInput, comme dans le code. Une valeur bloquée est un champ en disabled=true, et la saisie en cours un champ en state=focus et filled=true.
- **1.0.0 - 18/11/26.** Les états suivent les principes d'interaction du pattern Contour. Au hover, la bordure passe à 2 px sans changer de couleur, et au focus en color/blue/400, 2 px. Une valeur saisie passe en color/gray/900 sans toucher à la bordure. L'ancienne version et le code mettent du bleu foncé au hover, au focus et en filled=true.
- **1.0.0 - 18/11/26.** En tone=warning et tone=error, la bordure prend la couleur du ton, en 1 px au repos et en 2 px au hover, comme en tone=neutral. Le message porte le sens, en plus de la couleur.
- **1.0.0 - 18/11/26.** L'aide et le message sont deux _FormHelperText inclus dans le TextInput et réglables depuis lui, comme `helper` et `message` dans le code. Une consigne et une erreur peuvent ainsi s'afficher ensemble.
- **1.0.0 - 18/11/26.** En disabled=true, seul le champ passe en gris. Le libellé et l'aide restent lisibles, car un champ désactivé montre aussi une valeur bloquée.
- **1.0.0 - 18/11/26.** L'icône est un asset de Fondations Canopée, masquée par défaut. Elle correspond à l'emplacement `unit` du code.
- **1.0.0 - 18/11/26.** loading=true affiche un Spinner small à droite de la valeur, à la place de l'icône.
- **1.0.0 - 18/11/26.** Le TextInput a 42 variantes : toutes les combinaisons de state, filled et tone, deux variantes en disabled=true et une en loading=true, pour chaque breakpoint.
- **1.0.0 - 18/11/26.** Dans Figma, les thèmes prospect et client partagent un seul TextInput, celui du thème prospect, avec un arrondi de 8 px. Avant cette version, la librairie Figma n'avait déjà qu'un TextInput pour les deux thèmes.

## Points ouverts

- **Couleurs et épaisseurs dans le code.** Le code met une bordure bleu foncé au hover et au focus (`InputTextAtomApollo.css:13`), et en filled=true (`InputTextAtomApollo.css:46`). En erreur et en avertissement, sa bordure fait 2 px au repos et 3 px au hover (`InputTextAtomCommon.css:83`), et garde la couleur du ton au focus. En attendant : signaler.
- **Thème client dans le code.** Le code du thème client garde un arrondi de 4 px (`InputTextAtomLF.css:6`). En attendant : signaler.
- **Chargement dans le code.** Le code n'a pas d'état de chargement. Sa story Loading vide le champ et le désactive, alors que loading=true garde la valeur saisie. En attendant : passer un Spinner dans `unit`, en gardant la valeur saisie.
- **Message de succès.** Le code accepte `messageType="success"`, que Figma n'a pas. En attendant : signaler.
- **Lien des messages dans le code.** Le code relie le message d'erreur avec `aria-errormessage`, au lieu de `aria-describedby`. Le code ne met pas le message d'avertissement dans `aria-describedby` (`InputTextCommon.tsx:64`). Il le relie par `aria-errormessage`, mais ce lien reste sans effet sans `aria-invalid="true"` (`InputTextAtomCommon.tsx:46`). Le lecteur d'écran annonce le message quand il apparaît, mais ne le relit pas quand le champ reprend le focus. En attendant : signaler.
- **Focus après « Modifier ».** La place du focus après un clic sur « Modifier » n'est pas définie. En attendant : signaler.
- **Texte saisi et interligne dans le code.** Le code affiche le texte saisi en semi-gras (`InputTextAtomCommon.css:24`), alors que Figma l'affiche en regular. Son interligne de 1,25 (`InputTextAtomCommon.css:25`) est plus serré que celui du style label/1/regular. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
