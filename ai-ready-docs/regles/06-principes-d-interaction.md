# Principes d'interaction

Un état est le rendu d'un composant selon ce qui lui arrive : survolé, coché, désactivé... Chaque composant interactif du B2C suit un des quatre patterns d'interaction de cette page, et le rendu de ses états en découle.

## Vocabulaire

Les bords se nomment comme en CSS :

- **border** : le bord du composant, dashed quand il est en pointillé. Un composant qui n'a de bord qu'en bas, comme _Tab, a une border-bottom.
- **outline** : le trait tracé autour du composant au focus. L'outline-offset est l'écart entre le composant et l'outline.
- **underline** : la ligne sous le texte d'un Link.
- **halo** : le cercle de couleur qui apparaît derrière la case d'une Checkbox ou le bouton d'un Radio.

Une couleur porte le nom de son token, comme color/blue/700. Une épaisseur en px correspond au token border/width du même nombre. Exemple : 2 px, border/width/2.

Un nom qui commence par un tiret bas, comme _Tab, désigne un sous-composant : il sert à construire d'autres composants et n'est pas posé seul dans une maquette.

Dans les exemples, « A → B » se lit : la valeur en default, puis la valeur dans l'état décrit.

## Les quatre patterns

Le pattern d'un composant dit ce qui change au survol, et le rendu des autres états en découle.

| Pattern | Au survol | Composants |
|---|---|---|
| Fond | Le fond change. | Button, IconButton, _PaginationItem, FormCard, _LevelSelectorStep, Switch, _SelectListItem |
| Contour | La border s'épaissit, ou l'underline pour Link. | TextInput, TextArea, PhoneInput, DateInput, FileInput, Select, Link |
| Hybride | Le fond change et la border-bottom s'épaissit. | _Tab |
| Halo | Un halo apparaît derrière la case ou le bouton radio. | Checkbox, Radio |

## Les états d'interaction

La propriété state porte les quatre états d'interaction : default, hover, focus et press. Le hover, le focus et le press ne durent que le temps de l'action, puis le composant revient en default.

### Règles communes

Un pattern peut préciser ces règles. Quand il s'en écarte, sa colonne Exception le dit.

| État | Règle | Exemple | Exception |
|---|---|---|---|
| default | Le rendu au repos, quand personne n'agit sur le composant. Tous les autres états partent de lui. | Button primary : fond color/blue/700, texte color/white. | Aucune. |
| hover | Le survol change ce que le pattern définit : le fond, la border, la border-bottom, l'underline ou le halo, parfois deux à la fois. Une couleur qui change passe à la nuance suivante. Depuis du blanc ou du transparent, elle passe en color/gray/100. Le hover ne prend jamais une nuance 050. | Button primary : fond color/blue/700 → color/blue/800. _PaginationItem, sans fond : → fond color/gray/100. TextInput : border color/gray/500, 1 px → 2 px. | Voir le tableau de chaque pattern. |
| focus | Un indicateur color/blue/400 de 2 px s'ajoute au rendu du hover. Un champ ou une surface (carte, ligne de liste, étape) le prend sur sa border, et une surface sans border en prend une. Tout autre composant prend une outline, avec un outline-offset de 2 px. | Button primary : fond color/blue/800, comme au hover, et une outline color/blue/400, 2 px. TextInput : border color/gray/500, 1 px → color/blue/400, 2 px. | Voir le tableau de chaque pattern et les composants imbriqués. |
| press | Une nuance de plus que le hover. | Button primary : fond color/blue/700 → color/blue/900. _PaginationItem, sans fond : → fond color/gray/200. | Voir le tableau de chaque pattern. |

Le contraste du focus est d'au moins 3:1 avec les couleurs qui le touchent, comme le demande le niveau AA du WCAG.

### Fond

