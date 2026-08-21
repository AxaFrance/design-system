import { type ComponentProps } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  variant?: "error" | "warning";
};

export const Radio = ({
  variant,
  className,
  ref,
  ...inputProps
}: RadioProps) => (
  <input
    {...inputProps}
    className={getClassName({
      baseClassName: "af-radio",
      modifiers: [
        variant === "error" && "invalid",
        variant === "warning" && "warning",
      ],
      className,
    })}
    ref={ref}
    type="radio"
  />
);
