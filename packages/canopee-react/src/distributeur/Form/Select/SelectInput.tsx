import {
  type ComponentProps,
  type OptionHTMLAttributes,
  type PropsWithChildren,
} from "react";

import { type ConsumerFieldProps, Field } from "../core";
import { Select } from "./Select";

type Props = ConsumerFieldProps &
  ComponentProps<typeof Select> & {
    options: OptionHTMLAttributes<HTMLOptionElement>[];
  };

const SelectInput = ({
  label,
  options,
  children,
  ...props
}: PropsWithChildren<Props>) => (
  <Field
    label={label}
    fieldClassNameSuffix="select"
    {...props}
    renderInput={({
      inputClassName,
      id,
      ariaInvalid,
      errorId,
      ...otherSelectProps
    }) => (
      <>
        <Select
          id={id}
          className={inputClassName}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          {...otherSelectProps}
        >
          {options.map(({ label: optionLabel, ...option }) => (
            <option key={option.value?.toString()} {...option}>
              {optionLabel}
            </option>
          ))}
        </Select>
        {children}
      </>
    )}
  />
);

SelectInput.displayName = "SelectInput";

export { SelectInput };
