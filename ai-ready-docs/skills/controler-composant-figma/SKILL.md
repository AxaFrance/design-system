---
name: controler-composant-figma
description: Contrôler un composant de la librairie Figma Canopée et toutes ses instances après une modification par script (fusion de thèmes, nomenclature, états, tokens) : calques, liens aux propriétés, couleurs et valeurs reliées, rendu des instances. À lancer après chaque refonte d'un composant, avant l'export du JSON avec le plugin Canopée, composants.
---

# Contrôler un composant Figma

Le plugin « Canopée, composants » contrôle le JSON qu'il génère pour chaque composant. Il ne voit ni les instances posées dans le fichier, ni ce qui se perd quand un script copie ou modifie un composant. Ce skill comble ce manque. Il fournit un script toujours identique, qui lit le composant et ses instances sans rien modifier.

Il demande Figma Desktop, avec le plugin Desktop Bridge ouvert dans le fichier, et le serveur MCP Figma Console, qui donne l'outil `figma_execute`. Le fichier reste au premier plan dans Figma pendant le contrôle : en arrière-plan, Figma ralentit le plugin, et le bridge coupe le script au bout de quelques secondes.

## Lancer le contrôle

L'agent IA suit ces étapes, puis rend compte au designer qui l'a lancé.

1. Lire [controle.js](controle.js) et remplacer `SET_ID` par l'id de l'ensemble de variantes, par exemple `41:9085`. Remplacer aussi `PATTERN` par le pattern du composant, d'après le tableau « Les quatre patterns » de la page [Principes d'interaction](../../regles/06-principes-d-interaction.md) : `Fond`, `Contour`, `Hybride` ou `Halo`. Un composant sans état d'interaction prend une chaîne vide. Si le composant n'est pas dans le tableau, demander son pattern au designer.
2. Lancer le script avec `figma_execute`, sur le fichier où vit le composant, avec une durée maximale de 300 000 ms, soit cinq minutes. Le script parcourt les instances de tout le fichier.
3. Relancer le script dans un second appel. Si le résultat change entre les deux appels, la modification faite avant le contrôle n'est pas terminée. Le script de modification tourne peut-être encore en arrière-plan, ou une écriture se propage d'une variante aux autres.
4. Corriger chaque défaut, puis relancer le script jusqu'à ce que `defauts` vaille « aucun ». Un défaut peut rester s'il a une raison.
5. Donner au designer le nombre de variantes et d'instances contrôlées, et la raison de chaque défaut laissé.

## Ce que le script signale

| Règle | Défaut |
|---|---|
| structure-differente | Une variante n'a pas les mêmes calques que la majorité des variantes de même type. Le calque `focus-ring` n'est pas compté, car seules certaines variantes l'ont. |
| lien-propriete-mort, lien-propriete-absent | Un calque est relié à une propriété qui n'existe plus, ou n'est pas relié alors que le même calque l'est dans d'autres variantes. |
| visibilite-defaut | Un calque relié à un booléen est masqué alors que le booléen vaut true par défaut, ou l'inverse. |
| couleur-brute | Une couleur n'est reliée à aucun token. |
| couleur-de-base-fausse | Une couleur reliée à un token garde en mémoire une valeur différente de celle du token. Figma peut afficher cette ancienne valeur à la place du token. |
| opacite-sur-peinture | Une couleur de token porte une opacité. Les instances la perdent, l'opacité va donc sur le calque. |
| texte-sans-style | Un texte n'a pas de style de texte. |
| espacement-brut, epaisseur-brute | Un espacement d'auto-layout ou une épaisseur de contour n'est relié à aucun token. |
| taille-brute | Une largeur ou une hauteur fixe n'est reliée à aucun token. Les formes et les calques absolus étirés ne sont pas comptés. |
| taille-verrouillee | Un calque a son ratio verrouillé et une seule de ses dimensions reliée. |
| role-incoherent | Le nom d'un calque annonce un rôle qu'il n'a pas : un `mask` qui n'est pas un masque, un `label` qui n'est pas un texte, une `icon` qui n'est pas une instance. |
| nom-par-defaut | Un calque garde un nom donné par Figma ou par un import, comme « Frame 27 » ou « axa_logo_solid_rgb 1 ». Les calques d'un composant imbriqué ne sont pas comptés. |
| groupe-sans-role | Un groupe ou un cadre n'enveloppe qu'un calque, à la même taille, sans fond, contour, effet, opacité ni lien à une propriété. |
| contour-invisible | Un contour intérieur a la couleur du fond de son calque. |
| masque-sans-effet | Un masque n'a aucun calque au-dessus de lui, ou c'est un rectangle sans arrondi qui contient déjà tout ce qu'il masque. |
| calque-toujours-masque | Un calque est masqué dans toutes les variantes, sans booléen pour l'afficher. |
| press-en-trop | Un composant du pattern Contour ou Halo a une variante state=press. |
| disabled-avec-etat | Une variante disabled=true a un autre état que state=default. |
| hover-050 | Une couleur passe à une nuance 050 au hover, alors qu'elle était différente en default. |
| focus-absent, focus-epaisseur | Une variante state=focus n'a aucun contour color/blue/400, ou ce contour ne fait pas 2 px. |
| focus-ecart | Le calque `focus-ring` n'est pas à 2 px du composant, ou pas à 0 px sur les côtés pour le pattern Hybride. |
| instance-sans-master | Un composant imbriqué pointe vers un composant principal qui n'existe plus, souvent une variante supprimée. |
| instance-hors-fondations | Un composant imbriqué vient d'une librairie sans porter un nom d'asset de Fondations : icon/, pictogram/, logo/ ou flag/. |
| instance-texte, instance-visibilite | Une instance affiche un autre texte que sa propriété, ou une visibilité contraire à son booléen. |
| instance-opacite, instance-couleur-texte | Une instance que personne n'a modifiée n'a pas la même opacité, ou la même couleur de texte, que le composant. |

