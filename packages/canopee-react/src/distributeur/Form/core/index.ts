import { ReactNode } from "react";

export { LegacyField } from "./Deprecated/Field";
export { FieldForm } from "./Deprecated/FieldForm";
export { FieldInput } from "./Deprecated/FieldInput";
export { Field } from "./Field";
export type { ConsumerFieldProps } from "./Field";
export { FieldError } from "./FieldError";
export { FormClassManager } from "./FormClassManager";
export { HelpMessage } from "./HelpMessage";
export { InputList } from "./InputList";
export { MessageTypes } from "./MessageTypes";

export { getFirstId } from "./getFirstId";
export { getOptionClassName } from "./getOptionClassName";
export { useInputClassModifier } from "./useInputClassModifier";
export { useOptionsWithId } from "./useOptionsWithId";

export type Option = {
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
  /**
   * @deprecated Ne semble pas utilisé
   */
  description?: ReactNode;
  value: string;
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
