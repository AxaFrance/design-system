# Guideline: Prevent Leaked Render in JSX (`react/jsx-no-leaked-render`)

## Objective

Ensure that conditional rendering in JSX does not unintentionally leak non-boolean values, improving code clarity, maintainability, and preventing unexpected UI behaviors.

## Why

Leaked render occurs when a non-boolean value is used directly in a conditional rendering expression, such as `{value && <Component />}`. If `value` is not strictly a boolean, it may result in rendering unexpected values (e.g., numbers, strings, arrays) or cause subtle bugs. Enforcing explicit ternary or coercion strategies makes the intent clear and the code more robust.

## Examples

### ❌ Bad Practice

```jsx
// If 'subtitle' is a string, it will be rendered as-is if not empty.
{subtitle && <p>{subtitle}</p>}

// If 'icon' is 0, it will be rendered instead of <IconComponent />.
{icon && <IconComponent src={icon} />}
```

### ✅ Good Practice

```jsx
// Use ternary to ensure only the intended component is rendered.
{subtitle ? <p>{subtitle}</p> : null}

// Use Boolean coercion for clarity.
{Boolean(icon) && <IconComponent src={icon} />}

// Explicitly handle possible values.
{Array.isArray(items) && items.length > 0 ? <List items={items} /> : null}
```

## Recommendation

Always use ternary (`condition ? <Component /> : null`) or explicit boolean coercion (`Boolean(condition) && <Component />`) for conditional rendering in JSX. Avoid relying on truthy/falsy evaluation of non-boolean values.
