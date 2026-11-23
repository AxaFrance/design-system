# Select 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Select permet à l'utilisateur de choisir une ou plusieurs options dans une liste déroulante.

## Quand l'utiliser

### À utiliser pour

- Choisir une option dans une longue liste, comme un pays ou une marque de véhicule.
- Choisir plusieurs options dans une longue liste, ou aucune, avec multiple=true. Exemple : les pays visités pendant un voyage.

### À ne pas utiliser pour

- Choisir une option parmi quelques-unes, affichées ensemble : prendre Radio.
- Choisir plusieurs options parmi quelques-unes, affichées ensemble : prendre Checkbox.
- Saisir une date : prendre DateInput.
- Saisir un texte libre : prendre TextInput.

## Règles selon les propriétés

### state=hover

Le pointeur survole le champ.

### state=focus

Le champ a le focus, au clavier ou après un clic.

### open=true

La liste des options est ouverte, sous le champ.

### filled=true

Le champ contient au moins une option choisie, par l'utilisateur ou déjà connue.

### tone=warning

Le choix est accepté, mais il mérite l'attention de l'utilisateur. Le message sous le champ dit pourquoi.

### tone=error

Le choix est refusé, ou le champ est obligatoire et aucune option n'est choisie.

### disabled=true

Le champ ne peut pas être modifié. disabled=true sert aussi à montrer un choix bloqué, avec l'action « Modifier » du libellé.

### multiple=true

L'utilisateur peut choisir plusieurs options. Chaque option de la liste a sa Checkbox.

### showLabel=false

Le libellé est masqué. C'est permis seulement quand un autre texte visible nomme déjà le champ, comme l'en-tête d'une colonne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Pays de résidence : label « Pays de résidence », placeholder « Sélectionnez un pays ».
- Pays visités pendant un voyage : multiple=true, label « Pays visités », filled=true, Tags « Italie » et « Espagne ».
- Champ obligatoire resté vide : tone=error, filled=false, message « Sélectionnez un pays. »
- Choix bloqué : disabled=true, filled=true, avec l'action « Modifier » du libellé.

## Interdits

- disabled=true avec un autre état que state=default, ou avec tone=warning ou tone=error.
- open=true avec un autre état que state=focus.
- Remplacer le libellé par le placeholder.
- Modifier localement la taille, l'espacement ou les couleurs du Select, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, un _FormLabel, obligatoire sauf dans le cas de showLabel=false.
- Un placeholder, affiché tant qu'aucune option n'est choisie. En multiple=false, il est obligatoire, sauf quand une option est choisie par défaut : sans lui, le navigateur choisit la première option, et le champ ne peut pas rester vide.
- L'option choisie. En multiple=true, les options choisies, en Tags, dans le champ : c'est un _SelectTagList, le groupe de Tags du Select ([_selecttaglist.json](_selecttaglist.json)).
- Une flèche, à droite, qui ouvre la liste.
- La liste des options. En multiple=false, c'est la liste du navigateur. En multiple=true, c'est un _SelectList ([_selectlist.json](_selectlist.json)), dont chaque ligne est un _SelectListItem ([_selectlistitem.json](_selectlistitem.json)) : une option et sa Checkbox.
- Une aide, facultative : un _FormHelperText neutre et sans icône, sous le champ.
- Un message, obligatoire en tone=warning ou tone=error : un second _FormHelperText, du même ton que le champ, sous l'aide.

## Rédaction

- **Libellé.** Il suit les règles de rédaction de _FormLabel.
- **Placeholder.** Une consigne courte, avec un verbe à l'impératif, comme « Sélectionnez un pays ».
- **Options.** Un libellé court par option, qui se comprend seul. Les options suivent leur ordre naturel quand elles en ont un, comme du plus petit au plus grand. Sinon, elles vont de la plus courante à la plus rare. Leur longueur maximale : Non documenté.
- **Aide.** Les consignes indispensables pour choisir. Exemple en multiple=true : « Choisissez un ou plusieurs pays. »
- **Message.** En tone=error, comment corriger le choix, avec un verbe à l'impératif. Exemple : « Sélectionnez un pays. » En tone=warning, pourquoi le choix mérite l'attention.

