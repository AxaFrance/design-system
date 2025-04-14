import {
  ComponentProps,
  forwardRef,
  OptionHTMLAttributes,
  PropsWithChildren,
} from "react";

import { ConsumerFieldProps, Field } from "../core";
import { Select } from "./Select";

type Props = ConsumerFieldProps &
  ComponentProps<typeof Select> & {
    options: OptionHTMLAttributes<HTMLOptionElement>[];
  };

const SelectInput = forwardRef<HTMLSelectElement, PropsWithChildren<Props>>(
  ({ label, options, ...props }, inputRef) => {
    return (
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
          <Select
            id={id}
            ref={inputRef}
            classModifier={classModifier}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            options={options}
            {...otherSelectProps}
          />
        )}
      />
    );
  },
);

SelectInput.displayName = "SelectInput";

export { SelectInput };
