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

export type CardRadioProps = ComponentPropsWithRef<"input"> & {
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

export type CardRadioCommonProps = CardRadioProps &
  RadioComponent &
  IconComponent & {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  };

const CardRadioCommon = ({
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
}: CardRadioCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-card-radio__container",
    className,
  );
  const RadioGroupClassName = getComponentClassName(
    "af-card-radio-group",
    className,
    type,
  );

  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <fieldset className={componentClassName}>
      {labelGroup && (
        <legend className="af-card-radio__legend">
          <p>
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
          </p>

          {descriptionGroup && (
            <p className="af-card-radio__description">{descriptionGroup}</p>
          )}
        </legend>
      )}
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
              className="af-card-radio-label"
            >
              <RadioComponent
                id={`id-${name ?? inputProps.name}-${index}`}
                errorId={errorId}
                hasError={Boolean(error) || hasError}
                {...inputProps}
                name={name ?? inputProps.name}
                onChange={onChange}
              />
              <div className="af-card-radio-content">
                {icon && <IconComponent src={icon} size={size} />}
                <div className="af-card-radio-content-description">
                  <span>{label}</span>
                  {description && <span>{description}</span>}
                  {subtitle && <span>{subtitle}</span>}
                </div>
              </div>
            </label>
          ),
        )}
      </div>
      <ItemMessageComponent id={errorId} message={error} messageType="error" />
    </fieldset>
  );
};
CardRadioCommon.displayName = "CardRadioCommon";
export { CardRadioCommon };
