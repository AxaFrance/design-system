import { ComponentProps, forwardRef } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Text } from "./Text";

export type TextInputProps = ConsumerFieldProps & ComponentProps<typeof Text>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, ...props }, inputRef) => {
    return (
      <Field
        {...props}
        renderInput={({ id, classModifier, ariaInvalid, errorId }) => (
          <>
            <Text
              id={id}
              classModifier={classModifier}
              ref={inputRef}
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...props}
            />
            {children}
          </>
        )}
      />
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