## Le relevé des surcharges

Le script range aussi les surcharges de toutes les instances du fichier.

- **Permises.** Le contenu (texte, valeur de propriété, échange d'icône, photo, largeur ou hauteur qui suit le contenu), la place dans la maquette (remplir le parent, contraintes, interaction de prototype, mode de variable), et la taille ou la couleur d'un asset de Fondations.
- **Noms de calque.** Un calque renommé dans une instance.
- **Sans effet.** Une surcharge qui garde la valeur du composant. Elle ne change rien au rendu, mais l'instance ne suivra plus ce point si le composant change. Il suffit de la réinitialiser.
- **À vérifier, par famille.** La taille, la couleur, le texte, les marges, la visibilité et le reste. Ces surcharges contournent souvent le composant. Chaque famille donne trois exemples, à regarder avant de conclure.

## Les pièges connus

Ces pièges ont été relevés en retravaillant Spinner et Link. Plusieurs produisent une erreur qui ne se voit pas sur le composant, seulement sur ses instances ou ses autres variantes.

- **Une variante copiée par `clone()` perd ses liens aux propriétés.** Il faut les réécrire, puis contrôler les instances.
- **Une opacité posée sur une couleur de token ne passe pas aux instances.** Elle va sur le calque, et la couleur reste à 100 %.
- **Une couleur reliée à un token doit garder la valeur du token comme couleur de base.** Le script lit cette valeur avec `variable.resolveForConsumer(node)`, avant d'écrire la couleur.
- **Des textes reliés à la même propriété texte, avec la même mise en forme, partagent leurs modifications.** Une écriture sur l'un s'applique à tous, dans un script comme dans l'interface. Après chaque écriture, il faut relire chaque variante dans un appel séparé. Un soulignement qui change selon l'état passe par un calque `underline`, plus sûr.
- **Un calque au ratio verrouillé ne garde qu'une dimension reliée.** Relier la hauteur détache la largeur. Il faut déverrouiller le ratio avec `unlockAspectRatio()`, puis relier les deux.
- **Les appels à la librairie font parfois dépasser la durée maximale de `figma_execute`.** C'est le cas de `importStyleByKeyAsync`, `importVariableByKeyAsync` et `figma.teamLibrary`. Le script continue alors en arrière-plan et réécrit plus tard. Il vaut mieux reprendre le token ou le style sur un autre composant du fichier qui l'utilise déjà.
- **Les polices se chargent avant toute écriture de texte**, avec `figma.loadFontAsync`.
- **La description s'écrit dans `descriptionMarkdown`, le champ que Figma affiche.** Écrire seulement dans `description` ne suffit pas.
- **Un script d'essai supprime tout ce qu'il a créé, données de plugin comprises.**

## Ce que le script ne contrôle pas encore

- Les règles propres à chaque pattern d'interaction et leurs exceptions. Exemple : la border d'un champ qui passe à 2 px au hover.
- Le rendu au pixel. Une capture d'écran reste utile en plus du script.
- Les surcharges perdues par une modification du composant, qui demandent un relevé avant et une comparaison après.
- La taille d'une icône posée sur l'instance plutôt que tenue par son composant principal.
