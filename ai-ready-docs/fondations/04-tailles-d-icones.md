# Tailles d'icônes

Les tailles d'icônes sont des tokens sémantiques : leur nom dit à quoi elles servent, et leur valeur pointe vers une primitive. Dans Figma, elles sont rangées dans la collection Size de la librairie Fondations Canopée. Elles reprennent les quatre tailles d'icône du code B2C. Le B2B n'a pas encore de tailles d'icônes.

## Les tailles

| Nom dans Figma | Primitive | Nom dans le code |
|---|---|---|
| icon/size/extra-small | size/16 | --icon-size-extra-small |
| icon/size/small | size/24 | --icon-size-small |
| icon/size/medium | size/32 | --icon-size-medium |
| icon/size/large | size/40 | --icon-size-large |

Dans Figma, ces variables ne sont proposées que dans les champs de largeur et de hauteur. Elles gardent la même valeur quels que soient le thème et l'écran : la collection Size n'a donc qu'un mode.

## Le nom d'une taille d'icône

- Le nom ne porte jamais la valeur. Exemple : icon/size/small, et non size/24.
- Le nom donne l'élément (icon), la propriété (size), puis le palier, de extra-small à large.

Les règles d'écriture sont celles de la nomenclature de Canopée : en minuscules, en anglais, sans accent, avec un tiret entre les mots.

Dans le code, les barres obliques deviennent des tirets, comme pour les primitives. Exemple : --icon-size-small.

## Un besoin ?

Une taille manque ? Les canaux Aide et demande de l'équipe Teams Canopée, B2C ou B2B, sont là pour en parler.
