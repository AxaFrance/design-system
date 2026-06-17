import { type ComponentPropsWithRef } from "react";
import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Radio, RadioModes } from "./Radio";

type RadioInputProps = ConsumerFieldProps & ComponentPropsWithRef<typeof Radio>;

const RadioInput = ({
  label,
  mode = "default",
  options,
  children,
  ...props
}: RadioInputProps) => {
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
          {...radioProps}
        >
          {children}
        </Radio>
      )}
    />
  );
};

RadioInput.displayName = "EnhancedInputRadio";

export { RadioInput };
