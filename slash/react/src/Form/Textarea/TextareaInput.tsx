import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { ComponentProps, forwardRef } from "react";
import { type ConsumerFieldProps, Field } from "../core";

import { Textarea } from "./Textarea";

type Props = Omit<
  ConsumerFieldProps & ComponentProps<typeof Textarea>,
  "children"
>;

const TextareaInput = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, rightElement, ...props }, inputRef) => {
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
            {rightElement}
          </>
        )}
      />
    );
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
