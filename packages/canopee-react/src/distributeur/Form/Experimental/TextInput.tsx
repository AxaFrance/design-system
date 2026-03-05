import { type ComponentProps, forwardRef } from "react";
import { Input } from "./Input";
import { InputContainer } from "./InputContainer";
import { InputUnit } from "./InputUnit";
import { ItemMessage } from "./ItemMessage";
import { Label } from "./Label";
import type { InputBaseProps } from "./types";
import { useInput } from "./useInput.hook";

export type TextInputProps = Omit<ComponentProps<typeof Input>, "children"> &
  InputBaseProps;

/**
 * This component renders a label, a text input field and optionnally help and  error messages.
 * It can be customized to render the label on top, or on the left of the input.
 * It also supports adding a unit on the right of the input.
 */
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      contentRight,
      id,
      labelPosition,
      inputClassName: inputClassNameProp,
      labelClassName: labelClassNameProp,
      helpMessage,
      containerClassName,
      required,
      label,
      errorMessage,
      ...props
    },
    inputRef,
  ) => {
    const {
      describedBy,
      errorId,
      helperId,
      inputClassName,
      inputId,
      isContainerVertical,
      isInvalid,
      labelClassName,
    } = useInput({
      id,
      labelPosition,
      inputClassName: inputClassNameProp,
      labelClassName: labelClassNameProp,
      errorMessage,
      helpMessage,
    });

    return (
      <InputContainer
        vertical={isContainerVertical}
        className={containerClassName}
      >
        <Label htmlFor={inputId} required={required} className={labelClassName}>
          {label}
        </Label>
        <Input
          {...props}
          className={inputClassName}
          id={inputId}
          ref={inputRef}
          aria-describedby={describedBy}
          aria-invalid={isInvalid}
        />
        {contentRight ? <InputUnit>{contentRight}</InputUnit> : null}
        {helpMessage ? (
          <ItemMessage id={helperId}>{helpMessage}</ItemMessage>
        ) : null}
        {errorMessage ? (
          <ItemMessage variant="error" id={errorId}>
            {errorMessage}
          </ItemMessage>
        ) : null}
      </InputContainer>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
