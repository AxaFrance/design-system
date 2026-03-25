# Tag / Badge

## Overview
Tag component displays labeled status indicators or categories with various color variants. Badge is a deprecated alias for Tag.

## Import
```tsx
import { Tag, Badge } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | TagVariants | `"default"` | Color and style |
| `classModifier` | `string` | - | CSS modifier (deprecated, use variant) |
| `children` | `ReactNode` | - | Tag text/content |

## Variants

```tsx
import { Tag } from "@axa-fr/canopee-react/distributeur";

// Default
<Tag>Default</Tag>

// Status variants
<Tag variant="success">Approved</Tag>
<Tag variant="warning">Pending</Tag>
<Tag variant="error">Rejected</Tag>
<Tag variant="information">Info</Tag>

// Color variants
<Tag variant="dark">Dark</Tag>
<Tag variant="purple">Purple</Tag>
<Tag variant="gray">Gray</Tag>
<Tag variant="white">White</Tag>
```

## Use Cases

### Status Label
```tsx
<Tag variant="success">Active</Tag>
<Tag variant="error">Inactive</Tag>
```

### Category Badge
```tsx
<Tag variant="purple">Featured</Tag>
<Tag variant="gray">Archive</Tag>
```

### Multiple Tags
```tsx
<div style={{ display: "flex", gap: "0.5rem" }}>
  <Tag variant="information">React</Tag>
  <Tag variant="information">JavaScript</Tag>
  <Tag variant="information">Web</Tag>
</div>
```

## Deprecated Props

`classModifier` is deprecated - use `variant` instead:
```tsx
// Old
<Tag classModifier="success">Old</Tag>

// New
<Tag variant="success">New</Tag>
```

## Deprecated: Badge Alias

Badge was renamed to Tag:
```tsx
import { Badge } from "@axa-fr/canopee-react/distributeur"; // Still works but deprecated

<Badge>Content</Badge> // Still works
<Tag>Content</Tag>     // Use this instead
```

## CSS Classes
- `.af-tag` - Base tag class
- `.af-tag--success` - Success variant
- `.af-tag--warning` - Warning variant
- `.af-tag--error` - Error variant
- `.af-tag--information` - Information variant
- `.af-tag--default` - Default variant
- `.af-tag--dark` - Dark variant
- `.af-tag--purple` - Purple variant
- `.af-tag--gray` - Gray variant
- `.af-tag--white` - White variant