## Comportement

- Un clic sur le champ ouvre la liste. Un second clic sur le champ, la touche Échap ou un clic en dehors la ferment.
- En multiple=false, la liste vient du navigateur : son aspect et son fonctionnement au clavier changent d'un navigateur et d'un système à l'autre. Une option choisie remplit le champ et ferme la liste.
- En multiple=true, cocher une option l'ajoute en Tag dans le champ, et la décocher la retire. La liste reste ouverte pendant le choix.
- En multiple=true, la touche Entrée ou Espace sur le champ ouvre la liste. Ce qui se passe quand le focus quitte la liste, et le rendu du champ pendant que le focus est dans la liste : Non documenté.
- En multiple=true, au-delà de deux options choisies, un Tag « +N » remplace les suivantes. Exemple : « Italie », « Espagne » et « +1 » pour trois pays choisis.
- En multiple=true, les Tags du champ ne se retirent pas d'un clic : l'utilisateur décoche l'option dans la liste.
- En multiple=true, la liste affiche quatre options et le haut de la cinquième, et défile au-delà.
- Pendant le focus, le message reste affiché, même en tone=warning ou tone=error.
- En disabled=true, le champ ne réagit ni au clic ni au clavier. L'action « Modifier » du libellé reste cliquable.
- Un clic sur « Modifier » ne débloque pas le champ de lui-même : la page le repasse en disabled=false. La place du focus après ce clic : Non documenté.
- Le message d'erreur apparaît quand l'utilisateur quitte le champ ou envoie le formulaire. Il disparaît quand le choix est corrigé.

## Accessibilité

En multiple=false, un élément `<select>`, relié à son libellé par un `<label>` dont l'attribut `for` reprend l'`id` du champ. Le placeholder est la première option, `<option value="">`.

En multiple=true, un élément `<button>` ouvre la liste, et `aria-controls` le relie à elle. La liste est un groupe de cases `<input type="checkbox">`, chacune reliée au libellé de son option.

- Le nom accessible est le libellé. Le placeholder ne le remplace jamais.
- En multiple=true, le lecteur d'écran annonce aussi le nombre d'options choisies sur le total, sans remplacer le libellé. Exemple : « 2 éléments sélectionnés sur 5 ». Le moyen de l'annoncer : Non documenté. Les Tags du champ sont masqués au lecteur d'écran : ce nombre les remplace.
- En showLabel=false, le champ prend son nom accessible avec `aria-labelledby`, qui pointe vers le texte visible qui le nomme.
- L'aide est lue avec le champ, grâce à `aria-describedby`.
- En tone=error, en multiple=false, le champ porte `aria-invalid="true"`, et `aria-describedby` le relie au message, avec l'aide.
- En tone=warning, `aria-describedby` relie le message au champ, sans `aria-invalid`.
- En multiple=false, un champ obligatoire porte l'attribut `required`, que le lecteur d'écran annonce.
- En multiple=false, un champ qui demande une donnée personnelle porte l'attribut `autocomplete` adapté, comme `country-name` pour un pays (WCAG 1.3.5).
- En multiple=true, l'élément qui porte l'obligation, l'erreur et le lien vers l'aide et le message : Non documenté. Un `<button>` n'accepte ni `required` ni `aria-invalid`.
- En multiple=true, la touche Tab passe du bouton aux cases de la liste ouverte, et la touche Espace coche ou décoche une case.
- Le champ entre dans l'ordre de tabulation, sauf en disabled=true. Le focus reste toujours visible.
- Le texte et le placeholder contrastent avec le fond à 4,5:1 au moins (WCAG). La bordure atteint au moins 3:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-form-dropdown-dropdown--dropdown) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-form-input-dropdown--dropdown). Le choix multiple n'a pas encore de page Storybook publiée.

