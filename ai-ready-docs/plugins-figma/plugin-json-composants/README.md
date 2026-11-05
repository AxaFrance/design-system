# Canopée, composants

Plugin Figma qui exporte le JSON d'un composant. Ce JSON est la partie de la fiche qui décrit le composant tel qu'il existe dans Figma : ses propriétés, ses variantes, sa structure et ses styles. Il suit le [format du JSON d'un composant](https://github.com/AxaFrance/design-system/blob/ai-ready-docs/ai-ready-docs/b2c/composants/format-json-composant.md). Le plugin ne touche ni au Markdown de la fiche ni au composant.

Le code est écrit en TypeScript, et Vite construit les deux fichiers que Figma charge, dans `dist/`. Le seul accès réseau est la lecture, sur le repo public de Canopée, de la liste des versions et de leurs fichiers de tokens, pour calculer la version des design tokens. L'extraction elle-même n'appelle jamais le réseau.

## Installer en développement

Le plugin s'importe depuis un manifeste local, sans publication.

1. Récupérer ce dossier sur son poste.
2. Dans ce dossier, lancer `npm ci`, puis `npm run build`.
3. Dans Figma Desktop : `Plugins → Development → Import plugin from manifest…`
4. Choisir `manifest.json`.

Il apparaît ensuite dans `Plugins → Development`, sous le nom « Canopée, composants ». Figma relit `dist/` à chaque lancement : après `npm run build`, une nouvelle version s'applique sans réimporter. Son identifiant technique reste `canopee-fiches-composants` : le changer obligerait à réimporter le plugin et effacerait la taille de fenêtre retenue.

## Utiliser

1. Ouvrir la librairie et sélectionner un composant, son ensemble de variantes, ou une instance (le plugin remonte au composant d'origine). Tant que rien n'est sélectionné, la fenêtre affiche « Aucun composant sélectionné » au centre, sans bouton.
2. Lire l'onglet « À corriger ». Avant l'export, il montre le contrôle de nomenclature : les noms du composant, de ses propriétés et de ses calques comparés aux [règles de nomenclature](https://github.com/AxaFrance/design-system/blob/ai-ready-docs/ai-ready-docs/regles/01-nomenclature.md). Après la génération, il y ajoute les valeurs brutes et les textes sans style. Si la liste est alors vide, l'onglet disparaît. Chaque défaut est écrit en clair, et un clic sélectionne dans Figma les calques ou les variantes concernés. Un écart se corrige dans Figma, jamais dans le JSON.
3. Cliquer sur « Générer le JSON ». Avant, « À corriger » s'affiche seul, comme un titre de section, avec le contrôle de nomenclature. S'il n'y a rien à corriger, il le dit au centre de la fenêtre. Les onglets « JSON », « Changelog » et « Changements » apparaissent après la génération. « Changements » dit ce qui a changé depuis le dernier export. Quand rien n'a changé, ou au premier export, il le dit au centre de la fenêtre, comme « Rien à corriger ». Les changements de style sont groupés par variantes touchées, en gras (par exemple « size=medium, _theme=prospect »), avec une ligne par changement en dessous. Les marges qui changent ensemble tiennent sur une ligne (« Marges horizontales », « Marges, sur les quatre côtés »), et la taille d'un calque absolu étiré, qui suit celle du bouton, n'est pas citée. « JSON » donne le nom du fichier, une ligne de chiffres (variables, surcharges, poids) et le texte. Le plugin ouvre « À corriger » s'il reste des défauts. Sinon, cet onglet disparaît et le plugin ouvre « JSON ». Il garde ensuite l'onglet choisi tant que la sélection reste sur le même composant. Le bouton devient « Télécharger le JSON », avec « Copier le JSON » à côté. L'icône d'actualisation, dans la rangée du nom, génère de nouveau le JSON après une modification dans Figma. La version du plugin et celle du format s'affichent dans l'onglet « JSON », sous la ligne de chiffres. L'onglet « Changelog », entre « JSON » et « Changements », montre le changelog du composant, en texte brut. Dans cet onglet, les boutons du bas deviennent « Télécharger le changelog » et « Copier le changelog ». Dans les trois autres onglets, ils portent sur le JSON.
4. Lire la carte du composant, au-dessus des onglets, quel que soit l'onglet ouvert. Sa première rangée donne le nom du composant, tel qu'il est écrit dans le JSON et sans le préfixe de la copie de travail (« Button » pour « Test/Button »). Après la génération, une étiquette suit le nom et indique le niveau : MAJEURE, MINEURE, PATCH, PREMIÈRE VERSION, VERSION GARDÉE ou INCHANGÉE. L'icône d'actualisation reste à droite de la rangée. Avant la génération, des pastilles s'affichent sur une ligne sous le nom, alignées à gauche. Le nombre de variantes et le nombre de propriétés y figurent chacun dans une pastille blanche, le chiffre en gras. Une troisième pastille donne la dernière version enregistrée dans le fichier Figma (« dernière version 1.0.0 »), ou « jamais exporté », en gris. Une dernière pastille, grise, indique « depuis une instance » quand c'est le cas. Après la génération, ces pastilles disparaissent. La version qui sera écrite dans le JSON s'affiche à côté du nom, en bleu (par exemple « 1.1.0 »). Dessous, la pastille « Version minimale des tokens requise » donne la plus ancienne version de Canopée qui contient tous les design tokens du composant (par exemple « 2.0.0 »), ou « non calculée » en rouge si elle n'a pas pu l'être. Quand le JSON a changé depuis la version enregistrée, une question encadrée en bleu s'affiche sous la pastille, avec ses deux réponses sur une ligne : « La version X.Y.Z a-t-elle été livrée aux devs ? ». « Oui, passer en X.Y.Z » prend la version suivante. « Non, garder X.Y.Z » garde la version courante, et l'étiquette indique alors VERSION GARDÉE. Tant que la question n'a pas de réponse, la version affiche « à choisir », en gris, et le bouton, grisé, devient « Répondre à la question », comme « Copier le JSON ». Chaque nouvelle génération repose la question. Deux cases modifient la version, dans le même encadré que la question, sous un filet. Leur libellé donne la version obtenue, par exemple « Refonte complète, passer en 2.0.0 ». « Refonte complète », qui n'apparaît qu'après « Oui », passe en version majeure. « Fiche md modifiée », qui n'apparaît que si le JSON n'a pas changé, donne un patch. Quand rien n'a changé, l'encadré dit « Aucun changement dans le composant. », suivi de la seule case « Fiche md modifiée ». Une refonte change forcément le composant, donc elle passe toujours par la question. À la première version, l'encadré est masqué. Le numéro, l'étiquette et le texte de l'onglet « JSON » suivent la version choisie. Les changements qui justifient la version se lisent dans l'onglet « Changements ».
5. Copier le JSON, ou télécharger `<nom-en-minuscules>.json` avec « Télécharger le JSON ». Ouvrir ensuite l'onglet « Changelog » et télécharger `<nom-en-minuscules>-changelog.md` avec le même bouton, car Figma bloque un second téléchargement lancé par le même clic. Seule une copie ou un téléchargement du JSON compte comme un export. Le plugin range alors le JSON et l'historique du changelog dans le component set, ce qui donne à tous les designers la même version de départ. Il ne garde aucun JSON sur le poste. Le prochain export du même composant monte la version à partir de là. Avant d'écrire, le plugin relit ce qui est rangé dans le component set. Si un autre export du même composant a eu lieu depuis la génération, il n'écrit rien et affiche « Un autre export de ce composant a eu lieu depuis cette génération. Rien n'a été enregistré : générer de nouveau le JSON, puis l'exporter. » Copier puis télécharger la même génération, ou répondre « Non, garder » après un premier export, reste accepté. Quand une erreur s'affiche après un téléchargement, le message de succès disparaît de la fenêtre, pour ne pas rester à côté de l'erreur. Si le designer modifie un calque du composant après la génération, un bandeau bleu écrit « Le composant a changé depuis la génération de ce JSON. », « Copier le JSON » est grisé et le bouton principal devient « Générer de nouveau ». Le plugin refuse aussi d'enregistrer un export périmé, et la carte met à jour le nom et les compteurs. Seuls les calques du composant sont surveillés : un composant imbriqué sur une autre page, une variable ou un style de texte modifié ne rendent pas le JSON périmé.

## Les règles de nomenclature

Au lancement, le plugin lit ses règles dans la page `regles/03-proprietes.md`, sur la branche `ai-ready-docs` du repo Canopée : l'ordre des propriétés, les valeurs imposées et les noms à éviter. Il attend 3 secondes au plus. GitHub peut servir une ancienne version de la page pendant 5 minutes.

Si la page est illisible ou GitHub injoignable, le plugin garde la copie écrite dans son code et affiche un bandeau. Si une propriété n'a plus de liste de valeurs dans la doc, le bandeau la nomme et ses valeurs ne sont plus contrôlées.

Le plugin suit seulement ces tableaux : un nouveau type de contrôle demande du code. `npm test` échoue si la copie du code s'écarte de la page.

## Les templates

Le plugin reconnaît un template à sa page dans la librairie : `Templates - Blocks`, `Templates - Sections` ou `Templates - Pages`. Il écrit alors `template` dans `meta.type`, et `block`, `section` ou `page` dans `meta.templateLevel`. Un composant n'a pas ce niveau, et un sous-composant rangé sur ces pages non plus. Un template bâti sur un autre composant garde `extends`.

Le contrôle de nomenclature vérifie que la description du template commence par « Template de bloc. », « Template de section. » ou « Template de page. », selon sa page. Il signale aussi une description qui commence par une de ces mentions quand le composant est rangé ailleurs. `npm test` échoue si ces noms s'écartent de la page `regles/02-composants.md`.

## Les versions

Chaque composant a sa propre version `X.Y.Z`, indépendante de celle du code. Un composant sans version passe en `1.0.0` au premier export.

- Majeure : une refonte complète. Le plugin ne la devine pas, le designer coche « Refonte complète ».
- Mineure : une différence dans les propriétés (propriété ou valeur ajoutée, retirée ou renommée, valeur par défaut, ordre), dans les slots, dans les calques, ou dans la liste des variantes.
- Patch : toute autre différence, par exemple les styles, les variables, les styles de texte, les composants imbriqués, le niveau d'un template ou les liens de documentation.
- Ne comptent pas : la position des variantes sur le canevas, `issues`, `_tool`, `formatVersion`, `meta.version`, `meta.tokensVersion`, la librairie (`meta.library`), `meta.figmaKey`, et les `library` et `key` des index `tokens`, `textStyles`, `components` et `modeCollections`. La manière de regrouper les surcharges de style ne compte pas non plus : le plugin compare les styles effectifs de chaque variante.
- Rien n'a changé : la version reste la même. Si seule la fiche Markdown a changé, la case « Fiche md modifiée » donne un patch.
- Tant que rien n'est livré aux devs, la réponse « Non, garder » exporte les changements sous la version courante. L'export remplace la base enregistrée, donc ces changements ne comptent plus à l'export suivant.

La version précédente et la base de comparaison sont lues dans le component set, au namespace `canopee_fiches` et à la clé `export` (`getSharedPluginData`). Si cette donnée n'existe pas, le composant n'a pas de version et reçoit `1.0.0`. Si l'écriture de la base échoue, par exemple à cause de la taille, le plugin affiche l'erreur dans la fenêtre et n'écrit ni l'historique ni la version précédente : la version n'est alors pas enregistrée, et le prochain export repart de la version précédente.

Une donnée rangée dans le component set est absente, lisible ou illisible. Absente, elle vaut une première version. Illisible, elle n'est jamais écrasée sans message :

- Base illisible : le plugin affiche « La dernière version enregistrée est illisible dans le fichier Figma. Le plugin repart de la version 1.0.0, sans toucher au changelog enregistré. » L'export réécrit la base, mais ni le changelog ni la version précédente.
- Changelog illisible, ou qui n'est pas un tableau : le plugin affiche « Le changelog enregistré est illisible dans le fichier Figma. Le plugin ne le remplacera pas. » L'export écrit la base, mais pas le changelog ni la version précédente.
- Version précédente illisible : elle est traitée comme absente.

## Le changelog

À chaque génération, le plugin calcule le changelog du composant en comparant les JSON. Le fichier prend le nom du composant, par exemple `button-changelog.md`. Personne ne le rédige à la main. Il contient toutes les versions, la plus récente en haut, et se range à côté du JSON et du Markdown du composant.

```
# Changelog de Button

## 1.1.0 - 04/11/26

### Ajouté
- …

### Modifié
- …

### Retiré
- …
```

Le titre reprend `meta.name`, avec « d' » devant une voyelle (`# Changelog d'IconButton`). Une rubrique vide est omise. Le fichier finit par un saut de ligne.

- Ajouté : propriétés, valeurs de propriété, slots, variantes et variables ajoutés.
- Retiré : les mêmes éléments, retirés.
- Modifié : l'ordre des propriétés et des variantes, les valeurs par défaut, la structure des calques et les styles. Un changement de style tient sur une ligne : `size=medium : marges horizontales, 24 → 16`.
- Chaque différence que détecte le niveau de version a sa ligne. Outre celles ci-dessus, le changelog dit : `Propriété <k>, ordre des valeurs modifié`, `Propriété <k> modifiée` et `Slot <k> modifié` (quand aucune autre ligne ne cite la propriété ou le slot), `Ordre des variantes modifié`, les styles de texte, composants imbriqués et collections de modes ajoutés ou retirés, `Lien de documentation modifié` et `Composant renommé : <ancien> → <nouveau>`.
- Filet de sécurité : si le niveau détecte un changement qu'aucune ligne ne décrit, par exemple un champ que le plugin ne connaît pas, le changelog écrit `Autre changement dans le JSON` sous Modifié. Un test vérifie qu'un niveau non nul donne toujours une entrée non vide.
- Absents du changelog : les variantes déplacées sur le canevas et la ligne « Défauts ». Le changelog n'est pas tronqué, contrairement à l'onglet « Changements » qui s'arrête à 20 lignes.

Les cas particuliers :

- Première version : l'entrée `1.0.0` dit « Première version du composant » sous Ajouté.
- « Refonte complète » cochée : « Refonte complète du composant » ouvre la rubrique Modifié, suivie du détail des changements.
- « Fiche md modifiée » cochée, avec un JSON inchangé : une seule ligne sous Modifié, « Fiche Markdown modifiée ».
- Aucun changement et aucune case cochée : l'historique ne bouge pas.
- Composant déjà exporté avant le changelog : l'historique démarre avec l'entrée de l'export suivant. Les versions plus anciennes n'y figurent pas. S'il est resté en 1.0.0, son historique démarre à l'entrée « Première version du composant ».

### Le stockage de l'historique

Le plugin range l'historique dans le component set, au namespace `canopee_fiches`, à côté de la base. Figma limite chaque entrée à 100 Ko, donc chaque donnée a sa clé.

- `changelog` : le tableau JSON des entrées `{ version, date, ajoute, modifie, retire }`, la plus récente en premier. La date est celle de l'export, au format `AAAA-MM-JJ`. Le fichier téléchargé l'affiche au format `JJ/MM/AA`.
- `version-precedente` : le JSON exporté de la version précédente. Il sert à recalculer l'entrée d'une version gardée.

La génération n'écrit rien. L'export (copie ou téléchargement du JSON) enregistre les deux clés, comme la base, sauf si le changelog ou la base était illisible à la génération. Si une écriture échoue, le plugin affiche l'erreur dans la fenêtre.

- Nouvelle version : l'entrée compare la base à la nouvelle fiche, sous le nouveau numéro, et s'ajoute en tête. À l'export, la base devient la version précédente.
- Version gardée (« Non, garder X.Y.Z ») : l'entrée de X.Y.Z est recalculée en comparant la version précédente à la nouvelle fiche, et remplace l'ancienne, avec la date de l'export. Les exports successifs d'une version gardée ne s'empilent donc pas. Si X.Y.Z est la première version, son entrée reste « Première version du composant ». Sans version précédente, le plugin compare à la base et ajoute les lignes nouvelles à l'entrée existante, sans doublon.

### Version des design tokens

`meta.tokensVersion` est la première version publiée de Canopée, à partir de `2.0.0`, dont le fichier `packages/canopee-css/design-tokens-canopee.resolver.json` contient tous les tokens du composant. Le plugin compare le nom d'une variable (`color/blue/700`) au chemin du token (`color.blue.700`), et celui d'un style de texte (`label/1/semibold`) au chemin `typography.label.1.semibold`, rangé dans le set `Styles`. Les versions publiées qui le rangent encore sous `typographie` restent reconnues. Il garde en mémoire, pendant la session, la liste des versions une fois lue et les fichiers déjà lus. Un appel à GitHub qui ne répond pas au bout de 10 secondes échoue.

- Un token présent dans aucune version publiée : défaut `token-non-publie` de niveau `warning`, et `tokensVersion` vaut `null`.
- Aucune version ne réunit tous les tokens du composant : défaut `tokens-sans-version-commune` de niveau `warning`, et `tokensVersion` vaut `null`.
- Le fichier de tokens d'une version répond 404 : le plugin ignore cette version et essaie la suivante. Si toutes répondent 404, défaut `tokens-sans-fichier` de niveau `warning` : « Aucune version publiée de Canopée ne contient le fichier de design tokens. » `tokensVersion` vaut `null`.
- GitHub répond 403 ou 429 : défaut `tokens-limite-github` de niveau `warning` : « GitHub limite les appels depuis ce poste : la version des design tokens n'a pas pu être calculée. Réessayer plus tard. » `tokensVersion` vaut `null`.
- Toute autre panne, délai dépassé compris : défaut `tokens-injoignables` de niveau `warning` (« GitHub ne répond pas : la version des design tokens n'a pas pu être calculée. »), et `tokensVersion` vaut `null`.

La fenêtre s'agrandit avec son contenu. Une poignée en bas à droite permet de choisir sa taille, retenue sur le poste, et un double-clic dessus revient à la taille automatique. Le texte du JSON n'a pas de poignée propre : il occupe la hauteur libre de la fenêtre, 160 px au moins. Il est coloré comme dans un éditeur de code, avec les couleurs de VS Code pour les clés, les textes, les nombres, et pour true, false et null. Cmd+A ou Ctrl+A n'y sélectionne que le JSON.

Le fichier se range à côté du Markdown du composant. Exemple : `button.json` et `button.md`.

## Ce que produit le plugin

Les clés de premier niveau sont toujours dans cet ordre : `formatVersion`, `meta`, `api`, `variants`, `structure`, `styles`, `tokens`, `textStyles`, `components`, `modeCollections`, `issues`, puis `_tool`.

- Dans `meta`, `version` (celle du composant) et `tokensVersion` (celle de Canopée) suivent `name`, dans cet ordre.
- Le script du bridge n'appelle pas le réseau : `version` et `tokensVersion` y valent `null`.
- Les noms de propriétés et de calques sont ceux de Figma. Seul le suffixe interne `#id` des propriétés est retiré.
- Une valeur reliée à une variable s'écrit `{ "token": "<nom de la variable>" }`. Sinon c'est `{ "raw": <valeur> }`, avec une entrée dans `issues`, sauf pour une valeur nulle.
- Un texte relié à un style de texte s'écrit `"textStyle"`. Sans style, la typo détaillée est reprise et signalée.
- `issues` regroupe tous les défauts : écarts à la nomenclature, valeurs brutes, textes sans style, doublons de variables. Un niveau `info` n'est pas un défaut, par exemple une propriété qui commence par un tiret bas.
- Les différences de style entre variantes sont regroupées en surcharges dont le `when` ne cite que les propriétés utiles, sans `precedence`.
- Le même composant, dans le même état de la base et des versions publiées, donne le même fichier, octet pour octet. Aucune date n'y figure.
- Une lecture qui échoue dans Figma devient un défaut de niveau `error`, règle `lecture-impossible`, au lieu de laisser un JSON incomplet sans signal.
- Version du plugin : les deux premiers chiffres sont ceux du format produit, le dernier monte à chaque changement de la sortie ou du comportement du plugin.

## Utiliser l'extraction depuis le bridge

Le cœur de l'extraction est délimité dans `src/code.ts` par deux commentaires repères. Pour le passer dans un `figma_execute` sans ouvrir le plugin, après `npm ci` :

```
node scripts/construire-bridge.mjs --id 12:34
```

Le script retire les types et produit `scripts/extraire.bridge.js`, à coller tel quel dans `figma_execute`. Il prend l'id du component set dans la constante en tête (à remplacer à la main si `--id` n'est pas donné) et retourne le JSON, sous forme de texte, sans version ni version des design tokens (elles valent `null`). Ce fichier est généré, il faut le reconstruire après chaque changement de `src/code.ts`.

Le cœur contient aussi un bloc plus petit, entre `// >>> DEBUT REGLES` et `// <<< FIN REGLES` : les règles d'expansion des surcharges (`matches`, `effectiveStyles`, `canonical`). `scripts/construire-retour.mjs` le recopie dans le script de reconstruction, à la place du marqueur `__REGLES__` de `scripts/reconstruire.modele.js`.

## Tester

```
npm run build       # construit dist/code.js et dist/ui.html
npm run typecheck   # contrôle les types du code, de l'interface et des tests
npm test            # construit le plugin, puis lance toutes les vérifications
npm run format      # formate le code avec Prettier
```

Les tests utilisent Vitest. Chaque test prépare son propre état, et un échec n'arrête pas les suivants, tous sont listés. Ils font tourner `dist/code.js` sur un Figma simulé (un bouton à deux variantes, une variable de couleur, des valeurs brutes, une icône imbriquée) et sur un GitHub simulé : aucun test n'appelle le vrai réseau. Ils vérifient le niveau de changement, la version suivante, le calcul de la version des design tokens et la base partagée, puis le script du bridge, qui doit être celui que génère le code actuel. Ils couvrent `scripts/verifier-fiche.mjs` sur une fiche minimale, et deux garde-fous du script de reconstruction : il refuse un autre fichier que celui de sa configuration, et son étape `supprimer` ne retire que ce qui porte sa marque. La reconstruction complète se vérifie dans Figma, par l'aller-retour. Un dernier test cherche les tirets longs et le point médian dans tous les fichiers du plugin. Un test d'intégration fait tourner `dist/ui.html` dans jsdom, relié au plugin simulé, et compare les textes de l'interface à des instantanés. Un test compare le JSON du bouton à `test/fixtures/reference-output.json`. Un test de garde compare une empreinte de la sortie du bouton à `test/fixtures/sortie-reference.json` : si la sortie change, monter `VERSION` puis mettre ce fichier à jour. Un autre test lit les tableaux de `03-proprietes.md` et les compare aux constantes de `src/code.ts` (ordre, valeurs imposées, variantes vrai ou faux) : la documentation fait foi, et c'est le code qui se corrige.

## Crédit

Ce plugin est dérivé du kit Component as Data d'Alexis Vaysse, sous licence MIT (voir `LICENSE`). Il en reprend l'extraction, et remplace le contrôle de nomenclature du kit par les règles AXA.

## Vérifier qu'une fiche suit son JSON

`node scripts/verifier-fiche.mjs <fiche.md> <fiche.json>` contrôle que chaque `propriété=valeur` citée dans le Markdown existe dans le JSON, que les propriétés du tableau des écarts existent, et signale les valeurs de variante qui n'ont pas de règle. Il contrôle aussi :

- que le titre de la fiche est exactement `# <meta.name> <meta.version>` ;
- que la ligne suivante, après une ligne vide, est « Utilise les design tokens de Canopée <meta.tokensVersion> ou d'une version plus récente. » ;
- que chaque décision de la rubrique « Décisions » commence par `- **X.Y.Z - JJ/MM/AA.**`, sans version plus récente que `meta.version` ;
- que chaque point ouvert finit par « En attendant : » ;
- que le lien Storybook renseigné dans Figma figure dans la rubrique Code ;
- que la consigne pour l'IA est la dernière rubrique, mot pour mot comme dans la trame.

Il sort en erreur si une propriété ou une valeur est inconnue, si la version ou la version des design tokens manque dans le JSON, si le titre, la consigne ou la ligne des design tokens ne sont pas ceux attendus, si une décision n'a pas sa version et sa date, si un point ouvert ne dit pas ce qui s'applique en attendant ou si le lien Storybook manque.
