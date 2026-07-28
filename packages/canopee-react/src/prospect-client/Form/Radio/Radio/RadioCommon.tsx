import { type ComponentProps, forwardRef } from "react";

import { getClassName } from "../../../utilities/getClassName";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;
  hasWarning?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { isInvalid, hasWarning, className, ...inputProps } = props;

  return (
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
});

Radio.displayName = "Radio";