| État | Règle | Exemple | Exception |
|---|---|---|---|
| default | Le fond est coloré, color/white ou absent. | Button primary : fond color/blue/700. _PaginationItem : sans fond, texte color/blue/700. FormCard : fond color/white, border color/gray/500, 1 px. | Aucune. |
| hover | Le fond passe à la nuance suivante de sa couleur. Un fond blanc ou transparent passe en color/gray/100. | Button primary : color/blue/700 → color/blue/800. _PaginationItem, sans fond : → color/gray/100. Switch : son fond est la piste, color/gray/400 → color/gray/500. | Button et IconButton en hierarchy=secondary ou tertiary, et tous les Button et IconButton en colorScheme=inverse : fond color/blue/100, puis color/blue/200 au press. Exemple : Button primary en colorScheme=inverse, fond color/white → color/blue/100. |
| focus | Un composant compact, de type bouton (Button, IconButton, _PaginationItem, Switch), prend une outline color/blue/400, 2 px, avec un outline-offset de 2 px, même s'il a une border. Une surface (FormCard, _LevelSelectorStep, _SelectListItem) prend le focus sur sa border, qui passe en color/blue/400, 2 px, sans outline. | Button secondary : fond color/blue/100, comme au hover, et une outline color/blue/400, 2 px. Sa border ne change pas. FormCard : border color/gray/500, 1 px → color/blue/400, 2 px. | Aucune. |
| press | Une nuance de plus que le hover. | Button primary : fond color/blue/700 → color/blue/900. Button secondary : sans fond → fond color/blue/200. | Aucune. |

### Contour

| État | Règle | Exemple | Exception |
|---|---|---|---|
| default | Border color/gray/500, 1 px. Le placeholder et l'icône du champ sont en color/gray/600. Link : texte et underline 1 px en color/blue/700. | TextInput : border color/gray/500, 1 px, placeholder color/gray/600. FileInput : border dashed color/gray/500, 1 px. | Aucune. |
| hover | La border passe à 2 px, sans changer de couleur. Pour Link, l'underline passe à 2 px. | TextInput : border color/gray/500, 1 px → 2 px. Link : underline 1 px → 2 px. | FileInput : le Button « Importer fichier » de la zone de dépôt prend aussi son hover, fond color/blue/050 → color/blue/100, et le garde au focus. C'est une exception à la règle des composants imbriqués. |
| focus | La border passe en color/blue/400, 2 px, même en tone=error ou tone=warning. Un curseur apparaît dans les champs de saisie. | TextInput : border color/gray/500 → color/blue/400, 2 px. TextInput en cours de saisie : rendu du focus, avec le curseur. | Link : underline 2 px, comme au hover, et outline color/blue/400, 2 px, avec un outline-offset de 2 px. FileInput : la border dashed color/gray/500 devient solid color/blue/400, 2 px. |
| press | Pas de press. | TextInput : au clic, rendu du focus, sans nuance en plus. | Aucune. |

Un champ en tone=error ou tone=warning retrouve la couleur de son tone quand il perd le focus, et son message reste affiché pendant le focus. Il n'existe pas d'état typing : pendant la saisie, le champ reste en state=focus, et passe en filled=true dès le premier caractère.

### Hybride

| État | Règle | Exemple | Exception |
|---|---|---|---|
| default | Sans fond, border-bottom 1 px. | _Tab : texte color/gray/900, border-bottom color/gray/200. Sa variante header : texte color/blue/700, border-bottom color/grape/100. | Aucune. |
| hover | Fond color/gray/100 et border-bottom 2 px, sans changer de couleur. Pas de border sur les autres côtés. | _Tab : sans fond, border-bottom color/gray/200, 1 px → fond color/gray/100, border-bottom color/gray/200, 2 px. | Aucune. |
| focus | Outline color/blue/400, 2 px, avec un outline-offset de 2 px en haut et en bas. | _Tab : les onglets sont collés, donc l'outline passe par-dessus les 2 premiers px des onglets voisins. | L'outline-offset est de 0 sur les côtés, et non de 2 px comme le veut la règle commune. |
| press | Fond color/gray/200 et border-bottom 2 px. | _Tab : sans fond → fond color/gray/200, border-bottom color/gray/200, 1 px → 2 px. | Aucune. |

