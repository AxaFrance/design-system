import { PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";
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
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "col-sm-12 col-md-12 col-lg-6 col-xl-6",
  );
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      {children}
    </div>
  );
};
