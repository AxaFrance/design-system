# Changelog — Canopée Prospect & Client Plugin

Toutes les modifications notables de ce plugin seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet respecte [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] — 2024-07-03

### 🎉 Initial Release

**Description** : Publication initiale du plugin Canopée Prospect & Client sur GitHub Copilot Marketplace.

#### ✨ Added

- Support complet des composants Prospect et Client
- Guidance sur les deux thèmes (une seule API, différents imports selon le thème)
- Documentation des composants : Button, Accordion, formulaires (TextInput, Select, Checkbox, Radio), Messages, Modal, Listes, Navigation, Progress, Layout, Pages
- Support des tokens CSS spécifiques à chaque thème
- Conventions CSS BEM strictes avec le préfixe `af-`
- Documentation du naming des props (noms HTML natifs, sans préfixes `is`/`has`)
- Intégration des icônes Material Symbols
- Exemples et patterns pour chaque thème
- Bonnes pratiques pour la structure des composants React

#### 📚 Documentation

- README.md avec instructions d'installation pour les deux thèmes
- SKILL.md avec définition complète du plugin
- Références détaillées pour chaque composant et thème
- Guidelines sur les différences Prospect/Client
- Comparaison des anciens packages (Apollo, Look & Feel) et nouveaux packages

#### 🎯 Skills Included

- **`canopee-prospect-client`** — Activé lors de l'utilisation de composants Prospect ou Client

#### 🎨 Themes Supported

- **Prospect** (ex-Apollo) — `@axa-fr/canopee-react/prospect`
- **Client** (ex-Look & Feel) — `@axa-fr/canopee-react/client`

---

## Format des versions futures

Pour les prochaines versions, suivre le format :

```markdown
## [X.Y.Z] — YYYY-MM-DD

### ✨ Added

- Feature 1
- Feature 2

### 🔧 Changed

- Change 1
- Change 2

### 🐛 Fixed

- Fix 1
- Fix 2

### 📚 Documentation

- Doc improvement 1

### ⚠️ Breaking Changes

- Breaking change 1 (use sparingly!)

### 🗑️ Deprecated

- Deprecated feature 1

### 🔓 Security

- Security fix 1
```
