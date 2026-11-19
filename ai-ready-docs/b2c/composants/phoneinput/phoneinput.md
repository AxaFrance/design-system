# PhoneInput 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le PhoneInput permet à l'utilisateur de saisir un numéro de téléphone, avec son indicatif pays.

## Quand l'utiliser

### À utiliser pour

- Saisir un numéro de téléphone, fixe ou mobile, en France ou à l'étranger.
- Afficher un numéro déjà connu et bloqué, que l'utilisateur peut changer avec l'action « Modifier » de son libellé.

### À ne pas utiliser pour

- Un texte court qui n'est pas un numéro de téléphone : prendre TextInput.
- Un numéro de contrat ou de dossier : prendre TextInput.

## Règles selon les propriétés

### state=hover

Le pointeur survole le champ du numéro.

### state=focus

Le champ du numéro a le focus, au clavier ou après un clic. Un curseur apparaît, avant le placeholder ou après la valeur.

### filled=true

Le champ du numéro contient une valeur, saisie par l'utilisateur ou déjà connue. Il passe en filled=true dès le premier chiffre saisi.

### tone=warning

Le numéro est accepté, mais il mérite l'attention de l'utilisateur. Le message sous le champ dit pourquoi.

### tone=error

Le numéro est refusé.

### disabled=true

Ni l'indicatif ni le champ du numéro ne peuvent être modifiés. disabled=true sert aussi à montrer un numéro bloqué, avec l'action « Modifier » du libellé.

### showSelect=false

L'indicatif est masqué. L'utilisateur saisit seulement le numéro, sans choisir de pays. Quand masquer l'indicatif : Non documenté.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ, comme l'en-tête d'une colonne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Numéro de téléphone : label « Numéro de téléphone », code « +33 », placeholder « 06 12 34 56 78 ».
- Numéro étranger : code « +32 », avec le drapeau flag/belgium-32.
- Numéro refusé : tone=error, filled=true, message « Saisissez un numéro de téléphone valide, comme 06 12 34 56 78. »
- Numéro connu et bloqué : disabled=true, filled=true, avec l'action « Modifier » du libellé.

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=warning ou tone=error.
- Un drapeau et un code qui ne désignent pas le même pays.
- Remplacer le libellé par le placeholder.
- Modifier localement la taille, l'espacement ou les couleurs du PhoneInput, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Un indicatif à gauche, facultatif. Il montre le drapeau du pays (propriété flag), le code du pays (propriété code) et une flèche qui ouvre la liste des pays.
- Un champ pour le numéro, avec un placeholder facultatif que la valeur saisie remplace.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous le champ.
- Un message, obligatoire en tone=warning ou tone=error : un second _FormHelperText, du même ton que le champ, sous l'aide.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel.
- **Placeholder.** Un exemple du format attendu, comme « 06 12 34 56 78 ». Une consigne dont l'utilisateur a besoin pendant la saisie va dans l'aide, car le placeholder disparaît dès le premier chiffre.
- **Aide.** Les consignes indispensables, comme le type de numéro attendu.
- **Message.** En tone=error, comment corriger la saisie, avec un verbe à l'impératif. Exemple : « Saisissez un numéro de téléphone valide, comme 06 12 34 56 78. » En tone=warning, pourquoi le numéro mérite l'attention.

## Comportement

- Un clic dans le champ du numéro ou sur son libellé donne le focus au champ du numéro.
- L'indicatif est prérempli avec la France, +33. Un clic dessus ouvre la liste des pays.
- Le hover, le focus et le ton du champ du numéro ne changent pas le rendu de l'indicatif. Le rendu de l'indicatif au hover, au focus et liste ouverte : Non documenté.
- Avec le code « +33 », le champ du numéro ne garde que les chiffres, dix au plus, et les groupe par deux, comme 06 12 34 56 78. Le format des numéros des autres pays : Non documenté.
- Pendant le focus, le message reste affiché, même en tone=warning ou tone=error.
- En disabled=true, l'indicatif et le champ ne réagissent ni au clic ni au clavier. L'action « Modifier » du libellé reste cliquable.
- Un clic sur « Modifier » ne débloque pas le champ de lui-même : la page le repasse en disabled=false. La place du focus après ce clic : Non documenté.
- Le message d'erreur apparaît quand l'utilisateur quitte le champ ou envoie le formulaire. Il disparaît quand la saisie est corrigée.

