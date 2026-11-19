# DateInput 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le DateInput permet à l'utilisateur de saisir une date, au clavier ou dans un calendrier.

## Quand l'utiliser

### À utiliser pour

- Saisir une date précise, comme une date de naissance ou la date d'un sinistre.

### À ne pas utiliser pour

- Une durée ou un nombre de jours : prendre TextInput.
- Un choix parmi quelques dates proposées : prendre Radio. Parmi une longue liste de dates : prendre Select.

## Règles selon les propriétés

### state=hover

Le pointeur survole le champ.

### state=focus

Le champ a le focus, au clavier ou après un clic. Un curseur apparaît, avant le placeholder ou après la valeur.

### open=true

Le calendrier du navigateur est ouvert.

### filled=true

Le champ contient une date, saisie par l'utilisateur ou déjà connue. Il passe en filled=true dès le premier chiffre saisi.

### tone=warning

La date est acceptée, mais elle mérite l'attention de l'utilisateur. Le message sous le champ dit pourquoi.

### tone=error

La date est refusée.

### disabled=true

Le champ ne peut pas être modifié.

### showIcon=false

L'icône de calendrier est masquée, et le calendrier ne s'ouvre plus. L'utilisateur saisit la date au clavier, au format JJ/MM/AAAA. showIcon=false convient à une date que l'utilisateur connaît par cœur, comme sa date de naissance. La taper va plus vite que la chercher dans un calendrier.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ, comme l'en-tête d'une colonne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Date de naissance : label « Date de naissance », showIcon=false, placeholder « JJ/MM/AAAA ».
- Date d'un sinistre : label « Date du sinistre », showIcon=true.
- Date refusée : tone=error, filled=true, message « Vérifiez votre date de naissance : vous devez avoir au moins 18 ans. »

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=warning ou tone=error.
- open=true avec showIcon=false, avec un autre état que state=focus, avec filled=true, ou avec tone=warning ou tone=error.
- Remplacer le libellé par le placeholder.
- Modifier localement la taille, l'espacement ou les couleurs du DateInput, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Un placeholder « JJ/MM/AAAA », qui donne le format attendu. En showIcon=true, le navigateur affiche lui-même ce format dans le champ vide.
- Une icône de calendrier, à droite, qui ouvre le calendrier du navigateur.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous le champ.
- Un message, obligatoire en tone=warning ou tone=error : un second _FormHelperText, du même ton que le champ, sous l'aide.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel.
- **Placeholder.** Le format attendu, « JJ/MM/AAAA ». Une consigne dont l'utilisateur a besoin pendant la saisie va dans l'aide, car le placeholder disparaît dès le premier chiffre.
- **Aide.** Les consignes indispensables, comme la date la plus ancienne ou la plus récente acceptée.
- **Message.** En tone=error, comment corriger la saisie, avec un verbe à l'impératif. Exemple en showIcon=false : « Saisissez une date au format JJ/MM/AAAA. » En tone=warning, pourquoi la date mérite l'attention.

## Comportement

- Un clic dans le champ ou sur son libellé donne le focus au champ.
- Un clic sur l'icône de calendrier ouvre le calendrier du navigateur. Une date choisie dans le calendrier remplit le champ et ferme le calendrier.
- Le calendrier vient du navigateur : son aspect change d'un navigateur et d'un système à l'autre.
- Une date minimale ou maximale grise les jours hors limite dans le calendrier. Une date hors limite reste possible au clavier : la page vérifie la date et passe le champ en tone=error.
- La touche qui ouvre le calendrier au clavier dépend du navigateur : Non documenté.
- Pendant le focus, le message reste affiché, même en tone=warning ou tone=error.
- En disabled=true, le champ ne réagit ni au clic ni au clavier.
- Le message d'erreur apparaît quand l'utilisateur quitte le champ ou envoie le formulaire. Il disparaît quand la saisie est corrigée.

## Accessibilité

Un élément `<input type="date">`, relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ. En showIcon=false, un élément `<input type="text">`, avec un clavier numérique sur mobile.

- Le nom accessible est le libellé. Le placeholder ne le remplace jamais.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`.
- En tone=error, le champ porte `aria-invalid="true"`, et `aria-describedby` le relie au message, avec l'aide.
- En tone=warning, `aria-describedby` relie le message au champ, sans `aria-invalid`.
- Une date de naissance porte l'attribut `autocomplete="bday"` (WCAG 1.3.5).
- Un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- Le champ entre dans l'ordre de tabulation, sauf en disabled=true. Le focus reste toujours visible.
- Le texte et le placeholder contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure atteint au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-input-inputdate--inputdate) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-input-inputdate--inputdate).

Code source : [dossier InputDate sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/InputDate).

Détail de l'implémentation : [page InputDate du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/03-form-inputs.md#inputdate).

Cette fiche sur GitHub : [dateinput.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/dateinput/dateinput.md).

Import, selon le thème :

```tsx
import { InputDate } from "@axa-fr/canopee-react/prospect";
import { InputDate } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
// la date du jour, au format AAAA-MM-JJ et à l'heure locale
const today = new Date().toLocaleDateString("sv-SE");

