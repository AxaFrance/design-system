import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { ReactNode } from "react";

type CheckboxProps = {
  type: "vertical" | "horizontal";
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
};

export const CheckboxSelect = ({
  options,
  errorMessage,
  onChange,
  type = "vertical",
}: CheckboxProps) => (
  <>
    <div
      role="group"
      className={`af-checkbox af-checkbox-select af-checkbox-select--${type}`}
    >
      {options.map(({ label, description, subtitle, icon, ...inputProps }) => (
        <label key={inputProps.name} htmlFor={`id-${inputProps.name}`}>
          <input
            type="checkbox"
            {...inputProps}
            id={`id-${inputProps.name}`}
            onChange={onChange}
            aria-invalid={Boolean(errorMessage) && !inputProps.disabled}
          />
          <div className="af-checkbox__icons">
            <CheckBoxOutlineBlankIcon className="af-checkbox__unchecked" />
            <CheckBoxIcon className="af-checkbox__checked" />
          </div>
          <div className="af-checkbox__content">
            {icon}
            <div className="af-checkbox__content-description">
              <span>{label}</span>
              {description && <span>{description}</span>}
              {subtitle && <span>{subtitle}</span>}
            </div>
          </div>
        </label>
      ))}
    </div>
    {errorMessage && (
      <div className="af-checkbox__error" aria-live="assertive">
        <ErrorOutline />
        {errorMessage}
      </div>
    )}
  </>
);
