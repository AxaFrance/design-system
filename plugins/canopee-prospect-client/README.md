# Canopée Prospect & Client — GitHub Copilot Plugin

Oriente GitHub Copilot pour générer des interfaces React conformes au Design System **Canopée**, univers **Prospect** (B2C acquisition) et **Client** (B2C espace client AXA).

[![GitHub](https://img.shields.io/badge/GitHub-AxaFrance%2Fdesign--system-blue)](https://github.com/AxaFrance/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/AxaFrance/design-system/releases)

## 🚀 Installation

### Via GitHub Copilot Marketplace

1. Ouvrez GitHub Copilot Chat dans VS Code
2. Allez dans l'onglet **Plugins**
3. Cherchez **"Canopée Prospect & Client"**
4. Cliquez sur **"Install"**

### Via configuration manuelle

Ajoutez dans `.vscode/settings.json` de votre projet :

```json
{
  "github.copilot.workspace.extensions": [
    "file://${workspaceFolder}/node_modules/@axa-fr/copilot-canopee-plugins/plugins/canopee-prospect-client/.claude-plugin"
  ]
}
```

Puis rechargez VS Code.

## 📚 Ce que ça fait

Ce plugin fournit à GitHub Copilot une connaissance complète du Design System Canopée pour les univers **Prospect** et **Client** :

- ✅ Générer des composants React correctement importés selon le thème (Prospect ou Client)
- ✅ Appliquer les conventions CSS BEM strictes avec le préfixe `af-`
- ✅ Respecter le naming des props (noms HTML natifs, sans préfixe `is`/`has`)
- ✅ Proposer les bonnes variantes et états selon le thème
- ✅ Configurer les tokens CSS et les icônes Material Symbols
- ✅ Suivre les bonnes pratiques du design system

## 🎯 Skills

### `canopee-prospect-client`

Activé automatiquement dès qu'un développeur :

- Mentionne Apollo, Look & Feel, Prospect, Client ou Canopée B2C
- Parle de créer une interface pour les espaces clients ou prospects AXA
- Importe depuis `@axa-fr/canopee-react/prospect`, `@axa-fr/canopee-react/client`, ou les packages CSS correspondants

Fournit des conseils sur :

- **Composants** — Button, Accordion, formulaires (TextInput, Select, Checkbox, Radio…), Messages de feedback, Modal, Listes, Navigation, Progress, Layout, Pages, affichage de données et visuels
- **Deux thèmes, une seule API** — Les composants partagent la même interface ; seul le package d'import change entre Prospect et Client
- **Fondations** — Tokens CSS, couleurs, typographie, espacements, icônes Material Symbols
- **Démarrage de projet** — Installation, configuration CSS, mise en place des polices
- **Bonnes pratiques** — BEM strict, naming des props, JSX sans leaked render

## 📦 Compatibilité

| Thème                       | Ancien package                | Package React                    | Package CSS                    |
| --------------------------- | ----------------------------- | -------------------------------- | ------------------------------ |
| **Prospect** (ex-Apollo)    | `@axa-fr/apollo-react`        | `@axa-fr/canopee-react/prospect` | `@axa-fr/canopee-css/prospect` |
| **Client** (ex-Look & Feel) | `@axa-fr/look-and-feel-react` | `@axa-fr/canopee-react/client`   | `@axa-fr/canopee-css/client`   |

## 💡 Exemples d'utilisation

Demandez simplement à GitHub Copilot :

```
"Create a form for prospect acquisition using canopee"
"Generate a card component for the client space"
"How do I use tokens CSS in Canopée?"
"What's the difference between Prospect and Client theme components?"
```

Copilot utilisera la connaissance du plugin pour générer du code conforme.

## 📖 Documentation

- [AXA Design System](https://github.com/AxaFrance/design-system)
- **Prospect**
  - [Storybook](https://axafrance.github.io/design-system/prospect/react/latest/)
  - [Figma Design File](https://www.figma.com/design/vwprvN2ELfI50pjU6MK1Ea/Design-System-B2C)
- **Client**
  - [Storybook](https://axafrance.github.io/design-system/client/react/latest/)
  - [Figma Design File](https://www.figma.com/design/vwprvN2ELfI50pjU6MK1Ea/Design-System-B2C)

## 🤝 Support

Avez-vous des questions ou trouvé un bug ? Ouvrez une [issue sur GitHub](https://github.com/AxaFrance/design-system/issues).

## 📄 Licence

MIT © AXA France
