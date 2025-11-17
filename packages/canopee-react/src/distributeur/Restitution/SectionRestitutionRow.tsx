import { PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

const DEFAULT_CLASSNAME = "col col-sm-12 col-md-12 col-lg-12 col-xl-12";

export type SectionRestitutionRowProps = {
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
  classModifier?: string;
};

export const SectionRestitutionRow = ({
  title,
  className = DEFAULT_CLASSNAME,
  classNameContainer = "row af-restitution__content-left",
  children,
  classModifier,
}: PropsWithChildren<SectionRestitutionRowProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASSNAME,
  );
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      <div className={classNameContainer}>{children}</div>
    </div>
  );
};
