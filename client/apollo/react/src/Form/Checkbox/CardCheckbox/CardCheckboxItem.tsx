import { useId, type ReactNode } from "react";
import type { CheckboxComponent, IconComponent } from "./types";

export type TCardCheckboxItem = {
  label: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  hasError?: boolean;
  icon?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">;

type CardCheckboxItemProps = {
  size: "M" | "L";
  errorId: string;
} & TCardCheckboxItem &
  CheckboxComponent &
  IconComponent;

export const CardCheckboxItem = ({
  CheckboxComponent,
  IconComponent,
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
      <CheckboxComponent
        id={inputId}
        errorId={errorId}
        hasError={hasError}
        {...inputProps}
      />
      <div className="af-card-checkbox-content">
        {icon && <IconComponent src={icon} size={size} />}
        <div className="af-card-checkbox-content-description">
          <span>{label}</span>
          {description && <span>{description}</span>}
          {subtitle && <span>{subtitle}</span>}
        </div>
      </div>
    </label>
  );
};
