# Changelog v1.7.0

## 📋 Overview

This release focuses on form and typography consistency across the Distributor
and Client/Prospect universes. It introduces the new MandatoryMention component,
improves classic-mode checkbox rendering, and aligns several spacing and
typography behaviors for better visual consistency and readability.

## 🏢 Distributeur

### ✨ New Features

- **MandatoryMention**: Added a dedicated `MandatoryMention` component for Slash
  forms ([#1829](https://github.com/AxaFrance/design-system/pull/1829))
- **Theming API**: Deprecated `classModifier` props in Distributeur components
  ([#1855](https://github.com/AxaFrance/design-system/pull/1855))

### 🐛 Bug Fixes

- **Radio / Checkbox**: Fixed display issues to ensure correct rendering in
  forms ([#1873](https://github.com/AxaFrance/design-system/pull/1873))
- **Checkbox**: Removed checkbox borders in classic mode for cleaner default
  rendering ([#1879](https://github.com/AxaFrance/design-system/pull/1879))

## 👥 Client / Prospect

### ✨ New Features

- **TextArea**: Set minimum height to 40px/48px for improved usability across
  contexts ([#1808](https://github.com/AxaFrance/design-system/pull/1808))

### 🐛 Bug Fixes

- **ItemTabBar**: Aligned typography and padding with Body 3 to improve
  consistency ([#1801](https://github.com/AxaFrance/design-system/pull/1801))
- **Ghost Button (Client)**: Updated desktop font size to use Body 2 typography
  scale ([#1795](https://github.com/AxaFrance/design-system/pull/1795))
- **InputDate (Client / Prospect)**: Preserved orange warning hover border in
  warning state ([#1866](https://github.com/AxaFrance/design-system/pull/1866))
- **CardCheckbox (Prospect)**: Fixed option title color in error state
  ([#1788](https://github.com/AxaFrance/design-system/pull/1788))

---

**Release date**: June 2026  
**Included commits**: From tag 1.6.0 (excluding dependabot commits)
