import {
  ComponentProps,
  ComponentType,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import {
  ItemTabBar,
  type ItemTabBarProps,
} from "../ItemTabBar/ItemTabBarCommon";

export const tabBarDirection = {
  center: "center",
  left: "left",
} as const;

export type TabBarDirection = keyof typeof tabBarDirection;

export type TabBarProps = {
  items: ({
    content: ReactNode;
  } & Omit<ItemTabBarProps, "content">)[];
  preSelectedTabIndex?: number;
  direction?: TabBarDirection;
};

type TabBarPropsCommon = TabBarProps & {
  ItemTabBarComponent: ComponentType<ComponentProps<typeof ItemTabBar>>;
};

const CLASS_NAME = "af-tabbar";

export const TabBarCommon = ({
  items,
  preSelectedTabIndex,
  direction = "left",
  ItemTabBarComponent,
}: TabBarPropsCommon) => {
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
        CLASS_NAME,
        direction === tabBarDirection.center ? `${CLASS_NAME}--center` : "",
      )}
    >
      <div role="tablist" ref={tablistRef}>
        {items.map(({ title }, index) => (
          <ItemTabBarComponent
            key={`tab-${title}`}
            id={`tab-${index}`}
            aria-selected={isActive(index)}
            aria-controls={`tabpanel-${index}`}
            onKeyDown={onChangeTab}
            onClick={() => setSelectedTabIndex(index)}
            ref={(element: HTMLButtonElement) => {
              buttonRefs.current[index] = element;
            }}
            tabIndex={isActive(index) ? 0 : -1}
            title={title}
          />
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