## Accessibilité

Un élément `<input type="tel">`, relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ. L'indicatif est une liste déroulante à part, de rôle `combobox`, avec son propre nom accessible. Le texte de ce nom : Non documenté.

- Le nom accessible du champ est le libellé. Le placeholder ne le remplace jamais.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`.
- En tone=error, le champ porte `aria-invalid="true"`, et `aria-describedby` le relie au message, avec l'aide.
- En tone=warning, `aria-describedby` relie le message au champ, sans `aria-invalid`.
- Le champ porte l'attribut `autocomplete="tel-national"`, pour que le navigateur propose le numéro de l'utilisateur sans son indicatif (WCAG 1.3.5).
- Un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- L'indicatif et le champ entrent dans l'ordre de tabulation, dans cet ordre, sauf en disabled=true. Le focus reste toujours visible.
- Le texte et le placeholder contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure de l'indicatif et celle du champ du numéro atteignent au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/story/components-form-input-inputphone--input-phone-with-select-story) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/story/components-form-input-inputphone--input-phone-with-select-story).

Code source : [dossier InputPhone sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/InputPhone).

Détail de l'implémentation : [page InputPhone du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/03-form-inputs.md#inputphone).

Cette fiche sur GitHub : [phoneinput.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/phoneinput/phoneinput.md).

Import, selon le thème :

```tsx
import { InputPhone } from "@axa-fr/canopee-react/prospect";
import { InputPhone } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
const [phone, setPhone] = useState("");

<InputPhone
  label="Numéro de téléphone"
  showSelect
  defaultCountry="+33"
  countryCodeOptions={[
    { code: "+33", flag: franceFlag },
    { code: "+32", flag: belgiumFlag },
  ]}
  placeholder="06 12 34 56 78"
  value={phone}
  onChangeInput={setPhone}
  autoComplete="tel-national"
  message="Saisissez un numéro de téléphone valide, comme 06 12 34 56 78."
  messageType="error"
  required
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| PhoneInput | `InputPhone` |
| Le libellé, un _FormLabel réglable depuis le PhoneInput | `label`, `description`, `required`, `moreButtonLabel` et `sideButtonLabel` |
| showLabel=false | `label=""`, car `label` est obligatoire dans le code, et `aria-labelledby` sur le champ |
| showSelect | `showSelect`, sans lequel le code n'affiche pas l'indicatif |
| code et flag | `defaultCountry`, parmi les `countryCodeOptions`, chacune avec un `code` et un `flag` |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| placeholder, affiché par showPlaceholder | `placeholder` |
| value | `value`, que `onChangeInput` renvoie déjà formatée |
| disabled | `disabled` |
| state et filled | Sans équivalent, le code utilise `:hover`, `:focus` et la valeur saisie |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Sans `countryCodeOptions`, l'indicatif reste vide. Le format du numéro vient de `mask`, qui garde par défaut dix chiffres groupés par deux (`maskFrenchPhoneNumber.tsx:3`). Ce format ne s'affiche que si la page renvoie dans `value` ce que `onChangeInput` lui donne (`InputPhoneCommon.tsx:107`). Le composant accepte les attributs d'un `<input>`, comme `name` ou `autoComplete`, sauf `type`, toujours `tel`, et `onChange`, remplacé par `onChangeInput`. Sans équivalent dans Figma : `onChangeSelect`, `onMoreButtonClick`, `onSideButtonClick` et `containerProps`.

## Noms à ne pas employer

InputPhone, Input Phone, champ téléphone, champ numéro de téléphone.

Ces noms désignent PhoneInput. Le seul nom à employer est PhoneInput.

## Décisions

