import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import { getComponentClassName } from "../../utilities";

type Props = Omit<ComponentPropsWithRef<"input">, "type"> & {
  classModifier?: string;
};

const Number = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, required, ...otherProps }, inputRef) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );
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
