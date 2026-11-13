# Size

La collection Size de la librairie Fondations Canopée réunit les tailles sémantiques. Une taille sémantique porte un nom qui dit son usage, et sa valeur pointe vers une primitive. Ces tailles gardent la même valeur quels que soient le thème et l'écran : la collection Size n'a donc qu'un mode.

## Les tailles d'icônes

Elles reprennent les quatre tailles d'icône du code B2C. Le B2B n'a pas encore de tailles d'icônes.

| Nom dans Figma | Primitive | Nom dans le code |
|---|---|---|
| icon/size/extra-small | size/16 | --icon-size-extra-small |
| icon/size/small | size/24 | --icon-size-small |
| icon/size/medium | size/32 | --icon-size-medium |
| icon/size/large | size/40 | --icon-size-large |

Dans Figma, ces variables ne sont proposées que dans les champs de largeur et de hauteur.

## Le nom d'une taille

- Le nom ne porte jamais la valeur. Exemple : icon/size/small, et non size/24.
- Le nom donne l'élément (icon), la propriété (size), puis le palier, de extra-small à large.

Les règles d'écriture sont celles de la nomenclature de Canopée : en minuscules, en anglais, sans accent, avec un tiret entre les mots.

Dans le code, les barres obliques deviennent des tirets, comme pour les primitives. Exemple : --icon-size-small.

## Un besoin ?

Une taille manque ? Les canaux Aide et demande de l'équipe Teams Canopée, B2C ou B2B, sont là pour en parler.