### Halo

| État | Règle | Exemple | Exception |
|---|---|---|---|
| default | La case ou le bouton radio a un fond color/white et une border color/gray/500, 1 px, sans halo. | Checkbox : case de 24 px, fond color/white, border color/gray/500, 1 px. | Aucune. |
| hover | Un halo color/blue/100 de 40 px apparaît, centré derrière la case ou le bouton radio. La border de la case ou du bouton radio passe à 2 px, sans changer de couleur. | Checkbox : border color/gray/500, 1 px → 2 px, halo color/blue/100 de 40 px. | Le halo est color/blue/100, et non color/gray/100 comme le veut la règle commune. Dans un composant qui a son propre hover : voir les composants imbriqués. |
| focus | Outline color/blue/400, 2 px, sans arrondi, avec un outline-offset de 2 px, autour de la case ou du bouton radio et de son label. Le halo du hover reste affiché. Plus grand que la case, il dépasse de l'outline, tracée par-dessus. | Radio : halo et border 2 px, comme au hover, et une outline rectangulaire autour du bouton radio et de son label. | Aucune. |
| press | Pas de press. | Checkbox : pas de variante state=press. | Aucune. |

## Les autres états

Les autres états durent jusqu'à l'action suivante : une case reste cochée, un champ reste rempli. Chacun a sa propriété : checked, selected, current, filled, open ou disabled. Un état d'interaction s'y ajoute. Exemple : TextInput en filled=true et state=focus a une valeur color/gray/900 et une border color/blue/400, 2 px.

La propriété loading a son propre rendu, avec un spinner, et n'est pas traitée ici.

### Règles communes

| État | Règle | Exemple | Exception |
|---|---|---|---|
| checked, selected, current | L'état dure, et le hover s'y ajoute. L'élément prend la couleur d'accent color/blue/700, en fond, en border ou en border-bottom selon le pattern. | _PaginationItem en current=true : fond color/blue/700, texte color/white. | Voir le tableau de chaque pattern. |
| filled | La valeur saisie s'affiche. Seuls les champs ont cet état. | DateInput qui contient « 12/09/2000 » : filled=true. | Aucune. |
| open | Le contenu s'affiche : une liste, un calendrier, le contenu d'un Accordion. Le composant garde son rendu, et le hover ou le focus s'y ajoutent quand ils ont lieu. | Accordion en open=true : l'IconButton de son en-tête prend le hover et le focus. | Aucune. |
| disabled | Chaque élément présent passe en gris : fond color/gray/050, border et couleur d'accent color/gray/300, texte et icône color/gray/400. Un composant sans fond ou sans border n'en gagne pas. | Checkbox en checked=true et disabled=true : case color/gray/300, coche color/white. TextInput en disabled=true : placeholder ou valeur en color/gray/400. | Link dans un champ, comme « En savoir plus » : reste color/blue/700, car il reste cliquable quand le champ est désactivé. Button et IconButton : fond color/gray/050 sans border, quelle que soit leur hierarchy, même sans fond ni border en default. _Tab : la border-bottom garde le color/gray/200 du default. |

disabled=true n'existe qu'avec state=default : un composant désactivé n'a ni hover, ni focus, ni press. Un champ désactivé a le même rendu, rempli ou non.

### Fond

| État | Règle | Exemple | Exception |
|---|---|---|---|
| checked, current | Fond plein color/blue/700. Le texte et l'icône posés dessus passent en color/white. | _LevelSelectorStep en checked=true : fond color/blue/700, texte color/white. | FormCard : border color/blue/700, 2 px, sans fond. _SelectListItem : c'est sa Checkbox qui prend l'état checked. |
| checked, current + hover | Le hover s'ajoute : fond color/gray/100, et l'état checked reste visible. | FormCard en checked=true et state=hover : fond color/gray/100, border color/blue/700, 2 px. | _PaginationItem, _LevelSelectorStep, Switch : pas de hover, l'élément garde son rendu checked ou current. |

