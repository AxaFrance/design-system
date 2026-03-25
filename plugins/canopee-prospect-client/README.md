# Canopée Prospect & Client

Oriente GitHub Copilot pour générer des interfaces React conformes au Design System Canopée, univers **Prospect** (B2C acquisition) et **Client** (B2C espace client AXA).

## Ce que ça fait

Ce plugin fournit à Copilot une connaissance complète du Design System Canopée pour les univers Prospect et Client pour :

- Générer des composants React correctement importés depuis `@axa-fr/canopee-react/prospect` ou `@axa-fr/canopee-react/client`
- Appliquer les conventions CSS BEM strictes avec le préfixe `af-`
- Respecter le naming des props (noms HTML natifs, sans préfixe `is`/`has`)
- Proposer les bonnes variantes et états de chaque composant selon le thème
- Configurer les tokens CSS et les icônes Material Symbols

## Skills

### `canopee-prospect-client`

Activé dès qu'un développeur mentionne Apollo, Look & Feel, Prospect, Client, Canopée B2C, ou veut créer une interface pour les espaces clients ou prospects AXA. Activé aussi lorsque le code importe depuis `@axa-fr/canopee-react/prospect` ou `@axa-fr/canopee-react/client`.

Fournit des conseils sur :

- **Composants** — Button, Accordion, formulaires (TextInput, Select, Checkbox, Radio…), Messages de feedback, Modal, Listes, Navigation, Progress, Layout, Pages, affichage de données et visuels
- **Deux thèmes, une seule API** — Les composants partagent la même interface ; seul le package d'import change entre le thème Prospect (ex-Apollo) et le thème Client (ex-Look & Feel)
- **Fondations** — Tokens CSS (couleurs, typographie, espacements), icônes Material Symbols
- **Démarrage de projet** — Installation, configuration CSS, mise en place des polices
- **Bonnes pratiques** — BEM strict, naming des props, JSX sans leaked render

## Compatibilité

| Thème | Ancienne lib | Package React | Package CSS |
| ----- | ------------ | ------------- | ----------- |
| **Prospect** (ex-Apollo) | `@axa-fr/apollo-react` | `@axa-fr/canopee-react/prospect` | `@axa-fr/canopee-css/prospect` |
| **Client** (ex-Look & Feel) | `@axa-fr/look-and-feel-react` | `@axa-fr/canopee-react/client` | `@axa-fr/canopee-css/client` |
