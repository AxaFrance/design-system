import { type ComponentProps } from "react";

export type CheckboxProps = Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = ({ className, ...inputProps }: CheckboxProps) => (
  <input
    {...inputProps}
    className={["af-checkbox", className].filter(Boolean).join(" ")}
    type="checkbox"
  />
);

Checkbox.displayName = "Checkbox";
