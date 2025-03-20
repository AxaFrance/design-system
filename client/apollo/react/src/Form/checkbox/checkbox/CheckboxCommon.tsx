import React from "react";
import { Svg } from "../../../Svg/Svg";

type CheckboxIcon = {
  checkBoxIcon: string;
};

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorId?: string;
  hasError?: boolean;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export type CheckboxCommonProps = CheckboxProps & CheckboxIcon;
const CheckboxCommon = ({
  errorId,
  checkBoxIcon,
  hasError,
  ...inputProps
}: CheckboxCommonProps) => (
  <span className="af-checkbox">
    <input
      {...inputProps}
      type="checkbox"
      aria-label="checkbox input"
      aria-errormessage={errorId}
      aria-invalid={hasError}
      disabled={false}
    />
    <span className="af-checkbox__icons">
      <Svg src={checkBoxIcon} className="af-checkbox__checked" aria-hidden />
    </span>
  </span>
);

CheckboxCommon.displayName = "CheckboxCommon";
export { CheckboxCommon };
