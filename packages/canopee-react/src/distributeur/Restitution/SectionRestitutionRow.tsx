import classNames from "classnames";
import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

const DEFAULT_CLASSNAME = "col col-sm-12 col-md-12 col-lg-12 col-xl-12";

export type SectionRestitutionRowProps = {
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const SectionRestitutionRow = ({
  title,
  className,
  classNameContainer = "row af-restitution__content-left",
  children,
  classModifier,
}: PropsWithChildren<SectionRestitutionRowProps>) => {
  const baseClassName = className
    ? getClassName({
        baseClassName: className,
        modifiers: classModifier?.split(" "),
      })
    : null;

  const componentClassName = classNames(DEFAULT_CLASSNAME, baseClassName);
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      <div className={classNameContainer}>{children}</div>
    </div>
  );
};
