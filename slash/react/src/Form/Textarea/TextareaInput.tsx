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
import { useAriaInvalid } from "../core/useAriaInvalid";

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
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
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
            aria-describedby={errorUseId}
            aria-invalid={isInvalid}
          />
          {children}
        </FieldInput>
        <HelpMessage
          message={helpMessage}
          isVisible={!message}
          id={errorUseId}
        />
      </LegacyField>
    );
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
