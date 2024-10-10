# CSS classes

Our design system implementation is built on
[BEM (Block Element Modifier)](https://getbem.com/) methodology. This
methodology is a naming convention for classes in HTML and CSS. It is used to
create reusable components and code sharing in front-end development.

All CSS selector should be based on classes, and never on tags or IDs. This is
to ensure that the CSS is reusable and not tied to a specific element.

## Naming convention

All classes should be prefixed with `af-` to avoid conflicts with our users'
CSS.

The main class should be applied to the uppermost element of the component,
named `af-<component>`. For example, the main class for a button should be
`af-button`.

All other classes should be elements of that block. For example, the title of a
button should be `af-button__title`.
