import { PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";

export type SectionRestitutionProps = {
  className?: string;
  classModifier?: string;
};

export const SectionRestitution = ({
  children,
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