<InputDate
  label="Date du sinistre"
  max={today}
  message="Saisissez la date d'aujourd'hui ou une date passée."
  messageType="error"
  required
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| DateInput | `InputDate` |
| Le libellé, un _FormLabel réglable depuis le DateInput | `label`, `description`, `required` et `moreButtonLabel` |
| showLabel=false | `label=""`, car `label` est obligatoire dans le code, et `aria-labelledby` sur le champ |
| showIcon=false | `hidePicker`, qui remplace le calendrier par un champ texte, voir les points ouverts |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| placeholder, affiché par showPlaceholder | `placeholder`, seulement en showIcon=false : le calendrier du navigateur affiche son propre format |
| value | `value` ou `defaultValue`, une date ou un texte |
| disabled | `disabled` |
| open | Sans équivalent, le navigateur ouvre le calendrier |
| state et filled | Sans équivalent, le code utilise `:hover`, `:focus` et la valeur saisie |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. `min` et `max` bornent les dates du calendrier. Le composant accepte les attributs d'un `<input>`, comme `name` ou `autoComplete`, sauf `type`, qui dépend de `hidePicker`. Sans équivalent dans Figma : `onMoreButtonClick` et `containerProps`.

## Noms à ne pas employer

InputDate, Input Date, sélecteur de date, champ date.

Ces noms désignent DateInput. Le seul nom à employer est DateInput.

## Décisions

- **1.0.0 - 19/11/26.** Le DateInput reprend les choix du TextInput pour les états, les couleurs, le libellé, l'aide et le message. Il en diffère sur deux points : son icône est toujours un calendrier, et il n'a pas d'état de chargement.
- **1.0.0 - 19/11/26.** Les états suivent les principes d'interaction du pattern Contour. Au hover, la bordure passe à 2 px sans changer de couleur, et au focus en color/blue/400, 2 px. Une valeur saisie passe en color/gray/900 sans toucher à la bordure. L'ancienne version et le code mettent du bleu foncé au hover, au focus et en filled=true.
- **1.0.0 - 19/11/26.** showIcon=true est la valeur par défaut, comme dans le code, où le calendrier s'affiche sans `hidePicker`.
- **1.0.0 - 19/11/26.** L'icône est l'asset icon/event de la librairie Figma Fondations Canopée, à la taille icon/size/small.
- **1.0.0 - 19/11/26.** Une seule variante par breakpoint montre le calendrier ouvert, au moment où l'utilisateur l'ouvre : sur un champ au focus, vide et neutre.
- **1.0.0 - 19/11/26.** L'aide et le message sont deux _FormHelperText inclus dans le DateInput et réglables depuis lui, comme `helper` et `message` dans le code.
- **1.0.0 - 19/11/26.** En disabled=true, seul le champ passe en gris. Le libellé et l'aide restent lisibles, comme dans tous les champs de saisie.
- **1.0.0 - 19/11/26.** Le DateInput a 42 variantes : toutes les combinaisons de state, filled et tone, deux variantes en disabled=true et une en open=true, pour chaque breakpoint.
- **1.0.0 - 19/11/26.** Dans Figma, les thèmes prospect et client partagent un seul DateInput, celui du thème prospect, avec un arrondi de 8 px. Celui du thème client n'en différait que par son arrondi de 4 px.

## Points ouverts

- **Couleurs et épaisseurs dans le code.** Dans le thème prospect, le code met une bordure bleue au repos (`InputDateApollo.css:9`). Dans les deux thèmes, la bordure passe en bleu foncé au hover et au focus (`InputDateApollo.css:17`), et le texte en bleu foncé en filled=true (`InputDateApollo.css:21`). En erreur et en avertissement, la bordure fait 2 px au repos (`InputDateCommon.css:51`) et 3 px au hover et au focus (`InputDateApollo.css:30`, `InputDateCommon.css:68`). Elle garde la couleur du ton au focus. L'icône de calendrier est bleu foncé (`InputDateCommon.css:11`). En attendant : signaler.
- **Texte saisi dans le code.** Le code affiche la date saisie en semi-gras (`InputDateCommon.css:20`), alors que Figma l'affiche en regular. En attendant : signaler.
- **Thème client dans le code.** Le code du thème client garde un arrondi de 4 px (`InputDateLF.css:10`). En attendant : signaler.
- **Action « Modifier » dans le code.** Le code n'accepte pas `sideButtonLabel` (`InputDateCommon.tsx:33`), alors que le _FormLabel de Figma peut afficher cette action. En attendant : ne pas l'afficher.
- **Dates en objet Date.** Le code convertit la date selon l'heure UTC (`InputDate.helper.ts:2`), et une date à minuit, heure de Paris, s'affiche la veille. En attendant : passer `value`, `min` et `max` en texte.
- **Valeur en showIcon=false.** Avec `hidePicker`, le code ignore `min` et `max` (`InputDateCommon.tsx:102`). Il n'ajoute les barres obliques que si la page renvoie dans `value` ce que `onChange` lui donne (`InputDateTextAtom.tsx:23`). En attendant : passer la valeur au format JJ/MM/AAAA, et vérifier les limites dans la page.
- **Message de succès.** Le code accepte `messageType="success"`, que Figma n'a pas. En attendant : signaler.
- **Lien des messages dans le code.** Le code relie le message d'erreur avec `aria-errormessage`, au lieu de `aria-describedby`. Le code ne met dans `aria-describedby` que l'aide et un message de succès (`InputDateCommon.tsx:68`). Le message d'avertissement n'est donc pas relu quand le champ reprend le focus. En attendant : signaler.
- **Interligne dans le code.** Sur desktop, le code utilise un interligne de 1,25 (`InputDateCommon.css:74`), plus serré que celui du style label/1/regular. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
