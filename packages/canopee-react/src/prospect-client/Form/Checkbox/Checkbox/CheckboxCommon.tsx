import { type ComponentProps } from "react";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  /** @deprecated Use `aria-invalid` instead */
  hasError?: boolean;
} & Omit<ComponentProps<"input">, "disabled" | "type">;

export const Checkbox = ({
  errorId,
  hasError,
  className,
  ...inputProps
}: CheckboxProps) => (
  <input
    aria-errormessage={errorId}
    aria-invalid={hasError}
    {...inputProps}
    className={["af-checkbox", className].filter(Boolean).join(" ")}
    type="checkbox"
  />
);

Checkbox.displayName = "Checkbox";
