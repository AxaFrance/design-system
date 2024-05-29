import { getComponentClassName } from "./getComponentClassName";

export function getOptionClassName(
  className: string,
  classModifier: string,
  defaultClassName: string,
  disabled: boolean,
) {
  const classModifierWithDisabled = [
    classModifier,
    disabled ? "disabled" : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return getComponentClassName(
    className,
    classModifierWithDisabled,
    defaultClassName,
  );
}
