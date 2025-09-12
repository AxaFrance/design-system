# Using JSDoc to document our components and their props

Every new component should be documented using JSDoc. This allows us to generate
documentation automatically and provides a consistent way to describe the
component's functionality, props, and usage.

This allows developers to have documentation in their IDEs about components, and
their props.

## Writing JSDoc Comments

Use JSDoc comments to describe the component and its props. Here is an example:

````tsx
type ButtonProps = {
    /**
     * The variant of the button, which determines its style.
     * @default "primary"
     * Possible values are "primary", "secondary", and "ghost".
     * @example
     * ```tsx
     * <Button variant="primary">Primary Button</Button>
     * ```
     */
    variant: "primary" | "secondary" | "ghost";
    /**
     * The type of the button, which determines its behavior.
     * @default "button"
     * Possible values are "button", "submit", and "reset".
     */
    type?: "button" | "submit" | "reset";
    /**
     * The content of the button.
     */
    children: React.ReactNode;
}

/**
 * A button component that can be used for various actions.
 */
const Button = ({ variant, type, children }) => {
  return (
    <button className={`button ${classModifier}`} type={type}>
      {children}
    </button>
  );
````

## Checking the result

These descriptions should show up in the `Controls` pane in the stories.
