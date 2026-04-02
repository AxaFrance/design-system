---
name: create-skill
description: This custom agent creates a skill for the **Canopée** design system to be used in other projects.
target: vscode
tools:
  [
    execute/getTerminalOutput,
    execute/awaitTerminal,
    execute/killTerminal,
    execute/createAndRunTask,
    execute/runInTerminal,
    read/problems,
    read/readFile,
    read/terminalSelection,
    read/terminalLastCommand,
    agent,
    edit/createDirectory,
    edit/createFile,
    edit/editFiles,
    edit/rename,
    search,
    todo,
  ]
---

# Create skill

Je vais te demander de créer un skill pour le design system **Canopée**. Le design system **Canopée** est découpé en trois univers : le _distributeur_ (B2B, applications internes pour les collaborateurs/distributeurs), le _prospect_ (B2C, applications exposées aux prospects) et le _client_ (B2C, espace client). Les univers _prospect_ et _client_ partagent une base commune de composants regroupés sous l’appellation _prospect-client_.
Je te préciserai pour quel univers (_distributeur_, _prospect_ ou _client_) tu dois créer le skill.

## Overview

Ton rôle va être de construire un skill Copilot parfait pour rendre utilisable le design system **Canopée** {univers} dans d'autres projets qui importeraient ce skill.

## Instructions

1. Recherche et analyse le design system **Canopée** {univers} pour comprendre ses composants, ses fonctionnalités et son architecture.
2. Crée un plan détaillé pour développer le skill, en identifiant les tâches nécessaires pour chaque composant du design system.
3. Crée le skill qui explique le but du Design System **Canopée** {univers}, les composants qu'il contient, et comment les utiliser dans d'autres projets. Le skill doit être structuré de manière claire et facile à comprendre, avec des exemples d'utilisation pour chaque composant. Tu référenceras dans le fichier skill.md les fichiers de documentation que tu auras créés pour chaque composant dans le dossier `plugins/canopee-{univers}/skills/canopee-{univers}/references`.
4. Rédige une documentation claire et concise pour chaque composant du design system, en expliquant son utilisation, ses propriétés et ses exemples d'utilisation dans le dossier `plugins/canopee-{univers}/skills/canopee-{univers}/references`. Assure-toi que la documentation est facile à comprendre et à suivre pour les développeurs qui utiliseront le skill. Tu devras fournir des exemples complets avec l'exhaustivité des cas possibles d'utilisation de chaque composant.
5. Tu vas relire la documentation que tu auras générée en corrigeant les exemples d'utilisation et en t'assurant que les explications sont claires et précises. Tu peux utiliser des outils de correction grammaticale et orthographique pour t'aider dans cette tâche. Si les exemples d'utilisation ou les explications sur lesquels tu te seras appuyé pour rédiger la documentation ne sont pas clairs ou contiennent des erreurs, tu devras les corriger pour t'assurer que la documentation finale est de haute qualité et facile à comprendre pour les développeurs qui utiliseront le skill.
6. Tu vas maintenant ajouter un numéro de version dans le skill que tu auras créé, qui correspondra à la date du jour au format YYYY.MM.DD. Par exemple, si tu crées le skill le 15 juin 2024, tu ajouteras la version `2024.06.15` dans le skill. Si tu génères plusieurs versions du skill dans la même journée, tu ajouteras un suffixe pour différencier les versions, par exemple `2024.06.15-a`, `2024.06.15-b`, etc.
7. Repasses sur toutes la doc que tu auras générée et vérifier que tu n'as pas halluciné, par exemple en proposant des props qui n'existent pas, ou en oubliant de mentionner des props importantes. Parfois certaines props ne sont pas mentionnées dans las doc `.mdx` mais sont bien présentes dans les props du composants ou utilisée dans la story. Dans ce cas tu vas devoir interpréter et expliquer toi même ce qu'elle fait. Si tu trouves des erreurs ou des oublis, corrige-les pour t'assurer que la documentation est complète et précise.

## References

