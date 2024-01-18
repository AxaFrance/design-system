import "@axa-fr/design-system-css/dist/Form/Text/Text.agent.scss";
import { ComponentPropsWithRef, forwardRef } from "react";

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
        className={componentClassName}
        type="text"
        ref={inputRef}
        required={classModifier?.includes("required")}
        disabled={classModifier?.includes("disabled")}
        {...otherProps}
      />
    );
  },
);

Text.displayName = "Text";

export { Text };
