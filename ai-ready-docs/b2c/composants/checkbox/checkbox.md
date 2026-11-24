# Checkbox 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

La Checkbox permet à l'utilisateur de cocher une option, seule ou dans un groupe à choix multiple.

## Quand l'utiliser

### À utiliser pour

- Choisir plusieurs options dans une liste, ou aucune. Exemple : les garanties à ajouter à un contrat.
- Accepter des conditions ou donner un consentement, avec une Checkbox seule. Exemple : « J'accepte les conditions générales ».
- Activer une option seule qui s'applique à l'envoi du formulaire. Exemple : « Recevoir une copie par e-mail ».

### À ne pas utiliser pour

- Choisir une seule option parmi plusieurs : prendre Radio.
- Activer ou désactiver un réglage qui s'applique tout de suite : prendre Switch.
- Lancer une action, comme enregistrer ou supprimer : prendre Button.
- Choisir une option présentée en carte, avec un titre, une description ou une icône : prendre FormCard, qui contient déjà une Checkbox.
- Choisir plusieurs options dans une longue liste : prendre Select, à choix multiple.

## Règles selon les propriétés

### checked=true

L'option est cochée. Dans un groupe, chaque Checkbox se coche indépendamment des autres.

### tone=error

Après l'envoi du formulaire, une Checkbox obligatoire n'est pas cochée, ou aucune option d'un groupe obligatoire ne l'est. La Checkbox, ou toutes les Checkbox du groupe, passent en tone=error. Un seul _FormHelperText tone=error, sous la Checkbox ou sous le groupe, dit quoi faire. Dès qu'une option est cochée, la Checkbox ou le groupe repasse en tone=neutral.

### tone=warning

Non documenté.

### disabled=true

L'option ne peut pas être cochée ou décochée pour l'instant. Un texte à côté de la Checkbox ou du groupe dit pourquoi, quand la raison n'est pas évidente.

### showLabel=false

Le libellé de la Checkbox est masqué. C'est permis seulement quand un autre texte visible nomme déjà l'option, comme le titre d'une FormCard ou d'une ligne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

## Exemples

- Conditions à accepter avant l'envoi : une Checkbox seule, label « J'accepte les conditions générales », checked=false au départ.
- Conditions non acceptées, après l'envoi du formulaire : tone=error, avec le _FormHelperText tone=error « Acceptez les conditions générales pour continuer. » sous la Checkbox.
- Garanties à ajouter : un groupe de Checkbox, labels « Bris de glace », « Assistance 0 km », « Véhicule de remplacement ».
- Garantie indisponible pour ce contrat : disabled=true, label « Véhicule de remplacement », avec un texte qui dit pourquoi.
- Ligne de tableau dont le titre nomme déjà l'option : showLabel=false, dans une cellule de tableau.

## Interdits

- checked=true avec tone=error ou tone=warning.
- disabled=true avec un autre état que state=default, ou avec un autre ton que tone=neutral.
- Des Checkbox d'un même groupe avec des valeurs de tone différentes.
- Une Checkbox de consentement en checked=true au départ.
- Modifier localement la taille, l'espacement ou les couleurs de la Checkbox, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, à droite de la case, sauf en showLabel=false. Sur plusieurs lignes, il garde la case alignée sur sa première ligne. Il peut contenir un Link, par exemple vers les conditions générales.
- Une seule option par Checkbox.
- Un groupe de Checkbox a un titre qui dit ce qui est choisi.
- Les Checkbox d'un groupe sont empilées les unes sous les autres. Elles ne se placent côte à côte que pour deux ou trois options courtes.

## Rédaction

- Le libellé dit ce qui s'applique quand la Checkbox est cochée. Exemple : « Recevoir une copie par e-mail ».
- Les libellés d'un même groupe ont la même forme : tous des noms, ou tous des phrases qui commencent par un verbe.
- Les options suivent leur ordre naturel quand elles en ont un, comme du plus petit au plus grand. Sinon, elles vont de la plus courante à la plus rare.
- Une majuscule au début, sans point final.

## Comportement

