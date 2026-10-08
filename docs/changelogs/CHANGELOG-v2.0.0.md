# Changelog v2.0.0

## 📋 Overview

Version 2.0.0 consolidates package distribution under Canopée, removes
deprecated APIs, and advances accessibility and visual convergence across the
Distributeur, Client, and Prospect universes. See the [migration guide](https://github.com/AxaFrance/design-system/blob/main/docs/changelogs/MIGRATION-GUIDE-v2.0.0.md)
for all required consumer changes.

### 📦 Package distribution

- **Canopée packages are now the only published packages**: use
  `@axa-fr/canopee-react` and `@axa-fr/canopee-css` with an explicit universe
  entry point.
- **Legacy mirrors removed**: `@axa-fr/design-system-apollo-*` and
  `@axa-fr/design-system-slash-*` are no longer published.
- **CSS imports updated**: import styles from the matching Canopée universe and
  component path.

### ⚠️ Breaking Changes - All universes

- **React version**: React 18 is no longer supported. Canopée 2.0.0 requires
  React 19 and `react-dom` 19.

## 🏢 Distributeur

### ✨ New Features - Distributeur

- **DateInput and SelectInput**: Added experimental date and select input
  components ([#2034](https://github.com/AxaFrance/design-system/pull/2034)).
- **ItemFormHelper**: Added a helper component for form fields ([#1833](https://github.com/AxaFrance/design-system/pull/1833)).
- **Radio controls**: Added experimental radio components ([#1940](https://github.com/AxaFrance/design-system/pull/1940)).
- **Header semantics**: Updated `Name` to render non-heading text so it can be
  composed with `HeaderTitle` without breaking heading hierarchy.
- **Loader and Tooltip**: Updated visual behavior, sizing, and spacing to match
  the guidelines ([#1881](https://github.com/AxaFrance/design-system/pull/1881)).

### 🐛 Bug Fixes - Distributeur

- **DateInput and SelectInput**: Corrected focus outlines ([#2033](https://github.com/AxaFrance/design-system/pull/2033)).
- **Link**: Corrected icon sizing ([#2022](https://github.com/AxaFrance/design-system/pull/2022)).
- **Accordion**: Added the required left spacing for light content ([#1771](https://github.com/AxaFrance/design-system/pull/1771)).
- **Form controls**: Corrected checkbox, radio, focus, mandatory-label, and input/help-button spacing behavior ([#1873](https://github.com/AxaFrance/design-system/pull/1873)).
- **Title**: Removed duplicated bottom spacing ([#1994](https://github.com/AxaFrance/design-system/pull/1994)).

### ⚠️ Breaking Changes - Distributeur

- **Deprecated APIs**: Removed `Badge`, `Alert`, `Pass`, `PassInput`, `Slider`, `SliderInput`, `LegacyField`, `FieldForm`, `FieldInput`, and `SelectBase`.
- **Table aliases**: Replaced `Table.Header` and `Table.Body` with `Table.THead` and `Table.TBody`.
- **Select options**: `Select.options` was removed; render native `option` elements as children.
- **Class names**: Removed `classModifier` and deprecated class-name helpers; use `className` and `getClassName`.

## 👥 Client / Prospect

### ✨ New Features - Client / Prospect

- **Navigation**: Added Header, MenuBurger, ItemMenu, TabMenu, AppName, and unstyled list/card building blocks.
- **Content selection**: Added `TagList`, `RadioText`, `MultiMessage`, and skeleton components ([#1941](https://github.com/AxaFrance/design-system/pull/1941), [#1869](https://github.com/AxaFrance/design-system/pull/1869), [#1834](https://github.com/AxaFrance/design-system/pull/1834)).
- **Stepper**: Added heading levels 1 to 4 and icon support to Prospect Stepper ([#1792](https://github.com/AxaFrance/design-system/pull/1792)).
- **Form feedback**: Added warning variants to Checkbox, Radio, Dropdown, and TextArea ([#1813](https://github.com/AxaFrance/design-system/pull/1813), [#1723](https://github.com/AxaFrance/design-system/pull/1723)).
- **MessageBar**: Added the MessageBar organism for Apollo and Look & Feel ([#897](https://github.com/AxaFrance/design-system/pull/897), [#1827](https://github.com/AxaFrance/design-system/pull/1827)).
- **MultiSelectList and ItemMultiSelect**: Added shared selection components ([#1950](https://github.com/AxaFrance/design-system/pull/1950), [#1943](https://github.com/AxaFrance/design-system/pull/1943)).
- **Typography and convergence**: Added Body 1 to 4 tokens, updated heading fonts, aligned Link typography, and converged ContentItemMono and ItemFile.
- **CSS architecture**: Wrapped universe CSS in layers and aligned Client and Prospect reset and icon treatments ([#1870](https://github.com/AxaFrance/design-system/pull/1870)).

### 🐛 Bug Fixes - Client / Prospect

- **Checkbox**: Removed the deprecated `errorId` prop and corrected check-icon alignment.
- **CardCheckbox**: Corrected option orientation and exposed the `mode` prop ([#1872](https://github.com/AxaFrance/design-system/pull/1872)).
- **Input controls**: Corrected disabled colors, dropdown borders, spinner stories, and textarea disabled backgrounds ([#1949](https://github.com/AxaFrance/design-system/pull/1949)).
- **Modal**: Corrected small-screen layout behavior ([#1972](https://github.com/AxaFrance/design-system/pull/1972)).
- **Menus and buttons**: Corrected desktop menu behavior, Firefox MenuBurger rendering, and hover icon colors.
- **Required labels**: Restored the required marker on ItemLabel ([#2020](https://github.com/AxaFrance/design-system/pull/2020)).

### ⚠️ Breaking Changes - Client / Prospect

- **Deprecated aliases**: Removed `CheckboxCard`, `DateInput`, `TextInput`, `CardRadio`, and `CardRadioOption` aliases in favor of the current APIs.
- **CardRadio**: Renamed the exported `CardRadioOption` API to `CardRadio` ([#1915](https://github.com/AxaFrance/design-system/pull/1915)).
- **Deprecated props**: Removed legacy `isOpen`, `isRequired`, `error`, `success`, `labelGroup`, `descriptionGroup`, `inputId`, `buttonLabel`, `onButtonClick`, `type`, `value`, `isVertical`, `icon`, `iconProps`, `nbSteps`, and `classModifier` props. Use the current semantic props listed in the migration guide.
- **Class modifiers**: Removed `classModifiers` across Client and Prospect components ([#2027](https://github.com/AxaFrance/design-system/pull/2027)).
- **Tokens and refs**: Renamed `orange-100` to `orange-050` and replaced component `forwardRef` usage with the current `ref` API.

## 🌳 Canopée

### ✨ New Features - Canopée

- **CSS layers**: Added layer support across all universe styles ([#1870](https://github.com/AxaFrance/design-system/pull/1870)).

### 🐛 Bug Fixes - Canopée

- **Package references**: Replaced legacy Slash, Apollo, and Look & Feel package imports with Canopée paths.
- **Build quality**: Corrected stylelint issues and regenerated the package lockfile with the supported npm version.

### 📝 Documentation - Canopée

- **Developer guidance**: Updated Client and Prospect skills and documentation in English.
- **Workflow documentation**: Added Agentic Workflows and Zeroheight MCP documentation.
- **Migration automation**: Added the [Canopée v2 migration Copilot skill](https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/docs/changelogs/skills/canopee-v2-migration/SKILL.md) to guide application upgrades from 1.8.0 to 2.0.0.

---

**Release date**: July 2026  
**Included commits**: From tag 1.8.0, excluding merge and dependabot commits
