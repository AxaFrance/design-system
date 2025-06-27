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
    <Svg src={checkBoxIcon} aria-hidden />
    <input
      {...inputProps}
      type="checkbox"
      aria-errormessage={errorId}
      aria-invalid={hasError}
      disabled={false}
    />
  </span>
);

CheckboxCommon.displayName = "CheckboxCommon";
export { CheckboxCommon };
