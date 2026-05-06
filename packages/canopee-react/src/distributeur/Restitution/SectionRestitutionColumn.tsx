import classNames from "classnames";
import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

export type SectionRestitutionColumnProps = {
  className?: string;
  title?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const SectionRestitutionColumn = ({
  children,
  className,
  title,
  classModifier,
}: PropsWithChildren<SectionRestitutionColumnProps>) => {
  const baseClassName = className
    ? getClassName({
        baseClassName: className,
        modifiers: classModifier?.split(" "),
      })
    : null;
  const componentClassName = classNames(
    "col-sm-12 col-md-12 col-lg-6 col-xl-6",
    baseClassName,
  );
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      {children}
    </div>
  );
};
