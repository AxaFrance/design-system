import { type ComponentProps, type ComponentPropsWithRef } from "react";
import { formatInputDateValue } from "./InputDate.helper";

export type InputDateAtomProps = Omit<
  ComponentPropsWithRef<"input">,
  "value" | "min" | "max"
> & {
  defaultValue?: Date | string;
  value?: Date | string;
  min?: ComponentProps<"input">["min"] | Date;
  max?: ComponentProps<"input">["max"] | Date;
};

const InputDateAtom = ({
  defaultValue,
  value,
  min,
  max,
  ...otherProps
}: InputDateAtomProps) => (
  <input
    {...otherProps}
    type="date"
    defaultValue={formatInputDateValue(defaultValue)}
    value={formatInputDateValue(value)}
    min={formatInputDateValue(min)}
    max={formatInputDateValue(max)}
  />
);

InputDateAtom.displayName = "InputDateAtom";

export { InputDateAtom };
