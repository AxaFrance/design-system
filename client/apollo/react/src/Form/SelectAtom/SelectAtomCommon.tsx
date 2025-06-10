import { type ComponentPropsWithRef, forwardRef, useId } from "react";
import classNames from "classnames";

type SelectAtomProps = ComponentPropsWithRef<"select"> & {
  id?: string;
  error?: string;
  placeholder?: string;
};

const SelectAtom = forwardRef<HTMLSelectElement, SelectAtomProps>(
  ({ id, error, placeholder, children, ...otherProps }, inputRef) => {
    let inputId = useId();
    inputId = id || inputId;

    const classname = classNames(
      "af-form__select-input",
      error && "af-form__select-input--error",
    );

    return (
      <div>
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
      </div>
    );
  },
);

SelectAtom.displayName = "SelectAtom";

export { SelectAtom };
