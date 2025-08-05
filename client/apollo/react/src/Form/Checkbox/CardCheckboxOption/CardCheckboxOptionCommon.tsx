import { type ComponentType, forwardRef, type ReactNode } from "react";
import type { IconProps } from "../../../Icon/IconCommon";
import type { CheckboxProps } from "../Checkbox/CheckboxCommon";

export type CardCheckboxOptionProps = CheckboxProps & {
  label: ReactNode;
  type?: "vertical" | "horizontal";
  description?: ReactNode;
  subtitle?: ReactNode;
  icon?: IconProps["src"];
};

export type CardCheckboxOptionCommonProps = CardCheckboxOptionProps & {
  CheckboxComponent: ComponentType<CheckboxProps>;
  IconComponent: ComponentType<IconProps>;
};

export const CardCheckboxOptionCommon = forwardRef<
  HTMLInputElement,
  CardCheckboxOptionCommonProps
>(
  (
    {
      label,
      type = "vertical",
      description,
      subtitle,
      icon,
      className,
      CheckboxComponent,
      IconComponent,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <label
        className={[
          "af-card-checkbox-option",
          type === "horizontal" && "af-card-checkbox-option--horizontal",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {icon ? <IconComponent src={icon} role="presentation" /> : null}
        <div className="af-card-checkbox-option__content">
          <p className="af-card-checkbox-option__label">{label}</p>
          {Boolean(description) && (
            <p className="af-card-checkbox-option__description">
              {description}
            </p>
          )}
          {Boolean(subtitle) && (
            <p className="af-card-checkbox-option__subtitle">{subtitle}</p>
          )}
        </div>
        <CheckboxComponent {...inputProps} ref={ref} />
      </label>
    );
  },
);

CardCheckboxOptionCommon.displayName = "CardCheckboxOptionCommon";
