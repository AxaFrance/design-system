import {
  ComponentPropsWithRef,
  forwardRef,
  OptionHTMLAttributes,
  useId,
  useMemo,
  useState,
} from "react";
import { SelectBase } from "./SelectBase";

type Props = ComponentPropsWithRef<typeof SelectBase> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  forceDisplayPlaceholder?: boolean;
  placeholder?: string;
};
/**
 * @deprecated Use `SelectDefault` instead
 * Instead of
 * ```jsx
 * <SelectDefaultWithOptions options={[{ value: "1", label: "Option 1" }]} />
 * ```
 * you can now do something like :
 * ```jsx
 * <SelectDefault>
 *   <option value="1">Option 1</option>
 * </SelectDefault>
 * ```
 * It allows you to use the `optgroup` tag for example.
 */
export const SelectDefaultWithOptions = forwardRef<HTMLSelectElement, Props>(
  (
    {
      onChange,
      forceDisplayPlaceholder = false,
      value,
      defaultValue,
      required,
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
        (hasHandleChangeOnce || defaultValue || value) && required
          ? options
          : [{ value: "", label: placeholder }, ...options],
      [
        hasHandleChangeOnce,
        options,
        defaultValue,
        value,
        required,
        placeholder,
      ],
    );

    return (
      <SelectBase
        {...otherProps}
        id={inputId}
        value={value}
        defaultValue={defaultValue}
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

SelectDefaultWithOptions.displayName = "SelectDefaultWithOptions";
