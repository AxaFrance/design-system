/* eslint-disable react/no-array-index-key */
import React, { Children, ReactNode, isValidElement } from "react";
import { getComponentClassName } from "../../slash";
import { Pane } from "./Pane";
import { Title } from "./Title";

export interface TabsStatelessProps {
  children: ReactNode;
  activeIndex: string;
  className?: string;
  classModifier?: string;
}

export interface TabsStatelessHandlers {
  onChange: (event: React.MouseEvent<HTMLButtonElement>, index: string) => void;
}

type Props = TabsStatelessProps & TabsStatelessHandlers;
const TabsStateless = ({
  activeIndex,
  className = "af-tabs",
  classModifier,
  children,
  onChange,
}: Props) => {
  const componentClassName = getComponentClassName(className, classModifier);

  return (
    <div className={componentClassName}>
      <ul className="af-tabs__control">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <Title
                active={activeIndex === index.toString()}
                onChange={onChange}
                id={`${index}`}
                classModifier={child.props.classModifier}
                key={`title-${index}`}
              >
                {child.props.title}
              </Title>
            ),
        )}
      </ul>
      <div className="af-tabs__content">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <Pane
                active={activeIndex === index.toString()}
                key={`pane-${index}`}
              >
                {child.props.children}
              </Pane>
            ),
        )}
      </div>
    </div>
  );
};

export { TabsStateless };
