# Migration guide

## Slash

### Useful links

- [Migration guide from @axa-fr/react-toolkit](docs/changelogs/slash/MIGRATION-GUIDE-TOOLKIT.md)
- [Changelogs](docs/changelogs/slash/)
  - [v1.2.0](docs/changelogs/slash/CHANGELOG_v1.2.0.md)
  - [v2.0.0](docs/changelogs/slash/CHANGELOG_v2.0.0.md)
  - [v3.0.0](docs/changelogs/slash/CHANGELOG_v3.0.0.md)

### How to migrate from a previous version?

#### v3.0.0

##### SASS to CSS

You have to migrate your previous sass colors to their equivalent in css token custom property. 

There a prompt that can help you: 

```
--- 
mode: agent
description: "migration sass var to css custom property"
---
You will find Sass files in this project (for example with a .scss extension). These files contain the use of Sass variables corresponding to colors from the AXA France design system. All these Sass variables are available here: https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/releases-slash/1.2.0/slash/css/src/common/common.scss.

The new version of the Design System to which the project has been updated now uses CSS custom properties. Can you replace the use of Sass variables with their equivalent CSS custom properties. All the new custom properties are available here: https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/slash/css/src/common/tokens.css

For example, if you find the variable $color-axa in a Sass file, you can replace it with the custom property --axablue80.

If there are no more Sass variables used in the file you modified, you can remove the import of the previously used file.

If you don't find an exact equivalent, don't look for the closest color, you will notify me that you didn't find it, then you will create a color file at the root of the project, declare the new custom property and import this file to make it available globally, then use this new custom property to replace the old Sass variable.
```

#### v2.0.0

##### Button component

`classModifier` prop is now called `variant`, his value remains the same, except for `reverse` and `success` : 

```diff
- <Button classModifier="reverse small">Button</Button>
+ <Button variant="secondary" small>Button</Button>
```

```diff
- <Button classModifier="success">Button</Button>
+ <Button variant="validated">Button</Button>
```

Icons are now managed using `leftIcon` and `rightIcon` instead of `children` and specfic `classNames`.

```diff
- <Button classModifier="hasIconLeft">
-   <i className={`glyphicon glyphicon-arrow-left`} />
-   Button
- </Button>
+ <Button leftIcon={<i className={`glyphicon glyphicon-arrow-left`} />}>Button</Button>
```

```diff
- <Button classModifier="disabled">Button</Button>
+ <Button disabled>Button</Button>
```

`className` prop now keeps default `af-btn`, so if you use `className` to override class, you could see unexpected style. If you previously add `af-btn` to the custom `className`, it's no longer necessary.

##### Color tokens

`--green40` token is now named `--green30`, and `--green50` is now named `--green40`.

```diff
- color: var(--green40);
+ color: var(--green30);
```

```diff
- color: var(--green50);
+ color: var(--green40);
```

Make sur to change the 40 into 30 before you change the 50 into 40 !

##### HeaderTitle

The `HeaderTitle` component now has a `contentLeft` property that allows you to
add content to the left side of the title which wasn't possible before. We used
to be able to add content at the right with the `children` property, we now
support two different solutions. The `children` property is still available and
add content at the right side of the title. To add content at the far right of
the title bar, you can use the `contentRight` property.

