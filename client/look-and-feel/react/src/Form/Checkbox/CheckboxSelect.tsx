import "@axa-fr/design-system-look-and-feel-css/dist/Form/Checkbox/Checkbox.scss";
import React, {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  useEffect,
  useId,
  useState,
} from "react";
import { Checkbox } from "./Checkbox";
import { getComponentClassName } from "../core";
import { InputError } from "../InputError";

type Props = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  border?: boolean;
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
  errorMessage?: string;
  onChange?: (...event: unknown[]) => void;
  value?: unknown[];
};

const CheckboxSelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      options,
      errorMessage,
      onChange,
      value,
      type = "vertical",
      className,
      labelGroup,
      descriptionGroup,
      isRequired,
      border = true,
    },
    ref,
  ) => {
    const [checkedState, setCheckedState] = useState(
      options.map((x) => Boolean(value?.includes(x.value))),
    );
    const optionId = useId();
    const idError = useId();

    const handleOnChange = (position: number) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item,
      );

      setCheckedState(updatedCheckedState);

      if (onChange) {
        const arr: unknown[] = [];

        updatedCheckedState.forEach((x, idx) => {
          if (x === true) {
            arr.push(options[idx].value);
          }
        });
        onChange(arr);
      }
    };

    useEffect(() => {
      setCheckedState(options.map((x) => Boolean(value?.includes(x.value))));
    }, [setCheckedState, options, value]);

    const componentClassName = getComponentClassName(
      "af-checkbox__container",
      className,
    );
    const checkboxGroupClassName = getComponentClassName(
      `af-checkbox${border ? " af-checkbox-select" : ""} af-checkbox-select--${type}`,
      className,
    );

    return (
      <div className={componentClassName}>
        <div className="af-checkbox__label-container">
          {labelGroup && (
            <span className="af-checkbox__label" id={optionId}>
              {labelGroup}
              {isRequired && <span aria-hidden="true">&nbsp;*</span>}
            </span>
          )}
          {descriptionGroup && (
            <span className="af-checkbox__description">{descriptionGroup}</span>
          )}
        </div>
        <div role="group" className={checkboxGroupClassName}>
          <ul>
            {options.map(
              ({ label, value: valueOption, ...inputProps }, idx) => (
                <li key={`key-${inputProps.name}`}>
                  <Checkbox
                    {...inputProps}
                    showErrorMessage={false}
                    ref={idx === 0 ? ref : null}
                    value={valueOption}
                    checked={checkedState[idx]}
                    onChange={() => handleOnChange(idx)}
                    id={`id-${inputProps.name}`}
                    label={label}
                    errorMessage={errorMessage}
                    aria-errormessage={
                      Boolean(errorMessage) && !inputProps.disabled
                        ? idError
                        : undefined
                    }
                  />
                </li>
              ),
            )}
          </ul>
        </div>
        {errorMessage && <InputError id={idError} message={errorMessage} />}
      </div>
    );
  },
);

CheckboxSelect.displayName = "CheckboxSelect";
export { CheckboxSelect };
