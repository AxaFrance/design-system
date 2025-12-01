import "@axa-fr/canopee-css/distributeur/Form/Textarea/Textarea.css";

import { ComponentProps, forwardRef } from "react";
import { type ConsumerFieldProps, Field } from "../core";

import { Textarea } from "./Textarea";

type Props = ConsumerFieldProps & ComponentProps<typeof Textarea>;

const TextareaInput = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, children, ...props }, inputRef) => {
    return (
      <Field
        label={label}
        labelPosition="top"
        classNameSuffix="textarea"
        {...props}
        renderInput={({ id, ariaInvalid, errorId, ...inputProps }) => (
          <>
            <Textarea
              id={id}
              ref={inputRef}
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...inputProps}
            />
            {children}
          </>
        )}
      />
    );
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
