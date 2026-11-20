import "@axa-fr/canopee-css/distributeur/Form/Experimental/Input.css";
import "@axa-fr/canopee-css/distributeur/Form/Experimental/TextareaInput.css";
import classNames from "classnames";
import type { ComponentPropsWithRef } from "react";
import { InputContainer } from "./InputContainer";
import { InputUnit } from "./InputUnit";
import { ItemMessage } from "./ItemMessage";
import { Label } from "./Label";
import type { InputBaseProps, LabelPosition } from "./types";
import { useInput } from "./useInput.hook";

export type TextareaInputProps = Omit<
  ComponentPropsWithRef<"textarea">,
  "children"
> &
  Omit<InputBaseProps, "required" | "labelPosition"> & {
    /** Marks the label as required and enables native textarea validation. */
    required?: boolean;

    /**
     * The position of the label relative to the textarea.
     * @default "topLeft"
     */
    labelPosition?: LabelPosition;
  };

/** A multiline field with a label and optional help and error messages. */
const TextareaInput = ({
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  className,
  containerClassName,
  contentRight,
  errorMessage,
  helpMessage,
  id,
  inputClassName: inputClassNameProp,
  label,
  labelClassName: labelClassNameProp,
  labelPosition = "topLeft",
  required,
  ...props
}: TextareaInputProps) => {
  const {
    describedBy,
    errorId,
    helperId,
    inputClassName,
    inputId,
    isContainerVertical,
    isInvalid,
    labelClassName,
  } = useInput({
    id,
    labelPosition,
    inputClassName: classNames(
      "af-input__textarea",
      inputClassNameProp,
      className,
    ),
    labelClassName: labelClassNameProp,
    errorMessage,
    helpMessage,
  });

  const descriptionIds = [ariaDescribedBy, describedBy]
    .filter(Boolean)
    .join(" ");

  return (
    <InputContainer
      vertical={isContainerVertical}
      className={containerClassName}
    >
      <Label htmlFor={inputId} required={required} className={labelClassName}>
        {label}
      </Label>
      <textarea
        {...props}
        className={inputClassName}
        id={inputId}
        required={required}
        aria-describedby={descriptionIds || undefined}
        aria-invalid={isInvalid || (ariaInvalid ?? false)}
      />
      {contentRight ? <InputUnit>{contentRight}</InputUnit> : null}
      {helpMessage ? (
        <ItemMessage id={helperId}>{helpMessage}</ItemMessage>
      ) : null}
      {errorMessage ? (
        <ItemMessage variant="error" id={errorId}>
          {errorMessage}
        </ItemMessage>
      ) : null}
    </InputContainer>
  );
};

TextareaInput.displayName = "TextareaInput";

export { TextareaInput };
