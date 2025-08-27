import type { DetailsHTMLAttributes, ReactNode } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { getComponentClassName } from "../utilities";
import type { AccordionActions } from "./types";

export type CollapseProps = {
  id: string;
  title: ReactNode;
  children?: ReactNode;
  open?: boolean;
  name?: string;
  onToggle?: DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
  className?: string;
  classModifier?: string;
  actions?: AccordionActions;
  type?: string;
};

export const CollapseCard = ({
  children,
  name,
  title,
  id,
  open,
  onToggle,
  className,
  classModifier = "",
  actions,
  type,
}: CollapseProps) => {
  const headerId = id;

  let newClassModifier = open ? "open" : "";
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
      <Header id={headerId} actions={actions} type={type}>
        {title}
      </Header>
      <Body>{children}</Body>
    </details>
  );
};
