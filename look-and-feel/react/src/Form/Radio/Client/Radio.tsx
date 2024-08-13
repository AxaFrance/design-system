import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Client/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import React, { ReactNode, forwardRef, useId } from "react";
import { Svg } from "../../../Svg";

type RadioProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, errorMessage, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id || inputId;

    return (
      <>
        <div
          className="af-radio"
          role="radiogroup"
          aria-invalid={Boolean(errorMessage)}
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
        {errorMessage && (
          <div className="af-radio__error" aria-live="assertive">
            <Svg src={errorOutline} />
            {errorMessage}
          </div>
        )}
      </>
    );
  },
);

Radio.displayName = "Radio";
export { Radio };
