import {
  ReactNode,
  useState,
  isValidElement,
  Children,
  cloneElement,
  useMemo,
  useCallback,
} from "react";

import { getPosition } from "./NavBar.helpers";
import { NavBarBase } from "./NavBarBase";

type Props = {
  children: ReactNode;
  id?: string;
  isVisible: boolean;
  onClick: () => void;
  positionInit?: number;
  toggleMenuId?: string;
};

const NavBar = ({ children, positionInit = 0, ...otherProps }: Props) => {
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const [position, setPosition] = useState(positionInit);

  const validChildren = useMemo(
    () =>
      Children.map(children, (child) => isValidElement(child) && child)?.filter(
        (c) => Boolean(c),
      ) ?? [],
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
    [position, validChildren.length],
  );

  return (
    <NavBarBase
      {...otherProps}
      onFocus={() => setIsMenuFocused(true)}
      onBlur={() => setIsMenuFocused(false)}
      handleKeys={handleKeys}
      isMenuFocused={isMenuFocused}
    >
      {Children.map(validChildren, (child, index) => {
        const isCurrent = index === position;
        return cloneElement(child, {
          ...child.props,
          key: `NavBarItem`,
          classModifier: [
            child.props.classModifier,
            isCurrent ? "active" : undefined,
          ]
            .filter((c) => Boolean(c))
            .join(" "),
          tabIndex: isCurrent ? 0 : -1,
          index,
          hasFocus: isMenuFocused && isCurrent,
        });
      })}
    </NavBarBase>
  );
};

export { NavBar };
