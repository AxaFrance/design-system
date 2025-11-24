# Release Notes for Slash 3.0.0

## ⚠️ Breaking Changes ⚠️

### Sass to CSS

- In this version, the main change is the migration from Sass to CSS.
  All tokens are now defined in CSS, which simplifies style management.
  This allows for better integration with modern tools and improves rendering performance.

However, we have kept the Sass token file for breakpoints to ensure compatibility with existing projects.
We recommend users gradually migrate to CSS tokens to benefit from the latest improvements.

https://github.com/AxaFrance/design-system/pull/1464

## Bug Fixes

- Placeholder in select component

https://github.com/AxaFrance/design-system/pull/1536
