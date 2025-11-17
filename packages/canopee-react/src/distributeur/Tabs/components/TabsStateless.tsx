/* eslint-disable react/no-array-index-key */
import {
  Children,
  type ReactNode,
  isValidElement,
  type ReactElement,
  type MouseEvent,
} from "react";
import { getComponentClassName } from "../../utilities";
import { Pane } from "./Pane";
import type { TabProps } from "./Tab";
import { Title } from "./Title";

export interface TabsStatelessProps {
  children: ReactNode;
  activeIndex: string;
  className?: string;
  classModifier?: string;
}

export interface TabsStatelessHandlers {
  onChange: (event: MouseEvent<HTMLButtonElement>, index: string) => void;
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
                classModifier={
                  (child as ReactElement<TabProps>).props.classModifier
                }
                key={`title-${index}`}
              >
                {(child as ReactElement<TabProps>).props.title}
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
                {(child as ReactElement<TabProps>).props.children}
              </Pane>
            ),
        )}
      </div>
    </div>
  );
};

export { TabsStateless };
