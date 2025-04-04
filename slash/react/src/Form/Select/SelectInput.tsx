import {
  ComponentProps,
  forwardRef,
  OptionHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
} from "react";

import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";
import { Select } from "./Select";
import { useAriaInvalid } from "../core/useAriaInvalid";

type Props = ComponentProps<typeof LegacyField> &
  ComponentProps<typeof Select> & {
    helpMessage?: ReactNode;
    options: OptionHTMLAttributes<HTMLOptionElement>[];
  };

const SelectInput = forwardRef<HTMLSelectElement, PropsWithChildren<Props>>(
  (
    {
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
      required,
      ...otherSelectProps
    },
    inputRef,
  ) => {
    const generatedId = useId();
    const errorUseId = useId();
    const inputId = id ?? generatedId;
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
          className="af-form__select"
          classModifier={inputFieldClassModifier}
        >
          <Select
            id={inputId}
            disabled={disabled}
            classModifier={inputClassModifier}
            ref={inputRef}
            required={required}
            aria-describedby={errorUseId}
            aria-invalid={isInvalid}
            {...otherSelectProps}
          />
          {children}
        </FieldInput>
        <HelpMessage message={helpMessage} isVisible={!message} />
      </LegacyField>
    );
  },
);

SelectInput.displayName = "SelectInput";

export { SelectInput };
