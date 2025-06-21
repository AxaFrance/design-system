import { ComponentPropsWithoutRef, forwardRef, useId } from "react";
import {
  useInputClassModifier,
  useOptionsWithId,
  SemanticField,
} from "../core";
import { Radio, RadioModes } from "./Radio";
import { useAriaInvalid } from "../core/useAriaInvalid";

type RadioInputProps = ComponentPropsWithoutRef<typeof SemanticField> &
  ComponentPropsWithoutRef<typeof Radio>;

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  (
    {
      mode,
      messageType,
      message,
      className,
      classModifier = "",
      isVisible,
      options,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      forceDisplayMessage,
      children,
      required,
      disabled = false,
      ariaLabelContainer,
      ...radioProps
    },
    inputRef,
  ) => {
    const rowModifier = `${classModifier}${
      mode === RadioModes.classic ? " label-top " : ""
    }`;

    const { inputFieldClassModifier, inputClassModifier } =
      useInputClassModifier(
        classModifier,
        disabled,
        Boolean(children),
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
        roleContainer="radiogroup"
        ariaLabelContainer={ariaLabelContainer ?? label?.toString()}
        errorId={errorUseId}
      >
        <Radio
          options={newOptions}
          mode={mode}
          classModifier={inputClassModifier}
          ref={inputRef}
          disabled={disabled}
          required={required || classModifier?.includes("required")}
          aria-describedby={errorUseId}
          aria-invalid={isInvalid}
          {...radioProps}
        />
        {children}
      </SemanticField>
    );
  },
);

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
