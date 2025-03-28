import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { ComponentProps, forwardRef, ReactNode, useId } from "react";
import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";

import { Textarea } from "./Textarea";

type Props = ComponentProps<typeof LegacyField> &
  ComponentProps<typeof Textarea> & {
    helpMessage?: ReactNode;
  };

const TextareaInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      id,
      classModifier = "",
      message,
      children,
      helpMessage,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      messageType,
      isVisible,
      forceDisplayMessage,
      className,
      rows = 5,
      cols = 50,
      disabled = false,
      required,
      ...textareaInputProps
    },
    inputRef,
  ) => {
    const rowModifier = `${classModifier} label-top`;
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
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
          className="af-form__textarea"
          classModifier={`${rowModifier} ${inputFieldClassModifier}`}
        >
          <Textarea
            {...textareaInputProps}
            id={inputId}
            rows={rows}
            cols={cols}
            classModifier={inputClassModifier}
            disabled={disabled}
            ref={inputRef}
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
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
