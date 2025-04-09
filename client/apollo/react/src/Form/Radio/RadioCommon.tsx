import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";

import React, {
  ReactNode,
  forwardRef,
  useId,
  type ComponentType,
  type ComponentProps,
} from "react";
import { Icon } from "../../Icon/IconCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type RadioProps = {
  label: string | ReactNode;
  errorMessage?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
  svgIconUncheckedSrc: string;
  onMouseEnterProps?: () => void;
  onMouseLeaveProps?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      errorMessage,
      ItemMessageComponent,
      IconComponent,
      svgIconUncheckedSrc,
      onMouseEnterProps,
      onMouseLeaveProps,
      ...inputProps
    },
    ref,
  ) => {
    let inputId = useId();
    inputId = inputProps.id || inputId;
    const idError = useId();

    return (
      <div onMouseEnter={onMouseEnterProps} onMouseLeave={onMouseLeaveProps}>
        <div
          className="af-radio"
          role="radiogroup"
          aria-invalid={Boolean(errorMessage)}
          aria-errormessage={idError}
        >
          <label key={inputProps.name} htmlFor={inputId}>
            <input ref={ref} {...inputProps} type="radio" id={inputId} />
            <div className="af-radio__icons">
              <IconComponent
                src={svgIconUncheckedSrc}
                className="af-radio__unchecked"
              />
              <IconComponent src={radioIcon} className="af-radio__checked" />
            </div>
            {label}
          </label>
        </div>
        {errorMessage && (
          <ItemMessageComponent id={idError} message={errorMessage} />
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";
export { Radio };
