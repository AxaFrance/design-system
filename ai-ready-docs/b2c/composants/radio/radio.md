# Radio 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Radio permet à l'utilisateur de choisir une option dans un groupe à choix unique.

## Quand l'utiliser

### À utiliser pour

- Choisir une seule option parmi plusieurs affichées ensemble, même quand il n'y en a que deux. Exemple : « Mensuel » ou « Annuel » pour la fréquence de paiement.
- Un choix qui s'applique à l'envoi du formulaire.

### À ne pas utiliser pour

- Choisir plusieurs options à la fois : prendre Checkbox.
- Accepter des conditions ou donner un consentement : prendre Checkbox.
- Activer ou désactiver un réglage qui s'applique tout de suite : prendre Switch.
- Choisir parmi une longue liste d'options : prendre Select.
- Choisir une option présentée en carte, avec un titre, une description ou une icône : prendre FormCard, qui contient déjà un Radio.
- Une seule option, sans alternative : prendre Checkbox.

## Règles selon les propriétés

### checked=true

L'option est sélectionnée. Dans un même groupe, un Radio au plus est en checked=true.

### tone=error

Après l'envoi du formulaire, le choix est obligatoire et aucune option n'est sélectionnée. Tous les Radio du groupe passent en tone=error. Sous le groupe, un seul _FormHelperText tone=error dit quoi faire. Dès qu'une option est sélectionnée, le groupe repasse en tone=neutral.

### tone=warning

Non documenté.

### disabled=true

L'option ne peut pas être choisie pour l'instant. Un texte à côté du groupe dit pourquoi, quand la raison n'est pas évidente.

### showLabel=false

Le libellé du Radio est masqué. C'est permis seulement quand un autre texte visible nomme déjà l'option, comme le titre d'une FormCard ou d'une ligne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

## Exemples

- Fréquence de paiement : deux Radio, label « Mensuel » en checked=true et label « Annuel » en checked=false.
- Choix obligatoire laissé vide, après l'envoi du formulaire : tous les Radio du groupe en tone=error, avec le _FormHelperText tone=error « Choisissez une fréquence de paiement. » sous le groupe.
- Option indisponible pour ce contrat : disabled=true, label « Trimestriel », avec un texte qui dit pourquoi.
- Carte d'option : FormCard, dont le Radio est en showLabel=false, car le titre de la carte nomme déjà l'option.

## Interdits

- checked=true avec tone=error ou tone=warning.
- disabled=true avec un autre état que state=default, ou avec un autre ton que tone=neutral.
- Des Radio d'un même groupe avec des valeurs de tone différentes.
- Modifier localement la taille, l'espacement ou les couleurs du Radio, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, à droite du bouton radio, sauf en showLabel=false. Sur plusieurs lignes, il garde le bouton radio aligné sur sa première ligne.
- Une seule option par Radio.
- Au moins deux Radio par groupe, avec un titre de groupe qui dit ce qui est choisi.
- Les Radio d'un groupe sont empilés les uns sous les autres. Ils ne se placent côte à côte que pour deux ou trois options courtes, comme « Oui » et « Non ».

## Rédaction

- Le libellé nomme l'option, sans verbe quand c'est possible. Exemple : « Mensuel ». À éviter : « Je souhaite payer chaque mois ».
- Les libellés d'un même groupe ont la même forme : tous des noms, ou tous des adjectifs.
- Les options d'un groupe ne se recouvrent pas. Quand elles ne couvrent pas tous les cas, le groupe se termine par une option comme « Autre ».
- Les options suivent leur ordre naturel quand elles en ont un, comme du plus petit au plus grand. Sinon, elles vont de la plus courante à la plus rare.
- Une majuscule au début, sans point final.

## Comportement

- Un clic sur le bouton radio ou sur son libellé sélectionne l'option. L'option qui était sélectionnée dans le groupe passe en checked=false.
- Un clic sur une option déjà sélectionnée ne fait rien. Seule la sélection d'une autre option du groupe décoche un Radio.
- Sélectionner une option n'envoie pas le formulaire et ne change pas de page. La sélection peut seulement afficher ou masquer des champs liés, juste sous le groupe.
- Quand une option est recommandée ou la plus courante, elle est sélectionnée au départ. Sinon, aucune option ne l'est.
- En disabled=true, le Radio ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<input type="radio">` dans un `<label>`. Les Radio d'un même groupe partagent le même attribut `name` et sont regroupés dans un `<fieldset>`, dont la `<legend>` porte le titre du groupe.

- Le nom accessible est le libellé. En showLabel=false, le Radio se relie au texte qui le nomme, avec `aria-labelledby`. Le lecteur d'écran annonce le titre du groupe, puis le nom, le rôle, l'état et la position. Exemple : « Fréquence de paiement, groupe. Mensuel, bouton radio, coché, 1 sur 2 ».
- La touche Tab place le focus sur l'option sélectionnée du groupe, ou sur la première quand aucune ne l'est. Un nouvel appui sur Tab sort du groupe. Les flèches déplacent le focus d'une option à l'autre et la sélectionnent. La touche Espace sélectionne l'option qui a le focus.
- Le focus clavier reste toujours visible, et son anneau entoure le bouton radio et son libellé.
- En tone=error, le groupe se relie à son message avec `aria-describedby`, et chaque Radio porte `aria-invalid="true"`.
- La sélection se voit au point dans le bouton radio, pas seulement à la couleur.
- Le WCAG demande un contraste de 3:1 au moins pour un composant d'interface, sauf en disabled=true. Sur fond blanc, le contour atteint 3,95:1 en checked=false et 10,9:1 en checked=true. En tone=error, il atteint 5,1:1 sur son fond, et 4,7:1 en tone=warning. L'anneau de focus atteint 6,9:1.
- La zone cliquable comprend le libellé.

Référence : [ARIA Authoring Practices Guide, Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-radio-radiotext--radiotext) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-radio-radiotext--radiotext).

Code source : [dossier RadioText sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/Radio/RadioText).

Détail de l'implémentation : [page Radio du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/05-form-checkbox-radio.md#radio-bas-niveau), qui décrit le bouton radio seul.

Cette fiche sur GitHub : [radio.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/radio/radio.md).

Import, selon le thème :

```tsx
import { RadioText } from "@axa-fr/canopee-react/prospect";
import { RadioText } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<fieldset>
  <legend>Fréquence de paiement</legend>
  <RadioText name="frequency" value="monthly" label="Mensuel" defaultChecked />
  <RadioText name="frequency" value="yearly" label="Annuel" />
