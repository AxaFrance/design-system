# Propriétés

Une propriété est un réglage d'un composant : son état, sa taille, son texte... Autant que possible, elle porte le même nom dans Figma et dans le code. L'objectif est de mettre ces noms en place côté Figma et, lorsque le code utilise aujourd'hui un autre nom, de le faire converger progressivement. Cette page liste les propriétés communes, puis les règles pour les appliquer.

## Variantes et booléens

Une variante change le rendu du composant. Un booléen affiche ou masque un élément. Les noms s'écrivent en camelCase et les valeurs en kebab-case, comme le fixe la nomenclature.

| Propriété | Type Figma | Valeurs | À quoi elle sert | Existe côté code |
|---|---|---|---|---|
| state | Variante | default, hover, focus, press | L'interaction en cours : par défaut, au survol, au focus, à l'appui. | Non, Figma seulement. Le code utilise :hover, :focus et :active en CSS. |
| disabled | Variante | true, false | Le composant est désactivé. | Oui |
| open, selected, current | Variante | true, false | L'état de l'élément : ouvert, sélectionné, en cours. Le nom est celui de l'attribut HTML ou ARIA, sans préfixe. Exemple : selected, jamais isSelected. | Oui, parfois sous un autre nom |
| required | Booléen | true, false | Le champ est obligatoire. Il affiche la marque des champs obligatoires sans changer le reste du rendu. | Oui |
| filled | Variante | true, false | Le champ contient une valeur. | Non, Figma seulement. Le code lit la valeur saisie. |
| checked | Variante | true, false, mixed | La case, le bouton radio ou l'interrupteur est coché. mixed pour une case qui regroupe des cases cochées et d'autres non. | Oui, parfois sous un autre nom |
| loading | Variante | true, false | Le composant est en train de charger. Seulement si le chargement est sa seule étape, sinon c'est status. Jamais une valeur de state, qui est réservé aux interactions. | Oui, parfois sous un autre nom |
| status | Variante | Propres au composant | L'étape en cours, pour un composant qui en a plusieurs, chargement compris. S'il n'y a que le chargement, c'est loading. Exemple : processing et completed pour un envoi de fichier. | Oui, sous un autre nom |
| hierarchy | Variante | primary, secondary, tertiary | L'importance du composant. Jamais variant, qui a déjà un sens dans Figma. | Oui, sous un autre nom |
| tone | Variante | neutral, information, success, warning, error | Ce que le composant veut dire, et neutral quand il ne signale rien. Exemple : une alerte en succès, un champ en erreur. Jamais mode, réservé aux modes de variables, ni invalid, qui ne couvre que l'erreur. | Oui, sous un autre nom |
| colorScheme | Variante | Propres au composant. Exemple : default, business, inverse, white, blue, alternate | Le jeu de couleurs du composant, quand la couleur est une question d'habillage et pas de sens. Exemple : inverse pour un bouton sur fond foncé, alternate pour une ligne de tableau. | Oui, sous un autre nom |
| size | Variante | x-small, small, medium, large, x-large | La taille du composant. La même échelle pour tous, reprise des mots-clés du CSS, et chaque composant n'utilise que les valeurs dont il a besoin. | Oui |
| type | Variante | Propres au composant, reprises du code | Les différentes typologies d'un même composant : même rôle, structure différente. Exemple : text ou password pour un champ, icon ou picture pour une carte. | Oui |
| breakpoint | Variante | Les seuils du code, en pixels | La largeur d'écran à partir de laquelle la variante s'applique, sans unité. Chaque univers garde ses seuils, ceux de son CSS. Exemple : 0 et 1024, quand le CSS bascule au-delà de 1023 px. | Non, Figma seulement. Le code utilise les media queries. |
| orientation | Variante | horizontal, vertical | Le sens dans lequel le contenu se dispose. | Oui, parfois sous un autre nom |
| placement | Variante | top, bottom, left, right, center | Où le composant ou un de ses éléments se place. Exemple : une infobulle au-dessus de son bouton, une icon centrée ou calée en haut dans une carte. | Oui, parfois sous un autre nom |
| first, last, even | Variante | true, false | La place de l'élément dans sa liste, quand son rendu change : le premier, le dernier, ou un rang pair. Exemple : la dernière étape d'un parcours n'a pas de trait vers la suivante. | Non, Figma seulement. Le code utilise :first-child, :last-child et :nth-child(even) en CSS. |
| sort | Variante | none, ascending, descending | Le sens du tri d'une colonne de tableau. Le nom et les valeurs sont ceux de l'attribut ARIA aria-sort. | Non, Figma seulement. Le code rend la colonne triable sans en porter le sens. |
| level | Variante | 1, 2, 3, 4 | Le niveau d'un titre, de h1 à h4. Il change la taille dans Figma et la balise dans le code. | Oui, parfois sous un autre nom |
| show* | Booléen | true, false | Affiche ou masque un élément. Exemple : showIcon. | Oui, parfois sous un autre nom |

