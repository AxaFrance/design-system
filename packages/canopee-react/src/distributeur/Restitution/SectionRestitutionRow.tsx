import type { PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";

const DEFAULT_CLASSNAME = "af-restitution__content-row";

export type SectionRestitutionRowProps = {
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
  classModifier?: string;
};

export const SectionRestitutionRow = ({
  title,
  className,
  classNameContainer = "af-restitution__content-left",
  children,
  classModifier,
}: PropsWithChildren<SectionRestitutionRowProps>) => {
  const componentClassName = getClassName({
    className,
    modifiers: classModifier?.split(" "),
    baseClassName: DEFAULT_CLASSNAME,
  });
  return (
    <div className={componentClassName}>
      {title ? <SectionRestitutionTitle title={title} /> : null}
      <div className={classNameContainer}>{children}</div>
    </div>
  );
};
