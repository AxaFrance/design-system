# Link

## Overview
Link component provides styled anchor elements for navigation with support for custom link components (Next.js, React Router, etc.).

## Import
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link URL (for standard anchor) |
| `render` | `function` | - | Custom render function (for router) |
| `children` | `ReactNode` | Required | Link text/content |
| `target` | `string` | - | HTML target attribute |
| `rel` | `string` | - | HTML rel attribute |

## Basic Usage

### Standard Link
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link href="/products">Products</Link>
```

### External Link
```tsx
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Website
</Link>
```

### With React Router
```tsx
import { useNavigate } from "react-router-dom";
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link render={() => (
  <div onClick={() => navigate("/page")}>
    Navigate to Page
  </div>
)} />
```

### With Next.js
```tsx
import NextLink from "next/link";
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link
  render={(children) => (
    <NextLink href="/products">
      {children}
    </NextLink>
  )}
>
  Products
</Link>
```

## CSS Classes
- `.af-link` - Base link class
