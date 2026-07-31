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
  // eslint-disable-next-line jsx-a11y/role-supports-aria-props -- aria-invalid is read by assistive technologies on radio inputs despite not being officially listed for the radio role
  <input
    aria-invalid={isInvalid || undefined}
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
