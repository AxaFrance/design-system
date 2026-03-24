# Form Text Input

## Overview
The Text Input component is a wrapper around the HTML `<input type="text">` element with label, validation messages, and help text support. It's the foundation for most single-line text input forms.

## Import
```tsx
import { Text, TextInput } from "@axa-fr/canopee-react/distributeur";
```

## Components

### Text (Base Input)
Low-level wrapper around `<input>` element.
```tsx
import { Text } from "@axa-fr/canopee-react/distributeur";

const MyInput = () => <Text id="name" name="name" placeholder="Enter name" />;
```

### TextInput (High-level)
Complete form input with label, validation, and help messages.
```tsx
import { TextInput } from "@axa-fr/canopee-react/distributeur";

const MyInput = () => (
  <TextInput
    id="email"
    name="email"
    label="Email Address"
    type="email"
    placeholder="you@example.com"
  />
);
```

## Props - TextInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | HTML id attribute |
| `name` | `string` | Required | HTML name attribute |
| `label` | `string \| ReactNode` | - | Input label text |
| `type` | `string` | `"text"` | HTML input type (text, email, password, tel, url, etc.) |
| `value` | `string` | - | Input value |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disables input |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `required` | `boolean` | `false` | Required field (shows asterisk) |
| `message` | `string` | - | Validation/help message |
| `messageType` | `"error" \| "info" \| "success"` | - | Message styling |
| `forceDisplayMessage` | `boolean` | `false` | Always show message |
| `onChange` | `function` | - | Change handler |
| `onBlur` | `function` | - | Blur handler |

## Props - Text (Base)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `type` | `string` | `"text"` | HTML input type |
| `value` | `string` | - | Input value |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |
| `readOnly` | `boolean` | `false` | Read-only state |
| `required` | `boolean` | `false` | Required field |
| `classModifier` | `string` | - | CSS modifier classes |

Standard HTML `<input>` attributes supported.

## Basic Usage

### Simple Text Input
```tsx
const SimpleInput = () => {
  const [value, setValue] = useState("");
  
  return (
    <TextInput
      id="name"
      name="name"
      label="Full Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="John Doe"
    />
  );
};
```

### Email Input
```tsx
<TextInput
  id="email"
  name="email"
  label="Email Address"
  type="email"
  placeholder="user@example.com"
  required
/>
```

### Required Field with Help Text
```tsx
<TextInput
  id="username"
  name="username"
  label="Username"
  required
  message="Username must be 3-20 characters"
  messageType="info"
/>
```

## Validation

### Error Message
```tsx
const [error, setError] = useState("");

const handleChange = (e) => {
  const value = e.target.value;
  if (value.length < 3) {
    setError("Must be at least 3 characters");
  } else {
    setError("");
  }
};

<TextInput
  id="password"
  name="password"
  label="Password"
  type="password"
  message={error}
  messageType={error ? "error" : undefined}
  onChange={handleChange}
/>
```

### Success Message
```tsx
<TextInput
  id="confirmed"
  name="confirmed"
  label="Confirmed Email"
  message="Email verified successfully"
  messageType="success"
/>
```

### Info Message
```tsx
<TextInput
  id="phone"
  name="phone"
  label="Phone Number"
  type="tel"
  message="Format: +33 X XX XX XX XX"
  messageType="info"
/>
```

## States

### Disabled
```tsx
<TextInput id="disabled" name="disabled" label="Disabled" disabled />
```

### Read-Only
```tsx
<TextInput id="readonly" name="readonly" label="Read-Only" readOnly value="Fixed value" />
```

### Required
```tsx
<TextInput id="required" name="required" label="Required" required />
```

## Input Types

```tsx
// Text
<TextInput id="text" type="text" label="Text" />

// Email
<TextInput id="email" type="email" label="Email" />

// Password
<TextInput id="password" type="password" label="Password" />

// Phone
<TextInput id="phone" type="tel" label="Phone" />

// URL
<TextInput id="url" type="url" label="Website" />

// Number
<TextInput id="number" type="number" label="Quantity" />

// Date
<TextInput id="date" type="date" label="Birth Date" />
```

## Form Integration

```tsx
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="af-form">
      <TextInput
        id="username"
        name="username"
        label="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <TextInput
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};
```

## Accessibility
- Use clear, descriptive labels
- Required fields indicated with asterisk
- Error messages linked via `aria-describedby` (automatically handled)
- Email, phone, and number inputs trigger appropriate mobile keyboards
- Read-only inputs still focusable for screen readers

## Best Practices
- Always provide a `<label>` (`label` prop does this)
- Use appropriate `type` for better UX and validation
- Display validation early (on blur) rather than requiring submission
- Keep placeholder text different from label
- Use help text to explain constraints (password requirements, format, etc.)
- Test with screen readers for accessibility
- Provide immediate feedback on validation

## CSS Classes
- `.af-form__input-text` - Base text input class
- `.af-form__input-text--required` - Required field
- `.af-form__input-text--disabled` - Disabled state