## Contenu

Une propriété de contenu remplit un élément du composant : un texte, une icon, une zone libre. Elle porte le nom de ce qu'elle remplit, et le calque porte le même nom en kebab-case. Exemple : leftIcon remplit le calque left-icon.

| Propriété | Type Figma | Valeurs | À quoi elle sert | Existe côté code |
|---|---|---|---|---|
| label, title, subtitle, description, caption, helper, message | Texte | Texte libre | Le rôle du texte, pas sa place. Exemple : label pour un bouton ou un CardRadio, title pour une carte de contenu, message pour une erreur. | Oui, parfois sous un autre nom |
| placeholder, value | Texte | Texte libre | Le texte d'un champ : placeholder quand il est vide, value quand il est rempli. Les deux remplissent le calque value. | Oui |
| icon, leftIcon, rightIcon | Instance swap | Une instance de la librairie | Toujours icon, quel que soit son usage, avec left ou right seulement s'il y en a deux. | Oui, parfois sous un autre nom |
| children, header, actions | Slot | Des éléments libres | Une zone libre du composant. La principale s'appelle children, comme dans le code, les autres portent le nom de leur rôle. Exemple : header pour l'en-tête, actions pour les boutons. | Oui, parfois sous un autre nom |

## Appliquer les propriétés

### Une propriété, un réglage

- Si le rendu change, c'est une variante. Si un élément apparaît ou disparaît, c'est un booléen.
- Un élément que le designer peut à la fois masquer et remplacer a deux propriétés, un booléen pour l'afficher et une propriété de contenu pour le remplir. Exemple : showIcon et icon.
- Les niveaux d'importance passent par hierarchy, pas par des composants séparés. Exemple : un seul Button, pas un Button Primary et un Button Secondary.
- Tout composant qui peut charger a la propriété loading, même quand son code obtient aujourd'hui ce cas autrement. Le code adopte ensuite la même propriété, pour que tous les composants se règlent de la même façon. Exemple : un champ dont le code affiche un Spinner à la place de son icon.
- Pour un nombre, comme un pourcentage, la variante propose quelques valeurs et garde le nom du code. Exemple : value sur une barre de progression, avec 0, 5, 10 et ainsi de suite jusqu'à 100.

### Les éléments d'un composant

- Quand un composant en contient un autre, les propriétés du composant contenu sont exposées dans le panneau de celui qui le contient. Elles gardent leur nom et ne sont pas recréées. Exemple : un champ contient un libellé, le texte du libellé se règle depuis le panneau du champ.
- Une propriété qui ne règle qu'un élément porte le nom de cet élément en préfixe. Exemple : iconPlacement pour placer l'icon d'un titre.
- Une liste d'éléments devient un slot, avec le nom du code, même quand Figma l'affiche aujourd'hui avec des booléens numérotés. Exemple : children pour les onglets d'un composant d'onglets.
- Un texte reste une propriété texte, nommée selon son rôle, même quand le code le reçoit dans children. Exemple : description pour le texte d'un message.

### Les propriétés hors nomenclature

Une propriété qui commence par un tiret bas est hors nomenclature. Soit elle ne sert qu'au prototype et n'aura jamais d'équivalent dans le code, soit elle est provisoire et disparaîtra. Le tiret bas prévient les designers, et permet à un outil qui relie Figma au code de l'ignorer. Exemple : _scrollable pour le défilement en prototype. Le thème est aussi hors nomenclature, parce qu'il passera par les modes de variables. En attendant, il s'écrit _theme, avec les valeurs client et prospect.

Les propriétés marquées Figma seulement dans les tableaux n'ont pas de tiret bas. Elles font partie de la nomenclature, c'est simplement le code qui gère ces cas tout seul.

Une variante peut exister dans Figma sans exister dans le code. C'est le cas quand le style d'un composant dépend d'un composant qu'il contient. Le code le calcule tout seul, mais dans Figma un composant ne peut pas lire les propriétés d'un composant imbriqué. Cette variante porte le nom de ce qu'elle représente. Exemple : quand TextInput est désactivé et que son ItemLabel affiche le bouton Modifier, le champ prend un autre style. Dans Figma, ce cas a sa propre variante, editable.

### L'ordre dans le panneau

Les propriétés d'un composant sont triées dans le panneau Figma : d'abord les variantes, puis les booléens, les textes, les instances swap, les slots, et en dernier celles qui commencent par un tiret bas. Dans chaque groupe, elles suivent l'ordre des tableaux de cette page, puis viennent les propriétés propres au composant.
