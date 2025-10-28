type getClassNameParams = {
  defaultClassName: string;
  modifiers?: Array<string | boolean | undefined>;
  className?: string;
};

export const getClassName = ({
  defaultClassName,
  modifiers = [],
  className,
}: getClassNameParams) => {
  const parsedModifiers = modifiers
    .filter(Boolean)
    .map((modifier) => `${defaultClassName}--${modifier}`);

  return [defaultClassName, ...parsedModifiers, className]
    .filter(Boolean)
    .join(" ");
};
