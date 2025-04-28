import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";

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
  ) => (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      className={`af-item-tab-bar af-item-tab-bar--${variant} ${className}`}
      {...props}
    >
      {icon}
      {title}
    </button>
  ),
);

ItemTabBar.displayName = "ItemTabBar";
