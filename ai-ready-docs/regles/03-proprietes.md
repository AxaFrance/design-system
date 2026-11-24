# Propriétés

Une propriété est un réglage d'un composant : son état, sa taille, son texte... Autant que possible, elle porte le même nom dans Figma et dans le code. L'objectif est de mettre ces noms en place côté Figma et, lorsque le code utilise aujourd'hui un autre nom, de le faire converger progressivement. Cette page liste les propriétés communes, puis les règles pour les appliquer.

## Variantes et booléens

Une variante change le rendu du composant. Un booléen affiche ou masque un élément. Les noms s'écrivent en camelCase et les valeurs en kebab-case, comme le fixe la nomenclature.

Dans la colonne Valeurs, une liste de valeurs séparées par des virgules est imposée. Une phrase veut dire que chaque composant choisit ses valeurs.

| Propriété | Type Figma | Valeurs | À quoi elle sert | Existe côté code |
|---|---|---|---|---|
| state | Variante | default, hover, focus, press | L'interaction en cours : par défaut, au survol, au focus, à l'appui. | Non, Figma seulement. Le code utilise :hover, :focus et :active en CSS. |
| disabled | Variante | true, false | Le composant est désactivé. | Oui |
| open, selected, current | Variante | true, false | L'état de l'élément : ouvert, sélectionné, en cours. Le nom est celui de l'attribut HTML ou ARIA, sans préfixe. Exemple : selected, jamais isSelected. | Oui, parfois sous un autre nom |
| required | Booléen | true, false | Le champ est obligatoire. Il affiche la marque des champs obligatoires sans changer le reste du rendu. | Oui |
| filled | Variante | true, false | Le champ contient une valeur. | Non, Figma seulement. Le code lit la valeur saisie. |
| scrollable | Variante | true, false | Le contenu dépasse la hauteur du composant et défile. | Non, Figma seulement. Le code détecte le défilement. |
| checked | Variante | true, false, mixed | La case, le bouton radio ou l'interrupteur est coché. mixed pour une case qui regroupe des cases cochées et d'autres non. | Oui, parfois sous un autre nom |
| loading | Variante | true, false | Le composant est en train de charger. Seulement si le chargement est sa seule étape, sinon c'est status. Jamais une valeur de state, qui est réservé aux interactions. | Oui, parfois sous un autre nom |
| status | Variante | Propres au composant | L'étape en cours, pour un composant qui en a plusieurs, chargement compris. S'il n'y a que le chargement, c'est loading. Exemple : processing et completed pour un envoi de fichier. | Oui, sous un autre nom |
| hierarchy | Variante | primary, secondary, tertiary | L'importance du composant. Jamais variant, qui a déjà un sens dans Figma. | Oui, sous un autre nom |
| tone | Variante | neutral, information, success, warning, error | Ce que le composant veut dire, et neutral quand il ne signale rien. Exemple : une alerte en succès, un champ en erreur. Jamais mode, réservé aux modes de variables, ni invalid, qui ne couvre que l'erreur. | Oui, sous un autre nom |
| colorScheme | Variante | Propres au composant. Exemple : default, business, inverse, white, blue, alternate | Le jeu de couleurs du composant, quand la couleur est une question d'habillage et pas de sens. Exemple : inverse pour un bouton sur fond foncé, alternate pour une ligne de tableau. | Oui, sous un autre nom |
| size | Variante | x-small, small, medium, large, x-large, xx-large | La taille du composant. La même échelle pour tous, reprise des mots-clés du CSS, et chaque composant n'utilise que les valeurs dont il a besoin. | Oui |
| type | Variante | Propres au composant, reprises du code | Les différentes typologies d'un même composant : même rôle, structure différente. Exemples : rectangle, circle ou action pour Skeleton, et picture, profile ou logo pour Avatar. | Oui, parfois sous un autre nom |
| breakpoint | Variante | Les seuils du code, en pixels | La largeur d'écran à partir de laquelle la variante s'applique, sans unité. Le B2C et le B2B gardent chacun leurs seuils, ceux de leur CSS. Exemple : 0 et 1024, quand le CSS bascule au-delà de 1023 px. | Non, Figma seulement. Le code utilise les media queries. |
| orientation | Variante | horizontal, vertical | Le sens dans lequel le contenu se dispose. | Oui, parfois sous un autre nom |
| placement | Variante | top, bottom, left, right, center | Où le composant ou un de ses éléments se place. Exemple : une infobulle au-dessus de son bouton, une icon centrée ou calée en haut dans une carte. | Oui, parfois sous un autre nom |
| fullWidth | Variante | true, false | Les éléments du composant se partagent toute sa largeur, à parts égales. Exemple : les _Tab de Tabs. | Oui, sous un autre nom |
| first, last, even | Variante | true, false | La place de l'élément dans sa liste, quand son rendu change : le premier, le dernier, ou un rang pair. Exemple : la dernière étape d'un parcours n'a pas de trait vers la suivante. | Non, Figma seulement. Le code utilise :first-child, :last-child et :nth-child(even) en CSS. |
| sort | Variante | none, ascending, descending | Le sens du tri d'une colonne de tableau. Le nom et les valeurs sont ceux de l'attribut ARIA aria-sort. | Non, Figma seulement. Le code rend la colonne triable sans en porter le sens. |
| level | Variante | 1, 2, 3, 4 | Le niveau d'un titre, de h1 à h4. Il change la taille dans Figma et la balise dans le code. | Oui, parfois sous un autre nom |
| show* | Booléen | true, false | Affiche ou masque un élément. Exemple : showIcon. | Oui, parfois sous un autre nom |

