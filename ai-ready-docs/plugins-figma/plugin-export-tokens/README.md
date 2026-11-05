# Canopée, design tokens

Plugin Figma qui vérifie les design tokens de la librairie **Fondations Canopée**, montre ce qui a changé par rapport au code, et les dépose sur GitHub au format [DTCG](https://www.designtokens.org/tr/2025.10/format/), le standard d'échange des design tokens, dans sa version stable 2025.10.

Le fichier exporté est le **pivot** de la chaîne : il se versionne, se relit sur son diff, et Terrazzo en tire les variables CSS. Le processus complet est décrit dans [Créer ou modifier un token](../../fondations/03-creer-ou-modifier-un-token.md).

Un seul fichier de code, aucune dépendance, aucun build. Le plugin ne se connecte à internet que si le dépôt Canopée est configuré, et seulement pour lire, sans jeton.

## Installer

Le plugin s'importe depuis un manifeste local, sans publication ni validation préalable.

1. Récupérer ce dossier sur son poste.
2. Dans Figma Desktop : `Plugins → Development → Import plugin from manifest…`
3. Choisir `manifest.json`.

Il apparaît ensuite dans `Plugins → Development`, sous le nom « Canopée, design tokens ». Figma relit le dossier à chaque lancement : une nouvelle version s'applique sans réimporter.

## Utiliser

Ouvrir Fondations Canopée et lancer le plugin. De haut en bas, il affiche :

1. **L'en-tête** : le nom du fichier, avec dessous ses chiffres (collections, variables, styles).
2. **À corriger** : ce qui poserait problème dans le code, seulement s'il y a quelque chose.
3. **Changements** : ce qui a changé par rapport au code, ou à une autre version choisie.
4. **Les boutons** : Télécharger le fichier, en haut à droite, et un seul bouton « Déposer sur GitHub », collé en bas de la fenêtre. Ce bouton ouvre la vue dépôt, qui masque tout le reste (voir « Déposer et télécharger »).

Tout se met à jour en direct : le plugin surveille le fichier et recalcule quelques secondes après chaque modification d'un token. En faisant défiler, l'en-tête reste visible en haut, et le titre de la carte en cours se colle juste en dessous, avec le rappel de ses compteurs. Un chevron signale chaque section qui se déplie.

## La PR en cours

À l'ouverture, puis à chaque passage entre la vue normale et la vue dépôt, le plugin lit les PR ouvertes du repo. Une PR de tokens se reconnaît à son titre, qui contient « update design tokens ». Une PR créée depuis le plugin est donc repérée dès le retour de la vue dépôt.

Tant qu'une PR de tokens est ouverte, le bouton « Déposer sur GitHub » reste désactivé. Une seconde PR contiendrait aussi les changements de la première, pas encore intégrés dans main. Un bandeau bleu, avec une icône d'information, s'affiche juste au-dessus du bouton et donne le lien de la PR : « La PR #42 attend d'être intégrée par un développeur. » Quand le dépôt est aussi bloqué pour une autre raison, l'aide sous le bouton donne cette raison.

Pendant ce blocage, le plugin relit les PR chaque fois que sa fenêtre redevient active, au plus une fois toutes les 15 secondes. Une fois la PR intégrée ou fermée, elle ne bloque plus le bouton.

## À corriger

Le rapport s'affiche dans une carte « À corriger », ou « À savoir » quand il ne contient que des informations. Chaque section a une ligne d'aide qui dit quoi faire.

| Section | Ce que ça veut dire |
|---|---|
| **Noms en conflit** | Deux tokens ou deux collections portent le même nom, ou un token porte le nom d'un groupe. Ceux listés ne sont pas exportés |
| **Liens cassés** | Des tokens ou des styles pointent vers une variable qui n'existe plus, par exemple après sa suppression. Un token n'est pas exporté si le lien est dans le mode par défaut, sinon ce mode prend la valeur par défaut. Un style n'est pas exporté |
| **Noms à corriger** | Des primitives ne suivent pas les règles de nommage |
| **Scope à renseigner** | Le type a été deviné d'après le nom, faute de scope. Un token déprécié n'est pas concerné, il n'a plus de scope |
| **Caractères interdits** | Les accolades et le point ont été remplacés par un tiret |
| **Liens vers une autre librairie** | Le code reçoit seulement la valeur, sans le lien |
| **Styles incomplets dans le code** | Une graisse non reconnue, ou des petites capitales, ne passent pas dans le code |
| **Sans description** | Ni description générée, ni description saisie dans Figma |
| **Absents du code** | Des éléments sans équivalent dans le code, comme une variable Boolean |

Tant qu'un token est écarté par les deux premières sections, le dépôt est bloqué et l'aide sous le bouton le rappelle. Les deux dernières sont de simples informations. Les sections bloquantes et les noms à corriger sont dépliés d'office. Un fichier bien tenu n'a que des informations.

La nomenclature n'est vérifiée que sur les collections dont le nom commence par « Primitive ». Quatre règles, tirées de la documentation :

- **Écriture** : minuscules, sans accent ni espace, un tiret entre les mots.
- **Forme** : le schéma attendu pour la catégorie, par exemple `color/blue/500` ou `spacing/16`.
- **Palier** : 050, ou de 100 à 900 par pas de 100.
- **Valeur** : le nombre du nom égale la valeur de la variable.

## Changements

Le plugin compare les tokens de Figma au fichier des tokens dans le code, sur la branche main de Canopée. C'est le récapitulatif à relire avant de déposer : il montre ce que le dev verra dans la PR. Les changements restent donc affichés tant que la PR n'est pas intégrée.

La carte donne le nombre de tokens ajoutés, modifiés, supprimés et dépréciés, puis la liste avec les valeurs : l'ancienne barrée en rouge, la nouvelle en vert. Quand rien n'a changé, une seule ligne le dit.

Chaque type de changement présent a sa chip, avec son nombre. Toutes sont actives à l'ouverture, cochées et colorées. Un clic sur une chip masque les lignes de son type, un second clic les réaffiche. Plusieurs types peuvent être masqués à la fois.

La carte est repliée à l'ouverture du plugin : elle ne montre que le niveau et le résumé des compteurs. Un clic sur son titre la déplie ou la replie.

Pour un token de contexte de modifier, le mode s'affiche sous le nom, par exemple client-mobile. Un mode qui reprend la valeur par défaut compte comme une valeur modifiée, pas comme une suppression. Un style de texte ou une ombre se résument en un mot plutôt qu'en JSON, avec le détail des propriétés qui changent juste en dessous quand ils sont modifiés.

Une étiquette donne le niveau du changement, du plus élevé au plus bas :

- **Majeur** : un token supprimé, ou dont le type change.
- **Mineur** : un token ajouté ou déprécié.
- **Patch** : une valeur modifiée.

Cette explication s'affiche au survol de l'étiquette. Cette règle est une proposition, à valider avec les développeurs de Canopée. En comparant à une version publiée, le plugin indique aussi la prochaine version attendue.

Le menu **Comparé à**, en pied de carte, permet de comparer avec autre chose : une version publiée de Canopée, ou un export chargé depuis son poste (**un autre fichier…**). Le menu ne propose que les versions qui contiennent le fichier des tokens, à partir de `premiereVersion` (voir « Configurer »). Glisser un export sur la carte fonctionne aussi. Les descriptions ne comptent pas comme des changements.

Tant que le fichier des tokens n'est pas dans le code, la carte le dit : au premier dépôt, tous les tokens seront ajoutés. Si GitHub ne répond pas, elle le dit aussi, et le menu reste disponible.

## Déposer et télécharger

Le dépôt passe par l'éditeur web de GitHub. Un designer sans droit d'écriture sur le repo passe par une copie du repo à son nom, un fork. Quand le fichier des tokens existe déjà dans le repo, GitHub crée cette copie tout seul et ouvre une PR. Sinon, il demande de créer la copie d'abord. Il suffit de le faire une fois depuis `https://github.com/AxaFrance/design-system/fork`, puis de créer le fichier dans sa copie et d'ouvrir la PR avec Contribute, puis Open pull request.

Le bouton « Déposer sur GitHub » est désactivé quand les tokens sont identiques au code : l'aide dessous dit qu'il n'y a rien à déposer. Il est aussi désactivé tant qu'une PR de tokens est ouverte, et un bandeau bleu juste au-dessus donne son lien (voir « La PR en cours »).

Il est collé en bas de la fenêtre et ne copie rien : il ouvre la vue dépôt. Cette vue masque l'en-tête, À corriger et Changements, et s'affiche en haut de la fenêtre. Elle rappelle d'abord ce qui part dans la PR, le niveau et les compteurs de la comparaison avec le code. Le dépôt se compare toujours au code : en entrant, le plugin relance cette comparaison si le menu pointait ailleurs. Une ligne rappelle de vérifier que Fondations est publiée et que l'équipe design system a validé les changements. Vient ensuite le parcours en quatre étapes. L'étape en cours est mise en avant, les étapes faites sont cochées.

1. **Copier et ouvrir**, désactivé tant que la comparaison avec le code est en cours, en échec ou sans changement (un lien « Réessayer » relance en cas d'échec), produit le fichier à partir de l'état actuel de Figma, le copie, et ouvre le fichier des tokens en édition sur GitHub.
2. Sur GitHub, Cmd+A puis Cmd+V pour remplacer tout le contenu, puis cliquer sur « Commit changes ».
3. **Copier le message** : de retour dans le plugin, le bouton copie le message de commit. Le coller dans GitHub, garder « Create a new branch », puis cliquer sur « Propose changes ». La branche main du repo est protégée : GitHub ne propose pas de committer directement dessus.
4. Cliquer sur « Create pull request ».

**← Retour**, en haut de la vue, revient à la vue normale et remet le dépôt au départ. Une fois le message copié, un bouton **Terminé** apparaît et fait la même chose.

Si la copie échoue, le plugin affiche le texte déjà sélectionné et il suffit de faire Cmd+C (Ctrl+C sur Windows). **Recommencer le dépôt** relance tout depuis le début. Si les tokens changent dans Figma, le texte copié n'est plus à jour, et le plugin revient aussi au début.

Le message suit la convention Conventional Commits, que le repo vérifie dans sa CI. Il dépend du niveau du changement par rapport au code :

| Niveau | Message |
|---|---|
| Majeur | `feat(canopee)!: update design tokens` |
| Mineur | `feat(canopee): update design tokens` |
| Patch | `fix(canopee): update design tokens` |
| Aucun changement | `chore(canopee): update design tokens` |

Quand le fichier n'est pas encore dans le repo, tous les tokens comptent comme ajoutés.

Le dépôt est bloqué dans quatre cas, et l'aide sous le bouton dit lequel : hors de Fondations Canopée, quand le fichier n'a aucun token à déposer, quand des tokens sont écartés, et tant que l'emplacement du fichier n'est pas configuré. Une PR de tokens ouverte le bloque aussi (voir « La PR en cours »). Fondations Canopée se reconnaît à sa clé Figma, ou à défaut à son nom.

**Télécharger le fichier**, en haut à droite, enregistre `design-tokens-canopee.resolver.json` sur le poste, pour l'archiver ou le comparer plus tard. Le nom est fixe, quel que soit le nom du fichier Figma. Le téléchargement reste possible hors de Fondations, pour contrôler un autre fichier.

## Le fichier exporté

C'est un « resolver », la forme que le DTCG prévoit pour les thèmes : un set par collection Figma, un set `Styles` s'il y a des styles, un `modifier` par collection à plusieurs modes, et `resolutionOrder` qui dit dans quel ordre les fusionner. Chaque export porte la version du plugin et sa date.

Exemple, une primitive :

```json
"sets": {
  "Primitive": {
    "sources": [
      { "spacing": { "16": { "$type": "dimension", "$value": { "value": 16, "unit": "px" } } } }
    ]
  }
}
```

Exemple, un token d'une collection à deux thèmes : le mode par défaut reste dans le set, l'autre mode ne porte que ce qui change.

```json
"modifiers": {
  "Thème": {
    "default": "prospect",
    "contexts": {
      "prospect": [],
      "client": [{ "action": { "primaire": { "$type": "color", "$value": "{color.blue.800}" } } }]
    }
  }
}
```

| Dans Figma | Dans le fichier |
|---|---|
| Couleur | `color`, en sRGB, avec le hex en repli |
| Nombre | `dimension` ou `duration` en px ou ms, `fontWeight` ou `number`, selon le **scope** |
| Chaîne de scope Font family, ou dont le nom le suggère | `fontFamily` |
| Lien vers une variable du fichier | une référence `{a.b.c}`, jamais remplacée par sa valeur |
| Lien vers une autre librairie | la valeur, avec le lien noté dans `$extensions` |
| Style de texte | `typography`, interligne en ratio de la taille, italique, soulignement et casse dans `$extensions` |
| Style d'effet avec ombre | `shadow` |
| Description | `$description`, précédée de la description générée |
| Description qui commence par « Deprecated » (variable ou style) | `$deprecated`, avec le texte qui suit, ou `true` s'il n'y en a pas. La description Figma passe alors avant la description générée |

Ne sont pas exportés, et le rapport les liste : les variables Boolean et String, qui n'ont pas de type DTCG, les styles de texte à interligne automatique, et les effets sans ombre. L'italique, le soulignement et la casse ne sont pas des tokens dans le code : chaque composant les écrit dans son CSS. Quand un style les utilise, le plugin les range dans `$extensions`, sous `fontStyle`, `textDecoration` et `textTransform`. Terrazzo ne les transforme donc pas en variables CSS, mais le fichier garde la différence entre un style et sa version soulignée, et la comparaison la montre. Les petites capitales ne sont pas exportées, et le rapport les signale.

Le fichier est pensé pour un diff lisible. Les références ne sont pas résolues, donc changer une primitive touche une ligne. Les clés sont triées dans l'ordre naturel (`050` avant `100`). Les nombres sont arrondis à quatre décimales. L'unité reste le px : le passage au rem se fait à la génération du CSS.

## Les descriptions générées

Chaque primitive et chaque variable d'un style de texte reçoit une description, écrite seulement dans le fichier exporté. Une description saisie dans Figma s'ajoute après.

| Typologie | Exemple |
|---|---|
| Couleur à palier | Couleur blue, palier 700, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #00008F. Contraste de 15:1 sur blanc. |
| Blanc, noir | Blanc, sans teinte ni palier. #FFFFFF. |
| Couleur transparente | Noir à 20 % d'opacité. |
| Espacement | Espacement de 16 px, soit 1rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size. |
| Dimension | Dimension de 24 px, soit 1.5rem dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing. |
| Arrondi | Arrondi d'angle de 8 px. |
| Épaisseur de bordure | Épaisseur de bordure de 1 px. |
| Taille de texte | Taille de texte de 16 px, soit 1rem dans le code. |
| Interligne | Interligne de 20 px, soit 1.25rem dans le code. |
| Graisse | Graisse semibold, de valeur 600. |
| Famille de police | Famille de police Source Sans Pro. |
| Variable de style de texte | Taille de texte du style body/2/regular. |

Un token dont le nom ne correspond à aucune typologie, ou une primitive qui pointe vers un autre token, garde seulement sa description Figma.

## Le geste demandé aux designers

Un seul geste reste indispensable : **renseigner le scope** à la création d'une variable. Il donne son type au token et nourrit la description générée. La description Figma devient un complément, pour un usage que le nom ne dit pas.

## Configurer

En tête de `code.js`, la constante `DEPOT` porte les réglages du plugin, tous déjà renseignés.

`cheminTokens` porte le chemin du fichier de tokens dans le dépôt Canopée, `packages/canopee-css/design-tokens-canopee.resolver.json`. Il active la comparaison avec le code et les versions publiées, et le dépôt. Le plugin ouvre alors `https://github.com/{nom}/edit/{branche}/{cheminTokens}`, ou la page de création du fichier s'il n'est pas encore dans le repo. Tant qu'il est vide, le dépôt est bloqué.

`cleFichier` porte la clé du fichier Figma Fondations Canopée.

`premiereVersion` porte la première version publiée de Canopée qui contient le fichier des tokens, `2.0.0`. Le menu « Comparé à » ne propose pas les versions plus anciennes.

## Redimensionner

La fenêtre s'ouvre à 440 px de large, et sa hauteur suit le contenu entre 560 et 800 px. Une poignée en bas à droite l'agrandit ou la réduit, entre 320 et 1000 px de large et entre 300 et 1200 px de haut. La taille choisie est retenue sur le poste. Un double-clic sur la poignée revient à la taille automatique.

## Développer

```
npm test                   # toutes les vérifications, sur un Figma simulé
node test/test.js --json   # le fichier produit par le document de test
```

Les tests chargent `code.js` dans un Figma simulé, sans ouvrir Figma.
