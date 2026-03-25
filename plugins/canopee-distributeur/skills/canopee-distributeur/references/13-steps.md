# Steps

## Overview
Steps component displays a procedural indicator showing progress through a sequential process or workflow.

## Import
```tsx
import { Steps, Step, VerticalStep } from "@axa-fr/canopee-react/distributeur";
```

## Components
- **Steps**: Container for horizontal steps
- **Step**: Individual step in horizontal flow
- **VerticalStep**: Individual step in vertical flow

## Horizontal Steps

```tsx
import { Steps, Step } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const CheckoutFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <>
      <Steps currentStep={currentStep}>
        <Step number={1} label="Basket" onClick={() => setCurrentStep(1)} />
        <Step number={2} label="Shipping" onClick={() => setCurrentStep(2)} />
        <Step number={3} label="Payment" onClick={() => setCurrentStep(3)} />
        <Step number={4} label="Confirmation" />
      </Steps>
      
      {currentStep === 1 ? <div>Basket content</div> : null}
      {currentStep === 2 ? <div>Shipping content</div> : null}
      {currentStep === 3 ? <div>Payment content</div> : null}
      {currentStep === 4 ? <div>Confirmation content</div> : null}
    </>
  );
};
```

## Vertical Steps

```tsx
import { VerticalStep } from "@axa-fr/canopee-react/distributeur";

<div>
  <VerticalStep 
    number={1} 
    label="Information" 
    open={true}
  >
    <p>Step 1 content...</p>
  </VerticalStep>
  
  <VerticalStep 
    number={2} 
    label="Confirmation"
  >
    <p>Step 2 content...</p>
  </VerticalStep>
</div>
```

## CSS Classes
- `.af-steps-new` - Steps container
- `.af-steps-list` - Steps list
- `.af-step` - Individual step
