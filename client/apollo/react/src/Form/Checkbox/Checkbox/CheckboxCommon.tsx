import React, { forwardRef } from "react";
import { Svg } from "../../../Svg/Svg";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorId?: string;
  hasError?: boolean;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export type CheckboxCommonProps = CheckboxProps & {
  checkBoxIcon: string;
};

const CheckboxCommon = forwardRef<HTMLInputElement, CheckboxCommonProps>(
  ({ errorId, checkBoxIcon, hasError, ...inputProps }, ref) => (
    <span className="af-checkbox">
      <Svg src={checkBoxIcon} aria-hidden />
      <input
        {...inputProps}
        ref={ref}
        type="checkbox"
        aria-errormessage={errorId}
        aria-invalid={hasError}
        disabled={false}
      />
    </span>
  ),
);

CheckboxCommon.displayName = "CheckboxCommon";
export { CheckboxCommon };
