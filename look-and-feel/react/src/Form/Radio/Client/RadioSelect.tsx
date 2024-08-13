import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Client/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import React, {
  ComponentPropsWithRef,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import { Svg } from "../../../Svg";

type RadioSelectProps = {
  type: "vertical" | "horizontal";
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
} & Omit<ComponentPropsWithRef<"div">, "className" | "aria-invalid">;

export const RadioSelect = forwardRef<HTMLDivElement, RadioSelectProps>(
  (
    {
      id,
      options,
      errorMessage,
      onChange,
      type = "vertical",
      name,
      value,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const optionId = id || generatedId;
    return (
      <>
        <div
          ref={ref}
          {...rest}
          role="radiogroup"
          className={`af-radio af-radio-select af-radio-select--${type}`}
          aria-invalid={Boolean(errorMessage)}
        >
          {options.map(
            ({ label, description, subtitle, icon, ...inputProps }) => (
              <label key={label as string} htmlFor={`${optionId}-${label}`}>
                <input
                  type="radio"
                  {...inputProps}
                  name={name}
                  id={`${optionId}-${label}`}
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
                    <span>{label}</span>
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
