import classNames from "classnames";

const getLastClassName = (classNameToUse: string) => {
  if (!classNameToUse) {
    return null;
  }

  return classNameToUse.split(" ").filter(Boolean).at(-1);
};

const listClassModifier = (classModifier?: string) => {
  if (!classModifier) {
    return [];
  }

  return classModifier.split(" ");
};

/**
 * Generates a component class name string based on provided class names and modifiers.
 *
 * @param {string} [className] - The base class name.
 * @param {string} [classModifier] - A space-separated string of class modifiers.
 * @param {string} [defaultClassName] - The default class name to use if className is not provided.
 * @param {string} [additionalClassName] - Additional class names to append.
 * @returns {string} The generated class name string.
 */
export const getComponentClassName = (
  className?: string,
  classModifier?: string,
  defaultClassName?: string,
  additionalClassName?: string,
): string => {
  const classNameToUse = className || defaultClassName;

  // Fail fast, when no className or defaultClassName we don't want to loop on modifier
  if (!classNameToUse) {
    return "";
  }

  const classWithoutModifier = getLastClassName(classNameToUse);
  const modifiers = listClassModifier(classModifier);

  const modifiersObject = modifiers
    .filter((it) => /\S/.test(it))
    .map((it) => {
      return `${classWithoutModifier}--${it}`;
    });

  return classNames(classNameToUse, additionalClassName, modifiersObject);
};
