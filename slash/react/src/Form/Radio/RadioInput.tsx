import { ComponentPropsWithRef, forwardRef } from "react";
import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = ComponentPropsWithRef<typeof Radio> & ConsumerFieldProps;

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, mode = "default", options, rightElement, ...props }, inputRef) => {
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
          <>
            <Radio
              options={newOptions}
              mode={mode}
              classModifier={classModifier}
              ref={inputRef}
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...radioProps}
            />
            {rightElement}
          </>
        )}
      />
    );
  },
);

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
