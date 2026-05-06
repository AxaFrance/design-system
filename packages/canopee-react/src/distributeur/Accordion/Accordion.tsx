import "@axa-fr/canopee-css/distributeur/Accordion/Accordion.css";
import React, { useId } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { CollapseCard, type CollapseProps } from "./CollapseCard";
import type { AccordionVariant, TDefaultProps } from "./types";

const defaultClassName = "af-accordion";

export type EnhancedProps = Partial<TDefaultProps> & {
  onlyOne?: boolean;
  className?: string;
  /** @deprecated Use `variant` instead. */
  classModifier?: string;
  variant?: AccordionVariant;
  children:
    | React.ReactElement<CollapseProps>[]
    | React.ReactElement<CollapseProps>;
};

const Accordion = ({
  className,
  classModifier,
  variant = "default",
  children,
  onlyOne = false,
}: EnhancedProps) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: [
      variant !== "default" ? variant : undefined,
      ...(classModifier?.split(" ") ?? []),
    ],
    className,
  });

  const id = useId();
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div className={componentClassName}>
      {childrenArray.map((child) => (
        <CollapseCard
          {...child.props}
          name={onlyOne ? id : undefined}
          key={child.props.id}
          variant={variant}
        >
          {child.props.children}
        </CollapseCard>
      ))}
    </div>
  );
};

export { Accordion };
