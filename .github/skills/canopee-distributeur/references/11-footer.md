# Footer Layout Component

## Overview
Footer renders the bottom section of an application with branding, copyright, and optional version information.

## Import
```tsx
import { Footer } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `"https://www.axa.fr/"` | Logo link URL |
| `title` | `string` | `"Site Axa"` | Link title/tooltip |
| `icon` | `string` | AXA logo | Brand icon SVG URL |
| `alt` | `string` | `"Logo Axa"` | Icon alt text |
| `version` | `string` | - | Version number to display |
| `className` | `string` | `"af-footer"` | CSS classes |
| `children` | `ReactNode` | Copyright text | Footer content |

## Basic Usage

### Simple Footer
```tsx
import { Footer } from "@axa-fr/canopee-react/distributeur";

<Footer />
```

### With Version
```tsx
<Footer version="1.2.3">
  © 2024 My Company. All rights reserved.
</Footer>
```

### Custom Logo and Link
```tsx
import customLogo from "./logo.svg";

<Footer 
  icon={customLogo}
  href="https://mycompany.com"
  title="My Company"
>
  © 2024 My Company
</Footer>
```

### No Logo
```tsx
<Footer icon="">
  © 2024 All rights reserved
</Footer>
```

## CSS Classes
- `.af-footer` - Base footer
- `.af-logo` - Logo wrapper
- `.af-footer-content` - Content section
