import "@axa-fr/design-system-css/dist/Form/Textarea/Textarea.agent.scss";
import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

import { getComponentClassName } from "../core";

type Props = ComponentPropsWithoutRef<"textarea"> & {
  classModifier?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ id, className, classModifier, ...otherProps }, inputRef) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-textarea",
    );

    return (
      <textarea
        {...otherProps}
        id={inputId}
        className={componentClassName}
        ref={inputRef}
        required={classModifier?.includes("required")}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
