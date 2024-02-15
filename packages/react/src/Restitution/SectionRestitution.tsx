import { PropsWithChildren } from "react";
import { getComponentClassName } from "../Form/core";

export type SectionRestitutionProps = {
  className?: string;
  classModifier?: string;
};

export const SectionRestitution = ({
  children = null,
  className,
  classModifier,
}: PropsWithChildren<SectionRestitutionProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-restitution__content",
  );
  return <section className={componentClassName}>{children}</section>;
};
