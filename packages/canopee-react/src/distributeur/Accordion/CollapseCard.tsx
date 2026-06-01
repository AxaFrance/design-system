import type { DetailsHTMLAttributes, ReactNode } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
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
  /** @deprecated Use `className` instead. */
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

  const componentClassName = getClassName({
    baseClassName: "af-accordion__details",
    modifiers: newClassModifier.trim().split(" "),
    className,
  });

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
