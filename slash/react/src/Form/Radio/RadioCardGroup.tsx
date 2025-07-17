import "@axa-fr/design-system-slash-css/dist/Form/Radio/RadioCardGroup.css";

import { PropsWithChildren, useId, useRef } from "react";
import classNames from "classnames";
import type { Option } from "../core";
import { Svg } from "../../Svg";

const DEFAULT_CLASSNAME = "af-card";
const DEFAULT_CONTAINER_CLASSNAME = "af-form__radio-card-group";

type Props = PropsWithChildren & {
  options: Option[];
  orientation?: "horizontal" | "vertical";
  error?: boolean;
  disabled?: boolean;
  className?: string;
};

export const RadioCardGroup = ({
  children,
  options,
  className,
  orientation = "vertical",
  disabled = false,
  error = false,
}: Props) => {
  const idGenerated = useId();
  const radioGroupRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={radioGroupRef}
      role="radiogroup"
      className={classNames([
        DEFAULT_CONTAINER_CLASSNAME,
        className,
        orientation === "horizontal" &&
          `${DEFAULT_CONTAINER_CLASSNAME}--horizontal`,
      ])}
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
          const allClassNames = classNames([
            DEFAULT_CLASSNAME,
            orientation === "horizontal" && `${DEFAULT_CLASSNAME}--horizontal`,
            error && `${DEFAULT_CLASSNAME}--error`,
          ]);

          const isDisabled = disabled || optionDisabled;
          return (
            <label key={otherOptionProps.value} className={allClassNames}>
              <input
                type="radio"
                name={newName}
                disabled={isDisabled}
                checked={isDisabled ? false : checked}
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
