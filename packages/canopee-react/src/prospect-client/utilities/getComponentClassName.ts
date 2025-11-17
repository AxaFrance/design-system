import classNames from "classnames";

const getLastClassName = (defaultClassName: string) => {
  if (!defaultClassName) {
    return null;
  }

  return defaultClassName.split(" ").filter(Boolean).at(-1);
};

const listClassModifier = (classModifier?: string) => {
  if (!classModifier) {
    return [];
  }

  return classModifier.split(" ");
};

/**
 * @deprecated This function is deprecated and will be removed in a future release. Use getClassName instead.
 */
export const getComponentClassName = (
  defaultClassName: string,
  className?: string,
  classModifier?: string,
) => {
  // Fail fast, when no defaultClassName we don't want to loop on modifier
  if (!defaultClassName) {
    return "";
  }

  const classWithoutModifier = getLastClassName(defaultClassName);
  const modifiers = listClassModifier(classModifier);

  const modifiersObject = modifiers
    .filter((it) => /\S/.test(it))
    .map((it) => {
      return `${classWithoutModifier}--${it}`;
    });

  return classNames(defaultClassName, className, modifiersObject);
};
