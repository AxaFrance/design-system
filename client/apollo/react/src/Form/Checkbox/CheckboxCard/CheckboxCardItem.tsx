import { useId, type ReactNode } from "react";
import type { CheckboxComponent, IconComponent } from "./types";

export type TCheckboxCardItem = {
  label: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  hasError?: boolean;
  icon?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">;

type CheckboxCardItemProps = {
  size: "M" | "L";
  errorId: string;
} & TCheckboxCardItem &
  CheckboxComponent &
  IconComponent;

export const CheckboxCardItem = ({
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
}: CheckboxCardItemProps) => {
  let inputId = useId();
  inputId = id ?? inputId;

  return (
    <label
      htmlFor={inputId}
      className="af-checkbox-card-label"
      aria-invalid={hasError}
    >
      <CheckboxComponent
        id={inputId}
        errorId={errorId}
        hasError={hasError}
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
  );
};
