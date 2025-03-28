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

type Props = ComponentProps<typeof LegacyField> &
  Omit<ComponentProps<typeof Select>, "children"> & {
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
    const inputId = id ?? generatedId;
    const { inputClassModifier, inputFieldClassModifier } =
      useInputClassModifier(
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
          className="af-form__select"
          classModifier={inputFieldClassModifier}
        >
          <Select
            id={inputId}
            disabled={disabled}
            classModifier={inputClassModifier}
            ref={inputRef}
            required={required}
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
