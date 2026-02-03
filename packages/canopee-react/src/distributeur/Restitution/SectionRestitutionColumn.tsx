import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

export type SectionRestitutionColumnProps = {
  className?: string;
  title?: string;
  classModifier?: string;
};

export const SectionRestitutionColumn = ({
  children,
  className,
  title,
  classModifier,
}: PropsWithChildren<SectionRestitutionColumnProps>) => {
  const componentClassName = getClassName({
    className,
    modifiers: classModifier?.split(" "),
    baseClassName: "af-restitution__content-column",
  });
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      {children}
    </div>
  );
};
