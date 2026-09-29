# Canopée Design System Release Strategy

## Status

Accepted

## Context

The Canopée design system requires a clear and predictable release strategy to:
- Enable teams to plan their version upgrades
- Ensure consistent release quality
- Provide a regular and controlled development cycle
- Facilitate communication around new features

The identified challenges are:
- **Predictability**: Teams need to know release dates in advance
- **Quality**: Each release must be tested to avoid regressions
- **Communication**: Changes must be documented (changelogs, migration guides)
- **Cadence**: A regular but not too frequent rhythm to avoid update fatigue

## Decision

We adopt a monthly release cycle for the Canopée design system with the following schedule:

### 📅 Monthly Release Cycle

**First Monday of the month**: Version freeze (Feature Freeze)
- Stop new features for the current release
- Create the release branch
- Finalize version numbering

**Week 1-2**: Testing and preparation phase
- Regression testing
- Integration testing
- Automatic changelog generation
- Migration guide creation (if major version)
- Critical bug fixes only

**Second Monday of the month**: Release publication
- Publication on npm
- Documentation updates
- Team communication
- GitHub release notes

### 🔢 Versioning

- **Patch** (x.y.Z): Bug fixes, minor improvements
- **Minor** (x.Y.0): New features, no breaking changes
- **Major** (X.0.0): Breaking changes, with mandatory migration guide

### 📋 Quality Process

- **Automated tests**: Full test suite execution
- **Visual tests**: Storybook stories validation
- **Accessibility tests**: WCAG compliance
- **Performance tests**: Bundle size metrics verification
- **Documentation review**: Changelogs and migration guides validation

## Consequences

### ✅ Benefits

**For user teams**:
- **Predictability**: Easier planning with fixed dates
- **Quality**: Tested and documented releases
- **Stability**: No surprises between releases

**For the development team**:
- **Regular cadence**: Structured and predictable work rhythm
- **Quality focus**: Dedicated time for testing and documentation
- **Controlled planning**: Clear deadlines for features

**For communication**:
- **Regular communication**: Monthly updates on evolutions
- **Up-to-date documentation**: Systematic changelogs and guides

### ⚠️ Constraints

**Fixed deadlines**:
- Impossibility to postpone a feature during the cycle
- Risk of incomplete features if poorly planned

**Resources**:
- Mandatory dedicated time for testing and documentation
- Concentrated workload during testing week

**Coordination**:
- Necessary synchronization with project teams
- Anticipated communication of breaking changes

### 📊 Tracking Metrics

- **Deadline compliance**: Percentage of releases published on time
- **Quality**: Number of critical post-release bugs
- **Adoption**: Speed of new version adoption
- **Documentation**: Completeness of changelogs and migration guides