import { ComponentProps, forwardRef, useId } from "react";

import { LegacyField, MessageTypes, useOptionsWithId } from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";
import { useAriaInvalid } from "../core/useAriaInvalid";

type Props = Omit<
  ComponentProps<typeof Checkbox> & ComponentProps<typeof LegacyField>,
  "children" | "placeholder"
>;

const CheckboxInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      mode,
      messageType,
      message,
      classModifier,
      options,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      isVisible,
      className,
      forceDisplayMessage,
      required,
      ...checkboxProps
    },
    inputRef,
  ) => {
    let rowModifier = classModifier;
    if (mode === CheckboxModes.classic) {
      rowModifier += " label-top";
    }
    if (required) {
      rowModifier += " required";
    }
    const errorUseId = useId();
    const newOptions = useOptionsWithId(options);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (
      <LegacyField
        label={label}
        id={newOptions[0].id}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={rowModifier}
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
      </LegacyField>
    );
  },
);

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
