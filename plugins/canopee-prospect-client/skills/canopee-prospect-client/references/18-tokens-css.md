# Tokens CSS (variables)

## Importer les tokens

Les tokens sont des variables CSS définies sur `:root`. Les importer **une seule fois** au point d'entrée de l'application.

> Note : si tu utilises l'import de l'entrée thématique (`@axa-fr/canopee-react/prospect` ou `@axa-fr/canopee-react/client`), les tokens sont déjà inclus automatiquement. L'import manuel n'est nécessaire que si tu n'utilises que le CSS sans les composants React.

```typescript
// Thème Prospect
import "@axa-fr/canopee-css/prospect/common/tokens.css";

// Thème Client
import "@axa-fr/canopee-css/client/common/tokens.css";
```

## Catégories de tokens

### Typographie

```css
--font-family-base        /* Source Sans Pro (polices web) */
--font-family-publico-bold
--font-family-publico-headline
--font-size-base           /* 16 (sans unité, base rem) */
```

### Couleurs — couleurs de marque

```css
/* Bleus AXA */
--blue-1200    /* hsl(240, 100%, 22%) — bleu très foncé */
--blue-1000    /* hsl(240, 100%, 28%) — bleu principal AXA */
--blue-900
--blue-800
--blue-650
--blue-550
--blue-200
--blue-100
--blue-080
--blue-040

/* Noir et blanc */
--black-1000   /* hsl(0, 0%, 7%) */
--white-1000   /* hsl(0, 0%, 100%) */
--white-gray-1000  /* hsl(0, 0%, 98%) */
```

> ⚠️ Les alias legacy (`--color-white`, `--axa-blue-100`, `--dark`…) sont dépréciés. Utiliser les tokens `--blue-*` et `--white-*` directement.

### Couleurs sémantiques

```css
/* Succès */
--success-*

/* Erreur */
--error-*

/* Avertissement */
--warning-*

/* Information */
--info-*

/* Neutres */
--gray-*
```

### Grille responsive

La grille utilise des propriétés `data-cols-*` sur les conteneurs :

```tsx
<InputText
  label="Prénom"
  containerProps={{
    "data-cols-mobile": "12",     // 12/12 colonnes = pleine largeur
    "data-cols-tablet": "6",      // 6/12 colonnes
    "data-cols-desktop-medium": "4",  // 4/12 colonnes
  }}
/>
```

Points de rupture disponibles :

| Attribut | Breakpoint |
|---|---|
| `data-cols-mobile` | < 768px |
| `data-cols-tablet` | ≥ 768px |
| `data-cols-desktop-medium` | ≥ 1024px |
| `data-cols-desktop-large` | ≥ 1280px |

Composant de debug en développement :

```tsx
import { DebugGrid } from "@axa-fr/canopee-react/prospect";

// Superposer la grille sur la page pendant le développement
<DebugGrid />
```

## Surcharger les tokens

Pour personnaliser le thème, surcharger les variables dans ton CSS global **après** l'import des tokens :

```css
/* custom-theme.css */
:root {
  --blue-1000: hsl(220deg, 90%, 30%);  /* Changer le bleu principal */
  --font-family-base: "Roboto", sans-serif;
}
```

```tsx
// main.tsx
import "@axa-fr/canopee-react/prospect";
import "./custom-theme.css";  // importer après pour avoir la priorité
```

## CSS uniquement par composant

Si tu n'utilises que les CSS sans les composants React, chaque composant expose son CSS individuellement :

```css
/* Prospect */
@import "@axa-fr/canopee-css/prospect/Button/buttonApollo.css";
@import "@axa-fr/canopee-css/prospect/Message/messageApollo.css";

/* Client */
@import "@axa-fr/canopee-css/client/Button/buttonLF.css";
@import "@axa-fr/canopee-css/client/Message/messageLF.css";
```

Ou importer tous les styles d'un thème d'un coup :

```css
@import "@axa-fr/canopee-css/prospect.css";
/* ou */
@import "@axa-fr/canopee-css/client.css";
```
