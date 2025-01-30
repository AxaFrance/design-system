import { ComponentProps, forwardRef, ReactNode } from "react";
import { Field } from "../core";
import { Text } from "./Text";

export type TextInputProps = Omit<
  ComponentProps<typeof Field> &
    ComponentProps<typeof Text> & {
      helpMessage?: ReactNode;
    },
  "renderInput"
>;

// eslint-disable-next-line react/no-multi-comp
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, ...props }, inputRef) => {
    return (
      <Field
        {...props}
        renderInput={({ id, classModifier }) => (
          <Text
            id={id}
            classModifier={classModifier}
            ref={inputRef}
            {...props}
          />
        )}
      >
        {children}
      </Field>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
