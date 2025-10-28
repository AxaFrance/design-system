type getClassNameParams = {
  baseClassName: string;
  modifiers?: Array<string | boolean | undefined>;
  className?: string;
};

export const getClassName = ({
  baseClassName,
  modifiers = [],
  className,
}: getClassNameParams) => {
  const parsedModifiers = modifiers
    .filter(Boolean)
    .map((modifier) => `${baseClassName}--${modifier}`);

  return [baseClassName, ...parsedModifiers, className]
    .filter(Boolean)
    .join(" ");
};
