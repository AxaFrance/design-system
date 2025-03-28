import { ComponentPropsWithoutRef, ReactNode, useId } from "react";
import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";
import { Date } from "./Date";

type Props = Omit<ComponentPropsWithoutRef<typeof Date>, "placeholderText"> &
  ComponentPropsWithoutRef<typeof LegacyField> & {
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
      <HelpMessage
        message={helpMessage}
        isVisible={!message}
        ariaDescribedBy={inputId}
      />
    </LegacyField>
  );
};

export { DateInput };
