import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

export const itemTabBarVariants = {
  tabBar: "tabBar",
  header: "header",
} as const;
export type ItemTabBarVariants = keyof typeof itemTabBarVariants;

type ItemTabBarProps = ComponentPropsWithRef<"button"> & {
  variant?: ItemTabBarVariants;
  isActive?: boolean;
  icon?: ReactNode;
  title: string;
};

export const ItemTabBar = forwardRef<HTMLButtonElement, ItemTabBarProps>(
  (
    { variant = "tabBar", isActive = false, icon, title, className, ...props },
    ref,
  ) => {
    const classNames = getComponentClassName(
      "af-item-tab-bar",
      className,
      variant,
    );

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        className={classNames}
        {...props}
      >
        {icon}
        {title}
      </button>
    );
  },
);

ItemTabBar.displayName = "ItemTabBar";
