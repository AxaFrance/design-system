# ClickItem 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le ClickItem présente, dans une liste, un contrat, une personne ou un autre objet avec son détail. Un clic n'importe où sur lui ouvre un autre contenu ou déclenche une action, et une flèche à droite le signale.

## Quand l'utiliser

### À utiliser pour

- Lister des objets qui mènent chacun à leur détail, l'un sous l'autre. Exemple : les contrats d'un client, avec leur numéro, leur échéance et leur statut.
- Présenter le conseiller du client, avec sa photo, qui mène à ses coordonnées.

### À ne pas utiliser pour

- Une entrée de menu, avec une icône, un libellé et un chevron. Elle deviendra un sous-composant de DropdownMenu, qui n'existe pas encore. En attendant : l'ancien ClickItem en petit format, sur la page Legacy de la librairie Figma.
- Une action seule, sans contenu à présenter : prendre Button.
- Un lien dans un texte : prendre Link.

## Règles selon les propriétés

### state=hover

Le pointeur survole le ClickItem. Seul son IconButton change, et passe en state=hover.

### state=focus

Le ClickItem a le focus clavier. L'IconButton garde son rendu du hover, et un contour de focus entoure tout le ClickItem.

### disabled=true

Le ClickItem existe mais n'est pas disponible pour l'instant. Un texte à côté de la liste explique pourquoi. Les textes, l'icône et la flèche passent en gris, et le Tag passe au ton neutral, désactivé.

### loading=true

Le ClickItem a été choisi, et son contenu est en cours de chargement. Son IconButton passe en loading=true : un Spinner remplace la flèche dans le rond.

### showAvatar=true

Le ClickItem affiche une photo, dans un Avatar, à la place de l'icône. Elle sert à présenter une personne, comme le conseiller du client.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style.

## Exemples

- Contrat d'un client : title « Assurance Auto », subtitle « Volkswagen Golf, AB-123-CD », description « Échéance le 01/03/2027 », caption « 45 € par mois », un Tag « Actif » au ton success, une icône de Fondations.
- Conseiller du client : showIcon=false, showAvatar=true, title « Jean Martin », subtitle « Votre conseiller », showDescription=false, showCaption=false, showTag=false.
- Contrat en cours de chargement : loading=true, après le clic de l'utilisateur.

## Interdits

- showIcon=true et showAvatar=true en même temps.
- Un Button, un Link ou un autre élément interactif dans le ClickItem.
- loading=true avec disabled=true.
- Modifier localement la taille, l'espacement ou les couleurs du ClickItem, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un titre, obligatoire.
- Un sous-titre, une description, une légende et un Tag, chacun facultatif.
- À gauche, une icône de la librairie Figma Fondations Canopée ou un Avatar, ou rien.
- À droite, une flèche dans un rond, un IconButton.
- Le nombre maximal de ClickItem dans une liste : Non documenté.

## Rédaction

- Le titre nomme l'objet en quelques mots, sans point final. Exemple : « Assurance Auto ».
- Les autres textes donnent le détail utile pour choisir, du plus important au moins important.
- Le libellé du Tag suit la fiche Tag.
- La longueur maximale des textes : Non documenté.

## Comportement

- Un clic n'importe où sur le ClickItem déclenche son action, comme ouvrir le détail du contrat.
- Désactivé, le ClickItem ne réagit ni au clic ni au clavier.
- En chargement, le ClickItem ne réagit plus, et son IconButton reste en chargement jusqu'à l'ouverture du contenu.
- Un ClickItem sans action : Non documenté.
- Un ClickItem qui mène vers une autre page : Non documenté.

## Accessibilité

Un élément `<button type="button">` qui contient tout le ClickItem. Sans action, le code rend un `<div>`, qui n'est pas interactif. Plusieurs ClickItem se posent dans une liste, `<ul>`, avec un `<li>` par ClickItem.

