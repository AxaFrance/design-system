import React, {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  useId,
} from "react";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { Icon } from "../../../Icon/IconCommon";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { BREAKPOINT } from "../../../utilities/constants";
import { RadioProps } from "../Radio/RadioCommon";

type RadioComponent = {
  RadioComponent: ComponentType<RadioProps>;
};

type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

export type RadioCardProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  value?: number;
  options: ({
    label: string;
    subtitle?: string;
    description?: string;
    hasError?: boolean;
    icon?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">)[];
  onChange?: React.ChangeEventHandler;
};

export type RadioCardCommonProps = RadioCardProps &
  RadioComponent &
  IconComponent;

const RadioCardCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  RadioComponent,
  IconComponent,
  isRequired,
  options,
  type = "vertical",
  name,
  onChange,
}: RadioCardCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-radio-card__container",
    className,
  );
  const RadioGroupClassName = getComponentClassName(
    "af-radio-card-group",
    className,
    type,
  );
  const optionId = useId();
  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <div className={componentClassName}>
      <div className="af-radio-card__label-container">
        {labelGroup && (
          <span className="af-radio-card__label" id={optionId}>
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
          </span>
        )}
        {descriptionGroup && (
          <span className="af-radio-card__description">{descriptionGroup}</span>
        )}
      </div>
      <fieldset className={RadioGroupClassName}>
        {options.map(
          (
            { label, description, subtitle, icon, hasError, ...inputProps },
            index,
          ) => (
            <label
              key={label}
              aria-invalid={hasError}
              htmlFor={`id-${name ?? inputProps.name}-${index}`}
              className="af-radio-card-label"
            >
              <RadioComponent
                id={`id-${name ?? inputProps.name}-${index}`}
                errorId={errorId}
                hasError={hasError}
                {...inputProps}
                name={name ?? inputProps.name}
                onChange={onChange}
              />
              <div className="af-radio-card-content">
                {icon && <IconComponent src={icon} size={size} />}
                <div className="af-radio-card-content-description">
                  <span>{label}</span>
                  {description && <span>{description}</span>}
                  {subtitle && <span>{subtitle}</span>}
                </div>
              </div>
            </label>
          ),
        )}
      </fieldset>
    </div>
  );
};
RadioCardCommon.displayName = "RadioCardCommon";
export { RadioCardCommon };
