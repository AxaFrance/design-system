import "@axa-fr/design-system-look-and-feel-css/dist/Form/Checkbox/Checkbox.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_box-fill.svg";
import checkBoxOutlineBlankIcon from "@material-symbols/svg-400/outlined/check_box_outline_blank.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import React, { ReactNode, forwardRef, useId } from "react";
import classNames from "classnames";
import { Svg } from "../../Svg";

type CheckboxProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "label">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, errorMessage, className, ...inputProps }, ref) => {
    const idError = useId();
    let inputId = useId();
    inputId = inputProps.id || inputId;

    return (
      <div>
        <div className={classNames("af-checkbox", className)}>
          <label key={inputProps.name} htmlFor={inputId}>
            <input
              ref={ref}
              {...inputProps}
              type="checkbox"
              id={inputId}
              aria-errormessage={idError}
              aria-invalid={Boolean(errorMessage)}
            />
            <div className="af-checkbox__icons">
              <Svg
                src={checkBoxOutlineBlankIcon}
                className="af-checkbox__unchecked"
              />
              <Svg src={checkBoxIcon} className="af-checkbox__checked" />
            </div>
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

Checkbox.displayName = "Checkbox";
export { Checkbox };
