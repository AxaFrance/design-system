import { type ComponentProps, forwardRef } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type CheckboxProps = {
  /** @deprecated Use `aria-errormessage` instead */
  errorId?: string;
  /** @deprecated Use `aria-invalid` instead */
  hasError?: boolean;
  hasWarning?: boolean;
} & Omit<ComponentProps<"input">, "disabled" | "type">;

type CheckboxPropsInternal = Omit<
  ComponentProps<"input">,
  "disabled" | "type"
> & {
  errorId?: string;
  hasError?: boolean;
  hasWarning?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      errorId,
      hasError,
      hasWarning,
      className,
      "aria-errormessage": ariaErrorMessage,
      "aria-invalid": ariaInvalid,
      ...inputProps
    } = props as CheckboxPropsInternal;

    return (
      <input
        aria-errormessage={ariaErrorMessage ?? errorId}
        aria-invalid={ariaInvalid ?? hasError}
        {...inputProps}
        className={getClassName({
          baseClassName: "af-checkbox",
          modifiers: [hasWarning && "warning"],
          className,
        })}
        ref={ref}
        type="checkbox"
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
