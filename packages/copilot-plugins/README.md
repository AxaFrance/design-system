# @axa-fr/copilot-plugin

CLI to install **GitHub Copilot plugins** for the **AXA Canopée Design System** in your project.

[![npm version](https://img.shields.io/npm/v/@axa-fr/copilot-plugin)](https://www.npmjs.com/package/@axa-fr/copilot-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 What's Included

This package includes **two GitHub Copilot plugins** that teach Copilot about the Canopée Design System:

1. **Canopée Distributeur** — For B2B applications (internal AXA)
2. **Canopée Prospect & Client** — For B2C applications (customers)

## 🚀 Quick Start

### Installation

```bash
npm install --save-dev @axa-fr/copilot-plugin
```

### Install Plugins

```bash
# Install a specific plugin
npx @axa-fr/copilot-plugin install canopee-distributeur
npx @axa-fr/copilot-plugin install canopee-prospect-client

# Or install all available plugins
npx @axa-fr/copilot-plugin setup-all

# List plugins and their status
npx @axa-fr/copilot-plugin list
```

### What Happens

The CLI creates a `.copilot-plugins/` directory in your project and configures `.vscode/settings.json` to load the plugins locally.

```
your-project/
├── .copilot-plugins/
│   ├── canopee-distributeur/
│   └── canopee-prospect-client/
├── .vscode/
│   └── settings.json (auto-configured)
└── node_modules/
    └── @axa-fr/copilot-plugin/
```

### Activate

Reload VS Code after installation. GitHub Copilot will now provide guidance on Canopée components.

## 💡 Usage

Open GitHub Copilot Chat and ask:

```
"Create a form using Canopée Distributeur"
"Show me Button variants"
"How do I use CSS tokens?"
```

Copilot will generate design-system-compliant code automatically.

## 🎯 Commands

| Command                                       | Description               |
| --------------------------------------------- | ------------------------- |
| `npx @axa-fr/copilot-plugin install <name>`   | Install a specific plugin |
| `npx @axa-fr/copilot-plugin uninstall <name>` | Remove a plugin           |
| `npx @axa-fr/copilot-plugin list`             | Show all plugins          |
| `npx @axa-fr/copilot-plugin setup-all`        | Install all plugins       |

## 📋 Available Plugins

### canopee-distributeur

For B2B applications using Distributeur (Slash).

```bash
npx @axa-fr/copilot-plugin install canopee-distributeur
```

**Package**: `@axa-fr/canopee-react/distributeur`

### canopee-prospect-client

For B2C applications using Prospect or Client.

```bash
npx @axa-fr/copilot-plugin install canopee-prospect-client
```

**Packages**:

- Prospect: `@axa-fr/canopee-react/prospect`
- Client: `@axa-fr/canopee-react/client`

## 📁 File Structure

Plugins are installed locally in your project (not in node_modules):

```
.copilot-plugins/
├── canopee-distributeur/
│   ├── .claude-plugin/
│   │   └── plugin.json
│   ├── README.md
│   ├── CHANGELOG.md
│   └── skills/
└── canopee-prospect-client/
    ├── .claude-plugin/
    │   └── plugin.json
    ├── README.md
    ├── CHANGELOG.md
    └── skills/
```

## ⚙️ Configuration

After installation, your `.vscode/settings.json` will be updated:

```json
{
  "github.copilot.workspace.extensions": [
    "file:///path/to/project/.copilot-plugins/canopee-distributeur/.claude-plugin",
    "file:///path/to/project/.copilot-plugins/canopee-prospect-client/.claude-plugin"
  ]
}
```

## 🗑️ Uninstall

```bash
npx @axa-fr/copilot-plugin uninstall canopee-distributeur
npx @axa-fr/copilot-plugin uninstall canopee-prospect-client
```

Or delete the `.copilot-plugins/` directory manually:

```bash
rm -rf .copilot-plugins
```

## 📚 Resources

- [AXA Design System](https://github.com/AxaFrance/design-system)
- [Storybook Distributeur](https://axafrance.github.io/design-system/distributeur/react/latest/)
- [Storybook Prospect](https://axafrance.github.io/design-system/prospect/react/latest/)
- [Storybook Client](https://axafrance.github.io/design-system/client/react/latest/)

## 🐛 Issues

Found a bug? [Open an issue on GitHub](https://github.com/AxaFrance/design-system/issues)

## 📄 License

MIT © AXA France
