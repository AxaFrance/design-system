import { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  Field,
  getFirstId,
  useInputClassModifier,
  useOptionsWithId,
} from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = ComponentPropsWithoutRef<typeof Field> &
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
    const rowModifier = `${classModifier ?? ""}${
      mode === RadioModes.classic ? " label-top " : ""
    }`;
    const newOptions = useOptionsWithId(options);
    const firstId = getFirstId(newOptions);

    const { inputClassModifier, inputFieldClassModifier } =
      useInputClassModifier(
        classModifier,
        disabled,
        Boolean(children),
        required,
      );

    return (
      <Field
        label={label}
        id={firstId}
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
        isLabelContainerLinkedToInput={false}
      >
        <Radio
          options={newOptions}
          mode={mode}
          classModifier={inputClassModifier}
          ref={inputRef}
          disabled={disabled}
          required={required || classModifier?.includes("required")}
          {...radioProps}
        />
        {children}
      </Field>
    );
  },
);

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
