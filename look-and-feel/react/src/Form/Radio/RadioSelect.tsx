import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import React, {
  ComponentPropsWithRef,
  ReactNode,
  forwardRef,
  useCallback,
  useId,
} from "react";
import { Svg } from "../../Svg";
import { InputError } from "../InputError";

type RadioSelectProps = {
  type: "vertical" | "horizontal";
  label?: string;
  isRequired?: boolean;
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
  name: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
  value?: string;
  isDisabled?: boolean;
} & Omit<ComponentPropsWithRef<"div">, "className" | "aria-invalid">;

export const RadioSelect = forwardRef<HTMLInputElement, RadioSelectProps>(
  (
    {
      id,
      label,
      options,
      errorMessage,
      onChange,
      type = "vertical",
      name,
      value,
      isDisabled,
      isRequired,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const optionId = id || generatedId;

    const getRef = useCallback(
      (
        index: number,
        reference: React.ForwardedRef<HTMLInputElement>,
        val?: string,
        inputVal?: string | number | readonly string[],
      ) => {
        if ((!val && index === 0) || val === inputVal) {
          return reference;
        }
        return null;
      },
      [],
    );

    return (
      <div className="af-radio__container">
        {label && (
          <span className="af-radio__label" id={optionId}>
            {label}
            {isRequired && <span aria-hidden="true">&nbsp;*</span>}
          </span>
        )}
        <div
          {...rest}
          role="radiogroup"
          className={`af-radio af-radio-select af-radio-select--${type}`}
          aria-invalid={Boolean(errorMessage)}
          aria-labelledby={optionId}
          aria-errormessage={`${optionId}-error`}
        >
          {options.map(
            (
              {
                label: inputLabel,
                description,
                subtitle,
                icon,
                disabled: inputDisabled,
                ...inputProps
              },
              idx,
            ) => (
              <label
                key={inputLabel as string}
                htmlFor={`${optionId}-${inputLabel}`}
              >
                <input
                  type="radio"
                  {...(isDisabled || inputDisabled ? { disabled: true } : null)}
                  {...inputProps}
                  name={name}
                  id={`${optionId}-${inputLabel}`}
                  onChange={onChange}
                  {...(value && {
                    "aria-checked": value === inputProps.value,
                    checked: value === inputProps.value,
                  })}
                  ref={getRef(idx, ref, value, inputProps.value)}
                />
                <div className="af-radio__icons">
                  <Svg
                    src={radioOutlineBlankIcon}
                    className="af-radio__unchecked"
                  />
                  <Svg src={radioIcon} className="af-radio__checked" />
                </div>
                <div className="af-radio__content">
                  {icon}
                  <div className="af-radio__content-description">
                    <span>{inputLabel}</span>
                    {description && <span>{description}</span>}
                    {subtitle && <span>{subtitle}</span>}
                  </div>
                </div>
              </label>
            ),
          )}
        </div>
        {errorMessage && (
          <InputError id={`${optionId}-error`} message={errorMessage} />
        )}
      </div>
    );
  },
);

RadioSelect.displayName = "RadioSelect";
