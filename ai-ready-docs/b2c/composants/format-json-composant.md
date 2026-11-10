# Format du JSON d'un composant

Le JSON est la partie de la fiche qui décrit le composant tel qu'il existe dans Figma : ses propriétés, ses variantes, sa structure et ses styles. Il est généré depuis Figma par le plugin des fiches, jamais écrit à la main. L'usage, le fonctionnel et le code sont dans le Markdown, qui suit la trame commune à toutes les fiches. Les deux fichiers restent séparés.

Version du format : 0.4. La structure reprend celle du plugin Component as Data, sans ce que traite le Markdown.

## Les principes

- Le JSON suffit à reconstruire le composant dans Figma. Si une information manque pour le refaire à l'identique, elle manque au JSON.
- Il ne contient que ce que Figma sait. Ce que traite le Markdown n'y figure pas : description, rôle, règles, exemples, interdits, correspondance avec le code.
- Il nomme, il ne recopie pas. Une couleur, une marge ou une typo s'écrit par le nom de sa variable ou de son style. Une valeur brute est signalée comme un défaut.
- Il reprend les noms de Figma tels quels, ceux de la nomenclature.
- Il est déterministe. Le même composant donne toujours le même fichier, dans le même ordre.

## La forme du fichier

- Un fichier par composant, à côté de son Markdown. Exemple : `button.json` et `button.md`.
- Des clés en anglais et en camelCase. Les noms de propriétés et de calques sont ceux de Figma.
- Pas de date de génération dans le fichier, sinon il changerait à chaque export. La date va dans le message du dépôt.

```json
{
  "formatVersion": "0.4",
  "meta": { },
  "api": { },
  "variants": [ ],
  "structure": { },
  "styles": { },
  "tokens": { },
  "textStyles": { },
  "components": { },
  "modeCollections": { },
  "issues": [ ]
}
```

## meta

L'identité du composant.

```json
"meta": {
  "name": "Button",
  "version": "1.0.0",
  "tokensVersion": "2.0.0",
  "type": "atom",
  "figmaKey": "…",
  "library": "B2C",
  "documentationLinks": ["https://…"]
}
```

- `version` est la version du composant, propre à lui. Le plugin la calcule à chaque export, en comparant le composant au dernier JSON exporté.
- `tokensVersion` est la première version publiée de Canopée dont le fichier de design tokens contient tous les tokens et styles de texte du composant. Elle vaut `null` quand le plugin n'a pas pu la calculer, et un défaut dit pourquoi.
- `templateLevel` vaut `block`, `section` ou `page` pour un template, selon sa page dans la librairie Figma. Un composant n'a pas ce champ.
- `type` vaut `atom`, ou `composed` quand le composant est bâti sur un autre, nommé alors dans `extends`. Pour un template, il vaut `template`, et `extends` reste écrit si le template est bâti sur un autre composant.
- `figmaKey` est la clé du composant dans la librairie. Elle permet de retrouver le vrai composant.

## api

Les propriétés, dans l'ordre de la nomenclature.

```json
"api": {
  "props": {
    "hierarchy": { "type": "enum", "enum": ["primary", "secondary", "tertiary"], "default": "primary" },
    "disabled": { "type": "enum", "enum": ["false", "true"], "default": "false" },
    "showLeftIcon": { "type": "boolean", "default": false, "controls": [{ "layer": "left-icon", "attribute": "visible" }] }
  }
}
```

- `enum` pour une variante, `boolean` pour un booléen. Les textes, les swaps et les slots sont décrits dans `structure.slots`.
- `controls` dit quel calque la propriété règle, et comment : `visible` règle l'affichage du calque, `text` son texte, `component` le composant placé dans une instance.
- Les booléens ne figurent pas dans `variants`, qui ne liste que les combinaisons de variantes.
- Les identifiants internes de Figma ne sont pas repris, parce qu'ils changent d'un fichier à l'autre.

## variants

