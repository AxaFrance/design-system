import { ComponentPropsWithRef, forwardRef } from "react";
import { formatDateInputValue } from "../../utilities/helpers/date";

type DateProps = Omit<ComponentPropsWithRef<"input">, "value"> & {
  defaultValue?: Date | string;
  value?: Date | string;
  hideDatePicker?: boolean;
  placeholder: string;
};

const Date = forwardRef<HTMLInputElement, DateProps>(
  (
    {
      className,
      defaultValue,
      value,
      hideDatePicker,
      placeholder,
      ...otherProps
    },
    inputRef,
  ) => {
    const format = hideDatePicker ? "text" : "date";
    return (
      <input
        className={className}
        type={format}
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={formatDateInputValue(format, defaultValue)}
        value={formatDateInputValue(format, value)}
        {...otherProps}
      />
    );
  },
);

Date.displayName = "Date";

export { Date };
