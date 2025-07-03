import { type ComponentProps, type ComponentType } from "react";
import type { Icon as IconCommon } from "../../../Icon/IconCommon";
import type { RadioCommon } from "../Radio/RadioCommon";

export type TCardRadioItemProps = Omit<
  ComponentProps<typeof RadioCommon>,
  "size"
> & {
  label: string;
  description?: string;
  subtitle?: string;
  icon?: ComponentProps<typeof IconCommon>["src"];
  size: ComponentProps<typeof IconCommon>["size"];
  RadioComponent: ComponentType<ComponentProps<typeof RadioCommon>>;
  IconComponent: ComponentType<ComponentProps<typeof IconCommon>>;
};

export const CardRadioItem = ({
  label,
  description,
  subtitle,
  icon,
  size,
  RadioComponent,
  IconComponent,
  ...inputProps
}: TCardRadioItemProps) => (
  <label className="af-card-radio-label">
    <RadioComponent {...inputProps} />
    <div className="af-card-radio-content">
      {icon && <IconComponent src={icon} size={size} role="presentation" />}
      <div className="af-card-radio-content-description">
        <span>{label}</span>
        {description && <span>{description}</span>}
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  </label>
);
