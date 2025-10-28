type getClassNameParams = {
  baseClassName: string;
  modifiers?: Array<string | boolean | undefined>;
  className?: string;
};

/**
 * Generates a CSS class string from a base class name, optional modifiers, and an additional class name.
 *
 * @param {string} params.baseClassName - The base class name (required).
 * @param {Array<string|boolean|undefined>} [params.modifiers] - List of modifiers to append as `${baseClassName}--{modifier}`. Falsy values are ignored.
 * @param {string} [params.className] - Additional class name(s) to append to the final string.
 * @returns {string} The concatenated CSS class string, separated by spaces.
 *
 * @example
 * const isLarge = false;
 * getClassName({ baseClassName: 'af-button', modifiers: ['primary', isLarge && 'large'], className: 'custom-class' })
 * // Returns: 'af-button af-button--primary custom-class'
 */
export const getClassName = ({
  baseClassName,
  modifiers = [],
  className = "",
}: getClassNameParams) => {
  const parsedModifiers = modifiers
    .filter(Boolean)
    .map((modifier) => `${baseClassName}--${modifier}`);

  const classList = [
    baseClassName,
    ...parsedModifiers,
    ...className.split(" "),
  ].filter(Boolean);

  return Array.from(new Set(classList)).join(" ");
};
