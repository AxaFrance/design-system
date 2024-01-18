import "@axa-fr/design-system-css/dist/Form/Text/Text.agent.scss";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import { getComponentClassName } from "../core";

type Props = Omit<ComponentPropsWithRef<"input">, "required" | "type"> & {
  classModifier?: string;
};

const Number = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, ...otherProps }, inputRef) => {
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
        required={classModifier?.includes("required")}
        {...otherProps}
      />
    );
  },
);

Number.displayName = "Number";

export { Number };
