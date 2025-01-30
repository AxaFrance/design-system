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

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, ...props }, inputRef) => (
    <Field
      {...props}
      renderInput={({ id, classModifier }) => (
        <Text id={id} classModifier={classModifier} ref={inputRef} {...props} />
      )}
    >
      {children}
    </Field>
  ),
);

TextInput.displayName = "TextInput";

export { TextInput };
