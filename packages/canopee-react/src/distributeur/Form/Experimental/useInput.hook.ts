import { type ReactNode, useId } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";
import { type LabelPosition } from "./types";

type useInputProps = {
  id?: string;
  labelPosition?: LabelPosition;
  inputClassName?: string;
  labelClassName?: string;
  errorMessage?: ReactNode;
  helpMessage?: ReactNode;
};

export const useInput = (props: useInputProps) => {
  const inputUseId = useId();
  const inputId = props.id ?? inputUseId;

  const isInvalid = Boolean(props.errorMessage);

  const inputClassName = getClassName({
    baseClassName: "af-input__input",
    className: props.inputClassName,
  });
  const labelClassName = getClassName({
    baseClassName: "af-label",
    modifiers: [props.labelPosition === "above" && "top"],
    className: props.labelClassName,
  });

  const errorId = isInvalid ? `${inputId}-description` : undefined;
  const helperId = props.helpMessage ? `${inputId}-helper` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ").trim();

  return {
    isInvalid,
    isContainerVertical: props.labelPosition === "above",
    inputClassName,
    labelClassName,
    describedBy,
    errorId,
    helperId,
    inputId,
  };
};