</fieldset>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Radio | `RadioText` |
| label | `label` |
| showLabel=false | `Radio`, le bouton radio seul, sans libellé |
| checked | `checked` |
| tone | `variant`, `"error"` ou `"warning"`, sans valeur pour neutral |
| disabled | Sans équivalent, le code retire `disabled` (`RadioCommon.tsx:5`) |
| state | Sans équivalent, le code n'utilise que `:hover` et `:focus-within` en CSS |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Le composant accepte tous les attributs d'un `<input>`, sauf `type` et `disabled`. Sans équivalent dans Figma : `name`, `value`, `onChange`, `defaultChecked`, `labelProps`.

## Noms à ne pas employer

Bouton d'option, radio button.

Ces noms désignent Radio. Le seul nom à employer est Radio.

## Décisions

- **1.0.0 - 17/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Radio. Leurs variantes étaient identiques.
- **1.0.0 - 17/11/26.** Le Radio a une propriété state : default, hover et focus. Au hover et au focus, un halo, un cercle de couleur claire, apparaît derrière le bouton radio. Le Radio n'a pas de press, car l'option est sélectionnée dès l'appui.
- **1.0.0 - 17/11/26.** En checked=true, le contour et le point prennent color/blue/600, la couleur réservée aux éléments interactifs, au lieu du color/blue/700 de l'ancienne version.
- **1.0.0 - 17/11/26.** Le Radio a une propriété disabled, absente du code, pour qu'une option indisponible reste visible dans son groupe.
- **1.0.0 - 17/11/26.** tone=error et tone=warning n'existent qu'en checked=false. Un groupe en erreur est un groupe où aucune option n'est sélectionnée.
- **1.0.0 - 18/11/26.** Le Radio porte son libellé, à droite, comme `RadioText` dans le code. showLabel=false masque ce libellé quand un autre texte visible nomme déjà l'option, comme dans FormCard. Le bouton radio seul n'est plus un composant à part.
- **1.0.0 - 25/11/26.** En checked=true, le contour et le point reprennent color/blue/700, la couleur de la marque, comme tous les éléments interactifs. Cette décision remplace celle du 17/11/26.

## Points ouverts

- **Nom dans le code.** Le Radio de Figma, avec son libellé, s'appelle `RadioText` dans le code. `Radio`, dans le code, est le bouton radio seul. En attendant : utiliser `RadioText`, ou `Radio` en showLabel=false.
- **disabled dans le code.** Le code n'a pas de disabled (`RadioCommon.tsx:5`). En attendant : signaler.
- **Hover et focus dans le code.** Le code n'a pas de halo. Son focus reprend le rendu du hover, sans anneau (`RadioCommon.css:33`). En attendant : signaler.
- **Couleurs dans le code.** Au repos, le contour est bleu en prospect (`RadioApollo.css:5`) et gris foncé en client (`RadioLF.css:5`). En checked=true, au hover et au focus, il passe à un bleu plus foncé qu'au repos (`RadioApollo.css:11`). En tone=error et tone=warning, le fond reste blanc (`RadioCommon.css:6`), et le rouge diffère selon le thème (`RadioApollo.css:21`, `RadioLF.css:21`). Les couleurs de Figma font foi. En attendant : signaler.
- **Point en tone=error et tone=warning dans le code.** Le code masque le point d'un Radio sélectionné en tone=error ou tone=warning (`RadioCommon.css:40`, `RadioCommon.css:56`). Un Radio sélectionné y paraît donc non sélectionné. En attendant : passer le groupe en tone=neutral dès qu'une option est sélectionnée.
- **Usage de tone=warning.** Ni Figma ni le code ne disent quand un groupe de Radio prend tone=warning. En attendant : signaler.
- **Groupe de Radio.** Aucun composant ne regroupe des Radio avec un titre. Le Fieldset du code est une carte avec un titre, pas un groupe d'options. En attendant : écrire le `<fieldset>` et sa `<legend>` à la main, comme dans l'exemple.
- **Contraste au hover.** Au hover, le contour color/gray/500 atteint 2,57:1 sur le halo color/blue/100, sous les 3:1 du WCAG. En attendant : signaler.
- **Plugin Copilot.** Le plugin Copilot décrit le bouton radio seul, pas `RadioText`. En attendant : suivre l'exemple de cette fiche.
- **Message sous le groupe.** Le _FormHelperText n'est pas publié dans la librairie Figma, comme tout sous-composant. Le designer ne peut donc pas le poser seul sous un groupe de Radio. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
