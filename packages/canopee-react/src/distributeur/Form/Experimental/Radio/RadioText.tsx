import type { ReactNode } from "react";
import { RadioItem, type RadioItemProps } from "./RadioItem";

export type RadioTextProps = {
  label: ReactNode;
} & RadioItemProps;

export const RadioText = ({ id, label, ...props }: RadioTextProps) => {
  return (
    <label htmlFor={id} className="af-radio__text">
      <RadioItem id={id} {...props} />
      <span className="af-radio__label">{label}</span>
    </label>
  );
};
