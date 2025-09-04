import classNames from "classnames";
import { type ReactNode, useId } from "react";
import { type LabelPosition } from "./types";

type InputProps = {
  id?: string;
  labelPosition?: LabelPosition;
  inputClassName?: string;
  labelClassName?: string;
  errorMessage?: ReactNode;
  helpMessage?: ReactNode;
};

export const useInput = (props: InputProps) => {
  const inputUseId = useId();
  const inputId = props.id ?? inputUseId;

  const isInvalid = Boolean(props.errorMessage);

  const inputClassName = classNames("af-input__input", props.inputClassName);
  const labelClassName = classNames("af-label", props.labelClassName, {
    "af-label--top": props.labelPosition === "leftAbove",
  });

  const errorId = isInvalid ? `${inputId}-description` : undefined;
  const helperId = props.helpMessage ? `${inputId}-helper` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ").trim();

  return {
    isInvalid,
    isContainerVertical: props.labelPosition === "leftAbove",
    inputClassName,
    labelClassName,
    describedBy,
    errorId,
    helperId,
    inputId,
  };
};
