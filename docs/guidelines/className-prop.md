# Guideline: `className` Prop for React Components

## Purpose

All React components in the design system must have a `className` prop. This prop allows the developers to add one or more custom CSS classes to the parent element of the component.

## Rules

- The `className` prop must be of type `string`.
- Its value (one or more classes separated by a space) must be added to the `className` property of the parent element of the component.
- The design system's default classes must always be present; the `className` prop should be appended.
- You must use the `getClassName` utility function to generate the `className` for the parent element of the component. This ensures consistent handling of base classes, modifiers (mainly for variants), and developer-provided classes.
- The `modifier` parameter (sometimes called `classModifier`) is mainly used for variants and should be passed to `getClassName` as the second argument.
- Example implementation:

```tsx
function Button({ className, variant = 'primary', isLarge = false, ...props }) {
  return (
    <button
      className={getClassName({
        defaultClassName: "af-button",
        modifiers: [variant, isLarge && "large"],
        className,
      })}
      {...props}
    />
  );
}
```

## Why?

- Allows visual customization of components without breaking the base design system style.
- Facilitates integration in various contexts (e.g., local overrides, tests, etc.).
