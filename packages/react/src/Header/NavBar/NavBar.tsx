import {
  ReactNode,
  useState,
  isValidElement,
  Children,
  cloneElement,
} from "react";
import { getPosition } from "./NavBar.helpers";
import { NavBarBase } from "./NavBarBase";

type Props = {
  id?: string;
  toggleMenuId?: string;
  positionInit?: number;
  className?: string;
  isVisible: boolean;
  children: ReactNode;
  onClick: () => void;
};

const NavBar = ({ positionInit = 0, children, ...otherProps }: Props) => {
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const [position, setPosition] = useState(positionInit);
  const validChildren =
    Children.map(children, (child) => isValidElement(child) && child)?.filter(
      Boolean,
    ) ?? [];

  const handleKeys = (key: string) => {
    if (key === "Escape") {
      setIsMenuFocused(false);
    }
    if (key === "ArrowRight" || key === "ArrowLeft") {
      const newPosition = getPosition(validChildren?.length, position, key);
      setPosition(newPosition);
    }
  };

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
            .filter((c) => !!c)
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
