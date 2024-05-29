import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.agent.scss";
import { ComponentProps, forwardRef, ReactNode, useId } from "react";
import { Field, FieldInput, HelpMessage, useInputClassModifier } from "../core";

import { Textarea } from "./Textarea";

type Props = ComponentProps<typeof Field> &
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
      ...textareaInputProps
    },
    inputRef,
  ) => {
    const rowModifier = `${classModifier} label-top`;
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } =
      useInputClassModifier(classModifier, disabled, Boolean(children));

    return (
      <Field
        label={label}
        id={inputId}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={rowModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
      >
        <FieldInput
          className="af-form__textarea"
          classModifier={inputFieldClassModifier}
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
        <HelpMessage message={helpMessage} isVisible={!message} />
      </Field>
    );
  },
);

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
