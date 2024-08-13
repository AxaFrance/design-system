import "@axa-fr/design-system-look-and-feel-css/dist/Tabs/Tabs.client.scss";
import classNames from "classnames";
import { ReactNode, useCallback, useRef, useState } from "react";

export enum Direction {
  center = "center",
}

type TabsProps = {
  items: { title: string; content: string | ReactNode; icon?: ReactNode }[];
  preSelectedTabIndex?: number;
  direction?: Direction;
};

export const TabsClient = ({
  items,
  preSelectedTabIndex,
  direction,
}: TabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedTabIndex || 0,
  );
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const tablistRef = useRef<HTMLDivElement>(null);
  const totalTabs = items.length;

  const isActive = (index: number) => index === selectedTabIndex;

  const onChangeTab = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const firstTabIndex = 0;
      const lastTabIndex = totalTabs - 1;

      const goToNextTab = (nextTabIndex: number) => {
        setSelectedTabIndex(nextTabIndex);
        buttonRefs.current[nextTabIndex].focus();
        e.stopPropagation();
        e.preventDefault();
      };

      switch (e.key) {
        case "ArrowRight":
          goToNextTab(
            selectedTabIndex < lastTabIndex
              ? selectedTabIndex + 1
              : firstTabIndex,
          );
          break;
        case "ArrowLeft":
          goToNextTab(
            selectedTabIndex > firstTabIndex
              ? selectedTabIndex - 1
              : lastTabIndex,
          );
          break;
        case "Home":
          goToNextTab(firstTabIndex);
          break;
        case "End":
          goToNextTab(lastTabIndex);
          break;
        default:
          break;
      }
    },
    [selectedTabIndex, totalTabs],
  );

  return (
    <div
      className={classNames(
        "af-tabs-client",
        direction === Direction.center ? `af-tabs-client--center` : "",
      )}
    >
      <div role="tablist" ref={tablistRef}>
        {items.map((item, index) => (
          <button
            key={`tab-${item.title}`}
            role="tab"
            id={`tab-${index}`}
            aria-selected={isActive(index)}
            aria-controls={`tabpanel-${index}`}
            onKeyDown={onChangeTab}
            onClick={() => setSelectedTabIndex(index)}
            ref={(element: HTMLButtonElement) => {
              buttonRefs.current[index] = element;
            }}
            type="button"
            tabIndex={isActive(index) ? 0 : -1}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {items.map((item, index) => (
        <div
          key={`tabpanel-${item.title}`}
          role="tabpanel"
          aria-hidden={!isActive(index)}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};
