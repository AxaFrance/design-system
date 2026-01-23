# Changelog Generation Prompt Template

## 🎯 Objective
This template serves to generate structured and consistent changelogs for the AXA France design system.

## 📋 Instructions

### 1. Commit Collection
```bash
# Get all commits since the last tag (replace X.Y.Z with the previous version)
git log X.Y.Z..HEAD --pretty=format:"%h %an %s" --no-merges
```

### 2. Filtering
- **EXCLUDE** all commits from `dependabot[bot]`
- **INCLUDE** only functional commits (feat, fix, documented chore)
- **IGNORE** merge commits

### 3. Grouping by Universe
Organize commits according to their scope (first part in parentheses):

#### Main Universes:
- **🏢 Distributor**: `(distributeur)`, `(slash)` - _Note: slash is part of the Distributor universe_
- **👥 Client / Prospect**: `(client)`, `(prospect)`, `(client,prospect)`, `(apollo)`, `(look&feel)`, `(apollo,look&feel)` - _Note: apollo and look&feel are part of the Client/Prospect universe_
- **🌳 Canopee**: `(canopee)`

#### Categories by Type:
- **✨ New Features**: `feat(` commits
- **🐛 Bug Fixes**: `fix(` commits
- **📝 Documentation**: `chore(` or `docs(` commits

### 4. File Location
- **Create the file** in the `docs/changelogs/` folder
- **File name**: `CHANGELOG-vX.Y.Z.md` (replace X.Y.Z with the version number)
- **Full path**: `docs/changelogs/CHANGELOG-vX.Y.Z.md`

### 4bis. Major Version - Migration Guide ⚠️
**FOR MAJOR VERSIONS ONLY** (X.0.0): Also create a migration guide

- **Create the file** in the same folder `docs/changelogs/`
- **File name**: `MIGRATION-GUIDE-vX.Y.Z.md`
- **Full path**: `docs/changelogs/MIGRATION-GUIDE-vX.Y.Z.md`

**📋 Migration guide template**: See section 8 below

### 5. Format du changelog

**⚠️ IMPORTANT : Le changelog doit être rédigé EN ANGLAIS**

```markdown
# Changelog vX.Y.Z

## 📋 Overview
[General description of the version]

## [Universe Emoji] [Universe Name]
### ✨ New Features
- **Component**: Feature description ([#XXXX](link-to-PR))

### 🐛 Bug Fixes  
- **Component**: Fix description ([#XXXX](link-to-PR))

### 📝 Documentation
- **Topic**: Documentation description

[Repeat for each universe]

---

**Release date**: [Month Year]  
**Included commits**: From tag X.Y.Z (excluding dependabot commits)
```

### 6. Writing Rules

**⚠️ LANGUAGE: All changelogs must be written in ENGLISH**

#### Section titles:
- Use emojis to visually identify universes
- Keep a clear hierarchy: Universe > Type > Details

#### Descriptions:
- **Format**: `**Component**: Clear description ([#PR](link))`
- **Style**: Short and action-oriented sentences
- **Links**: Always include PR link when available
- **Context**: Mention the improvement (accessibility, UX, etc.)

#### Prioritization:
1. Impactful features first
2. Important fixes
3. Minor improvements
4. Documentation

### 7. Validation
Before publication, verify:
- [ ] All represented universes are included
- [ ] No dependabot commits are listed
- [ ] PR links work
- [ ] Structure is consistent
- [ ] Markdown formatting is correct
- [ ] **If major version**: Migration guide is created and complete
- [ ] **If major version**: All breaking changes are documented
- [ ] **If major version**: Migration examples are clear

## 🔄 Automatable Process

To automate this process:
1. Retrieve the list of commits
2. Filter by author (≠ dependabot)
3. Parse scopes and commit types
4. Automatically group by universe
5. Generate markdown according to template
6. **If major version**: Analyze commits for breaking changes (BREAKING CHANGES) and generate migration guide

## 📋 Migration Guide Template (Major Versions)

### 8. Migration Guide for Major Versions

**ONLY for major versions (X.0.0)**

```markdown
# Migration Guide v[PREVIOUS_VERSION] → v[CURRENT_VERSION]

## 🎯 Overview
Describe the main improvements and changes in this major version.

## ⚠️ Breaking Changes

### [Affected Universe Name]

#### [Component/Feature Name]

**What changes**: Change description

**Before (v[PREVIOUS_VERSION])**:
\`\`\`typescript
// Old example code
\`\`\`

**After (v[CURRENT_VERSION])**:
\`\`\`typescript
// New example code
\`\`\`

**Automatic migration**: _(if applicable)_
\`\`\`bash
# Commands to migrate automatically
\`\`\`

**Manual migration**: _(if applicable)_
1. Step 1
2. Step 2

---

[Repeat for each breaking change]

## 🚀 Step-by-Step Migration Guide

### Step 1: Preparation
\`\`\`bash
# Create a migration branch
git checkout -b migration/design-system-v[CURRENT_VERSION]

# Backup current state
git tag backup-before-migration-$(date +%Y%m%d)
\`\`\`

### Step 2: Dependency Updates
\`\`\`bash
# Update the main package
npm install @axa-fr/design-system-[universe]-[type]@[CURRENT_VERSION]
\`\`\`

### Step 3: Automatic Migrations
[Include automatic migration scripts here if available]

### Step 4: Manual Migrations
[Detail necessary manual migration steps]

### Step 5: Verification
- [ ] Project compiles without errors
- [ ] Tests pass
- [ ] Interface displays correctly
- [ ] Features work as expected

## 🆘 Help and Resources

- **Documentation**: [Link to documentation]
- **Examples**: [Link to updated examples]
- **Support**: [Contact information for help]

---

**⚡ Automatic migration prompt** (if applicable):
\`\`\`
--- 
mode: agent
description: "automatic migration to v[CURRENT_VERSION]"
---
[Include prompt to automate migration here]
\`\`\`
```

### 9. Major Version Identification

**How to identify a major version**:
- Version number follows the X.0.0 pattern (first part incremented)
- Presence of commits with `BREAKING CHANGE` in the footer
- Presence of `!` in commit type: `feat!:` or `fix!:`
- Commit analysis to identify API breaking changes

**Typical breaking changes to identify**:
- Renaming of props/parameters
- Removal of components/functions
- API structure modifications
- Default value changes
- Technology migrations (e.g. SASS → CSS custom properties)

## 📖 Format Examples

### Commit feat
```
feat(distributeur): ajout d'une option action (#1617)
```
→ 
```markdown
- **Actions**: Added action option ([#1617](https://github.com/AxaFrance/design-system/pull/1617))
```

### Commit fix
```
fix(slash): correction du style par défaut des boutons radio (#1618)  
```
→ (in Distributor section)
```markdown
- **Radio**: Fixed default style for radio buttons ([#1618](https://github.com/AxaFrance/design-system/pull/1618))
```

### Commit multi-scope
```
feat(client,prospect): ajout d'icônes pour les niveaux 2, 3 et 4 (#1634)
```
→ Place in "Client / Prospect" section

---

**Usage**: Adapt version numbers and dates according to release context.