import React from "react";
import { getComponentClassName } from "../utilities";

export type HeaderRestitutionProps = {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightTitle?: React.ReactNode;
  classModifier?: string;
};

export const HeaderRestitution = ({
  title,
  subtitle,
  rightTitle,
  className,
  classModifier,
}: HeaderRestitutionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-restitution__header",
  );
  return (
    <header className={componentClassName}>
      <div className="af-restitution__header-left">
        <div className="af-restitution__title">
          <span className="af-restitution__title-main">{title}</span>
          {subtitle ? (
            <span className="af-restitution__title-subtitle">{subtitle}</span>
          ) : null}
        </div>
      </div>
      {rightTitle ? (
        <div className="af-restitution__header-right">
          <span className="af-restitution__title">{rightTitle}</span>
        </div>
      ) : null}
    </header>
  );
};