## Contenu

Une propriété de contenu remplit un élément du composant : un texte, une icon, une zone libre. Elle porte le nom de ce qu'elle remplit, et le calque porte le même nom en kebab-case. Exemple : leftIcon remplit le calque left-icon.

| Propriété | Type Figma | Valeurs | À quoi elle sert | Existe côté code |
|---|---|---|---|---|
| label, title, subtitle, description, caption, helper, message | Texte | Texte libre | Le rôle du texte, pas sa place. Exemple : label pour un bouton ou une FormCard, title pour une carte de contenu, message pour une erreur. | Oui, parfois sous un autre nom |
| placeholder, value | Texte | Texte libre | Le texte d'un champ : placeholder quand il est vide, value quand il est rempli. Les deux remplissent le calque value. | Oui |
| icon, leftIcon, rightIcon | Instance swap | Une instance de la librairie | Toujours icon, quel que soit son usage, avec left ou right seulement s'il y en a deux. | Oui, parfois sous un autre nom |
| children, header, actions, items | Slot | Des éléments libres | Une zone libre du composant. La principale s'appelle children, comme dans le code, les autres portent le nom de leur rôle. Exemple : header pour l'en-tête, actions pour les boutons, items pour une liste d'éléments répétés. | Oui, parfois sous un autre nom |

Une variante prend par défaut la valeur qui sert dans la plupart des usages, écrite dans la fiche du composant. Figma ne reprend pas les valeurs par défaut du code actuel : c'est le code qui s'alignera sur Figma, quand ses composants seront mis à jour. breakpoint, qui n'existe pas dans le code, prend par défaut la valeur du desktop, comme 1024 en B2C. Un booléen d'affichage vaut true quand l'élément sert dans la plupart des usages, et false sinon. Exemple : showHelper vaut true, et le showIcon de TextInput vaut false.

Une propriété texte a pour valeur par défaut son propre nom, avec une majuscule. Exemple : « Label » pour label, « Message » pour message, « Description » pour description. Seule exception, un texte au format fixe montre un exemple de ce format, comme « JJ/MM/AAAA » pour une date, « 07 89 10 11 12 » pour un numéro de téléphone ou « Page 1 sur 7 » pour le compteur de Pagination. Un designer qui oublie de remplacer ce texte le voit tout de suite dans sa maquette, et une IA ne le prend pas pour un vrai texte.

## Les noms à éviter

| Nom à éviter | Nom à écrire |
|---|---|
| variant | hierarchy, tone ou type, selon son rôle |
| mode | tone |
| invalid | tone |
| theme | _theme |
| direction | orientation, ou fullWidth pour des éléments étirés |

## Appliquer les propriétés

### Une propriété, un réglage

