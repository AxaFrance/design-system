import { type ComponentProps, forwardRef } from "react";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import { formatDateTextValue, formatInputDateValue } from "./InputDate.helper";

export type InputDateTextAtomProps = Omit<
  ComponentProps<typeof InputTextAtom>,
  "value"
> & {
  value?: Date | string;
  defaultValue?: Date | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDateTextAtom = forwardRef<HTMLInputElement, InputDateTextAtomProps>(
  ({ onChange, value, defaultValue, ...otherProps }, inputRef) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatDateTextValue(e.target.value);

      onChange?.({
        ...e,
        target: { ...e.target, value: formattedValue },
      });
    };

    return (
      <InputTextAtom
        pattern="\d{0,2}/?\d{0,2}/?\d{0,4}"
        maxLength={10}
        ref={inputRef}
        inputMode="numeric"
        onChange={handleChange}
        value={formatInputDateValue(value)}
        defaultValue={formatInputDateValue(defaultValue)}
        {...otherProps}
      />
    );
  },
);

InputDateTextAtom.displayName = "InputDateText";

export { InputDateTextAtom };
