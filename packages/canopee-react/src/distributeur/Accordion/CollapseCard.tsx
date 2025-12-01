import type { DetailsHTMLAttributes, ReactNode } from "react";
import { getComponentClassName } from "../utilities";
import { Body } from "./Body";
import { Header } from "./Header";
import type { AccordionActions, AccordionVariant } from "./types";

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
  variant?: AccordionVariant;
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
  variant,
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
      <Header id={headerId} actions={actions} variant={variant}>
        {title}
      </Header>
      <Body>{children}</Body>
    </details>
  );
};
