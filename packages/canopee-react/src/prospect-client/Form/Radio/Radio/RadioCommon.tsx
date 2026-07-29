import { type ComponentProps } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;
  hasWarning?: boolean;
};

export const Radio = ({
  isInvalid,
  hasWarning,
  className,
  ref,
  ...inputProps
}: RadioProps) => (
  <input
    {...inputProps}
    className={getClassName({
      baseClassName: "af-radio",
      modifiers: [isInvalid && "invalid", hasWarning && "warning"],
      className,
    })}
    ref={ref}
    type="radio"
  />
);
