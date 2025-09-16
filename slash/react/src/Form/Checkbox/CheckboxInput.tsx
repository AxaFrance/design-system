import { ComponentProps, forwardRef } from "react";

import { type ConsumerFieldProps, Fieldset, useOptionsWithId } from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";

type Props = Omit<
  ComponentProps<typeof Checkbox> & ConsumerFieldProps,
  "children" | "placeholder"
>;

const CheckboxInput = forwardRef<HTMLInputElement, Props>(
  ({ label, mode = "default", options, ...otherProps }, inputRef) => {
    const newOptions = useOptionsWithId(options);
    return (
      <Fieldset
        label={label}
        classNameSuffix="checkbox"
        labelPosition={mode === CheckboxModes.classic ? "top" : "center"}
        roleContainer="group"
        classNameSuffix="checkbox-container"
        {...otherProps}
        renderInput={({
          classModifier,
          id,
          ariaInvalid,
          errorId,
          ...props
        }) => {
          return (
            <Checkbox
              id={id}
              mode={mode}
              options={newOptions}
              classModifier={
                ariaInvalid ? `${classModifier} error` : classModifier
              }
              ref={inputRef}
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...props}
            />
          );
        }}
      />
    );
  },
);

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
