# _FormLabel 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le _FormLabel est le libellé d'un champ de formulaire, qui dit à l'utilisateur ce qu'il doit renseigner. Une description peut préciser la demande, et deux actions servent à modifier la valeur ou à en savoir plus.

## Quand l'utiliser

### À utiliser pour

- Construire les champs de formulaire, qui le contiennent déjà : TextInput, TextArea, Select, PhoneInput, DateInput et FileInput.
- Nommer un champ qu'aucun champ de Canopée ne couvre, dans une composition propre à un produit.

### À ne pas utiliser pour

- Ajouter un libellé au-dessus d'un champ de Canopée : le champ a déjà son _FormLabel.
- Le texte d'aide ou le message sous un champ : prendre _FormHelperText.
- Un titre de page ou de section : prendre Heading.

## Règles selon les propriétés

### required=true

Le champ est obligatoire, et un astérisque suit le libellé.

### required=false

Le champ est facultatif, et le libellé se termine par « (facultatif) ».

### showDescription=true

Une précision que le libellé ne peut pas porter, comme les documents acceptés ou le format attendu.

### showSideButton=true

Une action sur la valeur du champ, le plus souvent « Modifier », pour changer une valeur déjà renseignée.

### showMoreButton=true

« En savoir plus » affiche une explication sans quitter le formulaire : dans la page, dans une fenêtre modale ou dans une infobulle.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé et la description utilisent la version mobile de leur style de texte.

## Exemples

- Champ obligatoire : required=true, label « Indiquez votre date de naissance ».
- Champ facultatif : required=false, label « Numéro de téléphone (facultatif) ».
- Justificatif : required=true, label « Justificatif de domicile », showDescription=true, description « Facture d'électricité ou quittance de loyer de moins de 3 mois ».
- Récapitulatif d'un parcours : showSideButton=true, label « Adresse e-mail », action « Modifier ».
- Champ qui demande une explication : showMoreButton=true, label « Montant à investir », action « En savoir plus » qui ouvre une fenêtre modale.

## Interdits

- Masquer le libellé, ou le remplacer par un placeholder ou une icône.
- Modifier localement la taille, l'espacement ou les couleurs du _FormLabel, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, obligatoire.
- Une description, facultative.
- Deux actions au plus, chacune un Link small : « Modifier » à droite du libellé, « En savoir plus » en dessous, avec l'icône icon/info-outline à gauche, comme dans le code.

## Rédaction

- **Forme.** Une phrase à l'impératif ou une question, comme « Indiquez votre date de naissance » ou « Quand souhaitez-vous démarrer le contrat ? ». Un ou plusieurs mots suffisent quand le champ est simple, comme « Montant à investir » ou « E-mail ».
- **Longueur.** 120 caractères au plus, espaces compris, sur deux lignes au plus, en desktop comme en mobile.
- **Casse et ponctuation.** Une majuscule au début seulement. Pas de ponctuation, sauf « : » pour annoncer des choix, « ? » pour une question et les parenthèses de « (facultatif) ».
- **Pronoms.** « vous » et « votre » sont permis, car le libellé s'adresse à l'utilisateur.

## Comportement

- Un clic sur le libellé place le focus dans le champ.
- Le libellé ne s'atteint pas avec la touche Tab. Seules les actions « Modifier » et « En savoir plus » s'atteignent. Elles suivent les règles de Link, mais le code les rend en `<button>`, car elles agissent dans la page.

## Accessibilité

Un élément `<label>`. Son attribut `for` reprend l'`id` du champ, pour relier le libellé au champ.

- Le libellé reste visible en permanence.
- L'astérisque est masqué aux lecteurs d'écran avec `aria-hidden`. Le champ porte lui-même l'attribut `required`, que le lecteur d'écran annonce.
- La description est lue avec le champ, grâce à `aria-describedby` posé sur le champ.
- Le texte contraste avec le fond à 4,5:1 au moins (WCAG).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-itemlabel--itemlabel) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-itemlabel--itemlabel).

Code source : [dossier ItemLabel sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/ItemLabel).

Détail de l'implémentation : [page ItemLabel du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/04-form-misc.md#itemlabel).

Cette fiche sur GitHub : [_formlabel.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/_formlabel/_formlabel.md).

