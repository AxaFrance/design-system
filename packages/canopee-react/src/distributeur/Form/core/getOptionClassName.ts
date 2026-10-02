import { getClassName } from "../../utilities/helpers/getClassName";

export function getOptionClassName(
  className: string,
  defaultClassName: string,
  disabled: boolean,
  variant?: string,
) {
  return getClassName({
    baseClassName: className || defaultClassName,
    modifiers: [variant, disabled && "disabled"],
    className,
  });
}
