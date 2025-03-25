import React, { forwardRef } from "react";
import { Svg } from "../Svg/Svg";

export type CheckboxInputProps = {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  inputId: string;
  idError?: string;
  checkBoxIcon: string;
  errorMessage?: string;
};

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ inputProps, inputId, idError, checkBoxIcon, errorMessage }, ref) => {
    return (
      <>
        <input
          ref={ref}
          {...inputProps}
          type="checkbox"
          id={inputId}
          aria-errormessage={idError}
          aria-invalid={!!errorMessage}
          disabled={false}
        />
        <div className="af-checkbox__icons">
          <Svg src={checkBoxIcon} className="af-checkbox__checked" />
        </div>
      </>
    );
  },
);

CheckboxInput.displayName = "CheckboxInput";
export { CheckboxInput };
