import { useCallback, useState, type ComponentPropsWithoutRef } from "react";
import { ItemMenu, type ItemMenuProps } from "../ItemMenu/ItemMenuCommon";
import { getClassName } from "../utilities/getClassName";
import { getPosition } from "./TabMenu.helpers";

export type TabMenuItemProps = Omit<ItemMenuProps, "children"> & {
  label: string;
};

export type TabMenuProps = {
  items?: TabMenuItemProps[];
  className?: string;
} & Omit<ComponentPropsWithoutRef<"nav">, "children">;

export const TabMenu = ({ items, className, ...props }: TabMenuProps) => {
  const [position, setPosition] = useState(0);
  const [isMenuFocused, setIsMenuFocused] = useState(false);

  const handleKeys = useCallback(
    (key: string) => {
      if (key === "Escape") {
        setIsMenuFocused(false);
      }
      if (key === "ArrowRight" || key === "ArrowLeft") {
        const newPosition = getPosition(items?.length ?? 0, position, key);
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
      onFocus={() => setIsMenuFocused(true)}
      onBlur={() => setIsMenuFocused(false)}
      onKeyDown={(e) => handleKeys(e.key)}
    >
      <ul className="af-tab-menu__list">
        {items.map((item, index) => (
          <li key={item.href} role="presentation">
            <ItemMenu
              {...item}
              isActive={
                isMenuFocused && index === position ? true : item.isActive
              }
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
