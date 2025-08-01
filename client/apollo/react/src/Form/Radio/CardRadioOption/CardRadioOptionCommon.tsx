import {
  type ComponentProps,
  type ComponentType,
  forwardRef,
  type ReactNode,
} from "react";
import type { Icon as IconCommon } from "../../../Icon/IconCommon";
import type { Radio } from "../Radio/RadioCommon";

export type CardRadioOptionProps = Omit<
  ComponentProps<typeof Radio>,
  "size"
> & {
  label: ReactNode;
  type?: "vertical" | "horizontal";
  description?: ReactNode;
  subtitle?: ReactNode;
  icon?: ComponentProps<typeof IconCommon>["src"];
};

export type CardRadioOptionCommonProps = CardRadioOptionProps & {
  RadioComponent: ComponentType<ComponentProps<typeof Radio>>;
  IconComponent: ComponentType<ComponentProps<typeof IconCommon>>;
};

export const CardRadioOptionCommon = forwardRef<
  HTMLInputElement,
  CardRadioOptionCommonProps
>(
  (
    {
      label,
      type = "vertical",
      description,
      subtitle,
      icon,
      isInvalid,
      className,
      RadioComponent,
      IconComponent,
      ...inputProps
    },
    ref,
  ) => (
    <label
      className={[
        "af-card-radio-option",
        isInvalid && "af-card-radio-option--invalid",
        type === "horizontal" && "af-card-radio-option--horizontal",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && <IconComponent src={icon} role="presentation" />}
      <div className="af-card-radio-option__content">
        <p className="af-card-radio-option__label">{label}</p>
        {Boolean(description) && (
          <p className="af-card-radio-option__description">{description}</p>
        )}
        {Boolean(subtitle) && (
          <p className="af-card-radio-option__subtitle">{subtitle}</p>
        )}
      </div>
      <RadioComponent {...inputProps} isInvalid={isInvalid} ref={ref} />
    </label>
  ),
);

CardRadioOptionCommon.displayName = "CardRadioOptionCommon";
