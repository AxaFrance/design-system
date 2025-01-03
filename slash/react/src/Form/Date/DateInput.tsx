import { ComponentPropsWithoutRef, ReactNode, useId } from "react";
import { Field, FieldInput, HelpMessage, useInputClassModifier } from "../core";
import { Date } from "./Date";

type Props = Omit<ComponentPropsWithoutRef<typeof Date>, "placeholderText"> &
  ComponentPropsWithoutRef<typeof Field> & {
    placeholder?: string;
    helpMessage?: ReactNode;
    children?: ReactNode;
  };

const DateInput = ({
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
}: Props) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    Boolean(children),
    required,
  );
  return (
    <Field
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
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export { DateInput };
