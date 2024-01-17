import {
  useId,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import { Field, HelpMessage, FieldInput, useInputClassModifier } from "../core";
import "@axa-fr/design-system-css/dist/common/reboot.scss";
import "@axa-fr/design-system-css/dist/common/grid.scss";
import "@axa-fr/design-system-css/dist/Form/core/FormCore.agent.scss";

import { Number } from "./Number";

type Props = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithRef<typeof Number> & {
    helpMessage?: ReactNode;
    children?: ReactNode;
  };

export const NumberInput = ({
  message,
  children,
  helpMessage,
  id,
  label,
  classNameContainerLabel,
  classNameContainerInput,
  forceDisplayMessage,
  messageType,
  isVisible,
  className,
  disabled = false,
  classModifier = "",
  ...otherProps
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
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
    >
      <FieldInput
        className="af-form__text"
        classModifier={inputFieldClassModifier}
      >
        <Number
          id={inputId}
          classModifier={inputClassModifier}
          disabled={disabled}
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};
