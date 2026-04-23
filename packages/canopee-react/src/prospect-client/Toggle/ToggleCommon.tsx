import check from "@material-symbols/svg-400/rounded/check.svg";
import close from "@material-symbols/svg-400/rounded/close.svg";
import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { Svg } from "../Svg/Svg";
import { getComponentClassName } from "../utilities/getComponentClassName";

export type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "style" | "type"
>;

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id ?? inputId;

    return (
      <label
        className={getComponentClassName("af-toggle", className)}
        htmlFor={inputId}
      >
        <div className="af-toggle__root">
          <span className="af-toggle__handle">
            <Svg
              src={check}
              aria-hidden="true"
              className="af-toggle__icon af-toggle__icon--check"
              width={16}
              height={16}
            />
            <Svg
              src={close}
              aria-hidden="true"
              className="af-toggle__icon af-toggle__icon--close"
              width={16}
              height={16}
            />
          </span>
        </div>
        <input {...inputProps} ref={ref} type="checkbox" id={inputId} />
      </label>
    );
  },
);
Toggle.displayName = "Toggle";
