/* eslint-disable react/no-array-index-key */
import {
  Children,
  isValidElement,
  useId,
  useRef,
  type FormEvent,
  type KeyboardEvent,
  type ReactElement,
} from "react";
import { getClassName } from "../../utilities/helpers/getClassName";
import type { TabProps } from "./Tab";

export type TabsStatelessProps = {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
  activeIndex: number;
  className?: string;
  /**
   * @deprecated Use `className` instead
   */
  classModifier?: string;
};

export type TabsStatelessHandlers = {
  onChange: (event: FormEvent<HTMLButtonElement>, index: number) => void;
};

function handleKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  moveToTab: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void,
  index: number,
  totalNumberOfTabs: number,
) {
  let targetIndex: number | null = null;

  if (event.key === "ArrowLeft") {
    targetIndex = index - 1;
  } else if (event.key === "ArrowRight") {
    targetIndex = index + 1;
  } else if (event.key === "Home") {
    targetIndex = 0;
  } else if (event.key === "End") {
    targetIndex = totalNumberOfTabs - 1;
  }

  if (targetIndex !== null) {
    moveToTab(event, targetIndex);
    event.preventDefault();
    event.stopPropagation();
  }
}

type Props = TabsStatelessProps & TabsStatelessHandlers;
const TabsStateless = ({
  activeIndex,
  className = "af-tabs",
  classModifier,
  children,
  onChange,
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-tabs",
    className,
    modifiers: classModifier?.split(" "),
  });

  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const moveToTab = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (index < 0 || index >= Children.count(children)) {
      return;
    }
    tabRefs.current[index]?.focus();
    onChange(event, index);
  };

  const id = useId();

  return (
    <div className={componentClassName} role="tablist">
      <ul className="af-tabs__control">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <li
                className={getClassName({
                  className,
                  modifiers: [activeIndex === index && "active"],
                  baseClassName: "af-tabs__item",
                })}
              >
                <button
                  type="button"
                  id={`${id}-tab-${index}`}
                  ref={(el) => {
                    tabRefs.current[index] = el!;
                  }}
                  aria-controls={`${id}-pane-${index}`}
                  onChange={(event) => onChange(event, index)}
                  onKeyDown={(event) => {
                    handleKeyDown(
                      event,
                      moveToTab,
                      index,
                      Children.count(children),
                    );
                  }}
                  className="af-tabs__link"
                  onClick={(event) => onChange(event, index)}
                  tabIndex={activeIndex === index ? 0 : -1}
                >
                  {child.props.title}
                </button>
              </li>
            ),
        )}
      </ul>
      <div className="af-tabs__content">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <div
                id={`${id}-pane-${index}`}
                aria-labelledby={`${id}-tab-${index}`}
                className={getClassName({
                  baseClassName: "af-tabs__pane",
                  modifiers: [activeIndex === index && "active"],
                })}
                role="tabpanel"
                tabIndex={0}
                key={`pane-${index}`}
              >
                {child.props.children}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export { TabsStateless };
