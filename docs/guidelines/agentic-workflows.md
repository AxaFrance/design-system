# GitHub Agentic Workflows

GitHub Agentic Workflows (gh-aw) permet de décrire des automatisations assistées par IA dans des fichiers Markdown avec un frontmatter YAML. La commande `gh aw compile` valide ces sources et génère les workflows GitHub Actions exécutables (`.lock.yml`).

## Prérequis

- Git et GitHub CLI (`gh`) installés et accessibles dans le terminal.
- Une authentification GitHub CLI valide (`gh auth status`).
- Un accès en écriture au dépôt pour publier une branche et ouvrir une pull request.
- GitHub Actions autorisé par les règles du dépôt et de l’organisation pour exécuter un workflow.
- Un moteur d’IA disponible pour le dépôt. Les règles d’accès dépendent du moteur choisi.

Les commandes gh-aw ne nécessitent ni Node.js ni npm. Ces outils ne sont nécessaires que pour les tâches de développement du monorepo.

## Installation

La CI de ce dépôt utilise gh-aw `v0.89.21`. Pour aligner l’environnement local sur la CI, installer GitHub CLI puis l’extension gh-aw :

```sh
gh --version
gh auth login
gh auth status
gh extension install github/gh-aw --pin v0.89.21
gh aw version
```

L’installation ne crée pas de secret GitHub et ne demande pas de PAT. Si `gh aw` est introuvable, vérifiez l’installation de GitHub CLI, l’authentification et l’accès à l’exécutable depuis le terminal.

## Sources et fichiers générés

Les sources Markdown sont placées dans `.github/workflows/`. Chaque source doit être compilée et son lock généré doit être inclus dans le même changement :

```sh
gh aw compile <identifiant>
gh aw compile --validate
```

Le nom passé à la commande correspond à l’identifiant du workflow. Les fichiers `.lock.yml` sont générés : ne les modifiez pas manuellement. `.gitattributes` les marque comme générés et configure leur fusion; ils ne sont pas ignorés par Git et doivent être commités avec leur source.

La CI du dépôt compile les sources modifiées. Sur une pull request, elle signale les locks à régénérer; sur `main`, elle peut committer les locks recompilés. Compilez localement avant d’ouvrir ou de mettre à jour la pull request afin de garder la source et le lock synchronisés.

## Création et modification

L’agent `Agentic Workflows` et le skill `agentic-workflows` orientent vers la documentation amont pertinente pour concevoir, créer, modifier, déboguer ou mettre à niveau un workflow. Ils ne remplacent pas la revue des permissions, des outils, des accès réseau et des sorties configurées.

Après toute modification d’un fichier source `.md`, exécutez `gh aw compile` et incluez le lock généré dans le changement. `gh aw compile --validate` vérifie les sources présentes sans régénérer les locks. Si aucun workflow Markdown n’existe dans le dépôt, la compilation ne peut rien valider.

## Exécution et diagnostic

Pour déclencher un workflow manuel depuis une branche publiée :

```sh
gh aw run <identifiant> --ref <branche>
```

La branche doit contenir la source et le lock compilé, et les règles du dépôt doivent autoriser l’exécution. Les commandes `gh aw logs <identifiant>` et `gh aw audit <id-du-run>` permettent de consulter les résultats et d’examiner une exécution.

## Sécurité et authentification

- Gardez le job agent en lecture seule; routez les écritures GitHub via les `safe-outputs` adaptés.
- Accordez uniquement les permissions nécessaires au trigger, aux outils et aux sorties configurées.
- Avec le moteur Copilot, `permissions: { copilot-requests: write }` permet l’inférence avec `${{ github.token }}`. Aucun PAT ni secret `COPILOT_GITHUB_TOKEN` n’est nécessaire.
- Ne placez jamais de credential dans les sources de workflow, le dépôt ou le texte d’un prompt.
- Les autres moteurs peuvent avoir leurs propres exigences d’authentification; suivez leur documentation officielle et les politiques de l’organisation.

## Dépannage

- `unknown command "aw"` : installer l’extension gh-aw et vérifier `gh aw version`.
- Échec d’authentification : vérifier `gh auth status`, puis relancer `gh auth login` si nécessaire.
- Erreur de compilation : examiner la syntaxe du frontmatter YAML et le message de `gh aw compile`.
- Aucun fichier de workflow trouvé : aucune source `.md` n’existe dans `.github/workflows/`; il n’y a alors rien à compiler.
- Exécution impossible : vérifier que la branche est publiée, que le lock est à jour, que le trigger autorise le lancement et que les politiques Actions et moteur IA le permettent.
