import { ComponentPropsWithRef, forwardRef } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

export type ItemTabBarProps = ComponentPropsWithRef<"button"> & {
  isActive?: boolean;
  title: string;
};

export const ItemTabBar = forwardRef<HTMLButtonElement, ItemTabBarProps>(
  ({ isActive = false, title, className, ...props }, ref) => {
    const classNames = getComponentClassName("af-item-tab-bar", className);

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        className={classNames}
        {...props}
      >
        {title}
      </button>
    );
  },
);

ItemTabBar.displayName = "ItemTabBar";
