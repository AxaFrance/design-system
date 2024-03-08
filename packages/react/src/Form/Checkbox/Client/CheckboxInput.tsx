import type { ComponentProps, ReactNode } from "react";
import { Checkbox } from "./Checkbox";

type Props = Omit<ComponentProps<typeof Checkbox>, "placeholder"> & {
  label: ReactNode;
  description?: ReactNode;
};

export const CheckboxInput = ({
  label,
  description,
  ...checkboxProps
}: Props) => (
  <>
    <div className="af-form__group-label">{label}</div>
    <div className="af-form__group-description">{description}</div>
    <Checkbox {...checkboxProps} />
  </>
);
