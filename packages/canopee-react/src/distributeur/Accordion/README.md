# `Button - @axa-fr/canopee-react/distributeur`

1. [Installation](#installation)
2. [Import](#import)
3. [Accordion](#accordion)
3. [Accordion Actions](#accordion-actions)
3. [Light mode](#light-mode)

## Installation

```sh
npm i @axa-fr/canopee-react
```

### Import

```javascript
import { Accordion, CollapseCard } from "@axa-fr/canopee-react/distributeur";
```

## Accordion

Closed by default:

```javascript
const AccordionComponent = () => (
  <Accordion>
    <CollapseCard id="1" title="My title">
      My collapse content
    </CollapseCard>
  </Accordion>
)
export default AccordionComponent;
```

Forced open by default :

```javascript
const AccordionsComponent = () => (
  <Accordion>
    <CollapseCard id="1" title="My title" open>
       My collapse content
    </CollapseCard>
     <CollapseCard id="2" title="My second title" open>
       My second collapse content
     </CollapseCard>
  </Accordion>
);
export default AccordionsComponent;
```

## Accordion Actions

```javascript
const actions = [
  {
    key: "action-1",
    label: "Action 1",
    leftIcon: edit, // import your edit icon
    onClick: action1, // set your action1 function
  },
  {
    key: "action-2",
    label: "Action 2",
    rightIcon: trash, // import your trash icon
    onClick: action2, // set your action2 function
  },
] as const;

const AccordionComponent = () => (
  <Accordion>
    <CollapseCard id="1" title="My title" actions={actions}>
      My collapse content
    </CollapseCard>
  </Accordion>
)
export default AccordionComponent;
```
## Light mode

```javascript

const LightAccordion = () => (
  <Accordion variant="light">
    <CollapseCard id="1" title="My title">
      My collapse content
    </CollapseCard>
  </Accordion>
)
export default LightAccordion;
```
