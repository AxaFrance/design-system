import { ComponentPropsWithoutRef, forwardRef } from "react";
import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = ConsumerFieldProps &
  ComponentPropsWithoutRef<typeof Radio>;

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, mode, options, ...props }, inputRef) => {
    const labelPosition = mode === RadioModes.classic ? "top" : "center";
    const newOptions = useOptionsWithId(options);

    return (
      <Field
        label={label}
        labelPosition={labelPosition}
        roleContainer="radiogroup"
        {...props}
        renderInput={({
          classModifier,
          ariaInvalid,
          errorId,
          ...radioProps
        }) => (
          <Radio
            options={newOptions}
            mode={mode}
            classModifier={classModifier}
            ref={inputRef}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            {...radioProps}
          />
        )}
      />
    );
  },
);

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
