import {
  type ComponentPropsWithRef,
  forwardRef,
  type ReactNode,
  useId,
} from "react";

import { getComponentClassName } from "../../utilities/getComponentClassName";

type InputTextAtomProps = ComponentPropsWithRef<"input"> & {
  unit?: ReactNode;
  classModifier?: string;
  error?: string;
  idMessage?: string;
  idHelp?: string;
};

const InputTextAtom = forwardRef<HTMLInputElement, InputTextAtomProps>(
  (
    {
      unit,
      className,
      classModifier = "",
      error,
      required,
      "aria-errormessage": ariaErrormessage,
      idMessage,
      idHelp,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-text",
      className,
      classModifier + (error || ariaErrormessage ? " error" : ""),
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;

    return (
      <div className="af-form__input-variant">
        <input
          id={inputId}
          className={componentClassName}
          type={otherProps.type || "text"}
          required={required}
          ref={inputRef}
          aria-errormessage={ariaErrormessage ?? idMessage}
          aria-invalid={Boolean(error || ariaErrormessage)}
          aria-describedby={idHelp}
          {...otherProps}
        />
        {unit}
      </div>
    );
  },
);

InputTextAtom.displayName = "InputTextAtom";

export { InputTextAtom };
