import { type ComponentPropsWithRef } from "react";
import { Field, type ConsumerFieldProps } from "../core";
import { Choice } from "./Choice";

type Props = ComponentPropsWithRef<typeof Choice> & ConsumerFieldProps;

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

const ChoiceInput = ({
  label,
  options = defaultOptions,
  children,
  ...otherProps
}: Props) => (
  <Field
    label={label}
    roleContainer="radiogroup"
    {...otherProps}
    renderInput={({ classModifier, id, errorId, ariaInvalid, ...props }) => (
      <>
        <Choice
          id={id}
          classModifier={classModifier}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          options={options}
          {...props}
        />
        {children}
      </>
    )}
  />
);

ChoiceInput.displayName = "ChoiceInput";

export { ChoiceInput };
