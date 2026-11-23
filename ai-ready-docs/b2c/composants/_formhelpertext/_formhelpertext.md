# _FormHelperText 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le _FormHelperText est un message court qui aide à remplir un champ ou répond à une saisie. Son sens se règle avec tone : error par défaut, success, warning ou neutral.

## Quand l'utiliser

### À utiliser pour

- Dire ce qui ne va pas dans une saisie, sous le champ concerné. Exemple : « Renseignez votre e-mail. » sous TextInput.
- Confirmer qu'une saisie ou une action a abouti. Exemple : « Modifications enregistrées ».
- Attirer l'attention sur une information importante qui ne bloque pas. Exemple : « Cette adresse e-mail semble erronée. Si c'est bien la vôtre, vous pouvez continuer. »
- Aider à remplir un champ, avant toute saisie. Exemple : « Format attendu : JJ/MM/AAAA ».
- Donner le résultat d'une action sous un élément qui n'est pas un champ : une étape de Stepper, une cellule de tableau, une valeur de ContentItemDuo.

### À ne pas utiliser pour

- Nommer un champ : prendre _FormLabel.
- Un message qui concerne tout un formulaire : prendre Alert. Un message qui concerne toute la page : prendre Banner.
- Donner le statut ou la catégorie d'un élément : prendre Tag. Exemple : « Suspendue » sur une carte.
- Une action ou un lien : prendre Button ou Link.
- Un message qui répète ce que l'interface dit déjà : ne rien ajouter.

## Règles selon les propriétés

### tone=success

Une saisie ou une action réussie. Exemple : « Modifications enregistrées ».

### tone=error

Une saisie incorrecte ou une action qui a échoué. Quand l'utilisateur peut corriger, le texte dit quoi faire. Exemple : « Renseignez votre prénom. »

### tone=warning

Une information importante qui ne bloque pas. Exemple : « Cette adresse e-mail semble erronée. Si c'est bien la vôtre, vous pouvez continuer. »

### tone=neutral

Une aide pour remplir le champ : le format attendu, une contrainte, l'usage de la donnée. Exemple : « Format attendu : JJ/MM/AAAA ».

### showIcon=false

Une aide à la saisie, avec tone=neutral, s'affiche sans icône.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le texte utilise la version mobile de son style de texte.

## Exemples

- E-mail obligatoire laissé vide, après l'envoi du formulaire : tone=error, « Renseignez votre e-mail. »
- Numéro de téléphone au mauvais format : tone=error, « Saisissez un numéro français de 10 chiffres. »
- Adresse e-mail inhabituelle, mais acceptée : tone=warning, « Cette adresse e-mail semble erronée. Si c'est bien la vôtre, vous pouvez continuer. »
- Coordonnées enregistrées : tone=success, « Modifications enregistrées ».
- Date de naissance à saisir : tone=neutral, « Format attendu : JJ/MM/AAAA ».

## Interdits

- Choisir tone pour sa couleur plutôt que pour son sens. À éviter : tone=success pour mettre un texte en vert.
- showIcon=false avec tone=success, tone=error ou tone=warning.
- Modifier localement la taille, l'icône ou les couleurs, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un texte, obligatoire.
- Une icône, qui dépend de tone et ne se remplace pas. Seul tone=neutral permet de la masquer.

## Rédaction

- Une formulation factuelle et sobre.
- Pour confirmer un résultat ou donner un format : un nom ou un participe passé, sans phrase. Exemple : « Modifications enregistrées ». À éviter : « Vos modifications ont bien été enregistrées ».
- Avec tone=warning : une ou deux phrases complètes, terminées par un point.
- Pour demander une action : une phrase complète, qui commence par un verbe à l'impératif et se termine par un point. Exemple : « Signez le mandat pour continuer. »
- Une majuscule au début seulement.
- La longueur maximale du texte : Non documenté.

## Comportement

- Le _FormHelperText ne réagit ni au clic ni au clavier.
- Sous un champ, l'aide en tone=neutral et le message en tone=error ou tone=warning s'affichent l'un sous l'autre. Une consigne reste ainsi lisible quand une erreur apparaît.
- tone=error s'affiche après une interaction avec le champ : quand l'utilisateur le quitte ou envoie le formulaire. Il disparaît quand la saisie est corrigée.
- Le composant qui contient le _FormHelperText, comme un champ, règle sa largeur. Le texte passe à la ligne quand il dépasse cette largeur.

## Accessibilité

Un élément `<small>`.

- Le champ porte `aria-describedby`, qui reprend l'`id` du _FormHelperText. Le lecteur d'écran lit ainsi le message avec le champ.
- Un message tone=error qui apparaît après une interaction porte `role="alert"`, pour être annoncé tout de suite. Les autres messages, y compris un message tone=error affiché dès le chargement, n'ont pas de rôle ARIA : le lien par `aria-describedby` suffit.
- L'icône est décorative et masquée au lecteur d'écran avec `aria-hidden="true"`. Le sens passe par le texte, jamais par la couleur ou l'icône seule.
- Le message commence par un texte masqué à l'écran, lu par le lecteur d'écran, qui donne son ton : « Succès : », « Erreur : », « Attention : » ou « Information : ». Exemple : le lecteur d'écran lit « Erreur : Veuillez renseigner votre e-mail. »
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Sur fond blanc, le texte atteint 5,9:1 en tone=error, 5,2:1 en tone=warning et 5,7:1 en tone=neutral. En tone=success, il n'atteint que 3,0:1, voir les points ouverts.
- Le _FormHelperText ne reçoit pas le focus et n'entre pas dans l'ordre de tabulation.
- Le message suit le champ dans le DOM, juste après lui.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-itemmessage--itemmessage) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-itemmessage--itemmessage).

