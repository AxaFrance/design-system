import "@axa-fr/canopee-css/distributeur/Form/Experimental/Input.css";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

const Input = ({
  className,
  ...otherProps
}: ComponentPropsWithRef<"input">) => {
  const componentClassName = getClassName({
    baseClassName: "af-input__input",
    className,
  });

  return <input className={componentClassName} {...otherProps} />;
};

Input.displayName = "Input";

export { Input };
