# Naming props

The main goal we should strive for is making it easy for our users to figure out
the name of our props, and the key for that is **consistency**.

When a prop is something that exists in html elements the name should be used
as-is. For example:

- `required`, `readOnly`, `value` when used in an input element
- `open` for modals

❌ Do not use derivate names such as `isRequired`, `isReadOnly`, `isValue`,
`isOpen`.

When a prop is not a direct mapping to an html attribute, try to find a
component that might have something similar and use the same name. For example:
`errorMessage` is used in most input components. The name should be explicit,
for example `error` is vague and could be interpreted as a boolean whereas
`errorMessage` is clear that it is message to be displayed on screen.

❌ Do not use `error` when `errorMessage` is used elsewhere.
