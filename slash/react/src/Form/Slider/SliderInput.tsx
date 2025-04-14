import { type ComponentProps } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Slider } from "./Slider";

type Props = ConsumerFieldProps & ComponentProps<typeof Slider>;

/**
 * @deprecated This component is deprecated and will be removed in a future major release.
 */
const SliderInput = ({ children, name, options, label, ...props }: Props) => {
  return (
    <Field
      label={label}
      {...props}
      renderInput={({ id, classModifier, ...sliderProps }) => (
        <Slider
          id={id}
          classModifier={classModifier}
          name={name}
          options={options}
          {...sliderProps}
        />
      )}
    >
      {children}
    </Field>
  );
};

export { SliderInput };
