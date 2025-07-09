import { ComponentPropsWithoutRef, forwardRef, ReactNode, useId } from "react";
import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";
import { Date } from "./Date";
import { useAriaInvalid } from "../core/useAriaInvalid";

type Props = Omit<ComponentPropsWithoutRef<typeof Date>, "placeholderText"> &
  ComponentPropsWithoutRef<typeof LegacyField> & {
    placeholder?: string;
    helpMessage?: ReactNode;
    children?: ReactNode;
  };

const DateInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      classModifier = "",
      message,
      children,
      helpMessage,
      id,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      messageType,
      isVisible,
      forceDisplayMessage,
      className,
      disabled = false,
      required,
      ...otherProps
    },
    ref,
  ) => {
    const inputUseId = useId();
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } =
      useInputClassModifier(
        classModifier,
        disabled,
        Boolean(children),
        required,
      );
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (
      <LegacyField
        label={label}
        id={inputId}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={inputFieldClassModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
        errorId={errorUseId}
      >
        <FieldInput
          className="af-form__date"
          classModifier={inputFieldClassModifier}
        >
          <Date
            id={inputId}
            classModifier={inputClassModifier}
            disabled={disabled}
            required={required}
            ref={ref}
            aria-describedby={errorUseId}
            aria-invalid={isInvalid}
            {...otherProps}
          />
          {children}
        </FieldInput>
        <HelpMessage
          message={helpMessage}
          isVisible={!message}
          id={errorUseId}
        />
      </LegacyField>
    );
  },
);

DateInput.displayName = "DateInput";

export { DateInput };