- **1.0.0 - 19/11/26.** Le PhoneInput reprend les choix du TextInput pour le champ du numéro, sans l'icône ni le chargement : mêmes états, mêmes couleurs, même libellé, même aide et même message. La propriété editable disparaît : un numéro bloqué est un champ en disabled=true, et l'action « Modifier » vient du _FormLabel inclus.
- **1.0.0 - 19/11/26.** Les états suivent les principes d'interaction du pattern Contour, sur le champ du numéro. Au hover, la bordure passe à 2 px sans changer de couleur, et au focus en color/blue/400, 2 px. Une valeur saisie passe en color/gray/900 sans toucher à la bordure. L'ancienne version et le code mettent du bleu foncé au hover, au focus et en filled=true.
- **1.0.0 - 19/11/26.** L'indicatif reste toujours rempli, avec son code et sa flèche en color/gray/900.
- **1.0.0 - 19/11/26.** Le drapeau et la flèche viennent de Fondations Canopée, à la taille icon/size/small. Les propriétés flag et code règlent le pays, comme `defaultCountry` dans le code.
- **1.0.0 - 19/11/26.** L'aide et le message sont deux _FormHelperText inclus dans le PhoneInput et réglables depuis lui, comme `helper` et `message` dans le code.
- **1.0.0 - 19/11/26.** En disabled=true, l'indicatif et le champ passent en gris. Le libellé et l'aide restent lisibles, car un champ désactivé montre aussi un numéro bloqué.
- **1.0.0 - 19/11/26.** Le PhoneInput a 40 variantes : toutes les combinaisons de state, filled et tone, et deux variantes en disabled=true, pour chaque breakpoint.
- **1.0.0 - 19/11/26.** Dans Figma, les thèmes prospect et client partagent un seul PhoneInput, celui du thème prospect, avec un arrondi de 8 px. Celui du thème client n'en différait que par son arrondi de 4 px.

## Points ouverts

- **Couleurs et épaisseurs du champ dans le code.** Le champ du numéro reprend celui d'`InputText`. Le code y met une bordure bleu foncé au hover et au focus (`InputTextAtomApollo.css:13`), et en filled=true (`InputTextAtomApollo.css:46`). En erreur et en avertissement, sa bordure fait 2 px au repos et 3 px au hover (`InputTextAtomCommon.css:83`), et garde la couleur du ton au focus. En attendant : signaler.
- **Couleurs de l'indicatif dans le code.** Le CSS de Canopée prévoit une bordure bleue pour l'indicatif (`InputPhoneApollo.css:10`), une flèche bleu foncé (`InputPhoneApollo.css:12`) et un code en gris moyen (`InputPhoneApollo.css:9`). Au hover et au focus, il prévoit une bordure bleu foncé (`InputPhoneApollo.css:22`). En attendant : signaler.
- **Thème client dans le code.** Le code du thème client garde un arrondi de 4 px, sur l'indicatif (`InputPhoneLF.css:11`) comme sur le champ (`InputTextAtomLF.css:6`). En attendant : signaler.
- **Nom accessible de l'indicatif.** Le code nomme la liste des pays en anglais, « Select country code » (`CountryCodeSelect.tsx:65`). En attendant : signaler.
- **Format des numéros étrangers.** Le format par défaut garde dix chiffres groupés par deux, quel que soit le pays choisi (`maskFrenchPhoneNumber.tsx:3`). En attendant : passer un `mask` adapté au pays.
- **États de l'indicatif.** Aucune variante ne montre l'indicatif au hover, au focus ou avec la liste ouverte. En attendant : signaler.
- **Page du plugin Copilot.** Elle décrit `defaultCountry="FR"` et des options `{ label, value }`, alors que le code attend `"+33"` (`CountryCodeSelect.tsx:20`) et des options `{ code, flag }` (`InputPhone.types.ts:1`). En attendant : suivre cette fiche.
- **Message de succès.** Le code accepte `messageType="success"`, que Figma n'a pas. En attendant : signaler.
- **Lien des messages dans le code.** Le code relie le message d'erreur avec `aria-errormessage`, au lieu de `aria-describedby`. Le code ne met dans `aria-describedby` que l'aide et un message de succès (`InputPhoneCommon.tsx:84`). Le message d'avertissement n'est donc pas relu quand le champ reprend le focus. En attendant : signaler.
- **Focus après « Modifier ».** La place du focus après un clic sur « Modifier » n'est pas définie. En attendant : signaler.
- **Texte saisi et interligne dans le code.** Le champ du numéro reprend celui d'`InputText` : le code affiche le texte saisi en semi-gras (`InputTextAtomCommon.css:24`), alors que Figma l'affiche en regular. Son interligne de 1,25 (`InputTextAtomCommon.css:25`) est plus serré que celui du style label/1/regular. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
