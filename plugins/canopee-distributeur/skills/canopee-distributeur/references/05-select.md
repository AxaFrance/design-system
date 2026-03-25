# Form Select

## Overview
The Select component provides dropdown selection for forms. It supports both simple option properties and custom JSX children, with two rendering modes.

## Import
```tsx
import { Select, SelectBase, SelectInput } from "@axa-fr/canopee-react/distributeur";
```

## Components

### Select (Smart Component)
Auto-detects children vs options prop and renders appropriately.
```tsx
import { Select } from "@axa-fr/canopee-react/distributeur";

// With options array
<Select 
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" }
  ]}
/>

// With children
<Select>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</Select>
```

### SelectBase (Low-level)
Core select element with option rendering logic.
```tsx
import { SelectBase } from "@axa-fr/canopee-react/distributeur";

<SelectBase
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ]}
/>
```

### SelectInput (High-level)
Complete form wrapper with label and validation.
```tsx
import { SelectInput } from "@axa-fr/canopee-react/distributeur";

<SelectInput
  id="color"
  name="color"
  label="Choose a color"
  options={[
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" }
  ]}
/>
```

## Props

### Select / SelectInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[]` | - | Array of `{value, label}` objects |
| `value` | `string` | - | Selected value |
| `mode` | `"default" \| "base"` | `"default"` | Rendering mode |
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | `"- Select -"` | Default select text |
| `disabled` | `boolean` | `false` | Disables select |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `required` | `boolean` | `false` | Required field |
| `message` | `string` | - | Validation message |
| `messageType` | `"error" \| "info" \| "success"` | - | Message styling |
| `onChange` | `function` | - | Change handler |
| `onBlur` | `function` | - | Blur handler |
| `children` | `ReactNode` | - | Option JSX elements |

## Basic Usage

### Simple Select with Options
```tsx
import { useState } from "react";
import { Select } from "@axa-fr/canopee-react/distributeur";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  
  return (
    <Select
      id="color"
      name="color"
      placeholder="Pick a color"
      options={[
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" }
      ]}
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};
```

### Select with Children (JSX)
```tsx
<Select id="size" name="size">
  <optgroup label="Clothing Sizes">
    <option value="xs">Extra Small</option>
    <option value="s">Small</option>
    <option value="m">Medium</option>
  </optgroup>
  <optgroup label="Large Sizes">
    <option value="l">Large</option>
    <option value="xl">Extra Large</option>
  </optgroup>
</Select>
```

### SelectInput with Label
```tsx
<SelectInput
  id="country"
  name="country"
  label="Country"
  placeholder="- Select Country -"
  options={[
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "uk", label: "United Kingdom" }
  ]}
  required
/>
```

## Modes

### Default Mode (value prop)
Simpler API using `options` array.
```tsx
<Select
  mode="default"
  options={[
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" }
  ]}
/>
```

### Base Mode (children elements)
Full control using JSX option elements.
```tsx
<Select mode="base">
  <option value="">-- Select --</option>
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</Select>
```

## Validation

### Required Field
```tsx
<SelectInput
  id="role"
  name="role"
  label="User Role"
  required
  options={[
    { value: "admin", label: "Administrator" },
    { value: "user", label: "Regular User" }
  ]}
/>
```

### With Error Message
```tsx
const [role, setRole] = useState("");
const [error, setError] = useState("");

const handleChange = (e) => {
  const value = e.target.value;
  setRole(value);
  if (!value) {
    setError("Please select a role");
  } else {
    setError("");
  }
};

<SelectInput
  id="role"
  name="role"
  label="User Role"
  value={role}
  onChange={handleChange}
  message={error}
  messageType={error ? "error" : undefined}
  options={[
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" }
  ]}
/>
```

### With Help Text
```tsx
<SelectInput
  id="type"
  name="type"
  label="Document Type"
  options={[
    { value: "pdf", label: "PDF" },
    { value: "doc", label: "Word Document" }
  ]}
  message="Select the document format"
  messageType="info"
/>
```

## States

### Disabled
```tsx
<SelectInput
  id="disabled"
  name="disabled"
  label="Disabled"
  disabled
  options={[
    { value: "opt1", label: "Option 1" }
  ]}
/>
```

### Read-Only
```tsx
<SelectInput
  id="readonly"
  name="readonly"
  label="Read-Only"
  readOnly
  value="fixed-value"
  options={[
    { value: "fixed-value", label: "Fixed Value" }
  ]}
/>
```

## Form Integration

```tsx
const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    planType: "",
    currency: "EUR"
  });
  
  const handleChange = (fieldName) => (e) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: e.target.value
    }));
  };
  
  return (
    <form className="af-form" onSubmit={(e) => {
      e.preventDefault();
      console.log("Form data:", formData);
    }}>
      <SelectInput
        id="country"
        name="country"
        label="Country"
        value={formData.country}
        onChange={handleChange("country")}
        required
        options={[
          { value: "fr", label: "France" },
          { value: "de", label: "Germany" }
        ]}
      />
      
      <SelectInput
        id="plan"
        name="plan"
        label="Plan Type"
        value={formData.planType}
        onChange={handleChange("planType")}
        options={[
          { value: "basic", label: "Basic" },
          { value: "pro", label: "Professional" }
        ]}
      />
      
      <button type="submit">Subscribe</button>
    </form>
  );
};
```

## Option Groups (Children Mode)

```tsx
<Select>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</Select>
```

## Accessibility
- Labels associated via `label` prop
- Semantic HTML `<select>` element
- Keyboard navigation (Arrow keys to select)
- Required indicators shown
- Error messages linked via `aria-describedby`

## Best Practices
- Use clear, concise option labels
- Provide a default/placeholder option
- Group related options when using children mode
- Use validation to ensure selection before submission
- Consider using Radio or Checkbox for 3 or fewer options
- Disable irrelevant options rather than removing them
- Provide help text for complex selections

## CSS Classes
- `.af-form__select` - Base select class
- `.af-form__select--required` - Required field
- `.af-form__select--disabled` - Disabled state
