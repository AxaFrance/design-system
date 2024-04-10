import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { CheckboxSelect } from "./CheckboxSelect";

type CheckboxProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
} & React.HTMLAttributes<HTMLDivElement>;

const Checkbox = ({
  label,
  name,
  value,
  checked,
  disabled,
  errorMessage,
  onChange,
  ...props
}: CheckboxProps) => (
  <>
    <div className="af-checkbox" {...props}>
      <label key={name} htmlFor={`id-${name}`}>
        <input
          type="checkbox"
          id={`id-${name}`}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={!!errorMessage}
          disabled={disabled}
          checked={checked}
        />
        <div className="af-checkbox__icons">
          <CheckBoxOutlineBlankIcon className="af-checkbox__unchecked" />
          <CheckBoxIcon className="af-checkbox__checked" />
        </div>
        {label}
      </label>
    </div>
    {errorMessage && (
      <div className="af-checkbox__error" aria-live="assertive">
        <ErrorOutline />
        {errorMessage}
      </div>
    )}
  </>
);

Checkbox.Select = CheckboxSelect;
export { Checkbox };
