import React, { ReactNode, forwardRef, useId } from "react";
import errorOutline from "@material-symbols/svg-400/rounded/error.svg";
import classNames from "classnames";
import { Svg } from "../Svg/Svg";
import { CheckboxInput } from "./CheckboxInput";

type CheckboxIcons = {
  checkBoxIcon: string;
};

export type CheckboxProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "label" | "disabled">;

export type CheckboxCommonProps = CheckboxProps & CheckboxIcons;

const CheckboxCommon = forwardRef<HTMLInputElement, CheckboxCommonProps>(
  ({ label, errorMessage, className, checkBoxIcon, ...inputProps }, ref) => {
    const idError = useId();
    let inputId = useId();
    inputId = inputProps.id || inputId;

    return (
      <div>
        <div className={classNames("af-checkbox", className)}>
          <label key={inputProps.name} htmlFor={inputId}>
            <CheckboxInput
              ref={ref}
              inputProps={inputProps}
              inputId={inputId}
              idError={idError}
              errorMessage={errorMessage}
              checkBoxIcon={checkBoxIcon}
            />
            {label}
          </label>
        </div>
        {errorMessage && (
          <div
            className="af-checkbox__error"
            aria-live="assertive"
            id={idError}
          >
            <Svg src={errorOutline} />
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

CheckboxCommon.displayName = "Checkbox";
export { CheckboxCommon };
