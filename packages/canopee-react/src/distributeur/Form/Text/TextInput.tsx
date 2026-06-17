import { type ComponentProps } from "react";
import { type ConsumerFieldProps, Field } from "../core";
import { Text } from "./Text";

export type TextInputProps = ConsumerFieldProps & ComponentProps<typeof Text>;

const TextInput = ({ children, ...props }: TextInputProps) => (
  <Field
    {...props}
    renderInput={({
      id,
      classModifier,
      ariaInvalid,
      errorId,
      ...textProps
    }) => (
      <>
        <Text
          id={id}
          classModifier={classModifier}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          {...textProps}
        />
        {children}
      </>
    )}
  />
);

TextInput.displayName = "TextInput";

export { TextInput };
