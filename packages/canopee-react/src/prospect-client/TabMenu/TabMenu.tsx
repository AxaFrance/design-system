import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { ItemMenu, type ItemMenuProps } from "../ItemMenu/ItemMenuCommon";
import { getClassName } from "../utilities/getClassName";
import { getPosition } from "./TabMenu.helpers";

import "@axa-fr/canopee-css/prospect/TabMenu/TabMenuAll.css";

export type TabMenuItemProps = Omit<ItemMenuProps, "children"> & {
  label: string;
};

export type TabMenuProps = {
  items?: TabMenuItemProps[];
  initialPosition?: number;
} & Omit<ComponentPropsWithoutRef<"nav">, "children">;

export const TabMenu = ({
  items,
  className,
  initialPosition = 0,
  ...props
}: TabMenuProps) => {
  const [position, setPosition] = useState(initialPosition);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleKeys = useCallback(
    (key: string) => {
      if (key === "ArrowRight" || key === "ArrowLeft") {
        const newPosition = getPosition(items?.length ?? 0, position, key);
        setPosition(newPosition);
      }
    },
    [position, items?.length],
  );

  useEffect(() => {
    const currentItemRef = itemRefs.current[position];
    if (currentItemRef) {
      currentItemRef.focus();
    }
  }, [position]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      className={getClassName({
        baseClassName: "af-tab-menu",
        className,
      })}
      {...props}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={(e) => handleKeys(e.key)}
    >
      <ul className="af-tab-menu__list">
        {items.map((item, index) => (
          <li key={item.href} role="presentation">
            <ItemMenu
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              {...item}
              isActive={index === position ? true : item.isActive}
              tabIndex={index === position ? 0 : -1}
            >
              {item.label}
            </ItemMenu>
          </li>
        ))}
      </ul>
    </nav>
  );
};
