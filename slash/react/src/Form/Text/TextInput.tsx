import { ComponentProps, forwardRef } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Text } from "./Text";

export type TextInputProps = Omit<
  ConsumerFieldProps & ComponentProps<typeof Text>,
  "children"
>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ rightElement, ...props }, inputRef) => {
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
            {rightElement}
          </>
        )}
      />
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
