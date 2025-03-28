import { ComponentProps, forwardRef, ReactNode, useId } from "react";
import { Field } from "../core";
import { Text } from "./Text";
import { useAriaInvalid } from "../core/useAriaInvalid";

export type TextInputProps = Omit<
  ComponentProps<typeof Field> &
    ComponentProps<typeof Text> & {
      helpMessage?: ReactNode;
    },
  "renderInput"
>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { children, message, forceDisplayMessage, messageType, ...props },
    inputRef,
  ) => {
    const errorUseId = useId();
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (
      <Field
        {...props}
        renderInput={({ id, classModifier }) => (
          <Text
            id={id}
            classModifier={classModifier}
            ref={inputRef}
            aria-describedby={errorUseId}
            aria-invalid={isInvalid}
            {...props}
          />
        )}
        errorId={errorUseId}
        forceDisplayMessage={forceDisplayMessage}
        message={message}
      >
        {children}
      </Field>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
