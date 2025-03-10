# AXA France Design System

Le projet design system AXA France a pour objectif de proposer un point d'entrée
unique pour utiliser le design system AXA France au sein de vos projets.

Il propose d'utiliser les deux designs systems principaux :

- **Look & Feel** pour le <abbr title="Business to client">B2C</abbr>, les
  applications exposées aux clients
- **Slash** pour le <abbr title="Business to business">B2B</abbr>, les
  applications internes

## Migration depuis @axa-fr/react-toolkit

Si vous utilisez `@axa-fr/react-toolkit` et que vous souhaitez migrer vers
`@axa-fr/design-system`, vous pouvez suivre notre
[guide de migration](./MIGRATION-GUIDE-TOOLKIT.md).

## Packages

| name                                          | Storybook                                                                                                                                                                                  | npm                                                                                                                                                             | Documentation UI et UX                                                                                                                                                                                                                                                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@axa-fr/design-system-slash-css**           | [![Storybook](https://img.shields.io/badge/Storybook-slash--css-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/slash/css/latest/)                       | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-slash-css)](https://www.npmjs.com/@axa-fr/design-system-slash-css)                     | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-slash-00008F)](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b) [![Figma](https://img.shields.io/badge/Figma-slash-F24E1E?logo=figma)](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)                        |
| **@axa-fr/design-system-slash-react**         | [![Storybook](https://img.shields.io/badge/Storybook-slash--react-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/slash/react/latest/)                   | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-slash-react)](https://www.npmjs.com/@axa-fr/design-system-slash-react)                 | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-slash-00008F)](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b) [![Figma](https://img.shields.io/badge/Figma-slash-F24E1E?logo=figma)](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)                        |
| **@axa-fr/design-system-look-and-feel-css**   | [![Storybook](https://img.shields.io/badge/Storybook-look--and--feel--css-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/look-and-feel/css/latest/)     | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-look-and-feel-css)](https://www.npmjs.com/@axa-fr/design-system-look-and-feel-css)     | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-look_and_feel-00008F)](https://zeroheight.com/54c5bd254/v/latest/p/07c120-espace-client) [![Figma](https://img.shields.io/badge/Figma-look_and_feel-F24E1E?logo=figma)](https://www.figma.com/design/06u5N0AkHDjJW3Sbis7FOJ/04.-Zero-Height---Look%2526Feel) |
| **@axa-fr/design-system-look-and-feel-react** | [![Storybook](https://img.shields.io/badge/Storybook-look--and--feel--react-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/look-and-feel/react/latest/) | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-look-and-feel-react)](https://www.npmjs.com/@axa-fr/design-system-look-and-feel-react) | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-look_and_feel-00008F)](https://zeroheight.com/54c5bd254/v/latest/p/07c120-espace-client) [![Figma](https://img.shields.io/badge/Figma-look_and_feel-F24E1E?logo=figma)](https://www.figma.com/design/06u5N0AkHDjJW3Sbis7FOJ/04.-Zero-Height---Look%2526Feel) |

## Build status

#### Sonarcloud Quality metrics

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=bugs)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=coverage)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)


### Composants Slash

L'ensemble des composants Slash ont été migrés depuis l'ancien repository [Slash](https://github.com/AxaFrance/react-toolkit), nous vous invitons à migrer vos projets vers ce nouveau package. Vous pouvez consulter notre [guide de migration](./MIGRATION-GUIDE-TOOLKIT.md)

### Composants Look & Feel

Les composants Look & Feel sont également utilisables pour vos projets client mais peuvent être amenés à évoluer.
Tous les composants n'ont pas encore été développés, si votre projet a besoin d'un composant non développé, nous vous invitons à créer un issue et à contribuer au Design System.

Vous pouvez suivre son avancement à travers
[les issues](https://github.com/AxaFrance/design-system/issues).

Si vous souhaitez contribuer, le fichier [CONTRIBUTING.md](./CONTRIBUTING.md)
est là pour vous aiguiller. Vous pouvez également consulter notre
[Code de conduite](./CODE_OF_CONDUCT.md).

## Structure du projet

Le projet proposera d'utiliser des composants React ou juste la partie CSS avec
l'implémentation HTML (ou autres frameworks que vous souhaitez). Vous pouvez
retrouver ces deux implémentations dans les dossiers `/slash/css` et
`/slash/react`.

## Démarrer le projet

Pour démarrer toutes les parties du projet, il faudra lancer la commande `npm run dev`.

Pour démarrer la partie slash du projet, il faudra lancer la commande `npm run dev:slash`.

Pour démarrer la partie look&feel du projet, il faudra lancer la commande `npm run dev:look-and-feel`.

Ces commandes démarrent automatiquement les différentes étapes
nécessaire aux développement du projet, notamment le build CSS et le storybook
react.

La commande `npm run build` permet de générer un build qui vous permettra de
tester votre nouveau composant.

Et pour build une partie spécifique du projet vous pouvez lancer `npm run build:(partie)`
(`npm run build:slash` ou `npm run build:look-and-feel`).

## Utilisation des icones

Nous vous recommandons d’utiliser la librairie `@material-symbols/svg-400`, mais
n’importe quelle librairie qui exporte les svg de
[Google Material Symbols](https://github.com/google/material-design-icons), ou
vos propres svg fonctionnera.

Exemple :

```typescript
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/design-system-slash-react/client";

const App = () => {
    return (
        <Svg src={home} />
    )
}
```

## Utilisation des CSS variables (dispo uniquement pour L&F)

Il suffit d'importer le fichier des tokens dans votre application.

Exemple :

```typescript
import "@axa-fr/design-system-look-and-feel-css/dist/common/tokens.scss";
```
