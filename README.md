# AXA France Design System

Le projet design system AXA France a pour objectif de proposer un point d'entrée
unique pour utiliser le design system AXA France au sein de vos projets.

Il propose d'utiliser les deux designs systems principaux :

- **Prospect (~~Apollo~~)** pour le <abbr title="Business to client">B2C</abbr>, les
  applications exposées aux prospect (AXA.Fr)
- **Client (~~Look & Feel~~)** pour le <abbr title="Business to client">B2C</abbr>, les
  applications exposées aux clients (Espace client)
- **Collab-Distrib (~~Slash~~)** pour le <abbr title="Business to business">B2B</abbr>, les
  applications internes

Table des matières : 
- [AXA France Design System](#axa-france-design-system)
  - [Migration depuis @axa-fr/react-toolkit](#migration-depuis-axa-frreact-toolkit)
  - [Packages](#packages)
    - [B2B - Univers Collab-Distrib](#b2b---univers-collab-distrib)
    - [B2C - Univers Prospect](#b2c---univers-prospect)
    - [B2C - Univers Client](#b2c---univers-client)
  - [Build status](#build-status)
    - [Sonarcloud Quality metrics](#sonarcloud-quality-metrics)
    - [Composants Collab-Distrib](#composants-collab-distrib)
    - [Composants Client et Prospect](#composants-client-et-prospect)
  - [Structure du projet](#structure-du-projet)
  - [Démarrer le projet](#démarrer-le-projet)
  - [Utilisation des icones](#utilisation-des-icones)
  - [Utilisation des CSS variables](#utilisation-des-css-variables)
  - [Utilisation avec Copilot ou Claude](#utilisation-avec-copilot-ou-claude)
    - [Comment faire ?](#comment-faire-)



## Migration depuis @axa-fr/react-toolkit

Si vous utilisez `@axa-fr/react-toolkit` et que vous souhaitez migrer vers
`@axa-fr/design-system`, vous pouvez suivre notre
[guide de migration](./MIGRATION-GUIDE-TOOLKIT.md).

## Packages

Pour tous les univers, les packages sont découpés en deux parties : la partie
`-react` qui contient les composants React et la partie `-css` qui contient les
fichiers CSS.

**Installation latest**

```bash
npm install @axa-fr/canopee-react@latest @axa-fr/canopee-css@latest
```

**Installation next**

```bash
npm install @axa-fr/canopee-react@next @axa-fr/canopee-css@next
```

### <abbr title="Business to business">B2B</abbr> - Univers Collab-Distrib

[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/latest?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/latest?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css)\
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/next?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react/v/next)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/next?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css/v/next)

**Documentation**

[![Storybook](https://img.shields.io/badge/Storybook-Distributeur--latest-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/distributeur/react/latest/)
[![Storybook](https://img.shields.io/badge/Storybook-Distributeur--next-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/distributeur/react/next/)\
[![ZeroHeight](https://img.shields.io/badge/ZeroHeight-Distributeur-00008F)](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b)
[![Figma](https://img.shields.io/badge/Figma-Distributeur-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)

Utilisation des nouveaux packages :

```javascript
import { Button } from '@axa-fr/canopee-react/distributeur';
```

Only CSS :

```css
import '@axa-fr/canopee-css/distributeur/button.css';
```

### <abbr title="Business to client">B2C</abbr> - Univers Prospect

[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/latest?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/latest?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css)\
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/next?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react/v/next)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/next?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css/v/next)

**Documentation**

[![Storybook](https://img.shields.io/badge/Storybook-prospect--latest-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/prospect/react/latest/)
[![Storybook](https://img.shields.io/badge/Storybook-prospect--next-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/prospect/react/next/)\
[![ZeroHeight](https://img.shields.io/badge/ZeroHeight-prospect-00008F)](https://zeroheight.com/49b6215d6/v/latest/p/923242-design-system-b2c)
[![Figma](https://img.shields.io/badge/Figma-prospect-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/design/vwprvN2ELfI50pjU6MK1Ea/Design-System-B2C?m=auto&node-id=0-1&t=gV40pT7eJgfBkhy5-1)

**Utilisation des nouveaux packages :**

```javascript
import { Button } from '@axa-fr/canopee-react/prospect';
```

Only CSS :

```css
import '@axa-fr/canopee-css/client/buttonApollo.css';
```

### <abbr title="Business to client">B2C</abbr> - Univers Client

[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/latest?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/latest?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css)\
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-react/next?label=react&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-react)](https://www.npmjs.com/package/@axa-fr/canopee-react/v/next)
[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40axa-fr%2Fcanopee-css/next?label=css&link=https%3A%2F%2Fwww.npmjs.com%2F%40axa-fr%2Fcanopee-css)](https://www.npmjs.com/package/@axa-fr/canopee-css/v/next)

**Documentation**

[![Storybook](https://img.shields.io/badge/Storybook-client--latest-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/client/react/latest/)
[![Storybook](https://img.shields.io/badge/Storybook-client--next-FF4785?logo=storybook&logoColor=white)](https://axafrance.github.io/design-system/client/react/next/)\
[![ZeroHeight](https://img.shields.io/badge/ZeroHeight-client-00008F)](https://zeroheight.com/49b6215d6/v/latest/p/923242-design-system-b2c)
[![Figma](https://img.shields.io/badge/Figma-client-F24E1E?logo=figma)](https://www.figma.com/design/vwprvN2ELfI50pjU6MK1Ea/Design-System-B2C?m=auto&node-id=0-1&t=gV40pT7eJgfBkhy5-1)

**Utilisation des nouveaux packages :**

```javascript
import { Button } from '@axa-fr/canopee-react/client';
```

Only CSS :

```css
import '@axa-fr/canopee-css/client/buttonLF.css';
```

## Build status

### Sonarcloud Quality metrics

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=bugs)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=coverage)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=AxaFrance_design-system&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=AxaFrance_design-system)

### Composants Collab-Distrib

L'ensemble des composants Slash ont été migrés depuis l'ancien repository [Slash](https://github.com/AxaFrance/react-toolkit), nous vous invitons à migrer vos projets vers ce nouveau package. Vous pouvez consulter notre [guide de migration](./MIGRATION-GUIDE-TOOLKIT.md)

### Composants Client et Prospect

Les composants Client et Prospect sont également utilisables pour vos projets client mais peuvent être amenés à évoluer.
Tous les composants n'ont pas encore été développés, si votre projet a besoin d'un composant non développé, nous vous invitons à créer un issue et à contribuer au Design System.

Vous pouvez suivre son avancement à travers
[les issues](https://github.com/AxaFrance/design-system/issues).

Si vous souhaitez contribuer, le fichier [CONTRIBUTING.md](./CONTRIBUTING.md)
est là pour vous aiguiller. Vous pouvez également consulter notre
[Code de conduite](./CODE_OF_CONDUCT.md).

## Structure du projet

Le projet proposera d'utiliser des composants React ou juste la partie CSS avec
l'implémentation HTML (ou autres frameworks que vous souhaitez). Vous pouvez
retrouver ces deux implémentations dans les dossiers :

- `packages/canopee-css/src/distributeur`
- `packages/canopee-css/src/prospect-client`
- `packages/canopee-react/src/distributeur`
- `packages/canopee-react/src/prospect-client`

## Démarrer le projet

Pour démarrer toutes les parties du projet, il faudra lancer la commande `npm run dev`.

Pour démarrer la partie Collab-Distrib du projet, il faudra lancer la commande `npm run dev:distributeur`.

Pour démarrer la partie Client du projet, il faudra lancer la commande `npm run dev:client`.

Pour démarrer la partie Prospect du projet, il faudra lancer la commande `npm run dev:prospect`.

Ces commandes démarrent automatiquement les différentes étapes
nécessaires au développement du projet, notamment le build CSS et le storybook
react.

La commande `npm run build` permet de générer un build qui vous permettra de
tester votre nouveau composant.

Et pour build une partie spécifique du projet, vous pouvez lancer `npm run build:(partie)`
(`npm run build:distributeur`, `npm run build:client` ou `npm run build:prospect`).

## Utilisation des icones

Nous vous recommandons d’utiliser la librairie `@material-symbols/svg-400`, mais
n’importe quelle librairie qui exporte les svg de
[Google Material Symbols](https://github.com/google/material-design-icons), ou
vos propres svg fonctionnera.

Exemple :

```tsx
import home from '@material-symbols/svg-400/outlined/home.svg';
import { Svg } from '@axa-fr/canopee-react/distributeur';

const App = () => {
  return <Svg src={home} />;
};
```

## Utilisation des CSS variables

Il suffit d'importer le fichier des tokens dans votre application.

Pour Univers Client :

```typescript
import '@axa-fr/canopee-css/client/common/tokens.css';
```

Pour Univers Prospect :

```typescript
import '@axa-fr/canopee-css/prospect/common/tokens.css';
```

Pour Univers Collab-Distrib :

```typescript
import '@axa-fr/canopee-css/distributeur/common/tokens.css';
```

## Utilisation avec Copilot ou Claude

Vous pouvez désormais ajouter le design system comme un plugin de Github Copilot Primitives et aider votre chat à parfaitement utiliser le design system Canopéee, aussi bien Distributeur que Prospect Client. Grâce à ça, vous pourrait consulter la doc mais aussi rendre naturel l’utilisation des composants du design system par vos agents. La différence est flagrante, en plus d’être plus rapides, vos agents utiliseront bien mieux et bien plus souvent les composants AXA. 

### Comment faire ? 

Vous pouvez utiliser la fonctionnalité marketplace de votre chat pour ajouter le plugin du design system, ou alors vous pouvez aussi le faire manuellement en ajoutant le plugin présent dans `plugins/canopee-distributeur` et `plugins/canopee-prospect-client` à votre chat.
