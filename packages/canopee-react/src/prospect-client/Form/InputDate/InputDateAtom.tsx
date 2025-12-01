import { type ComponentPropsWithRef, forwardRef } from "react";
import { formatInputDateValue } from "./InputDate.helper";

export type InputDateAtomProps = Omit<
  ComponentPropsWithRef<"input">,
  "value" | "min" | "max"
> & {
  defaultValue?: Date | string;
  value?: Date | string;
  min?: Date | string;
  max?: Date | string;
};

const InputDateAtom = forwardRef<HTMLInputElement, InputDateAtomProps>(
  ({ defaultValue, value, min, max, ...otherProps }, inputRef) => (
    <input
      {...otherProps}
      type="date"
      ref={inputRef}
      defaultValue={formatInputDateValue(defaultValue)}
      value={formatInputDateValue(value)}
      min={formatInputDateValue(min)}
      max={formatInputDateValue(max)}
    />
  ),
);

InputDateAtom.displayName = "InputDateAtom";

export { InputDateAtom };
