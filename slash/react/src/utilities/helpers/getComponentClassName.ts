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
 * @deprecated This function is deprecated and will be removed in a future release. Use getClassName instead.
 * Generates a component class name string based on provided class names and modifiers.
 *
 * @param {string} [className] - The base class name.
 * @param {string} [classModifier] - A space-separated string of class modifiers.
 * @param {string} [defaultClassName] - The default class name to use if className is not provided.
 * @returns {string} The generated class name string.
 */
export const getComponentClassName = (
  className?: string,
  classModifier?: string,
  defaultClassName?: string,
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

  return classNames(classNameToUse, modifiersObject);
};

type getComponentClassNameWithUserClassnameParams = {
  userClassName?: string;
  classModifier?: string;
  componentClassName: string;
};

/**
 * @deprecated This function is deprecated and will be removed in a future release. Use getClassName instead.
 */
export const getComponentClassNameWithUserClassname = ({
  componentClassName,
  userClassName,
  classModifier,
}: getComponentClassNameWithUserClassnameParams) => {
  // Fail fast, when no className or componentClassName we don't want to loop on modifier
  if (!componentClassName) {
    return "";
  }

  const classWithoutModifier = getLastClassName(componentClassName);
  const modifiers = listClassModifier(classModifier);

  const modifiersObject = modifiers
    .filter((it) => /\S/.test(it))
    .map((it) => {
      return `${classWithoutModifier}--${it}`;
    });

  return classNames(componentClassName, modifiersObject, userClassName);
};
