import { type ComponentProps } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  variant?: "error" | "warning";
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = ({
  errorId,
  variant,
  className,
  ref,
  ...inputProps
}: CheckboxProps) => (
  <input
    aria-errormessage={errorId}
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
