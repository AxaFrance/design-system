import { ReactNode, useId } from "react";
import { MessageTypes } from "./MessageTypes";
import { FormClassManager } from "./FormClassManager";
import { getComponentClassName } from "../../utilities";
import { useInputClassModifier } from "./useInputClassModifier";

type FieldIdProps = {
  id?: string;
  forceDisplayMessage?: boolean;
  helpMessage?: ReactNode;
};

type Props = {
  actualRequired: boolean;
  required?: boolean;
  disabled: boolean;
  classModifier?: string;
  message?: string;
  forceDisplayMessage?: boolean;
  messageType?: MessageTypes;
  classNameSuffix?: string;
};

export const useFieldId = ({
  id,
  forceDisplayMessage,
  helpMessage,
}: FieldIdProps) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const labelId = useId();
  const errorId =
    forceDisplayMessage || helpMessage ? `${inputId}-description` : undefined;

  return {
    inputId,
    labelId,
    errorId,
  };
};

export const useFieldClass = ({
  disabled,
  classModifier = "",
  forceDisplayMessage,
  messageType,
  classNameSuffix = "text",
  actualRequired,
}: Props) => {
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    false,
    actualRequired,
  );

  const modifiers = forceDisplayMessage
    ? `${inputFieldClassModifier} ${FormClassManager.getModifier(messageType)}`
    : inputFieldClassModifier;
  const fieldContainerClassName = getComponentClassName(
    `af-form__${classNameSuffix}`,
    modifiers,
  );
  const groupClassName = getComponentClassName("af-form__group", classModifier);

  return {
    inputClassModifier,
    modifiers,
    fieldContainerClassName,
    groupClassName,
  };
};
