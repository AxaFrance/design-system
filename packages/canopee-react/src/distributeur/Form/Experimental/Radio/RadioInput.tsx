import type { ReactNode } from "react";
import { InputContainer } from "../InputContainer";
import { InputUnit } from "../InputUnit";
import { ItemMessage } from "../ItemMessage";
import { Legend } from "../Legend";
import type { InputBaseProps } from "../types";
import { useInput } from "../useInput.hook";
import { type RadioButtonProps } from "./RadioButton";
import { type RadioCardProps } from "./RadioCard";
import { RadioGroup } from "./RadioGroup";
import { RadioInputOptions } from "./_radioInputOptions";

export type RadioInputPropsButtonVariant = InputBaseProps & {
  variant?: "button";
  options: RadioButtonProps[];
  children?: ReactNode;
};

export type RadioInputPropsCardVariant = InputBaseProps & {
  variant: "card";
  showAddButton?: boolean;
  orientation?: "horizontal" | "vertical";
  onAdd: () => void;
  options: RadioCardProps[];
};

export type RadioInputProps =
  | RadioInputPropsCardVariant
  | RadioInputPropsButtonVariant;

export const RadioInput = ({
  contentRight,
  id,
  labelPosition,
  inputClassName: inputClassNameProp,
  labelClassName: labelClassNameProp,
  helpMessage,
  containerClassName,
  required,
  label,
  errorMessage,
  ...props
}: RadioInputProps) => {
  const {
    describedBy,
    errorId,
    helperId,
    inputId,
    isContainerVertical,
    isInvalid,
    labelClassName,
  } = useInput({
    id,
    labelPosition,
    inputClassName: inputClassNameProp,
    labelClassName: labelClassNameProp,
    errorMessage,
    helpMessage,
  });
  const labelId = `${inputId}-label`;
  const variant = props.variant || "button";
  return (
    <InputContainer
      vertical={isContainerVertical}
      className={`${containerClassName} af-radio__input-container`}
      component="fieldset"
      aria-labelledby={labelId}
      aria-describedby={describedBy}
    >
      <Legend id={labelId} required={required} className={labelClassName}>
        {label}
      </Legend>
      <RadioGroup
        variant={variant}
        className={inputClassNameProp}
        orientation={
          props.variant === "card"
            ? props.orientation || "horizontal"
            : undefined
        }
      >
        <RadioInputOptions
          inputId={inputId}
          isInvalid={isInvalid}
          describedBy={describedBy}
          {...props}
        />
      </RadioGroup>
      <InputUnit>{contentRight}</InputUnit>
      <ItemMessage id={helperId}>{helpMessage}</ItemMessage>
      <ItemMessage variant="error" id={errorId}>
        {errorMessage}
      </ItemMessage>
    </InputContainer>
  );
};
