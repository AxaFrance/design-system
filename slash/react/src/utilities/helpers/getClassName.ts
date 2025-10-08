export const clsx = (...classNames: Array<string | boolean | undefined>) => {
  return classNames.filter(Boolean).join(" ");
};

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

  return clsx(defaultClassName, ...parsedModifiers, className);
};
