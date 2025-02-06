# Migration Guide Slash from V1

## Button Component

### Use custom class

```diff
- <Button className="af-btn my-custom-class">Button</Button>
+ <Button className="my-custom-class">Button</Button>
```

### Use class modifier

Prop `classModifier` has removed, use props `variant` and/or `small` instead.

```diff
- <Button classModifier="reverse small">Button</Button>
+ <Button variant="secondary" small>Button</Button>
```

### Use Icon

```diff
- <Button classModifier="hasIconLeft">
-   <i className={`glyphicon glyphicon-arrow-left`} />
-   Button
- </Button>
+ <Button leftIcon={<i className={`glyphicon glyphicon-arrow-left`} />}>Button</Button>
```

### Disabled Button

```diff
- <Button classModifier="disabled">Button</Button>
+ <Button disabled>Button</Button>
```
