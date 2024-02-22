import React from "react";
import { getComponentClassName } from "../utilities";

const defaultClassName = "af-accordion__item-header";

export type HeaderToggleElement = {
  isOpen: boolean;
  index: number;
  id: string;
};

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  classModifier?: string;
  id?: string;
};

const Header = ({ children, className, classModifier, id }: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <summary className={componentClassName} id={id}>
      <h3 className="af-accordion__item-title">{children}</h3>
      <span className="glyphicon glyphicon-menu-down" />
    </summary>
  );
};

export { Header };
