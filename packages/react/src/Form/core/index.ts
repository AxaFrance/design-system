import { ReactNode } from "react";

export { Field } from "./Field";
export { FieldInput } from "./FieldInput";
export { MessageTypes } from "./MessageTypes";
export { FieldError } from "./FieldError";
export { FormClassManager } from "./FormClassManager";
export { FieldForm } from "./FieldForm";
export { HelpMessage } from "./HelpMessage";
export { InputList } from "./InputList";

export { useInputClassModifier } from "./useInputClassModifier";
export { getOptionClassName } from "./getOptionClassName";
export { useOptionsWithId } from "./useOptionsWithId";
export { getComponentClassName } from "./getComponentClassName";
export { getFirstId } from "./getFirstId";

export type Option = {
  id?: string;
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

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
