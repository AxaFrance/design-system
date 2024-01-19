import React, { ComponentProps, ReactNode } from "react";
import { Option } from "../core";
import { CheckboxItem } from "./CheckboxItem";
import { CheckboxModes } from "./CheckboxModes";

type OnChange = {
  onChange: (data: {
    values: string[];
    target: { value: string; checked: boolean };
    name?: string;
    id?: string;
  }) => void;
};

type Props = Omit<
  ComponentProps<typeof CheckboxItem>,
  "value" | "label" | "checked" | "onChange"
> & {
  options: Option[];
  values?: string[];
  children?: ReactNode;
  mode?: keyof typeof CheckboxModes;
} & OnChange;

const defaultClassName = (mode: string) => {
  switch (mode) {
    case CheckboxModes.default:
      return "af-form__checkbox-custom";
    case CheckboxModes.classic:
      return "af-form__checkbox";
    default:
      return `af-form__checkbox-${mode}`;
  }
};

const CheckboxInner = ({
  id,
  name,
  options,
  disabled,
  children,
  values = [],
  mode = CheckboxModes.default,
  onChange,
  ...otherProps
}: Props) => {
  const className = defaultClassName(mode);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value, checked },
  }) => {
    const newValues = checked
      ? [...values, value]
      : values.filter((v) => v !== value);
    onChange({ values: newValues, target: { value, checked }, id, name });
  };
  return (
    <>
      {options.map((option) => {
        const isChecked = values ? values.indexOf(option.value) >= 0 : false;
        return (
          <CheckboxItem
            {...otherProps}
            {...option}
            onChange={handleOnChange}
            key={option.value}
            className={className}
            isChecked={isChecked}
            name={name}
            disabled={option.disabled || disabled}
          >
            {children}
          </CheckboxItem>
        );
      })}
    </>
  );
};
CheckboxInner.displayName = "Checkbox";

export const Checkbox = CheckboxInner;
