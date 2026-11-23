# Pagination 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

La Pagination découpe une longue liste de contenus en pages, et permet à l'utilisateur d'en choisir une.

## Quand l'utiliser

### À utiliser pour

- Une liste trop longue pour être chargée ou lue d'un seul tenant, comme des résultats de recherche, des documents ou un historique de paiements.

### À ne pas utiliser pour

- Une liste qui tient sur une seule page : ne pas afficher de Pagination.
- Passer d'un contenu à l'autre dans une même page : prendre Tabs.
- Un parcours en étapes, à suivre dans l'ordre : prendre Stepper.
- Mener vers une autre rubrique : prendre le menu du Header.
- Charger la suite d'une liste sur la même page, avec un bouton « Afficher plus » ou au défilement : Non documenté.

## Règles selon les propriétés

### breakpoint=1024

Sur un écran de 1024 px de large ou plus. La Pagination affiche les numéros de page, dans items.

### breakpoint=0

Sur un écran de moins de 1024 px de large. La Pagination affiche le compteur counter à la place des numéros, entre les deux flèches.

### showPrevNext=false

Les flèches page précédente et page suivante sont masquées, et seuls les numéros restent. En breakpoint=0, les flèches restent affichées. Quand masquer les flèches : Non documenté.

## Exemples

- Résultats de recherche sur 20 pages, en breakpoint=1024, avec la page 10 affichée. items montre 1, « ... », 9, 10 en page en cours, 11, « ... » puis 20.
- Les mêmes résultats en breakpoint=0 : counter « Page 10 sur 20 ».
- Historique de paiements sur 4 pages, page 1 affichée, en breakpoint=1024 : dans items, 1 en page en cours, 2, 3 et 4.

## Interdits

- Autre chose qu'un _PaginationItem dans items, comme un Button ou un texte.
- Plusieurs pages en cours, ou aucune.
- Des « ... » sur la page en cours.
- Des « ... » au début ou à la fin de items, comme le déconseille Carbon.
- Modifier localement la taille, la couleur ou l'arrondi, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- items contient les _PaginationItem ([_paginationitem.json](_paginationitem.json)). Chacun porte un numéro de page, ou des « ... » qui remplacent les numéros masqués. Les « ... » s'écrivent dans la propriété texte page du _PaginationItem.
- items affiche 8 _PaginationItem au plus. Jusqu'à 7 pages, chaque page a son numéro.
- Au-delà de 7 pages, items montre toujours la première et la dernière page. Des « ... » remplacent les pages masquées.
  - Quand la page en cours est une des 5 premières, items montre les pages 1 à 6, des « ... », puis la dernière page.
  - Sinon, quand la page en cours est une des 5 dernières, items montre la première page, des « ... », puis les 6 dernières pages.
  - Ailleurs, items montre la première page, des « ... », la page en cours entre ses deux voisines, des « ... », puis la dernière page.
- counter dit la page en cours et le nombre de pages.
- La Pagination se place sous la liste qu'elle découpe, comme le recommande Carbon.

## Rédaction

- Les numéros de page s'écrivent en chiffres.
- Les points de suspension s'écrivent avec trois points, « ... ».
- counter suit le format « Page X sur Y », avec une majuscule au début et sans point final.

## Comportement

- Un clic sur un numéro affiche sa page, qui devient la page en cours.
- La flèche page précédente affiche la page d'avant, et la flèche page suivante la page d'après. Sur la première page, la flèche page précédente est désactivée, et sur la dernière page, la flèche page suivante.
- Un clic sur la page en cours : Non documenté.
- Ce qui s'affiche pendant le chargement de la page choisie : Non documenté.
- Les « ... » ne réagissent pas au clic.
- Ce qui reçoit le focus après un changement de page : Non documenté.

## Accessibilité

Un élément `<nav>` qui porte un nom accessible et contient une liste `<ol>`. Chaque numéro est un lien `<a>`. Celui de la page en cours porte `aria-current="page"`. Les « ... » sont un simple texte, que le clavier ne parcourt pas. Les flèches sont des `<button type="button">`. Sur la première et la dernière page, la flèche inactive porte l'attribut `disabled`.

- Le nom accessible de la Pagination dit ce qu'elle découpe. Exemple : `aria-label="Pages des résultats"`. Deux Pagination d'un même écran n'ont jamais le même nom.
- Le nom accessible d'un numéro dit sa page, comme le fait MUI. Exemple : « Page 3 ».
- Le nom accessible des flèches est « Page précédente » et « Page suivante ».
- Une flèche désactivée ne reçoit pas le focus.
- La touche Tab parcourt les flèches et les numéros, dans l'ordre. Entrée active un numéro. Entrée ou Espace active une flèche.
- Le focus clavier reste toujours visible.
- La page en cours se voit au fond plein du numéro, pas seulement à sa couleur.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Il demande 3:1 pour ce qui montre un état.
- Un numéro, en color/blue/600, atteint 10,9:1 sur fond blanc. Sur le fond du hover, en color/gray/100, il atteint 8,6:1.
- Sur le fond du press, en color/gray/200, un numéro atteint 6,8:1.
- Le numéro de la page en cours, en blanc sur color/blue/600, atteint 10,9:1.
- L'anneau de focus atteint 6,9:1 sur fond blanc.
- Le compteur, en color/gray/600 sur fond blanc, atteint 5,7:1.
- La zone cliquable d'un numéro fait 40 px de côté, au-delà des 24 px que demande le WCAG 2.2.