La liste des combinaisons qui existent dans Figma, avec leur position dans l'ensemble.

```json
"variants": [
  { "values": { "state": "default", "disabled": "false", "hierarchy": "primary", "colorScheme": "default" }, "position": [64, 64] }
]
```

- Une combinaison absente n'est pas un interdit, c'est souvent une variante que personne n'a faite. Les interdits se déclarent dans le Markdown.
- `position` sert à reconstruire l'ensemble avec la même disposition.

## structure

Les calques, les contenus que l'usage remplit, et les composants imbriqués.

```json
"structure": {
  "slots": {
    "label": { "as": "children", "default": { "text": "Label" }, "controls": [{ "layer": "label", "attribute": "text" }] },
    "leftIcon": { "accepts": "Instance", "default": { "swap": "icon/account-balance" }, "preferred": ["icon/account-balance"], "controls": [{ "layer": "left-icon", "attribute": "component" }] }
  },
  "trees": [
    { "when": {}, "tree": [
      { "name": "left-icon", "type": "instance", "component": "icon/account-balance" },
      { "name": "label", "type": "text" },
      { "name": "right-icon", "type": "instance", "component": "icon/account-balance" }
    ] },
    { "when": { "state": "focus" }, "tree": [ ] }
  ],
  "uses": [ ]
}
```

- `slots` décrit les propriétés de texte, de swap et de slot, sous leur nom de propriété dans Figma, avec leur valeur par défaut. Un texte porte son contenu par défaut dans `default.text`. Un swap porte `default.swap` et, quand Figma en propose, la liste `preferred` des composants proposés.
- `trees` donne l'arbre des calques. Quand la structure change selon les variantes, un arbre par cas, conditionné par `when`. L'arbre dont le `when` correspond le plus précisément à la variante s'applique en entier, et l'arbre de `when` vide vaut pour les autres. L'anneau de focus n'existe par exemple qu'en focus.
- Quand aucune valeur de propriété ne distingue un arbre, il porte la liste exacte des variantes qui l'utilisent dans `configs`, avec un `when` vide, et ne vaut que pour elles. Pour une variante dont les valeurs égalent une de ces configurations, cet arbre passe avant le choix par `when`.
- `hidden: true` signale un calque masqué par défaut.
- `uses` liste tous les composants imbriqués dans les calques propres du composant, qu'ils soient ou non dans un ensemble de variantes, sans doublon et triés par nom. Ils sont cités par référence, leur intérieur est décrit dans leur propre fiche.
- Les arbres et les slots nomment les composants. Leur clé se lit dans l'index `components`.

## styles

Les styles en cascade : ceux de la variante par défaut, puis ce qui change selon les valeurs des propriétés.

```json
"styles": {
  "default": {
    "when": { "state": "default", "disabled": "false", "hierarchy": "primary", "colorScheme": "default" },
    "root": {
      "background": { "token": "color/blue/700" },
      "radius": { "token": "Button_primary/Radius" },
      "padding": { "top": { "token": "Button_primary/Padding Top & Bottom" } },
      "layout": { "direction": "row", "mainAlign": "center", "crossAlign": "center", "clip": true, "minWidth": { "raw": 144 } }
    },
    "label": { "textColor": { "token": "color/white" }, "textStyle": "label/1/semibold", "layout": { "sizingH": "fill", "textAlignVertical": "center" } },
    "left-icon/vector": { "background": { "token": "color/white" } }
  },
  "overrides": [
    { "when": { "state": "hover" }, "styles": { "root": { "background": { "token": "color/blue/800" } } } }
  ]
}
```

