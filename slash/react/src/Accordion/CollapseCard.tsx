import { ReactNode } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { getComponentClassName } from "../utilities";

export type CollapseProps = {
  id: string;
  title: ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  name?: string;
  onToggle?: React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
  className?: string;
  classModifier?: string;
};

export const CollapseCard = ({
  children,
  name,
  title,
  id,
  open,
  onToggle,
  className,
  classModifier = '',
}: CollapseProps) => {
  const headerId = id;

  let newClassModifier = open ? 'open' : '';
  newClassModifier += ` ${classModifier}`;

  const componentClassName = getComponentClassName(
    className,
    newClassModifier.trim(),
    "af-accordion__details",
  );

  return (
    <details
      open={open}
      name={name}
      className={componentClassName}
      onToggle={onToggle}
    >
      <Header id={headerId}>{title}</Header>
      <Body>{children}</Body>
    </details>
  );
};
