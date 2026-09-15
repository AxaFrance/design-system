# Changelog v2.0.0

## 📋 Overview

This major release introduces accessibility-focused semantic updates and
documents required migration steps for consumer applications.

## 🏢 Distributeur

### ⚠️ Breaking Changes

- **Header Name**: Replaced the `Name` component title element from `h2` to
  non-heading text to preserve heading hierarchy when used with
  `HeaderTitle` (`h1`). Consumer tests or selectors targeting `h2` in header
  name must be updated.
- **Removed component aliases**: Removed the deprecated `Badge` and `Alert`
  exports. Use `Tag` instead of `Badge` and `Message` instead of `Alert`.
- **Removed Table aliases**: Removed the deprecated `Table.Header` and
  `Table.Body` members. Use `Table.THead` and `Table.TBody` instead.
- **Removed legacy form fields**: Removed `LegacyField`, `FieldForm`, and
  `FieldInput`. The public `Field` export now points to the active field
  implementation.
- **Removed Pass and Slider fields**: Removed `Pass`, `PassInput`, `Slider`,
  and `SliderInput`. Migrate password fields to `TextInput` and range-like
  numeric inputs to `NumberInput` or another active control.
- **Removed SquareLoader**: Use `Loader` with `variant="fullscreen"` and
  provide `text` and optional `children` instead.
- **Removed Select compatibility APIs**: `SelectBase` is no longer a public
  export and `Select.options` was removed. Render native `<option>` elements
  as `Select` children. `SelectInput.options` remains available and renders
  those options as children internally.
- **Removed the public Svg export**: Use `Icon` for public icon rendering.
  The internal SVG primitive is no longer part of the prospect/client API.
- **Removed deprecated class-name helpers**: Replace
  `getComponentClassName` and `getComponentClassNameWithUserClassname` with
  `getClassName`.

### ♿ Accessibility

- **Heading hierarchy**: Prevented invalid heading order (`h2` before `h1`) at
  the top of pages using `Name` + `HeaderTitle`.

---

**Release date**: July 2026  
**Included commits**: From tag 1.7.0 (excluding dependabot commits)
