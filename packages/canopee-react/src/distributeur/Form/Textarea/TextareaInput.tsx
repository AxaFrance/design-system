import "@axa-fr/canopee-css/distributeur/Form/Textarea/Textarea.css";

import { type ComponentProps } from "react";
import { type ConsumerFieldProps, Field } from "../core";

import { Textarea } from "./Textarea";

type Props = ConsumerFieldProps & ComponentProps<typeof Textarea>;

const TextareaInput = ({ label, children, ...props }: Props) => (
  <Field
    label={label}
    labelPosition="top"
    classNameSuffix="textarea"
    {...props}
    renderInput={({ id, ariaInvalid, errorId, ...inputProps }) => (
      <>
        <Textarea
          id={id}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          {...inputProps}
        />
        {children}
      </>
    )}
  />
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
