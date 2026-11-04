# Trame de la fiche d'un composant

La fiche d'un composant a deux parties. Le JSON, généré depuis Figma, porte l'aspect graphique, les propriétés et les états. Le Markdown, écrit à la main, porte l'usage et le fonctionnel, et c'est lui qui fait foi. Cette trame décrit le Markdown.

## La trame

```markdown
# <Composant> <version>

Utilise les design tokens de Canopée <version des design tokens> ou d'une version plus récente.

## Description
À quoi il sert, en une ou deux phrases.

## Quand l'utiliser

### À utiliser pour
Les cas où ce composant est le bon choix.

### À ne pas utiliser pour
Chaque cas nomme le composant ou la valeur à prendre à la place.
Exemple : naviguer vers une autre page, prendre Link.

## Règles selon les propriétés
Seulement là où les règles diffèrent selon une valeur. Un sous-titre par valeur.

### hierarchy=primary
Exemple : un seul primary par zone de l'interface.

## Exemples
Des cas d'usage écrits avec les propriétés de la nomenclature.
Exemple : action principale d'un formulaire, hierarchy=primary, libellé « Enregistrer ».

## Interdits
Les combinaisons de propriétés interdites, et ce qui n'est dit dans aucune autre rubrique.

## Contenu
Ce que le composant peut contenir, et ses limites.
Exemple : un libellé obligatoire, une icône au plus.

## Rédaction
Les règles de contenu : verbe, longueur, casse, ponctuation, vocabulaire.

## Comportement
Le sens des états et ce que fait le composant quand on l'utilise.
Exemple : disabled ne sert jamais à masquer une permission manquante.

## Accessibilité
L'élément HTML, le rôle ARIA et les attributs selon l'usage, puis le nom accessible, la navigation au clavier, le focus et les annonces.

## Code
Liens : la page Storybook du composant, une par thème, et son dossier sur GitHub. Le lien Storybook renseigné dans Figma doit en faire partie.
Import : l'import par thème.
Exemple : un exemple correct, le plus court possible.
Écarts : les noms qui diffèrent entre Figma et le code, et ce qui n'existe que d'un côté.

| Figma | Code |
|---|---|

## Noms à ne pas employer
Les noms qu'un designer, un dev ou un PO utilise parfois pour ce composant, y compris ses anciens noms.
La liste finit par cette phrase : « Ces noms désignent <Composant>. Le seul nom à employer est <Composant>. »

## Décisions
Les choix faits exprès, datés et motivés, pour qu'une IA ne les « corrige » pas. Chaque décision commence par la version du composant qui l'a introduite et sa date, au format **1.2.0, 2026-11-04.**
Exemple : **1.2.0, 2026-11-04.** Le libellé reste sur une seule ligne, pour garder des boutons de hauteur identique.

## Points ouverts
Ce qu'on sait faux ou pas encore tranché. Chaque point finit par « En attendant : », suivi de ce qui s'applique ou de « signaler ».
Exemple : l'ordre de deux boutons côte à côte n'est défini nulle part. En attendant : signaler.

## Pour l'IA qui lit cette fiche
Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
```

## Les règles d'écriture

- Une fiche décrit un composant tel qu'il existe dans le code et dans la nomenclature, pas tel qu'il est découpé dans Figma. Par exemple, une seule fiche Button couvre tous les niveaux, du primary au ghost.
- Dans les règles, les propriétés et leurs valeurs gardent les noms de la nomenclature. Exemple : hierarchy=secondary, plutôt que « Button Secondary ».
- Les noms utilisés dans le code n'apparaissent que dans la rubrique Code.
- Chaque règle n'est écrite qu'une fois. Si elle revient à deux endroits, les deux versions finissent par se contredire.
- Chaque point ouvert finit par « En attendant : », suivi de la règle qui s'applique si elle est tranchée, ou de « signaler » si elle ne l'est pas. Sans cette mention, une IA qui lit le point ouvert renonce à la règle ou la devine.
- Une règle qui vaut pour tous les composants va dans un fichier commun, pas dans chaque fiche.
- La consigne pour l'IA, à la fin de la fiche, est la même partout, mot pour mot. Elle fait exception au fichier commun, parce qu'une IA peut ne lire qu'une fiche.
- Le titre porte la version du composant, celle de `meta.version` dans le JSON. La ligne des design tokens, juste après le titre, reprend `meta.tokensVersion` du JSON. Le plugin calcule les deux, et `verifier-fiche.mjs` les contrôle.
- Les titres sont toujours les mêmes, dans le même ordre, pour qu'une machine s'y retrouve. Il ne faut ni en ajouter ni les renommer.
- Les rubriques vont de ce dont un designer ou un dev a besoin en premier à ce qu'il consulte en dernier.
- Quand une rubrique n'a rien à dire, le titre reste et la rubrique dit « Aucun ». Quand la réponse n'est pas encore connue, la fiche dit « Non documenté » à l'endroit où elle manque, et le manque va dans les points ouverts.

## Ce que le Markdown ne contient pas

- Tout ce que Figma sait déjà : les propriétés et leurs valeurs, les états, les tailles, les couleurs, les tokens et les thèmes.
- Le JSON généré depuis Figma s'en charge.
- Recopié à la main, tout ça deviendrait faux à la première modification du composant.

## Avant de terminer une fiche

- Quand l'utiliser : les usages courants sont-ils tous cités ? Les composants avec lesquels il peut être confondu sont-ils nommés, avec l'alternative à prendre ?
- Règles selon les propriétés : chaque valeur a-t-elle sa règle d'usage, disabled compris ?
- Exemples : chaque valeur importante a-t-elle au moins un exemple ?
- Interdits : les combinaisons de propriétés impossibles sont-elles toutes listées ?
- Contenu : ce qui est obligatoire et ce qui est limité est-il dit ?
- Comportement : que se passe-t-il au clic, au clavier, en désactivé, pendant un chargement ?
- Accessibilité : l'élément HTML, le rôle ARIA et les attributs propres à chaque usage sont-ils là, par exemple pour ouvrir une zone, envoyer un formulaire ou charger ? Le nom accessible, le clavier, le focus, les contrastes, la taille de la zone cliquable et les annonces sont-ils couverts ?
- Code : les liens vers Storybook et GitHub, l'import, le chargement des styles, un exemple avec du contenu et le tableau complet des écarts sont-ils là ?
- Décisions : chaque choix qui pourrait surprendre est-il expliqué, et commence-t-il par la version qui l'a introduite et sa date ? Aucune version citée n'est-elle plus récente que celle du titre ?
- Points ouverts : tout ce qui a été ajouté sans source y figure-t-il ? Chaque point finit-il par « En attendant : » ?
- Titre : porte-t-il la version du JSON, avec la ligne des design tokens juste en dessous ?
- Partout : aucune règle n'est-elle écrite deux fois ? Aucun rendu, couleur ou taille, n'est-il décrit ? C'est le rôle du JSON.
- Partout : une question qu'un designer ou un dev poserait reste-t-elle sans réponse et sans « Non documenté » ?
