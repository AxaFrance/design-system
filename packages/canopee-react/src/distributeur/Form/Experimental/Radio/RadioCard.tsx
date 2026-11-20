import { type ReactNode } from "react";
import { SelectionCard } from "../SelectionCard";
import { RadioItem, type RadioItemProps } from "./RadioItem";

export type RadioCardProps = {
  label?: string;
  icon?: ReactNode;
  action?: ReactNode;
  orientation?: "horizontal" | "vertical";
  name: string;
} & RadioItemProps;

export const RadioCard = ({
  id,
  icon,
  label,
  action,
  orientation = "horizontal",
  ...props
}: RadioCardProps) => (
  <SelectionCard
    id={id}
    label={label}
    icon={icon}
    action={action}
    orientation={orientation}
    baseClassName="af-radiocard"
    cardClassName="af-radio__card"
  >
    <RadioItem id={id} {...props} />
  </SelectionCard>
);
