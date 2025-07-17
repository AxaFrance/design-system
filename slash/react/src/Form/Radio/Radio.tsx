import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";
import type { Option } from "../core";
import { RadioItem } from "./RadioItem";
import { RadioCardGroup } from "./RadioCardGroup";

export enum RadioModes {
  classic = "classic",
  default = "default",
  inline = "inline",
  card = "card",
}

type Props = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "id" | "label" | "className"
> & {
  options: Option[];
} & (
    | {
        mode?: "classic" | "default" | "inline";
      }
    | {
        mode: "card";
        className?: string;
        orientation?: ComponentPropsWithoutRef<
          typeof RadioCardGroup
        >["orientation"];
      }
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
  (
    { classModifier, options, value = "", children, disabled, ...otherProps },
    inputRef,
  ) => {
    const classNameMode = getClassNameMode(otherProps.mode ?? "default");

    // ICI - le if qui permet de rendre un autre composant
    if (otherProps.mode === "card") {
      return (
        <RadioCardGroup
          className={otherProps.className}
          options={options}
          error={classModifier === "error"}
          disabled={disabled}
          orientation={otherProps.orientation}
        >
          {children}
        </RadioCardGroup>
      );
    }

    const onlyNecessaryProps = { ...otherProps };
    delete onlyNecessaryProps.mode;

    return options.map((option: Option) => (
      <RadioItem
        {...onlyNecessaryProps}
        key={option.value}
        isChecked={option.value === value}
        disabled={option.disabled || disabled}
        className={classNameMode}
        classModifier={classModifier}
        ref={inputRef}
        {...option}
      >
        {children}
      </RadioItem>
    ));
  },
);

Radio.displayName = "EnhancedInputRadio";

export { Radio };
