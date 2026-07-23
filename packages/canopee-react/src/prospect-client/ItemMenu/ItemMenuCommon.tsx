import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
} from "react";
import { getClassName } from "../utilities/getClassName";

export type ItemMenuProps = {
  isActive?: boolean;
} & ComponentPropsWithoutRef<"a">;

export const ItemMenu = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<ItemMenuProps>
>(({ isActive = false, children, className, ...props }, ref) => (
  <a
    ref={ref}
    className={getClassName({
      baseClassName: "af-item-menu",
      modifiers: [isActive && "active"],
      className,
    })}
    {...props}
  >
    {children}
  </a>
));

ItemMenu.displayName = "ItemMenu";
