import "@axa-fr/canopee-css/distributeur/Form/Text/Text.css";
import { type ComponentPropsWithRef, forwardRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"input"> & {
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, required, ...otherProps }, inputRef) => {
    const componentClassName = getClassName({
      baseClassName: "af-form__input-text",
      modifiers: classModifier?.split(" "),
      className,
    });

    return (
      <input
        className={componentClassName}
        type="text"
        ref={inputRef}
        required={required || classModifier?.includes("required")}
        {...otherProps}
      />
    );
  },
);

Text.displayName = "Text";

export { Text };
