import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getClassName } from "../utilities/getClassName";

export type ItemMenuProps = {
  isActive?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export const ItemMenu = ({
  isActive = false,
  children,
  className,
  ...props
}: PropsWithChildren<ItemMenuProps>) => (
  <a
    className={getClassName({
      baseClassName: "af-item-menu",
      modifiers: [isActive && "active"],
      className,
    })}
    {...props}
  >
    {children}
  </a>
);
