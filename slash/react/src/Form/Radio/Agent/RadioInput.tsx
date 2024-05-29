import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Field, getFirstId, useOptionsWithId } from "../../core";
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
      classModifier,
      isVisible,
      options,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      forceDisplayMessage,
      children,
      ...radioProps
    },
    inputRef,
  ) => {
    const rowModifier = `${classModifier ?? ""}${
      mode === RadioModes.classic ? " label-top" : ""
    }`;
    const newOptions = useOptionsWithId(options);
    const firstId = getFirstId(newOptions);

    return (
      <Field
        label={label}
        id={firstId}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={rowModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
      >
        <Radio
          options={newOptions}
          mode={mode}
          classModifier={classModifier}
          ref={inputRef}
          {...radioProps}
        />
        {children}
      </Field>
    );
  },
);

RadioInput.displayName = "RadioInput";

export { RadioInput };
