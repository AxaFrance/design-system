import React, {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  type ReactNode,
  useId,
} from "react";
import { Icon } from "../../../Icon/IconCommon";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { CheckboxProps } from "../Checkbox/CheckboxCommon";

type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
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

export type CheckboxCardCommonProps = CheckboxCardProps &
  CheckboxComponent &
  IconComponent;

const CheckboxCardCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  CheckboxComponent,
  IconComponent,
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
    "af-checkbox-card-group",
    className,
    type,
  );
  const optionId = useId();
  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <div className={componentClassName}>
      <div className="af-checkbox-card__label-container">
        {labelGroup && (
          <span className="af-checkbox-card__label" id={optionId}>
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
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
                {icon && <IconComponent src={icon} size={size} />}
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
