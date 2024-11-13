# AXA France Design System

Le projet design system AXA France a pour objectif de proposer un point d'entrée
unique pour utiliser le design system AXA France au sein de vos projets.

Il propose d'utiliser les deux designs systems principaux :

- **Look & Feel** pour le <abbr title="Business to client">B2C</abbr>, les
  applications exposées aux clients
- **Slash** pour le <abbr title="Business to business">B2B</abbr>, les
  applications internes

## Packages

| name                                          | Storybook                                                                                                                                                                           | npm                                                                                                                                                             | Documentation UI et UX                                                                                                                                                                                                                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@axa-fr/design-system-slash-css**           | [![Storybook](https://img.shields.io/badge/Storybook-slash--css-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/slash/css/)                       | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-slash-css)](https://www.npmjs.com/@axa-fr/design-system-slash-css)                     | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-slash-00008F)](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b) [![Figma](https://img.shields.io/badge/Figma-slash-F24E1E?logo=figma)](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)                        |
| **@axa-fr/design-system-slash-react**         | [![Storybook](https://img.shields.io/badge/Storybook-slash--react-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/slash/react/)                   | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-slash-react)](https://www.npmjs.com/@axa-fr/design-system-slash-react)                 | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-slash-00008F)](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b) [![Figma](https://img.shields.io/badge/Figma-slash-F24E1E?logo=figma)](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)                        |
| **@axa-fr/design-system-look-and-feel-css**   | [![Storybook](https://img.shields.io/badge/Storybook-look--and--feel--css-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/look-and-feel/css/)     | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-look-and-feel-css)](https://www.npmjs.com/@axa-fr/design-system-look-and-feel-css)     | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-look_and_feel-00008F)](https://zeroheight.com/54c5bd254/v/latest/p/07c120-espace-client) [![Figma](https://img.shields.io/badge/Figma-look_and_feel-F24E1E?logo=figma)](https://www.figma.com/design/06u5N0AkHDjJW3Sbis7FOJ/04.-Zero-Height---Look%2526Feel) |
| **@axa-fr/design-system-look-and-feel-react** | [![Storybook](https://img.shields.io/badge/Storybook-look--and--feel--react-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/look-and-feel/react/) | [![Lien vers npm](https://img.shields.io/npm/v/%40axa-fr%2Fdesign-system-look-and-feel-react)](https://www.npmjs.com/@axa-fr/design-system-look-and-feel-react) | [![ZeroHeight](https://img.shields.io/badge/ZeroHeight-look_and_feel-00008F)](https://zeroheight.com/54c5bd254/v/latest/p/07c120-espace-client) [![Figma](https://img.shields.io/badge/Figma-look_and_feel-F24E1E?logo=figma)](https://www.figma.com/design/06u5N0AkHDjJW3Sbis7FOJ/04.-Zero-Height---Look%2526Feel) |

Le projet est en cours de construction et n'est pas réellement utilisable pour
le moment. L'idée est de rapatrier les différents projets existants (Look & Feel
et [Slash](https://github.com/AxaFrance/react-toolkit)) en un seul package en
engendreant le moins de breaking change possible.

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

La commande `npm start` démarrent automatiquement les différentes étapes
nécessaire aux développement du projet, notamment le build CSS et le storybook
react.

La commande `npm run build` permet de générer un build qui vous permettra de
tester votre nouveau composant.

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
