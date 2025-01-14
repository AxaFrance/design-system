import "@axa-fr/design-system-look-and-feel-css/dist/Form/Checkbox/Checkbox.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_box-fill.svg";
import checkBoxOutlineBlankIcon from "@material-symbols/svg-400/outlined/check_box_outline_blank.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import React, { ComponentPropsWithRef, type ReactNode, useId } from "react";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities/helpers/getComponentClassName";

type CheckboxProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
};

export const CheckboxSelect = ({
  className,
  labelGroup,
  descriptionGroup,
  isRequired,
  options,
  errorMessage,
  onChange,
  type = "vertical",
}: CheckboxProps) => {
  const componentClassName = getComponentClassName(
    "af-checkbox__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    `af-checkbox af-checkbox-select af-checkbox-select--${type}`,
    className,
  );
  const optionId = useId();
  return (
    <div className={componentClassName}>
      <div className="af-checkbox__label-container">
        {labelGroup && (
          <span className="af-checkbox__label" id={optionId}>
            {labelGroup}
            {isRequired && <span aria-hidden="true">&nbsp;*</span>}
          </span>
        )}
        {descriptionGroup && (
          <span className="af-checkbox__description">{descriptionGroup}</span>
        )}
      </div>
      <div
        role="group"
        className={checkboxGroupClassName}
      >
        {options.map(
          ({ label, description, subtitle, icon, ...inputProps }) => (
            <label key={inputProps.name} htmlFor={`id-${inputProps.name}`}>
              <input
                type="checkbox"
                {...inputProps}
                id={`id-${inputProps.name}`}
                onChange={onChange}
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
          ),
        )}
      </div>
      {errorMessage && (
        <div className="af-checkbox__error" aria-live="assertive">
          <Svg src={errorOutline} />
          {errorMessage}
        </div>
      )}
    </div>
  );
};
