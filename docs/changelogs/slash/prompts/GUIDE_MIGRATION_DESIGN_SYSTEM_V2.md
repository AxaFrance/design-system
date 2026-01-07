# Migration Instructions - AXA Slash Design System v2.0.5

Reusable prompt to automatically migrate to version 2.0.5 of the AXA Slash design system.

## Step 1: Preparation

### 1.1 Backup and branches

```bash
# Create a migration branch
git checkout -b migration/design-system-v2.0

# Backup the project
git tag backup-before-migration-$(date +%Y%m%d)
```

### 1.2 Update dependency

```bash
# In package.json, update the version
npm install @axa-fr/design-system-slash-react@2.0.5
```

### 1.3 Commit preparation step

```bash
# Commit the preparation changes
git add .
git commit -m "chore: prepare migration to design-system v2.0.5"
```

## Step 2: Automated migrations using find and replace

### 2.1 Import migration - Alert to Message

```bash
# Find and replace in all .tsx/.ts files
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/import { Alert/import { Message/g'
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/, Alert/, Message/g'
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/Alert,/Message,/g'
```

#### 2.1.1 Commit Alert import migration

```bash
# Commit the changes of import
git add .
git commit -m "chore: update import for Alert to Message"
```

### 2.2 Import migration - Badge to Tag

```bash
# Find and replace in all .tsx/.ts files
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/import { Badge/import { Tag/g'
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/, Badge/, Tag/g'
find src/ -name "*.tsx" -o -name "*.ts" -name "*.jsx" -o -name "*.js" | xargs sed -i 's/Badge,/Tag,/g'
```

#### 2.2.1 Commit Badge import migration

```bash
# Commit the changes of import
git add .
git commit -m "chore: update import for Badge to Tag"
```

### 2.3 Component migration - Alert to Message

```bash
# Replace Alert component usage
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Alert/<Message/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<\/Alert>/<\/Message>/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="error"/variant="error"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="info"/variant="information"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="danger"/variant="warning"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="warning"/variant="warning"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="success"/variant="success"/g'
# Remove icon attribute (handled automatically)
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/icon="[^"]*"//g'
```

#### 2.3.1 Commit Alert migration

```bash
# Commit the changes of component migration
git add .
git commit -m "chore: migrate Alert to Message"
```

### 2.4 Component migration - Badge to Tag

```bash
# Replace Badge component usage
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Badge/<Tag/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<\/Badge>/<\/Tag>/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="info"/variant="information"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="danger"/variant="warning"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="success"/variant="success"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/classModifier="error"/variant="error"/g'
```

#### 2.4.1 Commit Badge migration

```bash
# Commit the changes of component migration
git add .
git commit -m "chore: migrate Badge to Tag"
```

### 2.5 Component migration - Accordion

```bash
# Replace classModifier with variant in Accordion components
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Accordion classModifier="default"/<Accordion variant="default"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Accordion classModifier="white"/<Accordion variant="white"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Accordion classModifier="light"/<Accordion variant="light"/g'
find src/ -name "*.tsx" -o -name "*.jsx" | xargs sed -i 's/<Accordion classModifier=""/<Accordion variant="default"/g'

# Search for other classModifier usage on Accordion for manual processing
grep -r "Accordion.*classModifier=" src/ --include="*.tsx"
```

#### 2.5.1 Commit Accordion migration

```bash
# Commit the changes of component migration
git add .
git commit -m "chore: migrate Accordion component to variant instead of classModifier"
```

### 2.6 CSS tokens migration

```bash
# Update color tokens in all CSS/SCSS files
find src/ -name "*.css" -o -name "*.scss" | xargs sed -i 's/--green40/--green30/g'
find src/ -name "*.css" -o -name "*.scss" | xargs sed -i 's/--green50/--green40/g'
```

#### 2.6.1 Commit CSS tokens migration

```bash
# Commit the changes of CSS tokens migration
git add .
git commit -m "chore: migrate CSS color tokens"
```

## Step 3: Complex manual migrations

### 3.1 Button component migration

**Action:** Find all files containing `<Button classModifier=`

```bash
grep -r "Button classModifier=" src/ --include="*.tsx"
```

**For each occurrence found, apply the following transformations:**

| Previous                  | New                          |
| ------------------------- | ---------------------------- |
| `classModifier="success"` | `variant="validated"`        |
| `classModifier="reverse"` | `variant="secondary"`        |
| `classModifier="danger"`  | `variant="danger"`           |
| `classModifier=""`        | `variant="primary"` (default) |

**Button icon migration:**

```bash
# Search for buttons with icons
grep -r "Button.*classModifier.*hasiconLeft\|Button.*classModifier.*hasiconRight" src/ --include="*.tsx"
```

Transform manually:

- `classModifier="hasiconLeft"` + child icon → `leftIcon={icon}`
- `classModifier="hasiconRight"` + child icon → `rightIcon={icon}`

#### 3.1.1 Commit Button migration

```bash
# Commit Button component migrations
git add .
git commit -m "feat: migrate Button components to new variant API

- Replace classModifier with variant props
- Update button variants (success→validated, reverse→secondary)
- Migrate icon positioning to leftIcon/rightIcon props"
```

### 3.2 MainContainer addition

**Action:** Identify main pages

```bash
# Search for page components
find src/pages -name "*.tsx" -o -name "*.jsx" | head -10
```

**For each page, wrap the main content in MainContainer:**

Add the import:

```jsx
import { MainContainer } from '@axa-fr/design-system-slash-react';
```

Transform the content:

```jsx
// Before
export const MyPage = () => {
  return (
    <>
      <HeaderTitle title="Title" />
      <section>{/* content */}</section>
    </>
  );
};

// After
export const MyPage = () => {
  return (
    <>
      <HeaderTitle title="Title" />
      <MainContainer>{/* content */}</MainContainer>
    </>
  );
};
```

#### 3.2.1 Commit MainContainer addition

```bash
# Commit MainContainer integration
git add .
git commit -m "feat: add MainContainer to page components

- Wrap page content with MainContainer component
- Update page component imports
- Improve page layout structure"
```

## Step 4: Validation

### 4.1 Compilation tests

```bash
npm run build
```

### 4.2 Functional tests

```bash
npm run test
```

## Resources

- [Changelog v2.0.0](https://github.com/AxaFrance/design-system/blob/main/docs/changelogs/slash/CHANGELOG_v2.0.0.md)
- [Design System Storybook](https://axafrance.github.io/design-system/slash/react/latest/?path=/docs/components-accordion--docs)
