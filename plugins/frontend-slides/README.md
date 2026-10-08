# Frontend Slides

Ce dépôt référence **Frontend Slides v2.1.0** dans sa marketplace Copilot. Les fichiers du plugin ne sont pas copiés dans le monorepo : Copilot les récupère depuis la source amont épinglée sur [zarazhangrui/frontend-slides v2.1.0](https://github.com/zarazhangrui/frontend-slides/releases/tag/v2.1.0). La licence amont est MIT.

## Installation

Prérequis : GitHub Copilot CLI récent et accès au dépôt `AxaFrance/design-system`.

```sh
copilot plugin marketplace add AxaFrance/design-system
copilot plugin install frontend-slides@canopee-plugins
```

La marketplace `canopee-plugins` fournit également les plugins Canopée. L’installation est propre à l’utilisateur Copilot CLI; le plugin et ses sources restent versionnés dans ce dépôt.

## Utilisation

Dans Copilot CLI, décrivez la présentation souhaitée et demandez explicitement la skill `frontend-slides`. Pour une présentation existante, indiquez le chemin du fichier HTML et demandez les changements à effectuer. La skill peut aussi convertir un fichier PowerPoint; cette fonction nécessite Python et `python-pptx`.

Pour une nouvelle présentation, la skill recueille le but, le contenu, la longueur et la densité souhaitée, puis produit trois aperçus visuels. Choisissez une direction avant qu’elle génère le deck complet. Le résultat est un fichier HTML autonome, sans dépendances npm.

Dans ce dépôt, la présentation existante est [`docs/presentation/canopee-design-system.html`](../../docs/presentation/canopee-design-system.html). Exemple de demande dans Copilot CLI : « Utilise la skill `frontend-slides` pour mettre à jour la présentation Canopée dans `docs/presentation/canopee-design-system.html` afin d’y expliquer [le sujet]. Préserve le contenu existant qui reste pertinent. » Pour une nouvelle présentation, décrivez le sujet et le public et répondez aux choix de style proposés par la skill.

Après toute modification d’une présentation existante, contrôlez le rendu, le débordement du contenu et le chevauchement des éléments à 1280 × 720 et sur un viewport mobile. Le format de diapositive reste une scène fixe 16:9.

## Exporter ou partager

- Export PDF : `bash plugins/frontend-slides/skills/frontend-slides/scripts/export-pdf.sh <fichier.html>`. Le script utilise Playwright; Node.js peut être nécessaire.
- Publication GitHub Pages : placez les présentations et leurs ressources dans `docs/presentation/`, puis poussez les changements sur `main`. Le workflow [`publish.yml`](../../.github/workflows/publish.yml) part du contenu existant de `gh-pages`, retire l’ancien `index.html` de redirection, ajoute les présentations à la racine et utilise le deck Canopée comme nouvel `index.html`. Les répertoires Storybook restent inchangés.

La page d’accueil affiche la présentation Canopée : [axafrance.github.io/design-system](https://axafrance.github.io/design-system/). Le fichier est aussi accessible directement à [canopee-design-system.html](https://axafrance.github.io/design-system/canopee-design-system.html). Les nouveaux fichiers ne deviennent publics qu’après leur fusion sur `main` et la réussite du workflow. La racine ne redirige plus vers `site-slash`.

## Mettre à jour le plugin embarqué

1. Choisissez une version publiée sur le [dépôt amont](https://github.com/zarazhangrui/frontend-slides/releases).
2. Dans `.github/plugin/marketplace.json`, mettez `source.ref` et `version` à jour vers ce tag. Le champ `source.path` reste `plugins/frontend-slides` dans le dépôt amont.
3. Vérifiez l’installation depuis la marketplace et le lancement de la skill dans Copilot CLI.

Après fusion de la mise à jour, les utilisateurs ayant installé le plugin peuvent rafraîchir la marketplace et le plugin :

```sh
copilot plugin marketplace update canopee-plugins
copilot plugin update frontend-slides
```
