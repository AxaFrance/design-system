import React, {
  ComponentPropsWithRef,
  type ComponentType,
  type ReactNode,
  useId,
} from "react";
import { CheckboxProps } from "../checkbox/CheckboxCommon";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { Svg } from "../../../Svg/Svg";

type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

export type CheckboxCardProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    hasError?: boolean;
    icon?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">)[];
  onChange?: React.ChangeEventHandler;
};

export type CheckboxCardCommonProps = CheckboxCardProps & CheckboxComponent;

const CheckboxCardCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  CheckboxComponent,
  isRequired,
  options,
  onChange,
  type = "vertical",
}: CheckboxCardCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-checkbox-card__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    `af-checkbox-card-group--${type}`,
    className,
  );
  const optionId = useId();
  const errorId = useId();

  return (
    <div className={componentClassName}>
      <div className="af-checkbox-card__label-container">
        {labelGroup && (
          <span className="af-checkbox-card__label" id={optionId}>
            {labelGroup}
            {isRequired && <span aria-hidden="true">&nbsp;*</span>}
          </span>
        )}
        {descriptionGroup && (
          <span className="af-checkbox-card__description">
            {descriptionGroup}
          </span>
        )}
      </div>
      <div role="group" className={checkboxGroupClassName}>
        {options.map(
          ({ label, description, subtitle, icon, hasError, ...inputProps }) => (
            <label
              key={inputProps.name}
              aria-invalid={hasError}
              htmlFor={`id-${inputProps.name}`}
              className="af-checkbox-card-label"
            >
              <CheckboxComponent
                id={`id-${inputProps.name}`}
                errorId={errorId}
                hasError={hasError}
                onChange={onChange}
                {...inputProps}
              />
              <div className="af-checkbox-card-content">
                {icon && (
                  <Svg
                    src={icon}
                    className="af-checkbox-card-icon"
                    aria-hidden
                  />
                )}
                <div className="af-checkbox-card-content-description">
                  <span>{label}</span>
                  {description && <span>{description}</span>}
                  {subtitle && <span>{subtitle}</span>}
                </div>
              </div>
            </label>
          ),
        )}
      </div>
    </div>
  );
};
CheckboxCardCommon.displayName = "CheckboxCardCommon";
export { CheckboxCardCommon };
