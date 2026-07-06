# Canopée Distributeur — GitHub Copilot Plugin

Oriente GitHub Copilot pour générer des interfaces React conformes au Design System **Canopée Distributeur** (B2B, applications internes AXA).

[![GitHub](https://img.shields.io/badge/GitHub-AxaFrance%2Fdesign--system-blue)](https://github.com/AxaFrance/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/AxaFrance/design-system/releases)

## 🚀 Installation

### Via GitHub Copilot Marketplace

1. Ouvrez GitHub Copilot Chat dans VS Code
2. Allez dans l'onglet **Plugins**
3. Cherchez **"Canopée Distributeur"**
4. Cliquez sur **"Install"**

### Via configuration manuelle

Ajoutez dans `.vscode/settings.json` de votre projet :

```json
{
  "github.copilot.workspace.extensions": [
    "file://${workspaceFolder}/node_modules/@axa-fr/copilot-canopee-plugins/plugins/canopee-distributeur/.claude-plugin"
  ]
}
```

Puis rechargez VS Code.

## 📚 Ce que ça fait

Ce plugin fournit à GitHub Copilot une connaissance complète du Design System Canopée Distributeur pour :

- ✅ Générer des composants React correctement importés depuis `@axa-fr/canopee-react/distributeur`
- ✅ Appliquer les conventions CSS BEM strictes avec le préfixe `af-`
- ✅ Respecter le naming des props (noms HTML natifs, sans préfixe `is`/`has`)
- ✅ Proposer les bonnes variantes et états de chaque composant
- ✅ Configurer les tokens CSS et les icônes Material Symbols
- ✅ Suivre les bonnes pratiques du design system

## 🎯 Skills

### `canopee-distributeur`

Activé automatiquement dès qu'un développeur :

- Mentionne Canopée, Slash ou le design system distributeur
- Parle de composants React AXA ou d'applications B2B internes
- Importe depuis `@axa-fr/canopee-react/distributeur` ou `@axa-fr/canopee-css/distributeur`

Fournit des conseils sur :

- **Composants** — Button, Card, TextInput, Checkbox, Select, Message, Accordion, Modal, Table, Header, Footer, Tabs, Steps, Restitution, Link, Tag, Radio, etc.
- **Fondations** — Tokens CSS, couleurs, typographie, espacements, icônes Material Symbols
- **Démarrage de projet** — Installation, configuration CSS, mise en place des polices
- **Bonnes pratiques** — BEM strict, naming des props, JSX sans leaked render

## 📦 Compatibilité

| Usage            | Package                              |
| ---------------- | ------------------------------------ |
| Composants React | `@axa-fr/canopee-react/distributeur` |
| Styles CSS       | `@axa-fr/canopee-css/distributeur`   |

## 💡 Exemples d'utilisation

Demandez simplement à GitHub Copilot :

```
"Create a form with a text input and a submit button using canopee-distributeur"
"Generate a card component with a title and description"
"How do I style a component with Canopée CSS?"
```

Copilot utilisera la connaissance du plugin pour générer du code conforme.

## 📖 Documentation

- [AXA Design System](https://github.com/AxaFrance/design-system)
- [Storybook Distributeur](https://axafrance.github.io/design-system/distributeur/react/latest/)
- [ZeroHeight Documentation](https://zeroheight.com/4b1e27a45/v/latest/p/36b4a2-slash-design-system-b-to-b)
- [Figma Design File](https://www.figma.com/design/reZserxMfytQ9M82bt20Bi/DS-Slash-V3)

## 🤝 Support

Avez-vous des questions ou trouvé un bug ? Ouvrez une [issue sur GitHub](https://github.com/AxaFrance/design-system/issues).

## 📄 Licence

MIT © AXA France
