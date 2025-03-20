import React from "react";
import { Svg } from "../../../Svg/Svg";

type CheckboxIcon = {
  checkBoxIcon: string;
};

export type CheckboxProps = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputId?: string;
  idError?: string;
  isError?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "label" | "disabled">;

export type CheckboxCommonProps = CheckboxProps & CheckboxIcon;
const CheckboxCommon = ({
  inputProps,
  inputId,
  idError,
  checkBoxIcon,
  isError,
  onChange,
}: CheckboxCommonProps) => (
  <span className="af-checkbox">
    <input
      {...inputProps}
      type="checkbox"
      aria-label="checkbox input"
      id={inputId}
      aria-errormessage={idError}
      aria-invalid={isError}
      disabled={false}
      onChange={onChange}
    />
    <span className="af-checkbox__icons">
      <Svg src={checkBoxIcon} className="af-checkbox__checked" />
    </span>
  </span>
);

CheckboxCommon.displayName = "CheckboxCommon";
export { CheckboxCommon };
