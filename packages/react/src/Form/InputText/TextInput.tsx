import { ComponentProps, ReactNode, useId } from "react";
import { Field, HelpMessage, FieldInput, useInputClassModifier } from "../core";
import "@axa-fr/design-system-css/dist/common/reboot.scss";
import "@axa-fr/design-system-css/dist/common/grid.scss";
import "@axa-fr/design-system-css/dist/Form/core/FormCore.agent.scss";

import { Text } from "./Text";

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Text> & {
    helpMessage?: ReactNode;
  };

export const TextInput = ({
  message,
  children,
  helpMessage,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  className,
  forceDisplayMessage,
  classModifier = "",
  disabled = false,
  ...inputTextProps
}: Props) => {
  const inputId = useId();
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    Boolean(children),
  );

  return (
    <Field
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      id={inputId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
    >
      <FieldInput
        className="af-form__text"
        classModifier={inputFieldClassModifier}
      >
        <Text
          id={inputId}
          classModifier={inputClassModifier}
          disabled={disabled}
          {...inputTextProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};
