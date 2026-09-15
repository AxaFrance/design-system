import classNames from "classnames";
import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

const DEFAULT_CLASSNAME = "af-restitution__content-row";

export type SectionRestitutionRowProps = {
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
};

export const SectionRestitutionRow = ({
  title,
  className,
  classNameContainer = "row af-restitution__content-left",
  children,
}: PropsWithChildren<SectionRestitutionRowProps>) => {
  const baseClassName = className
    ? getClassName({
        baseClassName: className,
        modifiers: [],
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
