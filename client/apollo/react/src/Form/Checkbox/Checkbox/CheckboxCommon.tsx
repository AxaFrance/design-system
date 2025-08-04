import { type ComponentProps, forwardRef } from "react";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  /** @deprecated Use `aria-invalid` instead */
  hasError?: boolean;
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ errorId, hasError, className, ...inputProps }, ref) => (
    <input
      aria-errormessage={errorId}
      aria-invalid={hasError}
      {...inputProps}
      className={["af-checkbox", className].filter(Boolean).join(" ")}
      ref={ref}
      type="checkbox"
    />
  ),
);

Checkbox.displayName = "Checkbox";
