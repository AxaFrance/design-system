# `Button - @axa-fr/canopee-react/distributeur`

1. [Installation](#installation)
2. [Import](#import)
3. [Variant button](#variant-button)
4. [Small Button](#small-button)
5. [Button with left icon](#button-with-left-icon)
6. [Button with right icon](#button-with-right-icon)

## Installation

```sh
npm i @axa-fr/canopee-react
```

### Import

```javascript
import { Button } from '@axa-fr/canopee-react/distributeur';
```

## Variant button

```javascript
const ButtonComponent = () => <Button type="button">Click me</Button>
export default ButtonComponent;
```

| Button               | variant       |
| -------------------- | ------------- |
| Danger Button        | danger        |
| Ghost Button         | ghost         |
| Ghost Reverse Button | ghost-reverse |
| Primary Button       | primary       |
| Secondary Button     | secondary     |
| Validated Button     | validated     |

You can see the example below :

```javascript
const PrimaryButton = () => (
  <Button type="button" variant="primary">Click me</Button>
);
export default PrimaryButton;
```

## Small Button

```javascript
const SmallButton = () => <Button type="button" small>Click me</Button>
export default SmallButton;
```

## Button with left icon

```javascript
const LeftIconButton = () => (
    <Button
      type="button"
      leftIcon={<i className="glyphicon glyphicon-arrowthin-left" />}>
      Click me
    </Button>
    );
export default LeftIconButton;
```

## Button with right icon

```javascript
const RightIconButton = () => (
    <Button
      type="button"
      rightIcon={<i className="glyphicon glyphicon-arrowthin-right" />}>
      Click me
    </Button>
);
export default RightIconButton;
```
