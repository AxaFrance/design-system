import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { ReactNode } from "react";

type CheckboxProps = {
  type: "vertical" | "horizontal";
  options: {
    label: ReactNode;
    name: string;
    value: string;
    subtitle?: ReactNode;
    description?: ReactNode;
    checked?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
  }[];
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
} & React.HTMLAttributes<HTMLDivElement>;

export const CheckboxSelect = ({
  options,
  errorMessage,
  onChange,
  type = "vertical",
  ...props
}: CheckboxProps) => (
  <>
    <div
      role="group"
      className={`af-checkbox af-checkbox-select af-checkbox-select--${type}`}
      {...props}
    >
      {options.map(
        ({
          label,
          description,
          subtitle,
          name,
          value,
          checked,
          disabled,
          icon,
        }) => (
          <label key={name} htmlFor={`id-${name}`}>
            <input
              type="checkbox"
              id={`id-${name}`}
              name={name}
              value={value}
              onChange={onChange}
              aria-invalid={Boolean(errorMessage) && !disabled}
              disabled={disabled}
              checked={checked}
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
        ),
      )}
    </div>
    {errorMessage && (
      <div className="af-checkbox__error" aria-live="assertive">
        <ErrorOutline />
        {errorMessage}
      </div>
    )}
  </>
);