- Une surcharge vaut pour toutes les variantes dont les valeurs correspondent à son `when`, qui ne cite que les propriétés utiles. Elle complète le style par défaut : ce qu'elle ne cite pas reste celui du défaut, et `null` retire une valeur.
- Une variante part du style par défaut et reçoit toutes les surcharges qui lui correspondent. Deux surcharges qui correspondent à une même variante ne se contredisent jamais : l'ordre ne compte pas.
- Une valeur reliée à une variable s'écrit `{ "token": … }`, une valeur brute `{ "raw": … }`, signalée aussi dans `issues`. Les largeurs et hauteurs fixes brutes sont signalées elles aussi, sauf pour un calque absolu étiré sur l'axe concerné, et pour une forme ou un groupe (ellipse, vecteur, rectangle...), dont la taille vient du tracé.
- Les marges intérieures (`padding`) et l'espacement (`gap`) ne s'écrivent que pour un calque en auto-layout. Sans auto-layout, Figma ne les applique pas.
- La typo s'écrit par le nom du style de texte, `textStyle`. Sa clé se lit dans l'index `textStyles`.
- `layout.clip` dit si la racine coupe ce qui dépasse. Il est toujours écrit sur la racine.
- Un calque posé en absolu porte ses `constraints`, par exemple `{ "horizontal": "stretch", "vertical": "stretch" }`, à côté de `absolute`, `x` et `y`.
- Un calque de texte porte son `layout` quand il s'écarte des valeurs par défaut de Figma : `sizingH` et `sizingV` (`fixed`, `hug` ou `fill`, `hug` par défaut), et `textAlignVertical` (`top` par défaut). Un texte sans `layout` est en `hug` et aligné en haut.
- La couleur d'une icône se note sur son vecteur : `left-icon/vector` désigne le premier vecteur de l'instance placée dans le calque `left-icon`, là où Figma pose la couleur.
- Les modes de variables fixés sur le composant, comme le thème, se notent aussi ici. La clé de leur collection se lit dans l'index `modeCollections`.

## tokens

Chaque variable utilisée, une seule fois, avec sa librairie, sa collection et sa clé.

```json
"tokens": {
  "color/blue/700": { "library": "Fondations Canopée", "collection": "Primitive", "key": "…" }
}
```

## textStyles

Chaque style de texte utilisé, une seule fois, avec sa clé.

```json
"textStyles": {
  "label/1/semibold": { "library": null, "key": "…" }
}
```

## components

Chaque composant imbriqué ou proposé dans un swap, une seule fois, trié par nom.

```json
"components": {
  "icon/account-balance": { "library": null, "key": "…" }
}
```

- La clé est celle du composant utilisé, ou de l'ensemble de variantes quand c'est lui qui est proposé.
- Figma ne donne pas le nom de la bibliothèque d'un composant ou d'un style qui vient d'une autre bibliothèque. `library` vaut alors `null`, et la clé suffit pour le retrouver.

## modeCollections

Chaque collection de variables dont le composant fixe un mode, avec sa bibliothèque et sa clé.

```json
"modeCollections": {
  "Typography": { "library": "Fondations Canopée", "key": "…" }
}
```

## issues

Les défauts repérés par l'export : une valeur brute, un écart à la nomenclature, un texte non relié à sa propriété.

Chaque défaut a un `level` (`error`, `warning` ou `info`), une `rule` qui le nomme, un `where` qui dit où il se trouve, et un `message`. Un défaut de style porte aussi `occurrences`, le nombre de variantes où il apparaît. Il est absent quand le défaut ne se retrouve dans aucune variante.

```json
{ "level": "warning", "rule": "raw-value", "where": "styles.root.layout.minWidth", "message": "Valeur brute (144) : la relier à une variable.", "occurrences": 50 }
```

## La validation

Le format se valide par un double aller-retour :

- par script, qui reconstruit le composant depuis le seul JSON puis l'exporte à nouveau. Les deux JSON doivent être identiques. Ça prouve que le format est complet ;
- par une IA, qui reçoit le JSON et reconstruit le composant dans Figma. Ça prouve que le format est compréhensible.

Chaque écart restant est nommé : un défaut du composant, un champ qui manque au format, ou ce que le format ne porte pas volontairement.
