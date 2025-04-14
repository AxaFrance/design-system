import { forwardRef, type ComponentProps } from "react";
import { Field, type ConsumerFieldProps } from "../core";
import { Choice } from "./Choice";

type Props = ComponentProps<typeof Choice> &
  Omit<ConsumerFieldProps, "children">;

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

const ChoiceInput = forwardRef<HTMLInputElement, Props>(
  ({ label, options = defaultOptions, ...otherProps }, inputRef) => {
    return (
      <Field
        label={label}
        roleContainer="radiogroup"
        {...otherProps}
        renderInput={({
          classModifier,
          id,
          errorId,
          ariaInvalid,
          ...props
        }) => (
          <Choice
            id={id}
            ref={inputRef}
            classModifier={classModifier}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            options={options}
            {...props}
          />
        )}
      />
    );
  },
);

ChoiceInput.displayName = "ChoiceInput";

export { ChoiceInput };