### Contour

| État | Règle | Exemple | Exception |
|---|---|---|---|
| filled | La valeur saisie et l'icône du champ passent en color/gray/900. En filled=false, le placeholder et l'icône restent en color/gray/600. Le label, la description, le texte d'aide et la border ne changent pas. | TextInput en filled=true : valeur color/gray/900. | Aucune. |
| open | Le rendu du focus. Seuls les champs qui s'ouvrent ont cet état : DateInput et Select. Un champ se ferme quand il perd le focus, donc open=true s'affiche toujours avec state=focus. | Select en open=true : border color/blue/400, 2 px, et la liste affichée. | Aucune. |

### Hybride

| État | Règle | Exemple | Exception |
|---|---|---|---|
| selected, current | Border-bottom color/blue/700, 2 px, et texte color/blue/700. | _Tab en selected=true : texte color/blue/700, border-bottom color/blue/700, 2 px. | Variante header de _Tab : border-bottom color/red/300, 2 px. Son texte est déjà en color/blue/700. |
| selected, current + hover | Le rendu de selected, avec un fond color/gray/100. | _Tab en selected=true et state=hover : fond color/gray/100, border-bottom color/blue/700, 2 px. | Aucune. |

### Halo

| État | Règle | Exemple | Exception |
|---|---|---|---|
| checked + hover | Le rendu de checked, avec le halo color/blue/100. | Checkbox en checked=true et state=hover : case cochée, halo color/blue/100 de 40 px. | Aucune. |

## Appliquer les principes

### Choisir le pattern d'un nouveau composant

- Un bouton, un interrupteur, une carte, une étape ou une ligne de liste suit le pattern Fond. Exemple : une nouvelle carte cliquable.
- Un champ de saisie, un lien, ou un composant dont la border est l'élément principal, suit le pattern Contour. Exemple : un nouveau champ de recherche.
- Un item d'une barre de navigation, collé à ses voisins, suit le pattern Hybride. Exemple : un nouvel item de barre d'onglets.
- Une case ou un bouton radio posé seul avec son label suit le pattern Halo. Exemple : la case « J'accepte les conditions » sous un formulaire.

### Créer et décrire les états

- Si un état ne change pas l'apparence du composant, il n'a pas de variante. Exemple : Checkbox ne change pas quand une personne appuie dessus, donc elle n'a pas de variante state=press.
- Une valeur s'écrit telle quelle, jamais comme un écart. Exemple : « fond color/blue/800 », et non « fond +100 ».

### Les composants imbriqués

- Si le composant parent est interactif lui-même, parce qu'un clic n'importe où sur lui déclenche son action, c'est lui qui prend le hover, le focus et le press. Le composant qu'il contient ne change pas pendant ces états. Exemples : _SelectListItem, FormCard.
- Si le composant parent n'est pas interactif lui-même, il n'a pas de règle propre. Chaque composant interactif qu'il contient réagit seul et suit sa règle.

| Composant | Règle |
|---|---|
| _SelectListItem | Seuls default, hover et focus sont les siens, et sa Checkbox ne change pas pendant ces trois états. Au hover, la ligne passe en color/gray/100, et la Checkbox n'a pas de halo. La Checkbox prend tous les autres états, checked et disabled compris. |
| PhoneInput | L'indicatif est un Select, toujours en filled=true et prérempli avec +33, texte et flèche en color/gray/900. Le numéro est un TextInput. Chacun réagit seul et suit sa règle. |
| Accordion | Pas d'état d'interaction : l'IconButton de son en-tête prend le hover, le focus et le press. Le seul état propre à l'Accordion est open. |
| FileInput | Le Button « Importer fichier » de la zone de dépôt prend aussi son hover quand FileInput le prend, et le garde au focus. |
