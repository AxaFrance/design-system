import { useId, type ReactNode, type ComponentProps } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon, Checkbox } from "@axa-fr/design-system-apollo-react/lf";

export type TCardCheckboxItem = {
  label: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  hasError?: boolean;
  icon?: string;
} & Omit<ComponentProps<typeof Checkbox>, "disabled" | "size">;

type CardCheckboxItemProps = TCardCheckboxItem & {
  size: "M" | "L";
  errorId: string;
};

export const CardCheckboxItem = ({
  id,
  label,
  description,
  subtitle,
  icon,
  errorId,
  hasError,
  size,
  ...inputProps
}: CardCheckboxItemProps) => {
  let inputId = useId();
  inputId = id ?? inputId;

  return (
    <label
      htmlFor={inputId}
      className="af-card-checkbox-label"
      aria-invalid={hasError}
    >
      <Checkbox
        id={inputId}
        errorId={errorId}
        hasError={hasError}
        {...inputProps}
      />
      <div className="af-card-checkbox-content">
        {icon ? <Icon src={icon} size={size} /> : null}
        <div className="af-card-checkbox-content-description">
          <span>{label}</span>
          {description ? <span>{description}</span> : null}
          {subtitle ? <span>{subtitle}</span> : null}
        </div>
      </div>
    </label>
  );
};