- Un clic sur la case ou sur son libellé fait passer checked de false à true, ou l'inverse.
- Cocher ou décocher une option n'envoie pas le formulaire et ne change pas de page. Ce changement peut seulement afficher ou masquer des champs liés, juste sous la Checkbox ou sous le groupe.
- En disabled=true, la Checkbox ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<input type="checkbox">` dans un `<label>`. Les Checkbox d'un même groupe sont regroupées dans un `<fieldset>`, dont la `<legend>` porte le titre du groupe.

- Le nom accessible est le libellé. En showLabel=false, la Checkbox se relie au texte qui la nomme, avec `aria-labelledby`. Le lecteur d'écran annonce le nom, le rôle et l'état. Exemple : « J'accepte les conditions générales, case à cocher, non cochée ».
- La touche Tab passe d'une Checkbox à la suivante, y compris dans un groupe. La touche Espace la coche ou la décoche.
- Le focus clavier reste toujours visible, et son anneau entoure la case et son libellé.
- En tone=error, la Checkbox porte `aria-invalid="true"` et se relie à son message avec `aria-describedby`. Pour un groupe, c'est le `<fieldset>` qui se relie au message.
- L'état coché se voit à la coche dans la case, pas seulement à la couleur.
- Le WCAG demande un contraste de 3:1 au moins pour un composant d'interface, sauf en disabled=true. Sur fond blanc, le contour atteint 3,95:1 en checked=false et la case pleine 10,9:1 en checked=true. La coche blanche atteint 10,9:1 sur la case. En tone=error, le contour atteint 5,1:1 sur son fond, et 4,7:1 en tone=warning. L'anneau de focus atteint 6,9:1.
- La zone cliquable comprend le libellé.

Référence : [ARIA Authoring Practices Guide, Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-checkbox-checkboxtext--checkboxtext) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-checkbox-checkboxtext--checkboxtext).

Code source : [dossier CheckboxText sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/Checkbox/CheckboxText).

Détail de l'implémentation : [page CheckboxText du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/05-form-checkbox-radio.md#checkboxtext).

Cette fiche sur GitHub : [checkbox.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/checkbox/checkbox.md).

Import, selon le thème :

```tsx
import { CheckboxText } from "@axa-fr/canopee-react/prospect";
import { CheckboxText } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<CheckboxText name="terms" value="accepted" label="J'accepte les conditions générales" required />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Checkbox | `CheckboxText` |
| label | `label` |
| showLabel=false | `Checkbox`, la case seule, sans libellé |
| checked | `checked` |
| tone | `variant`, `"error"` ou `"warning"`, sans valeur pour neutral |
| disabled | Sans équivalent, le code retire `disabled` (`CheckboxCommon.tsx:7`) |
| state | Sans équivalent, le code n'utilise que `:hover` et `:focus-within` en CSS |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Le composant accepte tous les attributs d'un `<input>`, sauf `type`, `disabled`, `aria-invalid` et `aria-errormessage`. Sans équivalent dans Figma : `name`, `value`, `onChange`, `defaultChecked`, `required`, `message`, `messageType`, `containerProps`.

## Noms à ne pas employer

Case à cocher, checkbox button.

Ces noms désignent Checkbox. Le seul nom à employer est Checkbox.

## Décisions

- **1.0.0 - 18/11/26.** Dans Figma, les thèmes prospect et client partagent une seule Checkbox, avec l'arrondi de prospect, border/radius/6. Le client avait un arrondi de 4 px, comme dans le code.
- **1.0.0 - 18/11/26.** La Checkbox a une propriété state : default, hover et focus. Au hover et au focus, un halo, un cercle de couleur claire, apparaît derrière la case. La Checkbox n'a pas de press, car elle se coche dès l'appui.
- **1.0.0 - 18/11/26.** En checked=true, la case prend color/blue/600, la couleur réservée aux éléments interactifs, au lieu du color/blue/700 de l'ancienne version. La coche vient de Fondations Canopée, icon/check, à la taille icon/size/extra-small.
- **1.0.0 - 18/11/26.** La Checkbox a une propriété disabled, absente du code, pour qu'une option indisponible reste visible.
- **1.0.0 - 18/11/26.** tone=error et tone=warning n'existent qu'en checked=false. Une Checkbox ou un groupe en erreur n'a aucune option cochée.
- **1.0.0 - 18/11/26.** La Checkbox porte son libellé, à droite, comme `CheckboxText` dans le code. showLabel=false masque ce libellé quand un autre texte visible nomme déjà l'option, comme dans FormCard. La case seule n'est plus un composant à part.
- **1.0.0 - 18/11/26.** Le message d'erreur ne fait pas partie de la Checkbox. Un _FormHelperText se pose sous la Checkbox ou sous le groupe, pour qu'un groupe n'ait qu'un seul message.
- **1.0.0 - 18/11/26.** Une Checkbox de consentement n'est jamais cochée au départ : le RGPD ne reconnaît pas une case précochée comme un consentement (considérant 32).

