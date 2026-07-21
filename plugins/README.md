# 🤖 GitHub Copilot Plugins

This directory contains the **GitHub Copilot plugin definitions** for the AXA Canopée Design System.

## 📦 How to Install

Ces plugins sont distribués via le npm package **`@axa-fr/copilot-plugin`**.

**To use the plugins in your project:**

```bash
npm install --save-dev @axa-fr/copilot-plugin
npx @axa-fr/copilot-plugin setup-all
```

Ou install individual plugins:

```bash
npx @axa-fr/copilot-plugin install canopee-distributeur
npx @axa-fr/copilot-plugin install canopee-prospect-client
```

See [../packages/copilot-plugins/README.md](../packages/copilot-plugins/README.md) for complete documentation.

## 📁 Directory Organization

```
plugins/
├── README.md (this file)
├── canopee-distributeur/
│   ├── .claude-plugin/
│   │   └── plugin.json          ← Plugin metadata
│   ├── README.md                ← Plugin documentation
│   ├── CHANGELOG.md             ← Version history
│   └── skills/
│       └── canopee-distributeur/
│           ├── SKILL.md
│           └── references/
└── canopee-prospect-client/
    ├── .claude-plugin/
    │   └── plugin.json
    ├── README.md
    ├── CHANGELOG.md
    └── skills/
        └── canopee-prospect-client/
            ├── SKILL.md
            └── references/
```

## 🔌 Available Plugins

### Canopée Distributeur (B2B)

- **Directory**: `canopee-distributeur/`
- **For**: Internal AXA applications (B2B)
- **Packages**: `@axa-fr/canopee-react/distributeur`, `@axa-fr/canopee-css/distributeur`
- **Install**: `npx @axa-fr/copilot-plugin install canopee-distributeur`

### Canopée Prospect & Client (B2C)

- **Directory**: `canopee-prospect-client/`
- **For**: Customer-facing applications (B2C)
- **Packages**: `@axa-fr/canopee-react/prospect`, `@axa-fr/canopee-react/client`
- **Install**: `npx @axa-fr/copilot-plugin install canopee-prospect-client`

## 📝 Plugin Files

Each plugin contains:

- **`plugin.json`** — Metadata for GitHub Copilot (in `.claude-plugin/`)
  - Plugin ID, name, version, description
  - Keywords and categories

- **`README.md`** — Documentation
  - What the plugin does
  - How to use it

- **`CHANGELOG.md`** — Version history

- **`SKILL.md`** — Copilot skill definition
  - Capabilities and triggers
  - Knowledge base

## 🛠️ Development

### To Modify a Plugin

1. Edit files in `plugins/<plugin-name>/`
2. Test locally:
   ```bash
   npm install --save-dev @axa-fr/copilot-plugin
   npx @axa-fr/copilot-plugin install <plugin-name>
   ```
3. Update `CHANGELOG.md`
4. Submit a PR

### Publishing Updates

1. Update plugin files and CHANGELOG
2. Bump version in `plugin.json`
3. Create git tag: `plugins/<plugin-name>@X.Y.Z`

## 📚 Resources

- [CLI Package Documentation](../packages/copilot-plugins/README.md)
- [Design System Main README](../README.md)

## 🤝 Contributing

Fork the repository, make improvements, and submit a PR. See [../CONTRIBUTING.md](../CONTRIBUTING.md).