- Le nom accessible du ClickItem reprend son titre, puis le détail utile. Exemple : « Assurance Auto, échéance le 01/03/2027 ».
- La flèche et l'icône sont décoratives et ne sont pas annoncées. La photo n'a pas de texte alternatif, car le nom accessible présente déjà la personne.
- La touche Tab atteint le ClickItem, et Entrée ou Espace déclenche son action.
- Le focus clavier reste toujours visible.
- Pendant le chargement, ce que le lecteur d'écran annonce et la place du focus : Non documenté.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Le titre en color/gray/900 atteint 19,3:1 sur fond blanc. La description et la légende, en color/gray/600, atteignent 5,7:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-list-clickitem--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-list-clickitem--docs).

Code source : [dossier ClickItem sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/List/ClickItem).

Détail de l'implémentation : [page ClickItem du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/08-lists.md#clickitem).

Cette fiche sur GitHub : [clickitem.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/clickitem/clickitem.md).

Import, selon le thème :

```tsx
import { ClickItem, List } from "@axa-fr/canopee-react/prospect";
import { ClickItem, List } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus. L'icône est un fichier SVG, importé à part.

Exemple :

```tsx
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

<List>
  <ClickItem
    icon={accountBalance}
    title="Assurance Auto"
    subtitle="Volkswagen Golf, AB-123-CD"
    textSecondary="Échéance le 01/03/2027"
    textTertiary="45 € par mois"
    tagLabel="Actif"
    tagProps={{ variant: "success" }}
    ariaLabelForActionIcon="Assurance Auto, échéance le 01/03/2027"
    onClick={() => ouvrirContrat("auto")}
  />
</List>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| ClickItem | `ClickItem`, avec `variant="large"` |
| title | `title` |
| subtitle | `subtitle` |
| description | `textSecondary` |
| caption | `textTertiary` |
| Le Tag, affiché par showTag | `tagLabel` et `tagProps` |
| icon, affichée par showIcon | `icon`, l'adresse du fichier SVG |
| L'Avatar, affiché par showAvatar | `variant="agent"` et `basePictureProps`. Ce format n'affiche que title et subtitle |
| disabled=true | `state="disabled"` |
| loading=true | `state="loading"` |
| L'action | `onClick` |
| Le nom accessible | `ariaLabelForActionIcon`, posé sur tout le bouton |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. `state` vaut `default` par défaut, et `variant` vaut `large`. Le code n'a pas de propriété pour le survol ni le focus. Une media query change la taille des textes à partir de 1024 px. `List` rend un `<ul>`, avec un `<li>` par ClickItem. Sans équivalent dans Figma : `variant="medium"`, et `variant="small"`, l'entrée de menu, qui deviendra un sous-composant de DropdownMenu.

## Noms à ne pas employer

Click Item, élément cliquable, item de liste, ligne cliquable, carte de contrat.

Ces noms désignent ClickItem. Le seul nom à employer est ClickItem.

## Décisions

- **1.0.0 - 25/11/26.** Le ClickItem ne garde que le grand format. Le petit format, une entrée de menu avec un chevron et un titre souligné au survol, deviendra un sous-composant de DropdownMenu, car son rendu et son comportement sont trop différents.
- **1.0.0 - 25/11/26.** L'ancien type agent disparaît. Une photo s'affiche avec showAvatar, à la place de l'icône, dans le même ClickItem.
- **1.0.0 - 25/11/26.** L'icône et la photo passent par deux booléens, showIcon et showAvatar, et non par un slot, car l'élément de gauche n'a que ces deux contenus.
- **1.0.0 - 25/11/26.** La flèche est un IconButton secondary, avec l'icône icon/arrow-forward. Il remplace l'ancien ClickIcon de Figma, archivé. Dans le code, ce rond n'est qu'un décor, car tout le ClickItem est le bouton.
- **1.0.0 - 25/11/26.** D'habitude, quand un composant est cliquable en entier, lui seul prend le hover et le focus, et le composant qu'il contient ne change pas. Le ClickItem fait exception : son IconButton passe en state=hover au survol, et le garde au focus. Le ClickItem n'a pas d'état press.
- **1.0.0 - 25/11/26.** En chargement, l'IconButton passe en loading=true, au lieu d'un Spinner posé à part, pour garder le même rond dans tous les états.
- **1.0.0 - 25/11/26.** Le titre passe en color/gray/900 et l'icône en color/gray/800, car color/blue/700 est réservé aux éléments interactifs. Dans le ClickItem, seul l'IconButton garde color/blue/700.
- **1.0.0 - 25/11/26.** Les textes s'appellent title, subtitle, description et caption, selon la nomenclature, au lieu des anciens textes secondaire et tertiaire.
- **1.0.0 - 25/11/26.** Le ClickItem n'a pas de propriété _theme, sous réserve de validation par les développeurs de Canopée. Figma garde le rendu du thème prospect.
- **1.0.0 - 26/11/26.** La flèche garde la taille small d'IconButton, soit 40 px, comme le rond du code. Elle n'a pas d'action propre et signale seulement que tout le ClickItem se clique. La taille x-small, qu'IconButton prévoit pour un IconButton qui a sa propre action, ne s'applique donc pas.

