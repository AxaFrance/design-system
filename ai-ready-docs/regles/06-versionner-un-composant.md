# Versionner un composant

Chaque composant de Canopée a son propre numéro de version, sous la forme X.Y.Z. Ce numéro porte sur le composant dans Figma et sur sa fiche. Ce numéro monte seulement quand le composant lui-même change. Une nouvelle version de Canopée ou d'un autre composant ne le modifie pas. Il indique à tout le monde l'ampleur de chaque changement.

## Où lire la version

Chaque composant a une fiche en deux parties : un Markdown qui dit quand et comment l'utiliser, et un JSON généré depuis Figma qui décrit ses propriétés et son rendu. La version figure en tête des deux fichiers, à côté du nom du composant, par exemple « Button 1.0.0 ».

## Majeure, mineure, patch

| Niveau | Ce qui le déclenche | Exemple |
|---|---|---|
| Majeure : X.0.0 | La création d'un composant, ou sa refonte complète | Un nouveau composant en 1.0.0, ou un composant repensé de zéro en 2.0.0 |
| Mineure : 1.0.0 devient 1.1.0 | Un changement de propriétés, de calques ou de variantes | Une nouvelle valeur de taille |
| Patch : 1.0.0 devient 1.0.1 | Un design token du composant qui change, ou un texte modifié dans sa fiche Markdown | Une autre couleur au survol |

À chaque export, le plugin de Canopée compare le composant à sa version précédente et propose une mineure ou un patch. Pour une refonte complète, le designer coche lui-même la case « Refonte complète ».

Dans le détail, ces changements donnent une version mineure :

- une propriété ou une valeur retirée ou renommée ;
- une valeur par défaut qui change ;
- un nouvel ordre des propriétés ;
- un calque ajouté, retiré, renommé ou déplacé dans le composant.

Dans le détail, ces changements donnent un patch :

- une couleur, une marge, un style de texte ou un design token qui change ;
- un Markdown modifié sans changement dans Figma ;
- …

Ces changements ne modifient pas la version :

- des variantes déplacées dans la page Figma ;
- le nom du fichier Figma et les clés internes de Figma, par exemple après un export depuis une autre librairie ;
- les numéros de version reportés dans le Markdown.

## La version de Canopée requise

En tête du Markdown, une ligne indique la version minimale de Canopée dont le composant a besoin. Exemple : « Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente. » Le plugin la calcule à chaque export, à partir des versions publiées sur GitHub. Dans un projet qui utilise une version plus ancienne de Canopée, certains design tokens du composant risquent de manquer.

## Exporter un composant modifié

Un designer de l'équipe design system qui modifie un composant suit ces étapes.

1. Il modifie le composant dans la librairie Figma de Canopée.
2. Il génère le JSON avec le plugin « Canopée, composants ». Le plugin compare le composant à la dernière version enregistrée, et indique si le changement donne une version mineure ou un patch.
3. Si le composant a changé depuis le dernier export, le plugin demande si la dernière version a déjà été livrée aux développeurs.
   - Version déjà livrée : le designer répond « Oui », et le composant passe à la version suivante.
   - Version pas encore livrée : il répond « Non », et le composant garde son numéro.

   Une version est livrée quand son JSON et son Markdown sont publiés dans le repo Canopée, puis transmis aux développeurs pour être intégrés.
4. Pour deux cas spécifiques, que le plugin ne détecte pas seul, le designer coche une case.
   - « Refonte complète » : le composant passe à la version majeure suivante.
   - « Fiche md modifiée » : si seul le Markdown a changé, le composant passe au patch suivant.
5. Le designer télécharge ou copie le JSON, puis télécharge le CHANGELOG.md depuis l'onglet « Changelog ».
6. Le plugin écrit la version dans le JSON. Le designer la reporte lui-même dans le titre du Markdown, avec la version de Canopée requise dans la ligne d'en-tête.

## Le changelog

Chaque composant a un fichier CHANGELOG.md, dans le même dossier que son Markdown et son JSON. Ce fichier liste toutes les versions du composant, de la plus récente à la plus ancienne. Le plugin le génère à chaque export : personne ne le rédige à la main.

Chaque version y a une entrée, datée du jour de l'export. Ses changements sont rangés en trois rubriques : Ajouté, Modifié et Retiré. Exemple :

```
## 1.1.0 - 04/11/26

### Ajouté
- Propriété size, valeurs ajoutées : medium, small
```

Quand seul le Markdown a changé, l'entrée tient en une ligne : « Fiche Markdown modifiée ». Si la dernière version n'a pas encore été livrée aux développeurs, le composant garde son numéro. Le plugin réécrit alors l'entrée de cette version, au lieu d'en créer une nouvelle.
