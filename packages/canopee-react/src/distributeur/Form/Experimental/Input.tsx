import "@axa-fr/canopee-css/distributeur/Form/Experimental/Input.css";
import { type ComponentPropsWithRef, forwardRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(
  ({ className, ...otherProps }, inputRef) => {
    const componentClassName = getClassName({
      baseClassName: "af-input__input",
      className,
    });

    return (
      <input className={componentClassName} ref={inputRef} {...otherProps} />
    );
  },
);

Input.displayName = "Input";

export { Input };
