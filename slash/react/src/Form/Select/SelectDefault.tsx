import {
  ComponentPropsWithRef,
  forwardRef,
  useId,
  useMemo,
  useState,
} from "react";
import { SelectBase } from "./SelectBase";

type Props = ComponentPropsWithRef<typeof SelectBase> & {
  forceDisplayPlaceholder?: boolean;
  placeholder?: string;
};

const SelectDefault = forwardRef<HTMLSelectElement, Props>(
  (
    {
      onChange,
      forceDisplayPlaceholder = false,
      value,
      placeholder = "- Select -",
      options,
      id,
      ...otherProps
    },
    inputRef,
  ) => {
    const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const newOptions = useMemo(
      () =>
        hasHandleChangeOnce || otherProps.defaultValue
          ? options
          : [{ value: "", label: placeholder }, ...options],
      [hasHandleChangeOnce, options, otherProps.defaultValue, placeholder],
    );

    return (
      <SelectBase
        {...otherProps}
        id={inputId}
        value={value}
        options={newOptions}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
          setHasHandleChangeOnce(!forceDisplayPlaceholder);
        }}
        ref={inputRef}
      />
    );
  },
);

SelectDefault.displayName = "SelectDefault";

export { SelectDefault };
