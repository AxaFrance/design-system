import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";
import type { Option } from "../core";
import { RadioItem } from "./RadioItem";
import { RadioCardGroup } from "./RadioCardGroup";
import { useClassNameMode } from "./useClassNameMode";

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
      "id" | "label" | "className" | "children"
    > & {
      mode?: "classic" | "default" | "inline";
    })
  | (ComponentPropsWithoutRef<typeof RadioCardGroup> & {
      mode: "card";
    })
);

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ options, value = "", disabled, ...otherProps }, inputRef) => {
    const { mode, ...onlyNecessaryProps } = otherProps;
    const { className: classNameMode } = useClassNameMode(mode ?? "default");

    if (mode === "card") {
      return (
        <RadioCardGroup
          {...onlyNecessaryProps}
          options={options}
          disabled={disabled}
          value={value}
        />
      );
    }

    return options.map((option: Option) => (
      <RadioItem
        {...onlyNecessaryProps}
        key={option.value}
        isChecked={option.value === value}
        disabled={option.disabled || disabled}
        className={classNameMode}
        ref={inputRef}
        {...option}
      />
    ));
  },
);

Radio.displayName = "EnhancedInputRadio";

export { Radio };
