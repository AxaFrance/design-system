import { ComponentProps, forwardRef, useId } from "react";
import {
  MessageTypes,
  useInputClassModifier,
  useOptionsWithId,
  SemanticField,
} from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";
import { useAriaInvalid } from "../core/useAriaInvalid";

type Props = Omit<
  ComponentProps<typeof Checkbox> & ComponentProps<typeof SemanticField>,
  "children" | "placeholder"
>;

const CheckboxInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      mode,
      messageType,
      message,
      classModifier = "",
      options,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      isVisible,
      className,
      forceDisplayMessage,
      required,
      disabled = false,
      ...checkboxProps
    },
    inputRef,
  ) => {
    const rowModifier = `${classModifier}${
      mode === CheckboxModes.classic ? " label-top " : ""
    }`;

    const { inputFieldClassModifier } = useInputClassModifier(
      classModifier,
      disabled,
      false,
      required,
    );
    const errorUseId = useId();
    const newOptions = useOptionsWithId(options);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);

    return (
      <SemanticField
        label={label}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={rowModifier + inputFieldClassModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
        errorId={errorUseId}
      >
        <Checkbox
          mode={mode}
          options={newOptions}
          classModifier={
            message && messageType === MessageTypes.error && forceDisplayMessage
              ? `${classModifier} error`
              : classModifier
          }
          ref={inputRef}
          aria-describedby={errorUseId}
          aria-invalid={isInvalid}
          {...checkboxProps}
        />
      </SemanticField>
    );
  },
);

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
