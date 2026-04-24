import check from "@material-symbols/svg-400/rounded/check.svg";
import close from "@material-symbols/svg-400/rounded/close.svg";
import {
  type ComponentType,
  forwardRef,
  type InputHTMLAttributes,
  useId,
} from "react";
import type { IconProps } from "../Icon/IconCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";

export type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "style" | "type"
>;

export type ToggleCommonProps = ToggleProps & {
  IconComponent: ComponentType<IconProps>;
};

export const ToggleCommon = forwardRef<HTMLInputElement, ToggleCommonProps>(
  ({ className, IconComponent, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id ?? inputId;

    return (
      <label
        className={getComponentClassName("af-toggle", className)}
        htmlFor={inputId}
      >
        <div className="af-toggle__root">
          <span className="af-toggle__handle">
            <IconComponent
              src={check}
              aria-hidden="true"
              className="af-toggle__icon af-toggle__icon--check"
              size="XS"
            />
            <IconComponent
              src={close}
              aria-hidden="true"
              className="af-toggle__icon af-toggle__icon--close"
              size="XS"
            />
          </span>
        </div>
        <input {...inputProps} ref={ref} type="checkbox" id={inputId} />
      </label>
    );
  },
);
ToggleCommon.displayName = "ToggleCommon";
