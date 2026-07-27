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
    classNameSuffix="select"
    {...props}
    renderInput={({
      classModifier,
      id,
      ariaInvalid,
      errorId,
      ...otherSelectProps
    }) => (
      <>
        <Select
          id={id}
          classModifier={classModifier}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          options={options}
          {...otherSelectProps}
        />
        {children}
      </>
    )}
  />
);

SelectInput.displayName = "SelectInput";

export { SelectInput };
