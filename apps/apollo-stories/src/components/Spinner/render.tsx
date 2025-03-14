import type { ComponentPropsWithoutRef } from "react";

import { type Args } from "storybook/internal/types";
import {
  Spinner,
  spinnerVariants,
  type SpinnerVariants,
} from "@axa-fr/design-system-apollo-react";

const SpinnerBlock = ({
  variant,
  size,
}: {
  variant?: SpinnerVariants;
  size?: ComponentPropsWithoutRef<typeof Spinner>["size"];
}) => (
  <div>
    <Spinner variant={variant} size={size} />
    <p>Size {size}</p>
  </div>
);

export const render = ({ variant, ...args }: Args) => (
  <div className={`demo-spinner demo-spinner--${variant}`}>
    <SpinnerBlock {...args} variant={variant} />
    <SpinnerBlock {...args} variant={variant} size={32} />
    <SpinnerBlock {...args} variant={variant} size={24} />
  </div>
);

export const renderAll = ({ ...args }: Args) => (
  <div className="demo-spinner-container">
    {[
      Object.values(spinnerVariants).map((variant) => (
        <div key={variant} className={`demo-spinner demo-spinner--${variant}`}>
          <SpinnerBlock {...args} variant={variant} />
          <SpinnerBlock {...args} variant={variant} size={32} />
          <SpinnerBlock {...args} variant={variant} size={24} />
        </div>
      )),
    ]}
  </div>
);
