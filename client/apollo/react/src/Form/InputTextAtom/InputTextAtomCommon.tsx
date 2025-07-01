import { type ComponentPropsWithRef, forwardRef, useId } from "react";

import { getComponentClassName } from "../../utilities/getComponentClassName";

type InputTextAtomProps = ComponentPropsWithRef<"input"> & {
  unit?: React.ReactNode;
  classModifier?: string;
  error?: string;
  idMessage?: string;
  idHelp?: string;
  idLabel?: string;
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
      idLabel,
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
          aria-labelledby={idLabel}
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
