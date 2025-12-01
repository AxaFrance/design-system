import React, {
  isValidElement,
  useCallback,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { getPosition } from "./NavBar.helpers";
import { NavBarBase } from "./NavBarBase";

type ChildrenProps = {
  classModifier?: string;
  tabIndex?: number;
  hasFocus?: boolean;
  [key: string]: unknown;
};

type Props = {
  id?: string;
  toggleMenuId?: string;
  positionInit?: number;
  className?: string;
  isVisible: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
};
const NavBar = ({ positionInit = 0, children, ...otherProps }: Props) => {
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const [position, setPosition] = useState(positionInit);
  const validChildren = useMemo<ReactElement<ChildrenProps>[]>(
    () =>
      (
        React.Children.map(
          children as ReactElement<ChildrenProps>[],
          (child) => isValidElement(child) && child,
        ) ?? []
      ).filter((c) => Boolean(c)),
    [children],
  );

  const handleKeys = useCallback(
    (key: string) => {
      if (key === "Escape") {
        setIsMenuFocused(false);
      }
      if (key === "ArrowRight" || key === "ArrowLeft") {
        const newPosition = getPosition(validChildren.length, position, key);
        setPosition(newPosition);
      }
    },
    [position, validChildren],
  );

  return (
    <NavBarBase
      {...otherProps}
      onFocus={() => setIsMenuFocused(true)}
      onBlur={() => setIsMenuFocused(false)}
      handleKeys={handleKeys}
      isMenuFocused={isMenuFocused}
    >
      {React.Children.map(validChildren, (child, index) => {
        const isCurrent = index === position;
        return React.cloneElement(child, {
          key: `NavBarItem`,
          classModifier: [
            (child.props as { classModifier?: string }).classModifier,
            isCurrent ? "active" : undefined,
          ]
            .filter((c) => Boolean(c))
            .join(" "),
          tabIndex: isCurrent ? 0 : -1,
          index,
          hasFocus: isMenuFocused && isCurrent,
          onClick: () => setPosition(index),
        });
      })}
    </NavBarBase>
  );
};

export { NavBar };