## Points ouverts

- **Nom dans le code.** La Checkbox de Figma, avec son libellé, s'appelle `CheckboxText` dans le code. `Checkbox`, dans le code, est la case seule. En attendant : utiliser `CheckboxText`, ou `Checkbox` en showLabel=false.
- **Message dans le code.** `CheckboxText` affiche son propre message avec `message` et `messageType` (`CheckboxTextCommon.tsx:20`). Il le relie avec `aria-errormessage`, pas `aria-describedby` (`CheckboxTextCommon.tsx:39`). Il ne pose `aria-invalid` que si `message` est renseigné : avec `variant="error"` seul, l'erreur se voit mais le lecteur d'écran ne l'annonce pas. En attendant : pour une Checkbox seule, passer le message par `message` et `messageType`. Pour un groupe, signaler.
- **disabled dans le code.** Le code n'a pas de disabled (`CheckboxCommon.tsx:7`). En attendant : signaler.
- **Hover et focus dans le code.** Le code n'a pas de halo. Son focus reprend le rendu du hover, sans anneau (`CheckboxApollo.css:13`). En attendant : signaler.
- **Couleurs dans le code.** Au repos, le contour est bleu en prospect (`CheckboxApollo.css:8`). En client, il est gris clair (`CheckboxLF.css:8`) et n'atteint que 2,85:1 sur fond blanc, sous les 3:1 du WCAG. En checked=true, au hover et au focus, il passe en bleu foncé (`CheckboxApollo.css:13`), et la case cochée est d'un bleu plus foncé que dans Figma (`CheckboxApollo.css:18`). Le rouge d'erreur diffère selon le thème (`CheckboxApollo.css:25`, `CheckboxLF.css:25`). Figma fait foi. En attendant : signaler.
- **Épaisseur et arrondi dans le code.** En client, le contour passe à 3 px au hover, au focus et en checked=true (`CheckboxLF.css:10`), et l'arrondi fait 4 px (`CheckboxLF.css:6`). En attendant : signaler.
- **Coche en tone=error et tone=warning dans le code.** Le code masque la coche d'une Checkbox cochée en tone=error ou tone=warning (`CheckboxCommon.css:25`, `CheckboxCommon.css:45`). Elle y paraît donc non cochée. En attendant : passer la Checkbox en tone=neutral dès qu'elle est cochée.
- **Usage de tone=warning.** Ni Figma ni le code ne disent quand une Checkbox prend tone=warning. En attendant : signaler.
- **État mixte.** Une Checkbox qui coche tout un groupe, comme « Tout sélectionner », a un troisième état quand une partie seulement du groupe est cochée (ARIA Authoring Practices Guide). La nomenclature prévoit la valeur mixed pour checked, mais ni Figma ni le code ne l'ont. En attendant : signaler.
- **Groupe de Checkbox.** Aucun composant ne regroupe des Checkbox avec un titre. Le Fieldset du code est une carte avec un titre, pas un groupe d'options. En attendant : écrire le `<fieldset>` et sa `<legend>` à la main.
- **Nombre d'options imposé.** Quand un groupe demande un nombre minimal ou maximal d'options, la fiche ne dit pas comment signaler l'erreur, car une Checkbox cochée ne peut pas passer en tone=error. En attendant : signaler.
- **Contraste au hover.** Au hover, le contour color/gray/500 atteint 2,57:1 sur le halo color/blue/100, sous les 3:1 du WCAG. En attendant : signaler.
- **Message sous la Checkbox ou le groupe.** Le _FormHelperText n'est pas publié dans la librairie Figma, comme tout sous-composant. Le designer ne peut donc pas le poser seul sous une Checkbox ou un groupe. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
