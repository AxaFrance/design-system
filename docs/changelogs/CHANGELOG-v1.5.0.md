# Changelog v1.5.0

## 📋 Overview

This minor release brings new components and improvements across both the Client/Prospect and Distributor universes. Notable additions include a Loader component, Stepper enhancements, ItemMessage integration in ContentItemDuo, and experimental input components for the Distributor. The Canopée AI skill documentation has also been significantly improved.

## 👥 Client / Prospect

### ✨ New Features

- **Loader**: New Loader component added to the Client/Prospect universe
- **CardCheckbox**: Now uses `CheckboxText` internally for improved consistency ([#1726](https://github.com/AxaFrance/design-system/pull/1726))
- **ContentItemDuo**: `ItemMessage` integration added ([#1711](https://github.com/AxaFrance/design-system/pull/1711))
- **Button**: Added tertiary variant style for link buttons
- **Stepper**: Added support for steppers with two steps ([#1722](https://github.com/AxaFrance/design-system/pull/1722))

### 🐛 Bug Fixes

- **Message**: Fixed line height ([#1755](https://github.com/AxaFrance/design-system/pull/1755))
- **Input**: Removed incorrect `min-width` on input atom ([#1734](https://github.com/AxaFrance/design-system/pull/1734))
- **ContentItemDuo**: Fixed `ItemMessage` import and usage ([#1729](https://github.com/AxaFrance/design-system/pull/1729))
- **Modal**: Removed unwanted divider in client modal ([#1741](https://github.com/AxaFrance/design-system/pull/1741))

## 🏢 Distributor

### ✨ New Features

- **Tabs**: Improved design and accessibility ([#1683](https://github.com/AxaFrance/design-system/pull/1683))
- **Input**: Added experimental input components with Storybook documentation ([#1675](https://github.com/AxaFrance/design-system/pull/1675))

## 🌳 Canopée

### 📝 Documentation

- **AI Skills**: Created new AI usage skill guides for Canopée Prospect/Client and Distributor universes, exposed as plugins
- **Components**: Updated and improved documentation for Ghost Button, Link, Restitution, Step (Distributor), and form help messages (`helpMessage`, `forceDisplayMessage`)
- **Code Quality**: Removed all remaining deprecated props and components from documentation examples; fixed leaked render patterns in docs
- **Tooling**: Fixed package-lock to allow launching the sample project ([#1735](https://github.com/AxaFrance/design-system/pull/1735))

---

**Release date**: April 2026  
**Included commits**: From tag 1.4.1 (excluding dependabot commits)
