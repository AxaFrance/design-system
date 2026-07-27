import { type ComponentPropsWithRef, type PropsWithChildren } from "react";
import { getClassName } from "../utilities/getClassName";

/**
 * Props for the ItemMenu component.
 */
export type ItemMenuProps = {
  /**
   * Applies the active modifier class.
   * @default false
   */
  isActive?: boolean;
} & ComponentPropsWithRef<"a">;

/**
 * Renders a navigational item as an anchor element.
 *
 * @component
 * @param {PropsWithChildren<ItemMenuProps>} props - ItemMenu props.
 * @param {boolean} [props.isActive=false] - Adds active styling.
 * @param {React.ReactNode} props.children - Item label/content.
 * @param {React.Ref<HTMLAnchorElement>} props.ref - Optional ref to the anchor element.
 * @returns {JSX.Element} The rendered ItemMenu component.
 */
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
