import { ComponentPropsWithRef, forwardRef, useId, useState } from "react";
import { SelectBase } from "./SelectBase";

type Props = Omit<
  ComponentPropsWithRef<typeof SelectBase> & {
    forceDisplayPlaceholder?: boolean;
    placeholder?: string;
    children: React.ReactNode;
  },
  "options"
>;

const SelectDefault = forwardRef<HTMLSelectElement, Props>(
  (
    {
      onChange,
      forceDisplayPlaceholder = false,
      value,
      defaultValue,
      required,
      placeholder = "- Select -",
      id,
      children,
      ...otherProps
    },
    inputRef,
  ) => {
    const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const childrenWithDefault = (
      <>
        {(!required || !(hasHandleChangeOnce || defaultValue || value)) && (
          <option value="">{placeholder}</option>
        )}
        {children}
      </>
    );

    return (
      <SelectBase
        {...otherProps}
        id={inputId}
        value={value}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
          setHasHandleChangeOnce(!forceDisplayPlaceholder);
        }}
        ref={inputRef}
      >
        {childrenWithDefault}
      </SelectBase>
    );
  },
);

SelectDefault.displayName = "SelectDefault";

export { SelectDefault };
