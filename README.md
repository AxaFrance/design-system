# Design system

Le projet design system AXA France a pour objectif de proposer un point d'entrée unique pour utiliser le design system AXA France au sein de vos projets.

Il propose d'utiliser les deux designs systems principaux : 
- Look & Feel (public)
- Agent (interne)

Le projet est en cours de construction et n'est pas réellement utilisable pour le moment. L'idée est de rapatrier les différents projets existants (Look & Feel et [Slash](https://github.com/AxaFrance/react-toolkit)) en un seul package en engendreant le moins de breaking change possible.

Vous pouvez suivre son avancement à travers [les issues](https://github.com/AxaFrance/design-system/issues).

Si vous souhaitez contribuer, le fichier [CONTRIBUTING.md](./CONTRIBUTING.md) est là pour vous aiguiller.
Vous pouvez également consulter notre [Code de conduite](./CODE_OF_CONDUCT.md).

## Structure du projet

Le projet proposera d'utiliser des composants React ou juste la partie CSS avec l'implémentation HTML (ou autres frameworks que vous souhaitez). Vous pouvez retrouver ces deux implémentations dans les dossiers `/packages/css` et `/packages/react`.

## Démarrer le projet

La commande `npm start` démarrent automatiquement les différentes étapes  nécessaire aux développement du projet, notamment le build CSS et le storybook react. 

La commande `npm run build` permet de générer un build qui vous permettra de tester votre nouveau composant.