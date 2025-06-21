import { ReactNode } from "react";

export { Field } from "./Field";
export { FieldError } from "./FieldError";
export { FieldForm } from "./FieldForm";
export { FieldInput } from "./FieldInput";
export { FormClassManager } from "./FormClassManager";
export { HelpMessage } from "./HelpMessage";
export { InputList } from "./InputList";
export { LegacyField } from "./LegacyField";
export { SemanticField } from "./SemanticField";
export { MessageTypes } from "./MessageTypes";

export { getFirstId } from "./getFirstId";
export { getOptionClassName } from "./getOptionClassName";
export { useInputClassModifier } from "./useInputClassModifier";
export { useOptionsWithId } from "./useOptionsWithId";

export type Option = {
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  value: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type BaseFormEvent = {
  id: string;
  name: string;
};
export type FormEvent =
  | (BaseFormEvent & {
      value: string;
    })
  | (BaseFormEvent & {
      values: string[];
    });
