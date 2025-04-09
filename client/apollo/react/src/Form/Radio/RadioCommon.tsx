import React, {
  ReactNode,
  forwardRef,
  useId,
  type ComponentType,
  type ComponentProps,
} from "react";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type RadioProps = {
  label: ReactNode;
  errorMessage?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, errorMessage, ItemMessageComponent, ...inputProps }, ref) => {
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
              <div className="af-radio__unchecked" />
              <div className="af-radio__checked">
                <div className="af-radio__checked-inner" />
              </div>
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
