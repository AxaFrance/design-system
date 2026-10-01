import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type SectionRestitutionProps = {
  className?: string;
};

export const SectionRestitution = ({
  children,
  className,
}: PropsWithChildren<SectionRestitutionProps>) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__content",
    className,
  });
  return <section className={componentClassName}>{children}</section>;
};
