import { getClassName } from "../../utilities/helpers/getClassName";

export function getOptionClassName(
  className: string,
  classModifier: string,
  defaultClassName: string,
  disabled: boolean,
  variant?: string,
) {
  return getClassName({
    baseClassName: defaultClassName,
    modifiers: [
      variant,
      ...(classModifier?.split(" ") ?? []),
      disabled ? "disabled" : undefined,
    ],
    className,
  });
}