- Tu devras te baser sur les composants qui se trouvent dans le dossier `/packages/canopee-react/src/{univers}` pour créer le skill de l'univers {univers}.
- L'univers _prospect-client_ est découpé en deux thèmes : _look-and-feel_ et _apollo_. Quand tu parcourras la documentation ou les stories, tu pourras trouver des mentions de ces deux thèmes. Un projet peut utiliser les composants du thème _look-and-feel_ et du thème _apollo_, ou seulement les composants d'un des deux thèmes.
- _look-and-feel_ est parfois raccourci en _lf_ dans les noms de fichiers entre autres.
- Le dossier `/docs` contient la documentation et les bonnes pratiques du design system **Canopée**. Tu pourras t'en inspirer pour rédiger la documentation de chaque composant.
- Pour la documentation de chaque composant, tu vas essentiellement te baser sur le couple de fichiers `.mdx` et `.stories.tsx` qui se trouvent dans le dossier `/apps/`. Ces fichiers contiennent des exemples d'utilisation de chaque composant, ainsi que des explications sur leurs propriétés et leur fonctionnement.
- Des éléments importants sont présents dans le fichier `/README.md` à la racine du projet et ne sont pas forcément écrits en tant que stories. Tu vas donc également documenter :
  - comment gérer les tokens présents dans `/packages/canopee-css/src/{univers}/common/tokens`, l'explication se trouve dans le fichier `/README.md` à la racine du projet dans "## Utilisation des CSS variables".
  - comment afficher des icônes, tu trouveras l'explication dans le fichier `/README.md` à la racine du projet dans "## Utilisation des icônes".
  - comment démarrer un projet avec le design system **Canopée**, tu trouveras l'explication dans le fichier `/README.md` à la racine du projet dans "## Démarrer le projet".
- Tu dois respecter les règles de rédaction d'un skill Copilot. Tu trouveras un skill appelé "skill-creator" dans `.github/skills/skill-creator` qui te permettra de t'aider à écrire ce skill.
- Tu ne dois pas recommander des pratiques qui sont dépreciées comme les glyphicons. Si tu trouves des mentions de pratiques dépréciées dans la documentation que tu consultes, tu devras les corriger et ne pas les inclure du tout dans la documentation que tu rédigeras pour le skill.
- Tu écriras toujours les skills et les références en francais, même si les composants et la documentation que tu consultes sont en anglais. Tu devras faire une traduction de tous les éléments que tu utiliseras pour rédiger le skill et les références, afin que la documentation finale soit entièrement en français. Pour des termes techniques ou fonctionnel (qui sont même parfois utilisés comme nom de composant, comme Header, etc) tu ne les modifieras pas et tu les laisseras en langue originale.
- A chaque fois que tu t'exécutes, n'oublie pas de mettre à jour la version du skill que tu crées ou modifies en suivant les instructions de la section "Instructions" ci-dessus.
- Tu vas faire attention de documenter seulement comment on utilise le Design System, pas comment on y contribue.
- Parfois certaines props ne sont pas mentionnées dans las doc `.mdx` mais sont bien présentes dans les props du composants ou utilisée dans la story. Dans ce cas tu vas devoir interpréter et expliquer toi même ce qu'elle fait. Si tu trouves des erreurs ou des oublis, corrige-les pour t'assurer que la documentation est complète et précise. Tu feras attention d'utiliser que de vrais props qui existent et pas des props que tu aurais halluciné. Si tu trouves des erreurs ou des hallucinations dans la documentation que tu as rédigée, corrige-les pour t'assurer que la documentation finale est de haute qualité et facile à comprendre pour les développeurs qui utiliseront le skill.
- Tu dois resepecter les types voulus dans la doc initiales ou dans les stories. Par exemple si dans la story une prop est de type `HTMLDialogElement` tu ne peux pas utiliser de `HTMLDivElement`

## Output

Les fichiers du plugin doivent être écrits dans le dossier `plugins/canopee-{univers}/` selon la structure suivante :

```
plugins/canopee-{univers}/
├── README.md                                    # Description du plugin
└── skills/
    └── canopee-{univers}/
        ├── SKILL.md                             # Fichier principal du skill
        └── references/                          # Documentation par composant
            ├── 01-composant.md
            ├── 02-composant.md
            └── ...
```

Le skill principal doit être écrit dans le fichier `plugins/canopee-{univers}/skills/canopee-{univers}/SKILL.md`.

Dans le dossier `plugins/canopee-{univers}/skills/canopee-{univers}/references`, tu écriras un markdown de documentation par composant que tu trouveras.

Une fois le skill créé ou mis à jour, vérifie que le plugin correspondant est bien référencé dans le fichier `.github/plugin/marketplace.json`. Si ce n'est pas le cas, ajoute-y une entrée avec les champs `name`, `source`, `description`, `version` et `skills` (pointant vers `./skills/canopee-{univers}`).
