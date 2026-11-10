---
name: controler-composant-figma
description: Contrôler un composant de la librairie Figma Canopée et toutes ses instances après une modification par script (fusion de thèmes, nomenclature, états, tokens) : calques, liens aux propriétés, couleurs et valeurs reliées, rendu des instances. À lancer après chaque refonte d'un composant, avant l'export du JSON avec le plugin Canopée, composants.
---

# Contrôler un composant Figma

Le plugin Canopée, composants contrôle le JSON. Il ne voit ni les instances posées dans le fichier, ni ce qui se perd quand un script copie ou modifie un composant. Ce skill couvre ce manque, avec un script fixe en lecture seule.

Il demande Figma Desktop, avec le plugin Desktop Bridge ouvert dans le fichier, et le serveur MCP Figma Console, qui donne l'outil `figma_execute`.

## Lancer le contrôle

1. Lire [controle.js](controle.js) et remplacer `SET_ID` par l'id de l'ensemble de variantes, par exemple `41:9085`.
2. Lancer le script avec `figma_execute`, sur le fichier où vit le composant, avec un délai de 300 000 ms. Le script parcourt les instances de tout le fichier, ce qui prend plusieurs secondes.
3. Relancer le script dans un second appel. Un résultat qui change entre les deux signale une écriture qui se répercute sur d'autres variantes, ou un script encore en cours.
4. Corriger chaque défaut, puis relancer jusqu'à obtenir « aucun ».
5. Rendre compte à l'équipe design system : le nombre de variantes et d'instances contrôlées, et chaque défaut laissé avec sa raison.

## Ce que le script signale

| Règle | Défaut |
|---|---|
| structure-differente | Une variante n'a pas les mêmes calques que la majorité. L'anneau de focus est permis là où il sert. |
| lien-propriete-mort, lien-propriete-absent | Un calque est relié à une propriété qui n'existe plus, ou n'est pas relié alors que le même calque l'est dans d'autres variantes. |
| visibilite-defaut | Un calque relié à un booléen n'a pas la visibilité de la valeur par défaut. |
| couleur-brute | Une couleur n'est reliée à aucun token. |
| couleur-de-base-fausse | Une couleur reliée à un token garde une autre couleur de base. Figma peut afficher cette base à la place du token. |
| opacite-sur-peinture | Une couleur de token porte une opacité. Les instances la perdent, l'opacité va donc sur le calque. |
| texte-sans-style | Un texte n'a pas de style de texte. |
| espacement-brut, epaisseur-brute | Un espacement d'auto-layout ou une épaisseur de contour n'est relié à aucun token. |
| instance-texte, instance-visibilite | Une instance affiche un autre texte que sa propriété, ou une visibilité contraire à son booléen. |
| instance-opacite, instance-couleur-texte | Sans surcharge sur l'instance, son rendu diffère du composant : opacité ou couleur du texte. |

## Les pièges connus

Relevés sur Spinner et Link. Chacun a produit une erreur invisible sur le composant lui-même.

- **Une variante copiée par `clone()` perd ses liens aux propriétés.** Il faut les réécrire, puis contrôler les instances.
- **Une opacité posée sur une couleur de token ne passe pas aux instances.** Elle va sur le calque, et la couleur reste à 100 %.
- **La couleur de base d'une peinture reliée doit égaler la valeur du token.** Elle se lit avec `variable.resolveForConsumer(node)` avant l'écriture.
- **Des textes reliés à la même propriété texte, tous mis en forme pareil, partagent toute modification.** Une écriture sur l'un s'applique à tous, dans un script comme dans l'interface. Après chaque écriture, il faut relire chaque variante dans un appel séparé. Un soulignement qui change selon l'état passe par un calque `underline`, plus sûr.
- **Les appels à la librairie peuvent bloquer un script.** `importStyleByKeyAsync`, `importVariableByKeyAsync` et `figma.teamLibrary` font parfois dépasser le délai. Le script continue alors en arrière-plan et réécrit plus tard. Il vaut mieux retrouver un token ou un style depuis une liaison existante, sur un autre composant du fichier.
- **Les polices se chargent avant toute écriture de texte**, avec `figma.loadFontAsync`.
- **La description s'écrit dans `descriptionMarkdown`**, que Figma affiche, et pas seulement dans `description`.
- **Rien ne reste dans le document après un essai**, pas même une donnée de plugin.

## Ce que le script ne contrôle pas encore

- Les règles propres à chaque pattern des principes d'interaction, comme le focus sur la border ou en outline.
- Le rendu au pixel. Une capture d'écran reste utile en plus du script.
