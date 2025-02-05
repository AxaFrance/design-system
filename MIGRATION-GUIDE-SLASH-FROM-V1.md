# Migration Guide Slash from V1

## Footer Component

The Footer don't need children anymore, so you can remove the children prop.
The Footer need new props `version` for set the version of the application.

```diff
- <Footer title="Axa">
-   <strong>@ {new Date().getFullYear()} AXA</strong>
- </Footer>
+ <Footer version="1.0.0" />
```
