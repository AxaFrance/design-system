import "@axa-fr/canopee-css/distributeur/Form/Text/Text.css";
import { type ComponentPropsWithRef, forwardRef, useId } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = Omit<ComponentPropsWithRef<"input">, "type"> & {
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
};

const Number = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, required, ...otherProps }, inputRef) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const componentClassName = getClassName({
      baseClassName: "af-form__input-text",
      modifiers: classModifier?.split(" "),
      className,
    });
    return (
      <input
        className={componentClassName}
        id={inputId}
        type="number"
        ref={inputRef}
        required={required || classModifier?.includes("required")}
        {...otherProps}
      />
    );
  },
);

Number.displayName = "Number";

export { Number };