- Si le rendu change, c'est une variante. Si un élément apparaît ou disparaît, c'est un booléen.
- Un élément que le designer peut à la fois masquer et remplacer a deux propriétés, un booléen pour l'afficher et une propriété de contenu pour le remplir. Exemple : showIcon et icon.
- showLabel=false n'est permis que quand un autre texte visible nomme déjà l'élément, comme le titre d'une FormCard ou l'en-tête d'une colonne de tableau. Dans le code, l'élément se relie à ce texte avec `aria-labelledby`.
- Les niveaux d'importance passent par hierarchy, pas par des composants séparés. Exemple : un seul Button, pas un Button Primary et un Button Secondary.
- Tout composant qui peut charger a la propriété loading, même quand son code obtient aujourd'hui ce cas autrement. Le code adopte ensuite la même propriété, pour que tous les composants se règlent de la même façon. Exemple : un champ dont le code affiche un Spinner à la place de son icon.
- Pour un nombre, comme un pourcentage, la variante propose quelques valeurs et garde le nom du code. Exemple : value sur une ProgressBar, avec 0, 5, 10 et ainsi de suite jusqu'à 100.
- Un composant dont le rendu change d'un breakpoint à l'autre a une variante par breakpoint, avec la propriété breakpoint. Chaque largeur d'écran a ainsi un rendu montré dans Figma, et le composant ne change pas d'un breakpoint à l'autre sans variante pour le montrer. Exemple : Tag, dont le texte passe de 14 px en mobile à 16 px en desktop.
- Un composant qui garde le même rendu sur toutes les largeurs d'écran n'a pas de propriété breakpoint. Exemple : Spinner ou Divider.

### Les éléments d'un composant

- Quand un composant en contient un autre, les propriétés du composant contenu sont exposées dans le panneau de celui qui le contient. Elles gardent leur nom et ne sont pas recréées. Exemple : un champ contient un libellé, le texte du libellé se règle depuis le panneau du champ.
- Une propriété qui ne règle qu'un élément porte le nom de cet élément en préfixe. Exemple : iconPlacement pour placer l'icon d'un titre.
- Une liste d'éléments devient un slot, avec le nom du code, même quand Figma l'affiche aujourd'hui avec des booléens numérotés. Exemple : items pour les _Tab de Tabs, comme dans le code.
- Quand le code ne reçoit qu'un nombre et construit lui-même les éléments, ce nombre devient une variante, avec le nom du code. Exemple : stepsCount pour les barres de LevelSelector. Quand Figma ne sait pas calculer les éléments affichés, ils passent quand même par un slot. Exemple : items de Pagination, que le code calcule à partir de `numberPages` et `currentPage`.
- Un texte reste une propriété texte, nommée selon son rôle, même quand le code le reçoit dans children. Exemple : description pour le texte d'un message.

### Les propriétés hors nomenclature

Une propriété qui commence par un tiret bas est hors nomenclature. Soit elle ne sert qu'au prototype et n'aura jamais d'équivalent dans le code, soit elle est provisoire et disparaîtra. Le tiret bas prévient les designers, et permet à un outil qui relie Figma au code de l'ignorer. Exemples : _animation, qui anime le Spinner dans un prototype, et _showCursor, qui affiche ou masque le curseur de saisie d'un champ. Le thème est aussi hors nomenclature, parce que ses couleurs passent par les modes de variables. Quand sa forme change, il s'écrit _theme, avec les valeurs client et prospect.

Un composant garde _theme quand sa propre forme change entre les thèmes : ses espacements, ou une forme ronde dans un thème et à angles arrondis dans l'autre. Exemples : Button, IconButton, Stepper et Pagination. Le thème d'un composant qu'il contient se règle dans son panneau, par les propriétés exposées de ce composant. Exemples : les IconButton de LevelSelector, la Pagination d'Alert. Chaque cas se tranche avec les développeurs de Canopée, selon les contraintes du code. Quand seul le rayon d'arrondi diffère, comme 8 px et 4 px, Figma garde un seul composant, celui du thème prospect. Exemples : TextInput et Checkbox.

Les propriétés marquées Figma seulement dans les tableaux n'ont pas de tiret bas. Elles font partie de la nomenclature, c'est simplement le code qui gère ces cas tout seul.

Une variante peut exister dans Figma sans exister dans le code. C'est le cas quand le style d'un composant dépend d'un composant qu'il contient. Le code le calcule tout seul, mais dans Figma un composant ne peut pas lire les propriétés d'un composant imbriqué. Cette variante porte le nom de ce qu'elle représente.

### L'ordre dans le panneau

Les propriétés d'un composant sont triées dans le panneau Figma : d'abord les variantes, puis les booléens, les textes, les instances swap, les slots, et en dernier celles qui commencent par un tiret bas. Dans chaque groupe, elles suivent l'ordre des tableaux de cette page, puis viennent les propriétés propres au composant.
