import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type ArticleRestitutionProps = ComponentPropsWithoutRef<"article"> & {
  /**
   * @deprecated use `className` instead
   */
  classModifier?: string;
};

export const ArticleRestitution = ({
  children,
  className,
  classModifier,
  ...otherProps
}: PropsWithChildren<ArticleRestitutionProps>) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution",
    className,
    modifiers: [classModifier],
  });
  return (
    <article className={componentClassName} {...otherProps}>
      {children}
    </article>
  );
};
