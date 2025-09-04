import "@axa-fr/design-system-slash-css/dist/Accordion/Accordion.scss";
import React, { useId } from "react";
import { getComponentClassNameWithUserClassname } from "../utilities/helpers/getComponentClassName";
import { CollapseCard, CollapseProps } from "./CollapseCard";
import { TDefaultProps } from "./types";

const defaultClassName = "af-accordion";

export type EnhancedProps = Partial<TDefaultProps> & {
  onlyOne?: boolean;
  className?: string;
  /** @deprecated Use `variant` instead. */
  classModifier?: string;
  variant?: string;
  children:
    | React.ReactElement<CollapseProps>[]
    | React.ReactElement<CollapseProps>;
};

const Accordion = ({
  className,
  classModifier,
  variant,
  children,
  onlyOne = false,
}: EnhancedProps) => {
  const componentClassName = getComponentClassNameWithUserClassname({
    componentClassName: defaultClassName,
    userClassName: className,
    classModifier: classModifier || variant || "",
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