Code source : [dossier ItemMessage sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/ItemMessage).

Détail de l'implémentation : [page ItemMessage du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/04-form-misc.md#itemmessage).

Cette fiche sur GitHub : [_formhelpertext.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/_formhelpertext/_formhelpertext.md).

Import, selon le thème :

```tsx
import { ItemMessage } from "@axa-fr/canopee-react/prospect";
import { ItemMessage } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<ItemMessage id="email-message" messageType="error" message="Renseignez votre e-mail." />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| _FormHelperText | `ItemMessage` |
| tone | `messageType` |
| message | `message` |
| tone=neutral | Prop `helper` du champ, affichée sans icône et hors ItemMessage |
| showIcon | Sans équivalent, l'icône est toujours affichée |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `id`. Sans `message`, le composant n'affiche rien. Dans le code, d'autres composants affichent un ItemMessage avec `message` et `messageType` : InputText, TextArea, InputDate, InputPhone, Dropdown, CheckboxText, CardCheckbox, CardRadioGroup, InputFile, ContentItemDuo et Stepper. Dans Stepper, `messageType` vaut `success` par défaut. ItemFile affiche un message d'erreur avec sa prop `errorMessage`.

breakpoint n'a pas d'équivalent dans le code. Une media query agrandit le texte à partir de 1024 px.

## Noms à ne pas employer

Helper text, texte d'aide, message d'erreur, message de validation, hint.

Ces noms désignent _FormHelperText. Le seul nom à employer est _FormHelperText.

## Décisions

- **1.0.0 - 16/11/26.** Dans Figma, les thèmes prospect et client partagent un seul _FormHelperText. Ils ne différaient que par la largeur d'exemple du composant.
- **1.0.0 - 16/11/26.** Le _FormHelperText a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.
- **1.0.0 - 16/11/26.** tone=neutral est ajouté pour l'aide à la saisie, comme le helper text de Material Design et de Carbon.
- **1.0.0 - 16/11/26.** showIcon masque l'icône, seulement avec tone=neutral. Une aide se lit sans icône, comme dans Material Design et Carbon. Dans les autres tons, l'icône double le sens du texte, pour qu'il ne repose pas sur la couleur seule. L'ancienne documentation du B2C interdisait de masquer l'icône, quel que soit le ton.
- **1.0.0 - 16/11/26.** Les icônes viennent de Fondations Canopée, à la taille icon/size/extra-small.
- **1.0.0 - 17/11/26.** tone=error est la valeur par défaut, comme dans le code.
- **1.0.0 - 17/11/26.** Dans Figma, le _FormHelperText s'adapte à la longueur de son texte. Le composant qui le contient, comme un champ, règle sa largeur et le retour à la ligne.
- **1.0.0 - 18/11/26.** Le texte et l'icône prennent le palier 600 dans tous les tons, comme la bordure d'un champ en tone=error ou tone=warning. Le palier 700 de l'ancienne version n'est plus utilisé.
- **1.0.0 - 19/11/26.** Sous un champ, l'aide et le message sont deux _FormHelperText qui s'affichent l'un sous l'autre, comme `helper` et `message` dans le code.

## Points ouverts

- **Contraste de tone=success.** Sur fond blanc, color/green/600 n'atteint que 3,0:1, sous les 4,5:1 que le WCAG demande pour un texte. L'équipe design system prévoit de retravailler la palette verte. En attendant : signaler.
- **Aide à la saisie dans le code.** Le code affiche l'aide avec la prop `helper` du champ, et non avec ItemMessage (`InputTextCommon.tsx:95`). Le code n'a pas de quoi masquer l'icône d'un ItemMessage. En attendant : signaler.
- **Lien au champ dans le code.** Le code relie le message tone=error au champ avec `aria-errormessage`, et réserve `aria-describedby` à l'aide et au message tone=success (`InputTextCommon.tsx:62`). En attendant : signaler.
- **Couleurs dans le code.** Le code affiche tone=error et tone=warning dans un rouge et un orange plus clairs que Figma, à environ 4,7:1 sur fond blanc (`ItemMessageAll.css:3`). En attendant : signaler.
- **Longueur.** La longueur maximale du texte n'est pas fixée. En attendant : signaler.
- **Taille du texte dans le code.** Le code affiche 16 px en desktop et 14 px en mobile, contre 14 px et 12 px dans Figma depuis la mise à jour du style de texte le 16/11/26. En attendant : signaler.
- **Espace entre l'icône et le texte dans le code.** Le code a 8 px, contre 4 px dans Figma. En attendant : signaler.
- **Annonce dans le code.** Le code met `role="alert"` sur tous les messages error et warning, même affichés dès le chargement, et `aria-live="assertive"` sur tous les tons, success compris. En attendant : la rubrique Accessibilité de cette fiche s'applique.
- **Texte masqué du ton dans le code.** Le code n'ajoute pas le texte masqué qui donne le ton au lecteur d'écran. Cette règle reprend celle de GOV.UK. En attendant : signaler.
- **Page Storybook.** Sa documentation appelle la prop `type`, alors que le composant attend `messageType`. En attendant : la fiche fait foi.
- **tone=neutral sans source B2C.** L'ancienne documentation du B2C n'a pas de ton neutre, mais le code a déjà une aide à la saisie, la prop `helper` des champs. Cette fiche en fait un ton, comme les design systems du marché. En attendant : il s'applique.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
