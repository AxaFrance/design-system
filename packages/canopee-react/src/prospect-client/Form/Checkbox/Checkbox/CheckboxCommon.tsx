import { type ComponentProps } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type CheckboxProps = {
  variant?: "error" | "warning";
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = ({
  variant,
  className,
  ref,
  ...inputProps
}: CheckboxProps) => (
  <input
    aria-invalid={variant === "error" || undefined}
    {...inputProps}
    className={getClassName({
      baseClassName: "af-checkbox",
      modifiers: [variant],
      className,
    })}
    ref={ref}
    type="checkbox"
  />
);
