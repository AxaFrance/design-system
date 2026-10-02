# Atelier GitHub Agentic Workflows

Ce guide prépare les postes et les accès nécessaires pour travailler avec gh-aw dans ce dépôt. Il ne fournit pas de workflow modèle ni d’exercice.

## Prérequis

- Git et GitHub CLI (`gh`) installés et disponibles dans le terminal.
- VS Code avec GitHub Copilot Chat pour utiliser l’agent et le skill du dépôt.
- Accès en écriture au dépôt et droit de créer une branche personnelle.
- GitHub Actions activé dans le dépôt et autorisé par les règles de l’organisation.
- Accès à un moteur d’IA autorisé pour GitHub Actions. Pour Copilot, l’organisation doit autoriser `copilot-requests: write`.

Les commandes gh-aw présentées ici sont indépendantes de Node.js et npm. Ces outils ne sont nécessaires que pour travailler sur les applications du design system.

## Installer gh-aw

Dans un terminal macOS, Linux ou PowerShell sous Windows :

```sh
gh --version
gh auth login
gh auth status
gh extension install github/gh-aw --pin v0.89.21
gh aw version
```

La version de l’extension est alignée sur celle utilisée par la CI du dépôt. L’installation de l’extension ne crée pas de secret GitHub et ne demande pas de PAT.

Si `gh aw` est introuvable, vérifiez que GitHub CLI est installé, que `gh auth status` confirme l’authentification et que le terminal a bien accès à l’exécutable `gh`.

## Préparer sa branche

Chaque participant travaille sur sa propre branche dans le dépôt partagé :

```sh
git switch main
git pull --ff-only
git switch -c atelier/<identifiant>
```

Avant toute exécution distante, publier la branche avec `git push -u origin HEAD`. Respectez les règles de contribution et de revue du dépôt pour ouvrir une pull request.

## Utiliser gh-aw

L’agent `Agentic Workflows` et le skill `agentic-workflows` routent vers la documentation amont adaptée à la demande. Lorsqu’un participant crée ou modifie un workflow dans `.github/workflows/`, compiler le fichier source et inclure le lock généré :

```sh
gh aw compile <nom-du-workflow>
gh aw compile --validate
```

L’exécution d’un workflow créé par le participant requiert un trigger compatible, un lock compilé, une branche publiée et les autorisations du dépôt. Pour lancer un workflow manuel sur sa branche, utiliser `gh aw run <nom-du-workflow> --ref <branche>`. Pour consulter les résultats, utiliser `gh aw logs <nom-du-workflow>` et `gh aw audit <id-du-run>`.

## Authentification Copilot

Pour le moteur Copilot, `permissions: { copilot-requests: write }` permet l’inférence avec `${{ github.token }}`. Aucun PAT ni secret `COPILOT_GITHUB_TOKEN` n’est requis. Les autres moteurs peuvent avoir leurs propres exigences d’authentification; ne jamais inscrire de secret dans un fichier du dépôt.

## Dépannage

- `unknown command "aw"` : installer l’extension gh-aw, puis vérifier `gh aw version`.
- Échec d’authentification : relancer `gh auth status`, puis `gh auth login` si nécessaire.
- Échec de compilation : vérifier la syntaxe YAML du frontmatter et les messages de `gh aw compile`.
- Workflow non lançable : vérifier que la branche a été publiée, que le workflow est compilé, que son trigger autorise le lancement demandé et que les politiques Actions/Copilot du dépôt le permettent.