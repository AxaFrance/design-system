import { type ComponentProps } from "react";
import { Icon, Radio } from "@axa-fr/design-system-apollo-react/lf";

export type TCardRadioItemProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  label: string;
  description?: string;
  subtitle?: string;
  icon?: ComponentProps<typeof Icon>["src"];
  size: ComponentProps<typeof Icon>["size"];
};

export const CardRadioItem = ({
  label,
  description,
  subtitle,
  icon,
  size,
  ...inputProps
}: TCardRadioItemProps) => (
  <label className="af-card-radio-label">
    <Radio {...inputProps} />
    <div className="af-card-radio-content">
      {icon ? <Icon src={icon} size={size} role="presentation" /> : null}
      <div className="af-card-radio-content-description">
        <span>{label}</span>
        {description ? <span>{description}</span> : null}
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
    </div>
  </label>
);
