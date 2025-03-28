import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.scss";

import { useId, type ComponentProps, type ReactNode } from "react";
import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";
import { MultiSelect } from "./MultiSelect";

type Props = ComponentProps<typeof LegacyField> &
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
  required,
  ...multiSelectProps
}: Props) => {
  const { inputFieldClassModifier } = useInputClassModifier(
    classModifier ?? "",
    disabled ?? false,
    Boolean(children),
    required,
  );

  const generatedId = useId();
  const inputId = id || generatedId;

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
        className="af-form__select"
        classModifier={inputFieldClassModifier}
      >
        <MultiSelect
          inputId={inputId}
          disabled={disabled}
          required={required}
          {...multiSelectProps}
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

export { MultiSelectInput };