Import, selon le thème :

```tsx
import { ItemLabel } from "@axa-fr/canopee-react/prospect";
import { ItemLabel } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple, dans un champ :

```tsx
import { InputText } from "@axa-fr/canopee-react/prospect";

<InputText
  label="Adresse e-mail"
  description="Pour recevoir vos documents"
  moreButtonLabel="En savoir plus"
  onMoreButtonClick={openModal}
  required
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| _FormLabel | `ItemLabel` |
| label | `children`, ou `label` dans un champ |
| description, affichée par showDescription | `description` |
| required | `required` |
| showSideButton, et le texte de l'action | `sideButtonLabel` |
| showMoreButton, et le texte de l'action | `moreButtonLabel` |
| Les actions, des Link | Des Button en `variant="ghost"`, imposé par le composant |

Dans le code, une action s'affiche dès que son texte est renseigné, et le composant ne s'affiche pas sans libellé. Le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Une media query agrandit le libellé et la description à partir de 1024 px. Sans équivalent dans Figma : `htmlFor`, `onSideButtonClick`, `onMoreButtonClick`, `sideButtonProps`, `moreButtonProps`, et les autres attributs de `<label>`.

## Noms à ne pas employer

Item Label, Item_Label, intitulé de champ.

Ces noms désignent _FormLabel. Le seul nom à employer est _FormLabel.

## Décisions

- **1.0.0 - 02/11/26.** Les actions « Modifier » et « En savoir plus » passent par un Button tertiary small, et non par l'ancien ButtonGhost.
- **1.0.0 - 17/11/26.** Les actions « Modifier » et « En savoir plus » passent par un Link small, rendu en `<button>` dans le code. Sans marge, elles s'alignent sur le libellé et gardent la hauteur du texte. Cette décision remplace celle du 02/11/26, qui les faisait passer par Button.
- **1.0.0 - 16/11/26.** Dans Figma, les thèmes prospect et client partagent un seul _FormLabel, celui du thème prospect, car leurs deux versions ne différaient que par le thème des actions.
- **1.0.0 - 16/11/26.** showSideButton est un booléen, et non une variante. Les deux actions peuvent s'afficher ensemble, comme dans le code.
- **1.0.0 - 16/11/26.** Dans Figma, « Modifier » est centré en hauteur à côté du libellé et de la description, dans tous les cas.
- **1.0.0 - 17/11/26.** Les actions « Modifier » et « En savoir plus » prennent color/blue/600, la couleur réservée aux éléments interactifs, comme tout Link.

## Points ouverts

- **Soulignement des actions dans le code.** Le code souligne « Modifier » et « En savoir plus » seulement au survol et au focus (`ButtonCommon.css:51`), alors que Link est souligné en permanence. En attendant : les maquettes suivent Figma, et le code s'utilise sans surcharge de style. L'écart se corrige dans le code de Canopée.
- **Alignement de « Modifier ».** Le code aligne l'action en bas quand une description est présente, et la centre sinon (`ItemLabelCommon.css:51`). En attendant : les maquettes suivent Figma, et le code s'utilise sans surcharge de style.
- **Description non annoncée dans le code.** Le code pose `aria-describedby` sur le `<label>` et non sur le champ (`ItemLabelCommon.tsx:140`). Un lecteur d'écran ne lit donc pas la description quand le champ reçoit le focus. En attendant : signaler.
- **Couleurs dans le code.** Le code affiche le libellé dans un gris plus clair que Figma, et la description dans un gris plus foncé (`ItemLabelApollo.css:5`). En attendant : signaler.
- **Champ facultatif.** Le code n'ajoute pas « (facultatif) » de lui-même, et aucun champ ne le fait. En attendant : écrire la mention dans le libellé.
- **Longueur.** L'ancienne documentation du B2C limitait aussi le libellé à cinq mots, alors que ses propres exemples en ont six. En attendant : 120 caractères et deux lignes au plus.
- **Plugin Copilot.** Sa page ItemLabel dit que `required` ajoute l'attribut HTML `required`. Dans le code, `required` n'affiche que l'astérisque, et c'est le champ qui porte l'attribut. En attendant : la fiche fait foi.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
