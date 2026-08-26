import { type ComponentProps } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  /** @deprecated Use `variant` instead */
  hasError?: boolean;
  variant?: "error" | "warning";
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = ({
  errorId,
  hasError,
  variant,
  className,
  ref,
  ...inputProps
}: CheckboxProps) => (
  <input
    aria-errormessage={errorId}
    aria-invalid={variant === "error" || hasError || undefined}
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
