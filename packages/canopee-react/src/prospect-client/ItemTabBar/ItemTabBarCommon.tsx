import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type ItemTabBarProps = ComponentPropsWithRef<"button"> & {
  isActive?: boolean;
  title: string;
};

export const ItemTabBar = ({
  isActive = false,
  title,
  className,
  ...props
}: ItemTabBarProps) => {
  const classNames = getClassName({
    baseClassName: "af-item-tab-bar",
    className,
  });

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={classNames}
      {...props}
    >
      {title}
    </button>
  );
};

ItemTabBar.displayName = "ItemTabBar";
