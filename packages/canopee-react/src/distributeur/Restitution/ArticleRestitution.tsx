import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type ArticleRestitutionProps = ComponentPropsWithoutRef<"article"> & {};

export const ArticleRestitution = ({
  children,
  className,
  ...otherProps
}: PropsWithChildren<ArticleRestitutionProps>) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution",
    modifiers: [],
    className,
  });
  return (
    <article className={componentClassName} {...otherProps}>
      {children}
    </article>
  );
};
