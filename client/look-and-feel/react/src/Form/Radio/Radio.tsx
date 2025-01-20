import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import React, { ReactNode, forwardRef, useId } from "react";
import { Svg } from "../../Svg";
import { InputError } from "../InputError";

type RadioProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, errorMessage, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id || inputId;
    const idError = useId();

    return (
      <div>
        <div
          className="af-radio"
          role="radiogroup"
          aria-invalid={Boolean(errorMessage)}
          aria-errormessage={idError}
        >
          <label key={inputProps.name} htmlFor={inputId}>
            <input ref={ref} {...inputProps} type="radio" id={inputId} />
            <div className="af-radio__icons">
              <Svg
                src={radioOutlineBlankIcon}
                className="af-radio__unchecked"
              />
              <Svg src={radioIcon} className="af-radio__checked" />
            </div>
            {label}
          </label>
        </div>
        {errorMessage && <InputError id={idError} message={errorMessage} />}
      </div>
    );
  },
);

Radio.displayName = "Radio";
export { Radio };
