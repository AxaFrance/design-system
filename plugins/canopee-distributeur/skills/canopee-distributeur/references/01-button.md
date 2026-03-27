# Button

## Overview
The Button component is a flexible, styled button element that supports multiple variants, sizes, and icon positioning. It's the primary call-to-action (CTA) component for user interactions.

## Import
```tsx
import { Button } from "@axa-fr/canopee-react/distributeur";
```

## Basic Usage
```tsx
import { Button } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <Button type="button" onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "validated" \| "danger" \| "ghost" \| "ghost-reverse"` | `"primary"` | Visual style of the button |
| `small` | `boolean` | `false` | Renders a smaller button when true |
| `leftIcon` | `ReactNode` | `undefined` | Icon element displayed on the left |
| `rightIcon` | `ReactNode` | `undefined` | Icon element displayed on the right |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | HTML button type |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `ReactNode` | Required | Button text content |

All standard HTML button attributes are supported.

## Variants

### Primary (Default)
Main call-to-action button. Use one per page/section.
```tsx
<Button variant="primary">Primary Action</Button>
```

### Secondary
Secondary action button. Multiple allowed per section.
```tsx
<Button variant="secondary">Secondary Action</Button>
```

### Validated
Success/confirmation button with checkmark styling.
```tsx
<Button variant="validated">Confirm</Button>
```

### Danger
Destructive action button (delete, cancel critical operations).
```tsx
<Button variant="danger">Delete</Button>
```

### Ghost
Transparent button with border.
```tsx
<Button variant="ghost">Ghost Button</Button>
```

### Ghost Reverse
Ghost button with inverted colors for dark backgrounds.
```tsx
<Button variant="ghost-reverse">Ghost Reverse</Button>
```

## Size Variation

### Default Size
```tsx
<Button>Default Size</Button>
```

### Small Size
```tsx
<Button small>Small Size</Button>
```

## With Icons

### Material Symbols Icons
```tsx
import checkIcon from "@material-symbols/svg-400/outlined/check.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import { Button, Svg } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => (
  <>
    <Button leftIcon={<Svg src={checkIcon} />}>
      Confirm
    </Button>
    <Button rightIcon={<Svg src={deleteIcon} />}>
      Delete
    </Button>
    <Button 
      variant="secondary" 
      leftIcon={<Svg src={checkIcon} />}
      rightIcon={<Svg src={deleteIcon} />}
    >
      Complex Button
    </Button>
  </>
);
```

## Form Usage

### Submit Button
```tsx
<form onSubmit={handleSubmit}>
  <input type="text" />
  <Button type="submit" variant="primary">
    Submit
  </Button>
</form>
```

### Reset Button
```tsx
<form>
  <input type="text" />
  <Button type="reset" variant="secondary">
    Clear
  </Button>
</form>
```

## States

### Disabled
```tsx
<Button disabled>Disabled Button</Button>
```

## Accessibility
- Buttons are semantic HTML elements
- Use `type="submit"` in forms for proper keyboard navigation
- Icon-only buttons should have `aria-label` when used via custom wrapper
- Disabled state is visually distinct and prevents interaction

## Best Practices
- Use one primary button per page/section
- Position buttons consistently (usually right-aligned for forms)
- Pair primary with secondary actions when needed
- Use danger variant sparingly for destructive actions
- Ensure sufficient padding for touch targets (minimum 44x44px)
- Use ghost variant for tertiary actions

## CSS Classes
- `.af-btn` - Base button class
- `.af-btn--primary` - Primary variant
- `.af-btn--secondary` - Secondary variant
- `.af-btn--validated` - Validated variant
- `.af-btn--danger` - Danger variant
- `.af-btn--ghost` - Ghost variant
- `.af-btn--ghost-reverse` - Ghost reverse variant
- `.af-btn--small` - Small size
