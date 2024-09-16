import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import React, {
  ComponentPropsWithRef,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import { Svg } from "../../Svg";

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

export const RadioSelect = forwardRef<HTMLDivElement, RadioSelectProps>(
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
    return (
      <>
        {label && (
          <span className="af-radio__label" id={optionId}>
            {label}
            {isRequired && <span aria-hidden="true">&nbsp;*</span>}
          </span>
        )}
        <div
          ref={ref}
          {...rest}
          role="radiogroup"
          className={`af-radio af-radio-select af-radio-select--${type}`}
          aria-invalid={Boolean(errorMessage)}
          aria-labelledby={optionId}
        >
          {options.map(
            ({
              label: inputLabel,
              description,
              subtitle,
              icon,
              disabled: inputDisabled,
              ...inputProps
            }) => (
              <label
                key={inputLabel as string}
                htmlFor={`${optionId}-${inputLabel}`}
              >
                <input
                  type="radio"
                  aria-labelledby={optionId}
                  {...(isDisabled || inputDisabled ? { disabled: true } : null)}
                  {...inputProps}
                  name={name}
                  id={`${optionId}-${inputLabel}`}
                  onChange={onChange}
                  {...(value && {
                    "aria-checked": value === inputProps.value,
                    checked: value === inputProps.value,
                  })}
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
          <div className="af-radio__error" aria-live="assertive">
            <Svg src={errorOutline} />
            {errorMessage}
          </div>
        )}
      </>
    );
  },
);

RadioSelect.displayName = "RadioSelect";
