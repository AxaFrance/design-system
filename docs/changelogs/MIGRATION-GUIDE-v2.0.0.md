# Migration Guide v1.x.x -> v2.0.0

## 🎯 Overview

This version includes a semantic accessibility update in the Distributeur
header. The `Name` component no longer renders a heading element for the brand
name.

## ⚠️ Breaking Changes

### Distributeur

#### Name component (Header)

**What changes**: the `Name` title is no longer rendered as `h2`. It is now
rendered as regular text to avoid incorrect heading order when `HeaderTitle`
(`h1`) is used below.

**Before (v1.x.x)**:

```html
<h2 class="af-header__title">
  AXA Distribution
  <span class="af-header__subtitle">Partner Portal</span>
</h2>
```

**After (v2.0.0)**:

```html
<p class="af-header__title">
  AXA Distribution
  <span class="af-header__subtitle">Partner Portal</span>
</p>
```

**Impact**:

1. DOM-based tests expecting an `h2` for the header brand name will fail.
2. CSS customizations targeting `h2.af-header__title` must be updated to
   `.af-header__title`.

**Manual migration**:

1. Update tests from heading-based selectors to text or class-based selectors.
2. Replace selectors such as `h2.af-header__title` with `.af-header__title`.
3. Keep page main title assertions on `HeaderTitle` (`h1`) where relevant.

## ✅ Verification checklist

- [ ] Header brand name is still visible with unchanged visual style.
- [ ] No test relies on `h2` for the `Name` component title.
- [ ] Main page title still uses `HeaderTitle` (`h1`).
- [ ] Accessibility checks pass for heading hierarchy.