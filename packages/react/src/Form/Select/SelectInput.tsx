import { ComponentProps, PropsWithChildren, ReactNode, useId } from "react";

import { Field, FieldInput, HelpMessage, useInputClassModifier } from "../core";
import { Select } from "./Select";

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Select> & {
    helpMessage?: ReactNode;
  };

const SelectInput = ({
  classModifier = "",
  message,
  children,
  helpMessage,
  id,
  disabled = false,
  label,
  classNameContainerLabel,
  classNameContainerInput,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  ...otherSelectProps
}: PropsWithChildren<Props>) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    Boolean(children),
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
        className="af-form__select"
        classModifier={inputFieldClassModifier}
      >
        <Select
          id={inputId}
          disabled={disabled}
          classModifier={inputClassModifier}
          {...otherSelectProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export { SelectInput };
