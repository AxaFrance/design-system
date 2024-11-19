# Contribuer au Design System AXA France

Merci de considérer la contribution au Design System AXA France ! Nous sommes ravis de voir que vous souhaitez participer à l'amélioration de notre projet qui regroupe les design systems d'AXA France.

## Démarrage du projet

Le développement de composant est facilité grâce à storybook.

Vous pouvez le lancer grâce à la commande `npm run start` qui lancera en parallèle le build du CSS, son storybook et le storybook React.

## Comment contribuer

1. **Fork du Projet :** Commencez par forker le projet vers votre compte GitHub.

2. **Cloner le Projet :** Clonez le projet depuis votre compte vers votre machine locale.

```bash
git clone https://github.com/votre-utilisateur/design-system.git
```

3. **Créer une Branche :** Créez une branche pour travailler sur votre nouvelle fonctionnalité ou correction.

```bash
git switch -c nom-de-ma-branche
```

1. **Faire des Modifications :** Effectuez les modifications nécessaires et assurez-vous que votre code respecte les conventions du projet. Utilisez la [Conventional Commits](https://www.conventionalcommits.org/) pour le nommage et la découpe des commits.

2. **Tester Localement :** Testez votre code localement pour vous assurer qu'il fonctionne correctement.

3. **Soumettre une Pull Request :** Une fois que vous êtes satisfait de vos modifications, soumettez une pull request vers la branche principale du projet.

## Règles de Commit

### Convention de Commit

Nous utilisons [Conventional Commits](https://www.conventionalcommits.org/) pour nous assurer que les messages de commit respectent les conventions spécifiées.

````plaintext
<type>[scope]: <description>

[optional body]

[optional footer(s)]
````

Voici les règles à suivre pour les scopes de commit :
- Utilisez le scope correspondant au design system mis à jour par le commit. Les scopes disponibles sont :
    - `slash`
    - `look&feel`
    - `apollo`
- Si le commit traite de deux ou plusieurs design systems, séparez les scopes par une virgule (`,`).
- Si le commit est plus général au projet, utilisez le scope `design-system`.
- Les scopes `deps`, `deps-dev` et `release` sont réservés et ne doivent pas être utilisés.

Exemples de messages de commit valides :

```plaintext
feat(slash): ajout d'un nouveau composant
fix(look&feel,apollo): correction des styles et des icônes
chore(design-system): mise à jour des dépendances
```

### Breaking Changes

Pour indiquer un changement majeur qui casse la compatibilité, ajoutez un '!' entre le scope et les ':' ainsi qu'une section "BREAKING CHANGE" dans le footer du commit.

> Le '!' permet de signaler que le commit contient une breaking change.\
> La section "BREAKING CHANGE" permet de décrire les changements majeurs apportés par le commit.

Exemple :
```plaintext
feat(slash)!: suppression des classModifiers

BREAKING CHANGE: Les classModifiers ont été supprimés des composant Slash. Il faut désormais utiliser les props dédiés comme `variant` ou `size`.
```

## Système de Tâches

Toutes les tâches et discussions sont gérées via les issues sur GitHub. Consultez la [page des issues](https://github.com/AxaFrance/design-system/issues) pour voir ce sur quoi les collaborateurs travaillent actuellement.

Si vous souhaitez travailler sur une tâche spécifique, veuillez vous attribuer cette issue ou en discuter dans les commentaires.

## Communication

Rejoignez les discussions sur le projet en consultant les différentes sections du tableau [Projects](https://github.com/AxaFrance/design-system/projects). Nous possédons également des groupes de discussions internes si vous le souhaitez.

## Code de Conduite

Veuillez lire et suivre notre [Code de Conduite](./CODE_OF_CONDUCT.md). Nous encourageons un environnement respectueux et inclusif.

Merci de contribuer au Design System AXA France !
