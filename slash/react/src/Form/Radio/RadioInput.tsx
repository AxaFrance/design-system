import { ComponentPropsWithoutRef, forwardRef } from "react";
import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = Omit<
  ConsumerFieldProps & ComponentPropsWithoutRef<typeof Radio>,
  "children"
>;

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, mode = "default", options, rightElement, ...props }, inputRef) => {
    const labelPosition = mode === RadioModes.classic ? "top" : "center";
    const newOptions = useOptionsWithId(options);

    return (
      <Field
        label={label}
        labelPosition={labelPosition}
        roleContainer={mode !== "card" ? "radiogroup" : undefined}
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
