import { ComponentPropsWithoutRef, forwardRef } from "react";
import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = ConsumerFieldProps &
  ComponentPropsWithoutRef<typeof Radio>;

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, mode = "default", options, children, ...props }, inputRef) => {
    const labelPosition = mode === RadioModes.classic ? "top" : "center";
    const newOptions = useOptionsWithId(options);

    return (
      <Field
        label={label}
        labelPosition={labelPosition}
        roleContainer="radiogroup"
        {...props}
        renderInput={({ classModifier, ...radioProps }) => (
          <Radio
            options={newOptions}
            mode={mode}
            classModifier={classModifier}
            ref={inputRef}
            {...radioProps}
          >
            {children}
          </Radio>
        )}
      />
    );
  },
);

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
