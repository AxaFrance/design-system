# Canopée Distributeur

Oriente GitHub Copilot pour générer des interfaces React conformes au Design System Canopée, univers **Distributeur** (B2B, applications internes AXA).

## Ce que ça fait

Ce plugin fournit à Copilot une connaissance complète du Design System Canopée Distributeur pour :

- Générer des composants React correctement importés depuis `@axa-fr/canopee-react/distributeur`
- Appliquer les conventions CSS BEM strictes avec le préfixe `af-`
- Respecter le naming des props (noms HTML natifs, sans préfixe `is`/`has`)
- Proposer les bonnes variantes et états de chaque composant
- Configurer les tokens CSS et les icônes Material Symbols

## Skills

### `canopee-distributeur`

Activé dès qu'un développeur mentionne Canopée, Slash, le design system distributeur, des composants React AXA B2B, ou veut créer une interface pour des applications internes AXA. Activé aussi lorsque le code importe depuis `@axa-fr/canopee-react/distributeur` ou `@axa-fr/canopee-css/distributeur`.

Fournit des conseils sur :

- **Composants** — Button, Card, TextInput, Checkbox, Select, Message, Accordion, Modal, Table, Header, Footer, Tabs, Steps, Restitution, Link, Tag, Radio et composants additionnels
- **Fondations** — Tokens CSS (couleurs, typographie, espacements), icônes Material Symbols
- **Démarrage de projet** — Installation, configuration CSS, mise en place des polices
- **Bonnes pratiques** — BEM strict, naming des props, JSX sans leaked render

## Compatibilité

| Usage | Package |
| ----- | ------- |
| Composants React | `@axa-fr/canopee-react/distributeur` |
| Styles CSS | `@axa-fr/canopee-css/distributeur` |
