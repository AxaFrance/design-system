import type { ReactNode } from "react";
import { SelectionCard } from "../SelectionCard";
import { CheckboxItem } from "./CheckboxItem";
import type { CheckboxTextProps } from "./CheckboxText";

export type CheckboxCardProps = CheckboxTextProps & {
  icon?: ReactNode;
  action?: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export const CheckboxCard = ({
  id,
  label,
  icon,
  action,
  orientation = "horizontal",
  ...props
}: CheckboxCardProps) => (
  <SelectionCard
    id={id}
    label={label}
    icon={icon}
    action={action}
    orientation={orientation}
    baseClassName="af-checkbox-card"
    cardClassName="af-checkbox__card"
  >
    <CheckboxItem id={id} {...props} />
  </SelectionCard>
);
