import "@axa-fr/canopee-css/distributeur/Form/Experimental/Checkbox.css";
import type { ReactNode } from "react";
import { SelectionGroup } from "../SelectionGroup";

export type CheckboxGroupProps = {
  children: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "button" | "text" | "card";
};

export const CheckboxGroup = ({
  children,
  className,
  orientation = "horizontal",
  variant = "button",
}: CheckboxGroupProps) => (
  <SelectionGroup
    baseClassName="af-checkbox__group"
    orientation={orientation}
    variant={variant}
    className={className}
  >
    {children}
  </SelectionGroup>
);
