import "@axa-fr/design-system-css/dist/Form/InputText/InputText.agent.scss";
import {
  ComponentPropsWithRef,
  HTMLInputTypeAttribute,
  forwardRef,
} from "react";

import { getComponentClassName } from "../core";

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  classModifier?: string;
  type?: HTMLInputTypeAttribute;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, type = "text", ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

    return (
      <input
        {...otherProps}
        className={componentClassName}
        type={type}
        ref={inputRef}
        required={classModifier?.includes("required")}
      />
    );
  },
);

Text.displayName = "Text";

export { Text };
