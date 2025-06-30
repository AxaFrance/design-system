import "@axa-fr/design-system-slash-css/dist/Form/Radio/RadioCardGroup.scss";

import {
  CSSProperties,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useId,
} from "react";
import type { Option } from "../core";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";

type Props = Omit<ComponentPropsWithoutRef<"input">, "type"> &
  PropsWithChildren & {
    options: Option[];
    classModifier?: string;
    orientation?: "horizontal" | "vertical";
  };
export const RadioCardGroup = ({
  children,
  options,
  classModifier,
  orientation = "vertical",
  disabled,
}: Props) => {
  const varRadioColumns = {
    "--form-radio-card-columns": options.length < 5 ? options.length : 5,
  } as CSSProperties;

  const idGenerated = useId();
  let radioGroupClassName = "af-form__radio-card-group";
  const allClassModifiers = (classModifier || "")
    .split(" ")
    .filter((value) => value !== "disabled");
  if (orientation === "horizontal") {
    allClassModifiers.push(orientation);
    radioGroupClassName = getComponentClassName(
      "af-form__radio-card-group",
      orientation,
    );
  }
  const classModifiers = allClassModifiers.join(" ");

  return (
    <div
      role="radiogroup"
      className={radioGroupClassName}
      style={varRadioColumns}
    >
      {options.map(
        ({
          name,
          icon,
          label,
          disabled: optionDisabled,
          checked,
          ...otherOptionProps
        }: Option) => {
          const newName = name ?? idGenerated;
          const classNameCard = getComponentClassName(
            "af-card",
            classModifiers,
          );
          const isDisabled = disabled || optionDisabled;
          return (
            <label key={otherOptionProps.value} className={classNameCard}>
              <input
                type="radio"
                name={newName}
                disabled={isDisabled}
                checked={isDisabled ? false : checked}
                {...otherOptionProps}
              />
              {icon && (
                <Svg
                  width="48"
                  height="48"
                  src={icon as string}
                  role="img"
                  aria-label="Icon"
                />
              )}
              {label}
            </label>
          );
        },
      )}
      {children}
    </div>
  );
};
