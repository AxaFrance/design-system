import type { ReactNode } from "react";
import { SelectionGroup } from "../SelectionGroup";

export type RadioGroupProps = {
  className?: string;
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
  variant?: "button" | "card";
};

export const RadioGroup = ({
  children,
  orientation = "horizontal",
  variant = "button",
  className,
}: RadioGroupProps) => {
  return (
    <SelectionGroup
      baseClassName="af-radio__group"
      orientation={orientation}
      variant={variant}
      className={className}
    >
      {children}
    </SelectionGroup>
  );
};
