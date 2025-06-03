import React, {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  useId,
  type ReactNode,
} from "react";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { Icon } from "../../../Icon/IconCommon";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
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
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    hasError?: boolean;
    icon?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">)[];
  onChange?: React.ChangeEventHandler;
  error?: string;
};

export type RadioCardCommonProps = RadioCardProps &
  RadioComponent &
  IconComponent & {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  };

const RadioCardCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  RadioComponent,
  IconComponent,
  isRequired,
  options,
  type = "vertical",
  error,
  name,
  onChange,
  ItemMessageComponent,
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

  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <fieldset className={componentClassName}>
      <div className="af-radio-card__label-container">
        <legend>
          {labelGroup && (
            <span className="af-radio-card__label">
              {labelGroup}
              {isRequired && <span aria-hidden>&nbsp;*</span>}
            </span>
          )}
          {descriptionGroup && (
            <p className="af-radio-card__description">{descriptionGroup}</p>
          )}
        </legend>
      </div>
      <div className={RadioGroupClassName}>
        {options.map(
          (
            { label, description, subtitle, icon, hasError, ...inputProps },
            index,
          ) => (
            <label
              key={`${name ?? inputProps.name}`}
              aria-invalid={Boolean(error) || hasError}
              htmlFor={`id-${name ?? inputProps.name}-${index}`}
              className="af-radio-card-label"
            >
              <RadioComponent
                id={`id-${name ?? inputProps.name}-${index}`}
                errorId={errorId}
                hasError={Boolean(error) || hasError}
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
      </div>
      {error && (
        <ItemMessageComponent
          id={errorId}
          message={error}
          messageType="error"
        />
      )}
    </fieldset>
  );
};
RadioCardCommon.displayName = "RadioCardCommon";
export { RadioCardCommon };
