import "@axa-fr/design-system-look-and-feel-css/dist/Form/Select/Select.scss";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import classNames from "classnames";
import { InputError } from "../InputError";

type Props = ComponentPropsWithRef<"select"> & {
  id?: string;
  label?: string;
  errorLabel?: string;
  placeholder?: string;
};

const Select = forwardRef<HTMLSelectElement, Props>(
  (
    { id, required, label, errorLabel, placeholder, children, ...otherProps },
    inputRef,
  ) => {
    const idError = useId();
    let inputId = useId();
    inputId = id || inputId;

    const isShowingPlaceholder = otherProps.value === "";
    const classname = classNames(
      "af-form__select-input",
      errorLabel && "af-form__select-input--error",
      isShowingPlaceholder && "af-form__select-input-placeholder",
    );

    return (
      <div>
        {label && (
          <label htmlFor={inputId} className="af-form__select-label">
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}
        <select
          className={classname}
          {...otherProps}
          ref={inputRef}
          id={inputId}
        >
          {Boolean(placeholder) && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {errorLabel && <InputError id={idError} message={errorLabel} />}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
