# Primitives

Une primitive est une valeur brute du design system, comme une couleur ou un espacement. Dans Figma, les primitives sont rangées dans la collection Primitive de la librairie Fondations Canopée.

## Le nom d'une primitive

| Ce qu'elle désigne | Nom dans Figma | Nom dans le code |
|---|---|---|
| Une couleur | color/blue/500 | --color-blue-500 |
| Une couleur transparente | color/black-alpha/20 | --color-black-alpha-20 |
| Le blanc | color/white | --color-white |
| Le noir | color/black | --color-black |
| Une taille de texte | font/size/16 | --font-size-16 |
| Un interligne | font/line-height/20 | --font-line-height-20 |
| Une graisse | font/weight/semibold | --font-weight-semibold |
| Une famille de police | font/family/sans-serif | --font-family-sans-serif |
| Une épaisseur de bordure | border/width/1 | --border-width-1 |
| Un arrondi | border/radius/8 | --border-radius-8 |
| Un arrondi complet | border/radius/full | --border-radius-full |
| Un espacement | spacing/16 | --spacing-16 |
| Une largeur ou une hauteur | size/24 | --size-24 |
| Un breakpoint | breakpoint/1024 | --breakpoint-1024 |

Ces modèles sont les seuls admis. Le plugin Canopée signale un nom qui n'en suit aucun.

Deux parties du nom n'acceptent que certaines valeurs.

| Partie | Valeurs admises |
|---|---|
| Palier d'une couleur | 050, 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| Mot-clé d'un arrondi | full |

Les règles d'écriture sont celles de la nomenclature de Canopée : en minuscules, en anglais, sans accent, avec un tiret entre les mots.

Dans Figma, une barre oblique sépare chaque partie du nom, pour ranger la collection en groupes : font regroupe size, line-height, weight et family. Dans le code, les barres obliques deviennent des tirets.

## Les règles de nommage

Ces règles valent dans Figma comme dans le code. Les exemples donnent le nom Figma.

- Une primitive se nomme par ce qu'elle est, jamais par son usage, une marque ou un produit. Exemple d'écart : red-alert, axa-blue.
- Une dimension porte sa valeur en pixels. Exemple : border/radius/8.
- Une valeur qui n'est pas une mesure prend un mot-clé. Exemple : border/radius/full, font/weight/semibold.
- Une famille de police garde le nom qu'elle portait déjà dans le code. Exemple : font/family/sans-serif.

### Les couleurs

- Une teinte porte un nom de couleur en anglais. Exemple : teal, sunshine.
- Les paliers vont de 100 en 100, du 100, le plus clair, au 900, le plus foncé. Seule exception, le 050, encore plus clair.
- Le blanc et le noir n'ont ni teinte ni palier. Exemple : color/white.
- Une couleur transparente ajoute alpha au nom de sa couleur et se termine par son opacité. Exemple : color/black-alpha/20 pour un noir à 20 % d'opacité.

### Les tailles de texte

- Les tailles de texte et les interlignes forment deux échelles séparées. Une même taille peut aller avec plusieurs interlignes. Ce sont les styles de texte qui les associent.

### Spacing ou size

- spacing pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap.
- size pour la largeur ou la hauteur d'un élément, comme une icon ou un logo.

### Les breakpoints

- Un breakpoint porte la largeur d'écran à partir de laquelle la mise en page change. Exemple : breakpoint/1024 s'applique dès 1024 px de large.
- Le B2C et le B2B gardent chacun leurs breakpoints. La description de la variable indique si elle sert au B2C, au B2B ou aux deux.

## Dans le code

- Les dimensions s'écrivent en rem, mais le nom garde la valeur en pixels. Exemple : --spacing-16 vaut 1rem.
- Les arrondis, les épaisseurs de bordure et les breakpoints restent en pixels. Exemple : --border-radius-8 vaut 8px.
- Les media queries utilisent les custom media propres au B2C et au B2B, générées à partir des breakpoints. Exemple : @media (--desktop-small).
- Les anciennes variables CSS restent utilisables le temps de la migration.

## Un besoin ?

Une primitive manque ? Les canaux Aide et demande de l'équipe Teams Canopée, B2C ou B2B, sont là pour en parler.
