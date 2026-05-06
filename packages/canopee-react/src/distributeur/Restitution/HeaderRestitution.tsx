import React from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type HeaderRestitutionProps = {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightTitle?: React.ReactNode;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const HeaderRestitution = ({
  title,
  subtitle,
  rightTitle,
  className,
  classModifier,
}: HeaderRestitutionProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__header",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <header className={componentClassName}>
      <div className="af-restitution__header-left">
        <h3 className="af-restitution__title">
          <span className="af-restitution__title-main">{title}</span>
          {subtitle ? (
            <span className="af-restitution__title-subtitle">{subtitle}</span>
          ) : null}
        </h3>
      </div>
      {rightTitle ? (
        <div className="af-restitution__header-right">
          <span className="af-restitution__title">{rightTitle}</span>
        </div>
      ) : null}
    </header>
  );
};