## Points ouverts

- **Thème client.** Dans le code, le thème client met un chevron dans le rond au lieu d'une flèche (`ClickItemSuffixLF.tsx`). En attendant : signaler.
- **Couleurs du titre et de l'icône dans le code.** Le code met le titre en `--blue-1000` (`ClickItemApollo.css:5`) et l'icône en `--blue-1000` (`IconCommon.css:24`), alors que Figma les met en color/gray/900 et color/gray/800. En attendant : signaler.
- **Survol et focus dans le code.** Le code ne change le rond que si le pointeur passe sur le rond lui-même (`ClickIconApollo.css:7`). Au focus clavier, le rond ne change pas, et le ClickItem garde le contour par défaut du navigateur, car son CSS n'a pas de style de focus. En attendant : signaler.
- **Nom de la prop dans le code.** `ariaLabelForActionIcon` nomme tout le bouton (`ClickItemCommon.tsx:40`), et non la flèche. En attendant : cette prop suit la règle du nom accessible.
- **Contenu du bouton dans le code.** Le code place les textes dans des `<p>`, et ses zones, le Tag et le Spinner dans des `<div>` (`ClickItemCommon.tsx:58`, `ClickItemContentCommon.tsx:28`), à l'intérieur d'un `<button>`, ce que le HTML n'autorise pas. En attendant : signaler.
- **Tag désactivé dans le code.** Le code passe le Tag en `variant="neutral"` (`ClickItemCommon.tsx:75`), mais son texte ne passe pas en gris, car le Tag du code n'a pas de prop `disabled`. En attendant : signaler.
- **Photo dans le code.** Avec `variant="agent"`, le code masque la description, la légende et le Tag (`ClickItemCommon.css:80`). Il garde la flèche pendant le chargement (`ClickItemSuffixCommon.tsx:25`) et ne grise rien en désactivé (`ClickItemCommon.css:98`). En attendant : signaler.
- **Focus pendant le chargement.** Le code désactive le bouton en `state="loading"` (`ClickItemCommon.tsx:42`), et le focus clavier risque de quitter le ClickItem. En attendant : signaler.
- **Chargement dans le code.** Le code remplace le rond par un Spinner seul, de 32 px (`ClickItemSuffixCommon.tsx:26`), alors que Figma garde le rond de l'IconButton, avec un Spinner à l'intérieur. En attendant : signaler.
- **Format moyen.** Le code a un `variant="medium"` que Figma n'a pas. Sa règle CSS, prévue pour masquer la description, la légende et la flèche, ne s'applique jamais (`ClickItemCommon.css:88`) : tout reste affiché. En attendant : signaler.
- **Navigation.** Un ClickItem qui mène vers une autre page est rendu en `<button>`, et non en lien. En attendant : signaler.
- **Entrée de menu.** Le sous-composant de DropdownMenu n'existe pas encore. Dans le code, DataAgent affiche aussi ses ClickItem en petit format. En attendant : l'ancien ClickItem en petit format, encore dans la librairie Figma.
- **Propriété _theme à valider.** Le ClickItem n'a pas de propriété _theme, et Figma montre le rendu du thème prospect. Ce choix reste à valider avec les développeurs de Canopée. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