Références : [Carbon, accessibilité de la Pagination](https://carbondesignsystem.com/components/pagination/accessibility/) et [MUI, Pagination](https://mui.com/material-ui/react-pagination/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-pagination--pagination) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-pagination--pagination). Pour chaque numéro, Storybook de ItemPagination : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/story/components-pagination-itempagination--playground) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/story/components-pagination-itempagination--playground).

Code source : [dossier Pagination sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Pagination), avec le dossier ItemPagination pour chaque numéro.

Détail de l'implémentation : [page Pagination du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#pagination).

Cette fiche sur GitHub : [pagination.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/pagination/pagination.md).

Import, selon le thème :

```tsx
import { Pagination } from "@axa-fr/canopee-react/prospect";
import { Pagination } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
const [page, setPage] = useState(1);

<Pagination
  numberPages={20}
  currentPage={page}
  onChangePage={setPage}
  aria-label="Pages des résultats"
/>
```

Avec ce code, un clic sur un numéro recharge aussi la page, à l'adresse `/` suivie du numéro. Voir les points ouverts.

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Pagination | `Pagination` |
| items | Sans équivalent, le code calcule les numéros à partir de `numberPages` et `currentPage` |
| _PaginationItem | `ItemPagination`, affiché par Pagination pour chaque numéro |
| page, la propriété texte du _PaginationItem | `page`, un numéro ou `"..."` |
| La page en cours | `isCurrentPage`, réglé par `currentPage` |
| Les états d'un _PaginationItem | Sans équivalent, le navigateur applique les états |
| showPrevNext | `hidePrevNext`, de sens inverse |
| counter | Sans équivalent, le code écrit le compteur à partir de `currentPage` et `numberPages` |
| Les flèches | `ClickIcon`, réglables par `prevButtonProps` et `nextButtonProps` |
| breakpoint | Sans équivalent, une media query change l'affichage à partir de 1024 px |
| _theme | Le chemin d'import, `/prospect` ou `/client` |

`numberPages`, `currentPage` et `onChangePage` sont obligatoires. `onChangePage` reçoit le numéro de la page choisie. `aria-label` vaut « Pagination » par défaut. `asItem` remplace le lien de chaque numéro par un autre composant, par exemple `"button"`. Ce composant ne reçoit ni `href` ni `aria-current` : seule la classe `af-item-pagination--current` signale la page en cours.

## Noms à ne pas employer

Pager, paginator, pagineur, barre de pagination, pagination numérotée.

Ces noms désignent Pagination. Le seul nom à employer est Pagination.

## Décisions

- **1.0.0 - 20/11/26.** Dans Figma, les thèmes prospect et client partagent un seul _PaginationItem. Ses variantes étaient identiques.
- **1.0.0 - 20/11/26.** Les flèches sont des IconButton secondaires, avec les icônes icon/keyboard-arrow-left et icon/keyboard-arrow-right de la librairie Figma Fondations Canopée. Ils remplacent l'ancien ClickIcon de Figma.
- **1.0.0 - 20/11/26.** Les _PaginationItem se posent dans le slot items. items remplace les anciennes propriétés currentPage et numberPages, car Figma ne sait pas calculer les numéros à afficher. items n'accepte que des _PaginationItem.
- **1.0.0 - 20/11/26.** Par défaut, items contient 7 _PaginationItem, numérotés de 1 à 7, avec la page 1 en cours.
- **1.0.0 - 20/11/26.** Les « ... » sont une valeur de la propriété texte page, comme dans le code, et non plus une variante. Ils prennent la couleur des numéros.
- **1.0.0 - 20/11/26.** Le _PaginationItem suit le pattern Fond des principes d'interaction : son fond passe en color/gray/100 au hover et en color/gray/200 au press, et un anneau color/blue/400 de 2 px, écarté de 2 px, s'ajoute au focus. La page en cours n'a ni hover ni press.
- **1.0.0 - 20/11/26.** Le _PaginationItem n'a pas d'état désactivé, absent du code.
- **1.0.0 - 20/11/26.** counter et la propriété page du _PaginationItem montrent par défaut un exemple de leur format, et non le nom de leur propriété, comme un champ au format fixe.
- **1.0.0 - 20/11/26.** showPrevNext reprend la convention show des booléens, à l'inverse de `hidePrevNext` dans le code. Il n'agit qu'en breakpoint=1024, car le code affiche toujours les flèches sur mobile.
- **1.0.0 - 20/11/26.** La Pagination a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.
- **1.0.0 - 23/11/26.** Toutes les variantes contiennent les numéros et le compteur, comme le code : le compteur est masqué en breakpoint=1024, et les numéros en breakpoint=0. Le compteur vaut « Page 1 sur 7 » par défaut, comme les 7 numéros d'items.
- **1.0.0 - 23/11/26.** La Pagination a une propriété _theme, car ses flèches, des IconButton, changent de forme entre les thèmes : rondes dans le thème prospect, avec un arrondi de 8 px dans le thème client. Dans le thème client, le cadre prend border/radius/16 : l'arrondi des flèches, plus les 8 px qui les séparent du bord, pour des arrondis concentriques. La page en cours reste ronde dans les deux thèmes, comme dans le code.

## Points ouverts

- **Texte du compteur.** counter reprend le format du code, « Page X sur Y » (`PaginationCommon.tsx:68`), alors que Figma affichait « 1 sur 3 ». Le format n'a pas été validé par l'équipe design. En attendant : « Page X sur Y ».
- **Liens des numéros dans le code.** Par défaut, chaque numéro mène vers `/` suivi du numéro, à la racine de l'application (`ItemPaginationCommon.tsx:26`). Un clic appelle `onChangePage`, sans annuler la navigation (`Pagination.helper.ts:29`), puis le navigateur suit ce lien et recharge la page. En attendant : signaler.
- **Page en cours dans le code.** `aria-current="page"` n'est posé que sur le lien par défaut (`ItemPaginationCommon.tsx:28`). Un numéro rendu par `asItem` le perd, même si ce composant affiche un lien. En attendant : signaler.
- **Nom des numéros dans le code.** Le code ne donne à chaque numéro que son chiffre comme nom accessible (`ItemPaginationCommon.tsx:36`). Le lecteur d'écran annonce « 3, lien », sans dire qu'il s'agit d'une page. Le code ne permet pas de nommer un numéro autrement (`Pagination.helper.ts:25`). En attendant : signaler.
- **Attributs de la Pagination dans le code.** Seuls `aria-label` et `className` sont transmis à l'élément `<nav>` (`PaginationCommon.tsx:50`, `PaginationCommon.tsx:55`). Un `aria-labelledby` ou un `id` passé à Pagination est ignoré. En attendant : nommer la Pagination par `aria-label`.
- **Rendu dans le code.** Le code n'a ni hover ni press sur les numéros (`ItemPaginationCommon.css:2`). Son contour de focus touche le numéro, sans écart (`ItemPaginationCommon.css:16`). Les couleurs des numéros viennent de l'ancienne palette (`ItemPaginationApollo.css:5`, `ItemPaginationLF.css:5`). Celle du contour de la Pagination aussi (`PaginationApollo.css:5`, `PaginationLF.css:5`). Les flèches restent des ClickIcon (`PaginationCommon.tsx:59`). Leur fond est bleu clair (`ClickIconApollo.css:5`, `ClickIconLF.css:5`). Aucune règle CSS ne donne de couleur au compteur, qui prend celle du texte qui l'entoure (`PaginationCommon.tsx:68`). En attendant : signaler.
- **Plugin Copilot.** Le plugin décrit `asItem` comme une fonction qui reçoit le numéro (`10-navigation.md:179`). Le code attend un composant, posé à la place du lien (`Pagination.helper.ts:9`). Le plugin donne aussi `numberPages` et `currentPage` comme facultatifs (`10-navigation.md:174`). Le code les rend obligatoires (`Pagination.helper.ts:6`). En attendant : le code fait foi.
- **Flèches masquées.** Le cas où masquer les flèches n'est pas défini. En attendant : signaler.
- **Focus d'une flèche désactivée.** La flèche se désactive alors qu'elle a le focus, quand l'utilisateur atteint la première ou la dernière page (`PaginationCommon.tsx:62`, `PaginationCommon.tsx:79`). La place du focus n'est pas définie. En attendant : signaler.
- **Focus après un changement de page.** L'élément qui reçoit le focus après un changement de page n'est pas défini. En attendant : signaler.
- **Suite d'une liste.** La fiche ne dit pas quel composant prendre pour charger la suite d'une liste sur la même page, avec un bouton « Afficher plus » ou au défilement. En attendant : signaler.
- **Clic sur la page en cours.** L'effet d'un clic sur la page en cours n'est pas défini. En attendant : signaler.
- **Chargement de la page choisie.** Ce qui s'affiche pendant le chargement de la page choisie n'est pas défini. En attendant : signaler.
- **Forme dans le thème client.** Le code dessine les flèches avec ClickIcon, rond dans les deux thèmes (`ClickIconCommon.css:7`), et garde un cadre aux bouts ronds (`PaginationCommon.css:6`). En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
