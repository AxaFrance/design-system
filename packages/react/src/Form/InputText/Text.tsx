import { ComponentPropsWithRef, forwardRef } from "react";
import "@axa-fr/design-system-css/dist/Form/InputText/InputText.agent.scss";

import { getComponentClassName } from "../core";

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  classModifier?: string;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

    return (
      <input
        {...otherProps}
        className={componentClassName}
        type="text"
        ref={inputRef}
        required={classModifier?.includes("required")}
      />
    );
  },
);

Text.displayName = "Text";

export { Text };
