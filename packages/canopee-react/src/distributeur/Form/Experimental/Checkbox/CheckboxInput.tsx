import type { ReactNode } from "react";
import { InputContainer } from "../InputContainer";
import { InputUnit } from "../InputUnit";
import { ItemMessage } from "../ItemMessage";
import { Legend } from "../Legend";
import type { InputBaseProps } from "../types";
import { useInput } from "../useInput.hook";
import { getClassName } from "../../../utilities/helpers/getClassName";
import { CheckboxButton, type CheckboxButtonProps } from "./CheckboxButton";
import { CheckboxCard, type CheckboxCardProps } from "./CheckboxCard";
import { CheckboxGroup } from "./CheckboxGroup";
import { CheckboxText, type CheckboxTextProps } from "./CheckboxText";

type CheckboxInputBaseProps = InputBaseProps & {
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
};

export type CheckboxInputPropsButtonVariant = CheckboxInputBaseProps & {
  variant?: "button";
  options: CheckboxButtonProps[];
};

export type CheckboxInputPropsTextVariant = CheckboxInputBaseProps & {
  variant: "text";
  options: CheckboxTextProps[];
};

export type CheckboxInputPropsCardVariant = CheckboxInputBaseProps & {
  variant: "card";
  options: CheckboxCardProps[];
};

export type CheckboxInputProps =
  | CheckboxInputPropsButtonVariant
  | CheckboxInputPropsTextVariant
  | CheckboxInputPropsCardVariant;

export const CheckboxInput = ({
  contentRight,
  id,
  labelPosition,
  inputClassName,
  labelClassName: labelClassNameProp,
  helpMessage,
  containerClassName,
  required,
  label,
  errorMessage,
  orientation = "horizontal",
  children,
  ...props
}: CheckboxInputProps) => {
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
    labelPosition:
      labelPosition ?? (orientation === "vertical" ? "topLeft" : "centerLeft"),
    labelClassName: labelClassNameProp,
    errorMessage,
    helpMessage,
  });
  const labelId = `${inputId}-label`;

  return (
    <InputContainer
      vertical={isContainerVertical}
      className={getClassName({
        baseClassName: "af-checkbox__input-container",
        className: containerClassName,
      })}
      component="fieldset"
      aria-labelledby={labelId}
      aria-describedby={describedBy || undefined}
    >
      <Legend id={labelId} required={required} className={labelClassName}>
        {label}
      </Legend>
      <CheckboxGroup
        variant={props.variant}
        orientation={orientation}
        className={inputClassName}
      >
        {props.options.map((option, index) => {
          const identity =
            option.value != null
              ? ["value", option.name, option.value]
              : ["index", option.name, index];
          const optionProps = {
            ...option,
            id:
              option.id ??
              `${inputId}-${encodeURIComponent(JSON.stringify(identity))}`,
            "aria-invalid": isInvalid || option["aria-invalid"],
            "aria-describedby":
              [describedBy, option["aria-describedby"]]
                .filter(Boolean)
                .join(" ") || undefined,
          };

          if (props.variant === "card") {
            return (
              <CheckboxCard
                key={optionProps.id}
                orientation={orientation}
                {...optionProps}
              />
            );
          }

          if (props.variant === "text") {
            return <CheckboxText key={optionProps.id} {...optionProps} />;
          }

          return <CheckboxButton key={optionProps.id} {...optionProps} />;
        })}
        {children}
      </CheckboxGroup>
      <InputUnit>{contentRight}</InputUnit>
      <ItemMessage id={helperId}>{helpMessage}</ItemMessage>
      <ItemMessage variant="error" id={errorId}>
        {errorMessage}
      </ItemMessage>
    </InputContainer>
  );
};
