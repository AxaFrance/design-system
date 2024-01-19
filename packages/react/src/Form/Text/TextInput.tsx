import "@axa-fr/design-system-css/dist/Form/core/FormCore.agent.scss";
import "@axa-fr/design-system-css/dist/common/grid.scss";
import "@axa-fr/design-system-css/dist/common/reboot.scss";
import { ComponentProps, ReactNode, useId } from "react";
import { Field, FieldInput, HelpMessage, useInputClassModifier } from "../core";

import { Text } from "./Text";

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Text> & {
    helpMessage?: ReactNode;
  };

export const TextInput = ({
  id,
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
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
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
