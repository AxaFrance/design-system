import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";
import type { Option } from "../core";
import { RadioCardGroup } from "./RadioCardGroup";
import { RadioItem } from "./RadioItem";

export enum RadioModes {
  classic = "classic",
  default = "default",
  inline = "inline",
  card = "card",
}

type Props = {
  options: Option[];
} & (
  | (Omit<
      ComponentPropsWithRef<typeof RadioItem>,
      "id" | "label" | "className"
    > & {
      mode?: "classic" | "default" | "inline";
    })
  | (ComponentPropsWithoutRef<typeof RadioCardGroup> & {
      mode: "card";
    })
);

const getClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return "af-form__radio";
    case RadioModes.inline:
      return "af-form__radio-inline";
    case RadioModes.card:
      return "af-form__radio-card";
    default:
      return "af-form__radio-custom";
  }
};

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ options, value = "", children, disabled, ...otherProps }, inputRef) => {
    const { mode, ...onlyNecessaryProps } = otherProps;
    const classNameMode = getClassNameMode(mode ?? "default");

    if (mode === "card") {
      return (
        <RadioCardGroup
          {...onlyNecessaryProps}
          options={options}
          disabled={disabled}
          value={value}
        >
          {children}
        </RadioCardGroup>
      );
    }

    return (
      <div className="af-form__radio-group">
        {options.map((option: Option) => (
          <RadioItem
            {...onlyNecessaryProps}
            key={option.value}
            isChecked={option.value === value}
            disabled={option.disabled || disabled}
            className={classNameMode}
            ref={inputRef}
            {...option}
          >
            {children}
          </RadioItem>
        ))}
      </div>
    );
  },
);

Radio.displayName = "EnhancedInputRadio";

export { Radio };
