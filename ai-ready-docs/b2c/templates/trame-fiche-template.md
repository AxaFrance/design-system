# Trame de la fiche d'un template

Un template est un assemblage de composants de Canopée, au niveau d'un bloc, d'une section ou d'une page. Sa fiche a deux parties, comme celle d'un composant. Le JSON, généré depuis Figma, porte l'aspect graphique, les propriétés et la structure. Le Markdown, écrit à la main, porte l'usage et le fonctionnel, et c'est lui qui fait foi. Cette trame décrit le Markdown.

## La trame

````markdown
# <Template> <version>

Utilise les design tokens de Canopée <version des design tokens> ou d'une version plus récente.

## Description
La description commence comme celle du template dans Figma : « Template de bloc. », « Template de section. » ou « Template de page. ». Elle dit ensuite à quoi sert le template, en une ou deux phrases.

## Quand l'utiliser

### À utiliser pour
Les cas où ce template est le bon choix.

### À ne pas utiliser pour
Chaque cas nomme le template, le composant ou la valeur à prendre à la place.
Exemple : un chargement dans un bouton, prendre Button avec loading=true.

## Règles selon les propriétés
Seulement là où les règles diffèrent selon une valeur. Un sous-titre par valeur.

### type=dialog
Exemple : la fenêtre bloque le reste de l'écran jusqu'à la fin du chargement.

## Exemples
Des cas d'usage écrits avec les propriétés de la nomenclature.
Exemple : chargement d'une page de résultats, type=default, title « Recherche en cours ».

## Interdits
Les assemblages et les combinaisons de propriétés interdits, et tout autre interdit qu'aucune rubrique ne cite.

## Composition
Les éléments assemblés, dans leur ordre d'affichage, avec leur présence et leur nombre maximal.

| Élément | Présence | Nombre maximal |
|---|---|---|
| Spinner | Requis | 1 |
| title | Facultatif | 1 |

## Rédaction
Les règles de contenu propres à ce template : verbe, longueur, casse, ponctuation, vocabulaire.

## Comportement
Ce que fait le template quand l'utilisateur s'en sert, et comment il s'adapte à la largeur de l'écran.
Exemple : sur mobile, les blocs s'empilent en colonne.

## Accessibilité
L'élément HTML et le rôle ARIA de l'ensemble, l'ordre de lecture et de tabulation, la hiérarchie des titres et les annonces.

## Code
Si le template existe dans le code :
Liens : la page Storybook du template, une par thème, son dossier sur GitHub et sa page dans le plugin Copilot. Le lien Storybook renseigné dans Figma doit en faire partie.
Import : l'import par thème.
Exemple : un exemple correct, le plus court possible.
Écarts : les noms qui diffèrent entre Figma et le code, et ce qui n'existe que d'un côté.

| Figma | Code |
|---|---|

Si le template n'existe pas dans le code :
Composants : les composants du code à assembler, avec le lien vers leur fiche.
Import : l'import de ces composants, par thème.
Exemple : un exemple d'assemblage correct, le plus court possible.

## Noms à ne pas employer
Les noms qu'un designer, un dev ou un PO utilise parfois pour ce template, y compris ses anciens noms.
La liste finit par cette phrase : « Ces noms désignent <Template>. Le seul nom à employer est <Template>. »

## Décisions
Les choix faits exprès, datés et motivés, pour qu'une IA ne les « corrige » pas. Chaque décision commence par la version du template qui l'a introduite et sa date, au format **1.2.0 - 04/11/26.**
Exemple : **1.2.0 - 04/11/26.** Le titre passe avant le sous-titre, pour garder le même ordre de lecture partout.

## Points ouverts
Ce qui est faux ou pas encore tranché. Chaque point finit par « En attendant : », suivi de ce qui s'applique ou de « signaler ».
Exemple : le nombre maximal de blocs n'est défini nulle part. En attendant : signaler.

## Pour l'IA qui lit cette fiche
Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
````

## Les règles d'écriture

- Une fiche n'écrit que ce qui est propre à l'assemblage. Les règles d'un composant assemblé restent dans la fiche de ce composant.
- Une fiche nomme les éléments assemblés par leur nom dans la nomenclature, sans les décrire de nouveau. Ainsi, le template Loader cite Spinner, et ne dit pas à quoi ressemble un Spinner.
- Dans les règles, les propriétés et leurs valeurs gardent les noms de la nomenclature.
- Les noms utilisés dans le code n'apparaissent que dans la rubrique Code.
- Chaque règle n'est écrite qu'une fois. Si elle revient à deux endroits, les deux versions finissent par se contredire.
- La consigne pour l'IA, à la fin de la fiche, est la même partout, mot pour mot, parce qu'une IA peut ne lire qu'une fiche.
- Le titre de la fiche porte la version du template, celle de `meta.version` dans le JSON. La ligne des design tokens, juste après le titre, reprend `meta.tokensVersion` du JSON.
- Les titres des rubriques sont toujours les mêmes, dans le même ordre, pour qu'une machine s'y retrouve. Il ne faut ni en ajouter ni les renommer.
- Quand une rubrique n'a rien à dire, le titre reste et la rubrique dit « Aucun ». Quand la réponse n'est pas encore connue, la fiche dit « Non documenté » à l'endroit où elle manque, et le manque va dans les points ouverts.

## Ce que le Markdown ne contient pas

Comme pour un composant, le Markdown ne recopie pas ce que Figma sait déjà : les propriétés et leurs valeurs, les tailles, les couleurs, les tokens et les thèmes. Le JSON généré depuis Figma s'en charge.

## Avant de terminer une fiche

- Description : commence-t-elle par la mention de son niveau, la même que dans Figma ?
- Quand l'utiliser : les usages courants sont-ils tous cités ? Les templates et les composants avec lesquels il peut être confondu sont-ils nommés, avec l'alternative à prendre ?
- Règles selon les propriétés : chaque valeur dont les règles diffèrent a-t-elle son sous-titre ?
- Exemples : chaque valeur importante a-t-elle au moins un exemple ?
- Interdits : les assemblages et les combinaisons de propriétés interdits sont-ils tous listés ?
- Composition : chaque élément a-t-il sa place, sa présence et son nombre maximal ? Le niveau est-il respecté : des composants et leurs textes dans un bloc, des blocs dans une section, des sections dans une page ?
- Comportement : que se passe-t-il quand l'utilisateur s'en sert, et quand l'écran rétrécit ?
- Accessibilité : l'élément HTML, le rôle ARIA, l'ordre de lecture et la hiérarchie des titres sont-ils là ?
- Code : la rubrique traite-t-elle le bon cas, selon que le template existe ou non dans le code ?
- Décisions : chaque choix qui pourrait surprendre est-il expliqué, et commence-t-il par la version qui l'a introduite et sa date ?
- Points ouverts : tout ce qui a été ajouté sans source y figure-t-il ? Chaque point finit-il par « En attendant : » ?
- Titre : porte-t-il la version du JSON, avec la ligne des design tokens juste en dessous ?
- Partout : la fiche recopie-t-elle une règle d'un composant assemblé ? Décrit-elle un rendu, une couleur ou une taille ? Si oui, le passage part.
