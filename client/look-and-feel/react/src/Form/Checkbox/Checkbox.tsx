import "@axa-fr/design-system-look-and-feel-css/dist/Form/Checkbox/Checkbox.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_box-fill.svg";
import checkBoxOutlineBlankIcon from "@material-symbols/svg-400/outlined/check_box_outline_blank.svg";
import React, { ReactNode, forwardRef, useId } from "react";
import classNames from "classnames";
import { Svg } from "../../Svg";
import { InputError } from "../InputError";

type CheckboxProps = {
  label: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
  showErrorMessage?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "label">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      icon,
      description,
      subtitle,
      errorMessage,
      className,
      showErrorMessage = true,
      ...inputProps
    },
    ref,
  ) => {
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
              aria-invalid={Boolean(errorMessage) && !inputProps.disabled}
            />
            <div className="af-checkbox__icons">
              <Svg
                src={checkBoxOutlineBlankIcon}
                className="af-checkbox__unchecked"
              />
              <Svg src={checkBoxIcon} className="af-checkbox__checked" />
            </div>
            <div className="af-checkbox__content">
              {icon}
              <div className="af-checkbox__content-description">
                <span>{label}</span>
                {description && <span>{description}</span>}
                {subtitle && <span>{subtitle}</span>}
              </div>
            </div>
          </label>
        </div>
        {errorMessage && showErrorMessage && (
          <InputError id={idError} message={errorMessage} />
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
export { Checkbox };
