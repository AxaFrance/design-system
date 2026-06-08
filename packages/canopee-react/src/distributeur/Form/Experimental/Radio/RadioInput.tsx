import type { ReactNode } from "react";
import { InputContainer } from "../InputContainer";
import { InputUnit } from "../InputUnit";
import { ItemMessage } from "../ItemMessage";
import { Legend } from "../Legend";
import type { InputBaseProps } from "../types";
import { useInput } from "../useInput.hook";
import { AddRadioCard } from "./AddRadioCard";
import { RadioButton, type RadioButtonProps } from "./RadioButton";
import { RadioCard, type RadioCardProps } from "./RadioCard";
import { RadioGroup } from "./RadioGroup";

export type RadioInputPropsButtonVariant = InputBaseProps & {
  variant?: "button";
  options: RadioButtonProps[];
  children?: ReactNode;
};

export type RadioInputPropsCardVariant = InputBaseProps & {
  variant: "card";
  showAddButton?: boolean;
  orientation?: "horizontal" | "vertical";
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
      className={containerClassName}
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
        {!props.variant || props.variant === "button"
          ? props.options.map((o) => (
              <RadioButton key={`${inputId}-${o.value}`} {...o} />
            ))
          : null}
        {props.variant === "card" ? (
          <>
            {props.options.map((o) => (
              <RadioCard
                key={`${inputId}-${o.value}`}
                id={`${inputId}-${o.value}`}
                icon={o.icon}
                name={inputId}
                value={o.value}
                label={o.label}
                action={o.action}
                aria-invalid={isInvalid}
                aria-describedby={describedBy}
                disabled={o.disabled}
                orientation={props.orientation || "horizontal"}
              />
            ))}
            {props.showAddButton ? (
              <AddRadioCard orientation={props.orientation || "horizontal"} />
            ) : null}
          </>
        ) : null}
      </RadioGroup>
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
