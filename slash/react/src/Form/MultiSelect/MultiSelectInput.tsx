import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.scss";

import { useId, type ComponentProps, type ReactNode } from "react";
import { Field, FieldInput, HelpMessage } from "../core";
import { MultiSelect } from "./MultiSelect";

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof MultiSelect> & {
    helpMessage?: ReactNode;
  };

const MultiSelectInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  disabled,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  ...multiSelectProps
}: Props) => {
  const inputFieldClassModifier = `${classModifier} ${
    disabled ? "disabled" : ""
  }`;

  const generatedId = useId();
  const inputId = id || generatedId;

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
        className="af-form__select"
        classModifier={inputFieldClassModifier}
      >
        <MultiSelect
          inputId={inputId}
          disabled={disabled}
          {...multiSelectProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export { MultiSelectInput };
