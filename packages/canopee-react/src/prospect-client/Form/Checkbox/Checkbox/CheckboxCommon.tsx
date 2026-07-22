import { type ComponentProps, forwardRef } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  /** @deprecated Use `aria-invalid` instead */
  hasError?: boolean;
  hasWarning?: boolean;
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ errorId, hasError, hasWarning, className, ...inputProps }, ref) => (
    <input
      aria-errormessage={errorId}
      aria-invalid={hasError}
      {...inputProps}
      className={getClassName({
        baseClassName: "af-checkbox",
        modifiers: [hasWarning && "warning"],
        className,
      })}
      ref={ref}
      type="checkbox"
    />
  ),
);

Checkbox.displayName = "Checkbox";
