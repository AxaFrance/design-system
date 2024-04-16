import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import React, { ReactNode, useId } from "react";
import { CheckboxSelect } from "./CheckboxSelect";

type CheckboxProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, errorMessage, ...inputProps }: CheckboxProps) => {
  let inputId = useId();
  inputId = inputProps.id || inputId;

  return (
    <>
      <div className="af-checkbox">
        <label key={inputProps.name} htmlFor={inputId}>
          <input
            {...inputProps}
            type="checkbox"
            id={inputId}
            aria-invalid={!!errorMessage}
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
};

Checkbox.Select = CheckboxSelect;
export { Checkbox };
