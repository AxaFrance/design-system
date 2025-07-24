import { type ComponentProps } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Slider } from "./Slider";

type Props = Omit<
  ConsumerFieldProps & ComponentProps<typeof Slider>,
  "children"
>;

/**
 * @deprecated This component is deprecated and will be removed in a future major release.
 */
const SliderInput = ({
  rightElement,
  name,
  options,
  label,
  ...props
}: Props) => {
  return (
    <Field
      label={label}
      {...props}
      renderInput={({ id, classModifier, ...sliderProps }) => (
        <>
          <Slider
            id={id}
            classModifier={classModifier}
            name={name}
            options={options}
            {...sliderProps}
          />
          {rightElement}
        </>
      )}
    />
  );
};

export { SliderInput };
