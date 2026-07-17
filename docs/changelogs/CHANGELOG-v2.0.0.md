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

### ♿ Accessibility

- **Heading hierarchy**: Prevented invalid heading order (`h2` before `h1`) at
  the top of pages using `Name` + `HeaderTitle`.

---

**Release date**: July 2026  
**Included commits**: From tag 1.7.0 (excluding dependabot commits)