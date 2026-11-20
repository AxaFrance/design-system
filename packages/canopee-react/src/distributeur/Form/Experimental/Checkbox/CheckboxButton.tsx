import { CheckboxItem } from "./CheckboxItem";
import type { CheckboxTextProps } from "./CheckboxText";

export type CheckboxButtonProps = CheckboxTextProps;

export const CheckboxButton = ({
  id,
  label,
  ...props
}: CheckboxButtonProps) => (
  <label htmlFor={id} className="af-checkbox__button">
    <CheckboxItem id={id} {...props} />
    <span className="af-checkbox__label">{label}</span>
  </label>
);