Code source : [dossier Dropdown sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/Dropdown), et [dossier DropdownMultiSelect](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Form/DropdownMultiSelect) pour le choix multiple.

Détail de l'implémentation : [page Dropdown du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/03-form-inputs.md#dropdown). Pour le choix multiple : [page DropdownMultiSelect du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/19-multi-select.md#dropdownmultiselect).

Cette fiche sur GitHub : [select.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/select/select.md).

Import, selon le thème :

```tsx
import { Dropdown, DropdownMultiSelect } from "@axa-fr/canopee-react/prospect";
import { Dropdown, DropdownMultiSelect } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Dropdown
  label="Pays de résidence"
  name="pays"
  placeholder="Sélectionnez un pays"
  required
>
  <option value="FR">France</option>
  <option value="BE">Belgique</option>
  <option value="CH">Suisse</option>
</Dropdown>

<DropdownMultiSelect
  label="Pays visités"
  name="pays-visites"
  helper="Choisissez un ou plusieurs pays."
  items={[
    { id: "ES", label: "Espagne" },
    { id: "IT", label: "Italie" },
    { id: "PT", label: "Portugal" },
  ]}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Select | `Dropdown`, et `DropdownMultiSelect` en multiple=true |
| multiple | Deux composants, `Dropdown` et `DropdownMultiSelect` |
| Le libellé, un _FormLabel réglable depuis le Select | `label`, `description`, `required`, `moreButtonLabel` et `sideButtonLabel` |
| showLabel=false | `label` absent, et `aria-labelledby` sur le champ dans `Dropdown`. Sans équivalent dans `DropdownMultiSelect`, voir les points ouverts |
| L'aide, affichée par showHelper | `helper` |
| Le message et tone | `message` et `messageType` |
| placeholder | `placeholder`. Dans `DropdownMultiSelect`, il vaut « Sélectionner » par défaut |
| value | `value` ou `defaultValue` du `<select>` dans `Dropdown`, `defaultValue` dans `DropdownMultiSelect` |
| Les options | Des `<option>` dans `children` pour `Dropdown`, `items` pour `DropdownMultiSelect` |
| Les Tags dans le champ, en multiple=true | Un résumé dans le champ, et les Tags sous le champ, voir les points ouverts |
| disabled | `disabled` |
| open | Sans équivalent, le navigateur ouvre la liste de `Dropdown`, et `DropdownMultiSelect` l'ouvre avec l'attribut `popover` |
| state et filled | Sans équivalent, le code utilise `:hover`, `:focus` et la valeur choisie |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. `Dropdown` accepte les attributs d'un `<select>`, comme `name` ou `onChange`, sauf `multiple` : le choix multiple passe par `DropdownMultiSelect`. `DropdownMultiSelect` demande `name` et `items`. Il garde le choix en interne : la page ne peut ni le modifier ni le vider après l'affichage, et `defaultValue` préremplit le champ au premier affichage seulement. Dans `DropdownMultiSelect`, `messageType` se renseigne toujours avec `message`, sinon la bordure ne prend pas la couleur du ton. Sans équivalent dans Figma : `onMoreButtonClick`, `onSideButtonClick`, `containerProps` dans `Dropdown`, et `hideThreshold` et `inputProps` dans `DropdownMultiSelect`.

## Noms à ne pas employer

Dropdown, DropdownMultiSelect, MultiSelect, menu déroulant, sélecteur, picker.

Ces noms désignent Select. Le seul nom à employer est Select.

## Décisions

- **1.0.0 - 20/11/26.** Le Select reprend les choix du TextInput pour les états, les couleurs, le libellé, l'aide et le message. Il en diffère sur deux points : son icône est toujours une flèche, et il n'a pas d'état de chargement.
- **1.0.0 - 20/11/26.** Les états suivent les principes d'interaction du pattern Contour. Au hover, la bordure passe à 2 px sans changer de couleur, et au focus en color/blue/400, 2 px. Une valeur choisie passe en color/gray/900 sans toucher à la bordure. Le code met du bleu foncé au hover et au focus.
- **1.0.0 - 20/11/26.** Un seul Select couvre le choix unique et le choix multiple, avec la propriété multiple. Le champ, le libellé, l'aide et le message sont les mêmes, et seuls la liste et l'affichage du choix changent. Le code a deux composants, `Dropdown` et `DropdownMultiSelect`.
- **1.0.0 - 20/11/26.** En multiple=true, les options choisies s'affichent en Tags dans le champ, à la place du texte, comme dans Material UI ou Ant Design. L'utilisateur voit son choix sans ouvrir la liste.
- **1.0.0 - 20/11/26.** Les Tags du champ sont en tone=neutral, car une option choisie n'a pas de statut. En disabled=true, ils passent aussi en disabled=true.
- **1.0.0 - 20/11/26.** En multiple=true, les lignes de la liste sont blanches, sans trait entre elles, comme dans Material UI. La case cochée suffit à montrer le choix. L'ancienne version alternait un fond bleu clair et un fond blanc, comme le code.
- **1.0.0 - 20/11/26.** Une seule variante par breakpoint et par valeur de multiple montre la liste ouverte, au moment où l'utilisateur l'ouvre : sur un champ au focus, vide et neutre. La liste s'ouvre aussi sur un champ rempli ou en erreur, sans variante dédiée dans Figma.
- **1.0.0 - 20/11/26.** L'aide et le message sont deux _FormHelperText inclus dans le Select et réglables depuis lui, comme `helper` et `message` dans le code.
- **1.0.0 - 20/11/26.** En disabled=true, seul le champ passe en gris. Le libellé et l'aide restent lisibles, car un champ désactivé montre aussi un choix bloqué.
- **1.0.0 - 20/11/26.** Le Select a 84 variantes. Pour chaque breakpoint et chaque valeur de multiple, il a toutes les combinaisons de state, filled et tone, deux variantes en disabled=true et une en open=true.
- **1.0.0 - 20/11/26.** Dans Figma, les thèmes prospect et client avaient chacun leur Select. Un seul Select sert maintenant aux deux thèmes, celui du thème prospect, avec un arrondi de 8 px.
- **1.0.0 - 23/11/26.** Au focus, une ligne de la liste garde le fond color/gray/100 du hover, et prend un anneau color/blue/400 de 2 px à l'intérieur de la ligne.

## Points ouverts

- **Couleurs et épaisseurs dans le code.** Dans le thème prospect, le code met une bordure bleue au repos (`DropdownApollo.css:8`). Dans les deux thèmes, elle passe en bleu foncé au hover et au focus (`DropdownApollo.css:23`, `DropdownLF.css:24`). En erreur et en avertissement, sa bordure fait 2 px au repos (`DropdownCommon.css:55`) et 3 px au hover comme au focus (`DropdownCommon.css:58`), et garde la couleur du ton au focus. En attendant : signaler.
- **Texte choisi dans le code.** Le code affiche l'option choisie en semi-gras (`DropdownCommon.css:12`), et le résumé du choix multiple en semi-gras bleu foncé (`DropdownMultiSelectCommon.css:29`). Figma les affiche en regular. En attendant : signaler.
- **Interligne et taille du texte dans le code.** Sur desktop, le code utilise un interligne de 1,25 (`DropdownCommon.css:49`), plus serré que celui du style label/1/regular. Dans la liste à choix multiple, le libellé des options reste à 16 px sur desktop (`ItemMultiSelectCommon.css:20`), alors que Figma passe à 18 px. En attendant : signaler.
- **Thème client dans le code.** Le code du thème client garde un arrondi de 4 px (`DropdownLF.css:5`). En attendant : signaler.
- **Flèche de la liste ouverte.** Le code tourne la flèche vers le haut quand la liste est ouverte (`DropdownApollo.css:11`). Figma garde la flèche vers le bas. En attendant : signaler.
- **Tags et résumé dans le code.** `DropdownMultiSelect` affiche dans le champ un résumé, comme « 2 éléments sélectionnés » (`DropdownMultiSelectCommon.tsx:167`), et les Tags sous le champ (`DropdownMultiSelectCommon.tsx:187`). Ses Tags n'ont pas de `variant` (`DropdownMultiSelectCommon.tsx:194`), et prennent donc `variant="info"`, la valeur par défaut de Tag (`TagCommon.tsx:21`). En attendant : signaler.
- **Seuil des Tags dans le code.** Le commentaire de `hideThreshold` annonce 3 Tags par défaut (`DropdownMultiSelectCommon.tsx:38`), mais le code en affiche 2 avant le Tag « +N » : il reprend la valeur par défaut de `TagList` (`TagListCommon.tsx:20`). En attendant : deux Tags, puis « +N ».
- **Lignes de la liste dans le code.** Le code alterne un fond bleu clair et un fond blanc (`MultiSelectListCommon.tsx:27`), et les lignes n'ont pas de hover. En attendant : signaler.
- **Ombre de la liste.** Figma utilise le style d'ombre shadow de Fondations Canopée. Le JSON de _SelectList l'écrit en valeur brute, car le plugin ne lit pas encore les styles d'effet. Le code a sa propre ombre (`MultiSelectListAll.css:9`). En attendant : signaler.
- **Nom accessible en multiple=true.** Le code remplace le nom du bouton par le résumé, avec `aria-label` (`DropdownMultiSelectCommon.tsx:161`). Le libellé du champ n'est alors plus annoncé, et un champ vide prend le placeholder pour nom (`useDropdownMultiSelect.hook.tsx:32`). Le nombre d'options sur le total reste dans un texte caché qu'aucun attribut ne relie au bouton (`DropdownMultiSelectCommon.tsx:168`). Le bouton annonce aussi une liste, avec `aria-haspopup="listbox"` (`DropdownMultiSelectCommon.tsx:160`), alors qu'il ouvre un groupe de cases. En attendant : signaler.
- **Champ obligatoire et erreur en multiple=true.** Le bouton de `DropdownMultiSelect` ne reçoit aucun attribut libre (`DropdownMultiSelectCommon.tsx:155`). Un `required` passé dans `inputProps` s'appliquerait à chaque case (`DropdownMultiSelectCommon.tsx:109`), et le navigateur exigerait alors que toutes soient cochées. En attendant : signaler.
- **Lien des messages dans le code.** `Dropdown` ne relie ni l'aide ni le message au champ, et ne pose pas `aria-invalid` (`DropdownCommon.tsx:84`). `DropdownMultiSelect` non plus (`DropdownMultiSelectCommon.tsx:199`). En attendant : signaler.
- **Placeholder dans le plugin Copilot.** Sa page Dropdown décrit le placeholder comme une option désactivée, alors que le code le laisse choisissable (`DropdownCommon.tsx:85`). En attendant : signaler.
- **Message de succès.** Le code accepte `messageType="success"`, que Figma n'a pas. En attendant : signaler.
- **Choix multiple pas encore publié.** `DropdownMultiSelect` est sur la branche main du code depuis le 19/11/26, mais dans aucune version publiée de Canopée. En attendant : vérifier la version de Canopée du projet avant de l'utiliser.
- **Longueur des options.** La longueur maximale d'une option n'est pas définie. En multiple=true, une option choisie devient un Tag, que sa fiche limite à deux mots et 21 caractères. En attendant : signaler.
- **Nombre d'options.** Le nombre d'options à partir duquel prendre Select plutôt que Radio ou Checkbox n'est pas défini. En attendant : signaler.
- **Focus après « Modifier ».** La place du focus après un clic sur « Modifier » n'est pas définie. En attendant : signaler.
- **Focus dans la liste en multiple=true.** La fiche ne dit pas ce qui se passe quand le focus quitte la liste. Elle ne dit pas non plus le rendu du champ pendant que le focus est dans la liste. En attendant : signaler.
- **Annonce du nombre d'options choisies.** Le moyen d'annoncer au lecteur d'écran le nombre d'options choisies en multiple=true n'est pas défini. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
