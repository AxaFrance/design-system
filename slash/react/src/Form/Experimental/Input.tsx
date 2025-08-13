import "@axa-fr/design-system-slash-css/dist/Form/Experimental/Input.css";
import classNames from "classnames";
import { type ComponentPropsWithRef, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(
  ({ className, required, ...otherProps }, inputRef) => {
    const componentClassName = classNames("af-input__input", className);

    return (
      <input
        className={componentClassName}
        ref={inputRef}
        required={required}
        {...otherProps}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
