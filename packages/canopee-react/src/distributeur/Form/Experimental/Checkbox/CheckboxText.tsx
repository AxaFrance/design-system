import type { ReactNode } from "react";
import { CheckboxItem, type CheckboxItemProps } from "./CheckboxItem";

export type CheckboxTextProps = CheckboxItemProps & {
  label: ReactNode;
  name: string;
};

export const CheckboxText = ({ id, label, ...props }: CheckboxTextProps) => (
  <label htmlFor={id} className="af-checkbox__text">
    <CheckboxItem id={id} {...props} />
    <span className="af-checkbox__label">{label}</span>
  </label>
);
