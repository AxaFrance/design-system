import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";

type ArticleRestitutionProps = ComponentPropsWithoutRef<"article"> & {
  classModifier?: string;
};

export const ArticleRestitution = ({
  children,
  className,
  classModifier,
  ...otherProps
}: PropsWithChildren<ArticleRestitutionProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-restitution",
  );
  return (
    <article className={componentClassName} {...otherProps}>
      {children}
    </article>
  );
};
