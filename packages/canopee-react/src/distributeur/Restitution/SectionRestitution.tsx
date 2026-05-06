import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type SectionRestitutionProps = {
  className?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const SectionRestitution = ({
  children,
  className,
  classModifier,
}: PropsWithChildren<SectionRestitutionProps>) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__content",
    modifiers: classModifier?.split(" "),
    className,
  });
  return <section className={componentClassName}>{children}</section>;
};
