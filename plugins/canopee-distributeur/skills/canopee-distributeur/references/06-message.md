# Message (Alert)

## Overview
The Message component displays informational, warning, error, or success messages. It provides visual feedback to users with optional dismiss functionality.

## Import
```tsx
import { Message } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | Required | Message title/header |
| `variant` | `"error" \| "warning" \| "info" \| "success"` | `"info"` | Message type and styling |
| `onClose` | `(e: MouseEvent) => void` | - | Close button click handler |
| `closeButtonAriaLabel` | `string` | `"Close"` | Accessibility label for close button |
| `icon` | `string` | - | Custom icon SVG URL (overrides variant icon) |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Message content/body |

## Basic Usage

### Error Message
```tsx
import { Message } from "@axa-fr/canopee-react/distributeur";

<Message 
  variant="error" 
  title="Error occurred"
>
  Something went wrong. Please try again.
</Message>
```

### Warning Message
```tsx
<Message 
  variant="warning" 
  title="Warning"
>
  This action cannot be undone.
</Message>
```

### Info Message
```tsx
<Message 
  variant="info" 
  title="Information"
>
  This is an informational message.
</Message>
```

### Success Message
```tsx
<Message 
  variant="success" 
  title="Success"
>
  Your changes have been saved successfully.
</Message>
```

## Closeable Messages

### With Close Button
```tsx
const [visible, setVisible] = useState(true);

{visible && (
  <Message
    variant="warning"
    title="Maintenance Notice"
    onClose={() => setVisible(false)}
  >
    The system will be under maintenance from 2-4 AM.
  </Message>
)}
```

### Custom Close Label
```tsx
<Message
  variant="info"
  title="Update Available"
  onClose={handleClose}
  closeButtonAriaLabel="Dismiss notification"
>
  A new version is available. Refresh to update.
</Message>
```

## Variants and Icons

### Automatic Icons (by Variant)
Each variant has a built-in icon:
- **error**: Red error icon
- **warning**: Yellow warning icon
- **info**: Blue info icon
- **success**: Green checkmark icon

```tsx
// Built-in icons appear automatically based on variant
<Message variant="success" title="Done">
  Process completed
</Message>
```

### Custom Icon
```tsx
import customIcon from "@material-symbols/svg-400/outlined/custom.svg";

<Message
  variant="info"
  title="Custom Message"
  icon={customIcon}
>
  This message uses a custom icon
</Message>
```

## Complex Content

### With HTML/JSX
```tsx
<Message
  variant="error"
  title="Validation Errors"
>
  <ul>
    <li>Email is invalid</li>
    <li>Password is too short</li>
    <li>Terms must be accepted</li>
  </ul>
</Message>
```

### With Formatted Text
```tsx
<Message
  variant="info"
  title="Contact Information"
>
  <p>Email: <strong>support@example.com</strong></p>
  <p>Phone: <strong>+33 1 23 45 67 89</strong></p>
</Message>
```

## Form Validation Messages

### Single Field Error
```tsx
const [email, setEmail] = useState("");
const [error, setError] = useState("");

const handleChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value && !value.includes("@")) {
    setError("Please enter a valid email");
  } else {
    setError("");
  }
};

return (
  <>
    {error && (
      <Message variant="error" title="Validation Error">
        {error}
      </Message>
    )}
    <input 
      type="email" 
      value={email} 
      onChange={handleChange}
    />
  </>
);
```

### Multiple Fields Error Summary
```tsx
const [errors, setErrors] = useState<string[]>([]);

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors: string[] = [];
  
  if (!formData.email) validationErrors.push("Email is required");
  if (!formData.password) validationErrors.push("Password is required");
  
  if (validationErrors.length > 0) {
    setErrors(validationErrors);
  } else {
    // Submit form
  }
};

return (
  <>
    {errors.length > 0 && (
      <Message variant="error" title="Please fix the following errors">
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </Message>
    )}
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  </>
);
```

## Non-Dismissible Messages

```tsx
// No close button shown when onClose not provided
<Message
  variant="info"
  title="Important Notice"
>
  This message will always be visible
</Message>
```

## Dismissible With Auto-Hide

```tsx
const [visible, setVisible] = useState(true);

useEffect(() => {
  if (visible) {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }
}, [visible]);

{visible && (
  <Message
    variant="success"
    title="Saved Successfully"
    onClose={() => setVisible(false)}
  >
    Your changes have been automatically saved.
  </Message>
)}
```

## Deprecated: classModifier Prop

The `classModifier` prop is deprecated in favor of `variant`:

```tsx
// Old (deprecated)
<Message classModifier="error" title="Error">Error message</Message>

// New (recommended)
<Message variant="error" title="Error">Error message</Message>
```

## Deprecated: Alert Alias

`Alert` was renamed to `Message` for UX consistency:

```tsx
import { Alert } from "@axa-fr/canopee-react/distributeur"; // Still works but deprecated

// Use this instead:
import { Message } from "@axa-fr/canopee-react/distributeur";
```

## Accessibility
- Icon color provides visual distinction
- Title clearly states message purpose
- Close button has accessible aria-label
- Color alone not used to convey meaning (icon + styling)
- Supports screen readers for icon meaning

## Best Practices
- Place messages near relevant content (above form, etc.)
- Keep titles concise and actionable
- Provide specific, helpful error messages
- Use variants appropriately (error for problems, success for confirmations)
- Include close button for non-critical messages
- Stack multiple related messages vertically
- Limit to most relevant errors (don't show all at once)

## CSS Classes
- `.af-alert` - Base message class
- `.af-alert--error` - Error variant
- `.af-alert--warning` - Warning variant
- `.af-alert--info` - Info variant
- `.af-alert--success` - Success variant
