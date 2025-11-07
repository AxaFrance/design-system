import {
  type ComponentPropsWithRef,
  forwardRef,
  type ReactNode,
  useId,
} from "react";

import { getClassName } from "../../utilities/getClassName";

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
      idMessage,
      idHelp,
      "aria-errormessage": ariaErrormessage,
      "aria-describedby": ariaDescribedby,
      type = "text",
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getClassName({
      baseClassName: "af-form__input-text",
      modifiers: [classModifier + (error || ariaErrormessage ? "error" : "")],
      className,
    });

    let inputId = useId();
    inputId = otherProps.id || inputId;

    return (
      <div className="af-form__input-atom-container">
        <input
          id={inputId}
          className={componentClassName}
          type={type}
          required={required}
          ref={inputRef}
          aria-errormessage={ariaErrormessage ?? idMessage}
          aria-invalid={Boolean(error || ariaErrormessage)}
          aria-describedby={ariaDescribedby ?? idHelp}
          {...otherProps}
        />
        {unit}
      </div>
    );
  },
);

InputTextAtom.displayName = "InputTextAtom";

export { InputTextAtom };
