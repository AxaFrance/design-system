import {
  useCallback,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { ItemMenu, type ItemMenuProps } from "../ItemMenu/ItemMenuCommon";
import { getClassName } from "../utilities/getClassName";
import { getPosition } from "./TabMenu.helpers";

import "@axa-fr/canopee-css/prospect/TabMenu/TabMenuAll.css";

/**
 * One item displayed in the TabMenu component.
 */
export type TabMenuItemProps = Omit<ItemMenuProps, "children"> & {
  /**
   * Visible label of the menu item.
   */
  label: string;
};

/**
 * Props for the TabMenu component.
 */
export type TabMenuProps = {
  /**
   * List of menu items.
   */
  items?: TabMenuItemProps[];
  /**
   * Initial active item position.
   * @default 0
   */
  initialPosition?: number;
} & Omit<ComponentPropsWithoutRef<"nav">, "children">;

/**
 * Renders a keyboard-navigable tab-style menu.
 *
 * @component
 * @param {TabMenuProps} props - TabMenu props.
 * @param {TabMenuItemProps[]} [props.items] - Items to render.
 * @param {number} [props.initialPosition=0] - Initially selected item index.
 * @returns {JSX.Element | null} The rendered TabMenu, or null when no items are provided.
 */
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
        itemRefs.current[newPosition]?.focus();
        setPosition(newPosition);
      }
    },
    [position, items?.length],
  );

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
          <li key={item.href}>
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
