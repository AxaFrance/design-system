import "@axa-fr/canopee-css/distributeur/Form/Text/Text.css";
import { type ComponentPropsWithRef, useId } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = Omit<ComponentPropsWithRef<"input">, "type"> & {};

const Number = ({ id, className, required, ...otherProps }: Props) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const componentClassName = getClassName({
    baseClassName: "af-form__input-text",
    className,
  });
  return (
    <input
      className={componentClassName}
      id={inputId}
      type="number"
      required={required}
      {...otherProps}
    />
  );
};

Number.displayName = "Number";

export { Number };
