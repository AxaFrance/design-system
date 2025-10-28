import "@axa-fr/design-system-slash-css/dist/Form/Radio/RadioCardGroup.css";

import { ComponentProps, useId } from "react";
import classNames from "classnames";
import type { Option } from "../core";
import { Svg } from "../../Svg";

const DEFAULT_CLASSNAME = "af-card";
const DEFAULT_CONTAINER_CLASSNAME = "af-form__radio-card-group";

type Props = ComponentProps<"input"> & {
  options: Option[];
  orientation?: "horizontal" | "vertical";
};

export const RadioCardGroup = ({
  children,
  options,
  className,
  value,
  name,
  orientation = "vertical",
  disabled = false,
  "aria-invalid": ariaInvalid,
  ...otherProps
}: Props) => {
  const idGenerated = useId();

  return (
    <div
      className={classNames([
        DEFAULT_CONTAINER_CLASSNAME,
        className,
        orientation === "horizontal" &&
          `${DEFAULT_CONTAINER_CLASSNAME}--horizontal`,
      ])}
    >
      {options.map(
        ({
          name: optionName,
          icon,
          label,
          disabled: optionDisabled,
          value: optionValue,
          ...otherOptionProps
        }: Option) => {
          const newName = name || optionName || idGenerated;
          const allClassNames = classNames([
            DEFAULT_CLASSNAME,
            orientation === "horizontal" && `${DEFAULT_CLASSNAME}--horizontal`,
            ariaInvalid && `${DEFAULT_CLASSNAME}--error`,
          ]);

          const isDisabled = disabled || optionDisabled;
          return (
            <label key={optionValue} className={allClassNames}>
              <input
                {...otherProps}
                type="radio"
                name={newName}
                disabled={isDisabled}
                checked={isDisabled ? false : optionValue === value}
                value={optionValue}
                {...otherOptionProps}
              />
              {typeof icon === "string" ? <Svg src={icon} /> : icon}
              {label}
            </label>
          );
        },
      )}
      {children}
    </div>
  );
};
