# Calques

Un calque est un élément d'un composant dans Figma : un texte, une icon, un cadre d'auto-layout... Son nom est ce que lisent les développeurs dans le mode Dev, et ce que lisent les outils qui relient Figma au code. Un calque bien nommé dit à quoi il sert, sans avoir à ouvrir le composant.

Les calques se nomment en kebab-case, c'est-à-dire en minuscules avec un tiret entre les mots. Exemple : left-icon. Seule exception, le calque d'un slot s'écrit en camelCase, parce que Figma lui donne toujours le nom de sa propriété. Exemple : leftActions. Les autres règles d'écriture valent pour toute la nomenclature : en anglais, sans accent, sans préfixe ni emoji.

## Les noms communs

Un calque qui joue l'un de ces rôles porte le nom du tableau, dans tous les composants.

### Le contenu

Ces calques reprennent les propriétés de contenu, qui remplissent un élément du composant : un texte, une icon, une zone libre.

| Calque | À quoi il sert |
|---|---|
| label | Le texte court d'un élément : un bouton, un champ, une case à cocher. |
| title, subtitle | Le titre d'un bloc et son sous-titre. |
| description | Le texte qui détaille un bloc, sous son titre. |
| caption | Une mention discrète qui complète un bloc, comme la légende d'une image ou d'un tableau. |
| helper | Le texte d'aide sous un champ. |
| message | Le message qui répond à une action : une erreur, une confirmation. |
| value | Le texte d'un champ. Il affiche le placeholder quand le champ est vide, la valeur saisie quand il est rempli. |
| icon, left-icon, right-icon | L'icon du composant, avec left ou right seulement s'il y en a deux. |
| children | La zone libre principale du composant. |

### La structure

| Calque | À quoi il sert |
|---|---|
| container | Le cadre qui porte le fond, la bordure ou l'ombre de tout le composant. |
| content | Le cadre qui regroupe le contenu principal. |
| header, footer | Le haut et le bas d'un composant découpé en parties, comme une carte ou une fenêtre. |
| actions | Le groupe de boutons ou de liens d'action. Chacun y porte le nom action. |
| list | Le cadre qui contient une série d'éléments répétés. |
| item | Un élément répété dans une list. |
| input | La zone de saisie d'un champ, ou la partie à cocher d'un Checkbox, d'un Radio ou d'un Toggle. |
| divider | Le trait de séparation entre deux parties. |
| focus-ring | L'anneau qui entoure le composant quand il a le focus. Il déborde du composant, il est donc posé hors de la mise en page. |

## Appliquer les règles

### Le rôle, pas autre chose

- Un calque porte le nom de son rôle, sans reprendre celui du composant. Exemple : label, et non checkbox-label.
- Aucun calque ne garde un nom par défaut. Exemple d'écart : Frame 27.
- Un calque de texte porte le nom de son rôle, jamais son contenu. Exemple : title, et non Votre devis en 2 minutes.
- Une instance imbriquée prend le nom de son rôle dans le composant, pas celui de son composant d'origine. Exemple : icon, et non arrow-right.

### Les cadres d'auto-layout

Un cadre prend le nom de son rôle quand il en a un, comme header ou actions. Un cadre qui sert seulement à aligner des éléments s'appelle content, ou container s'il porte le fond du composant. Il ne s'appelle jamais wrapper, group ou frame, et ne liste pas ce qu'il contient. Exemple d'écart : label-and-icon.

### Le même nom partout

- Un même élément porte le même nom dans toutes les variantes. Exemple : label dans toutes les variantes du bouton, et non label dans l'une et text dans l'autre.
- Deux calques qui jouent des rôles différents ne portent jamais le même nom. Exemple : title et subtitle, et non text deux fois. Des calques qui jouent le même rôle gardent le même nom, comme les éléments répétés d'une list.
- Une propriété de contenu remplit le calque qui porte son nom en kebab-case. Exemple : la propriété leftIcon remplit le calque left-icon. Deux exceptions : placeholder remplit le calque value, et un slot porte exactement le nom de sa propriété.
