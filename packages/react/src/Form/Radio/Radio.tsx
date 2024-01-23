import { ComponentPropsWithRef } from "react";
import type { Option } from "../core";
import { RadioItem } from "./RadioItem";

export enum RadioModes {
  classic = "classic",
  default = "default",
  inline = "inline",
}

type Props = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "id" | "label" | "className"
> & {
  options: Option[];
  mode?: keyof typeof RadioModes;
};

const getClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return "af-form__radio";
    case RadioModes.inline:
      return "af-form__radio-inline";
    default:
      return "af-form__radio-custom";
  }
};

const Radio = ({
  classModifier,
  options,
  value = "",
  mode = RadioModes.default,
  children,
  disabled,
  ...otherProps
}: Props) => {
  const classNameMode = getClassNameMode(mode);
  return options.map((option: Option) => {
    const isChecked = option.value === value;

    return (
      <RadioItem
        {...otherProps}
        key={option.value}
        id={option.id}
        value={option.value}
        label={option.label}
        isChecked={isChecked}
        disabled={option.disabled || disabled}
        className={classNameMode}
        classModifier={classModifier}
      >
        {children}
      </RadioItem>
    );
  });
};

Radio.displayName = "EnhancedInputRadio";

export { Radio };
