import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { ComponentPropsWithRef, forwardRef } from "react";
import { getComponentClassName } from "../../utilities";

type Props = ComponentPropsWithRef<"input"> & {
  classModifier?: string;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, required, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

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
