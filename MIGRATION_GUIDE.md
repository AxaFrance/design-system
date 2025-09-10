# Migration guide

## Slash

### Useful links

- [Migration guide from @axa-fr/react-toolkit](docs/changelogs/slash/MIGRATION-GUIDE-TOOLKIT.md)
- [Changelogs](docs/changelogs/slash/)
  - [v1.2.0](docs/changelogs/slash/CHANGELOG_v1.2.0.md)
  - [v2.0.0](docs/changelogs/slash/CHANGELOG_v2.0.0.md)

### How to migrate from a previous version?

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

