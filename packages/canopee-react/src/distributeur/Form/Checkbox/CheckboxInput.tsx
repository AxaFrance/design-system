import { type ComponentPropsWithRef } from "react";

import { type ConsumerFieldProps, Field, useOptionsWithId } from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";

type Props = Omit<
  ComponentPropsWithRef<typeof Checkbox> & ConsumerFieldProps,
  "placeholder"
>;

const CheckboxInput = ({
  label,
  mode = "default",
  options,
  children,
  ...otherProps
}: Props) => {
  const newOptions = useOptionsWithId(options);
  return (
    <Field
      label={label}
      labelPosition={mode === CheckboxModes.classic ? "top" : "center"}
      roleContainer="group"
      {...otherProps}
      renderInput={({ classModifier, id, ariaInvalid, errorId, ...props }) => {
        return (
          <>
            <Checkbox
              id={id}
              mode={mode}
              options={newOptions}
              classModifier={
                ariaInvalid ? `${classModifier} error` : classModifier
              }
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...props}
            />
            {children}
          </>
        );
      }}
    />
  );
};

CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
