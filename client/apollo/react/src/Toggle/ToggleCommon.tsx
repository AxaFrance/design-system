import { forwardRef, useId } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
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
          <span className="af-toggle__handle" />
        </div>
        <input {...inputProps} ref={ref} type="checkbox" id={inputId} />
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
