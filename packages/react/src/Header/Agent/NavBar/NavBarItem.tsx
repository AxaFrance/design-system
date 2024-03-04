import {
  Children,
  ComponentProps,
  KeyboardEvent,
  ReactElement,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";

import { getPosition } from "./NavBar.helpers";
import { NavBarItemBase } from "./NavBarItemBase";

type Props = Omit<
  ComponentProps<typeof NavBarItemBase>,
  "handleKeys" | "isMenuOpen" | "position"
> & {
  ariaLabel?: string;
};

const NavBarItem = ({
  children,
  hasFocus = false,
  actionElt,
  ariaLabel = "",
  tabIndex = -1,
  role = "menuitem",
  className,
  ...otherProps
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState(0);

  const validChildren = useMemo(
    () =>
      Children.map(children, (child) => isValidElement(child) && child)?.filter(
        Boolean,
      ) ?? [],
    [children],
  );

  const moveBykey = useCallback(
    (key: string) => {
      const newPosition = getPosition(Children.count(children), position, key);
      setPosition(newPosition);
    },
    [children, position],
  );

  const openMenu = useCallback(() => {
    if (children) {
      setIsMenuOpen(true);
    }
  }, [children]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setPosition(0);
  }, []);

  const handleKeys = useCallback(
    ({ key }: KeyboardEvent<HTMLElement>) => {
      if (!children) {
        return;
      }
      if (key === "ArrowDown") {
        if (!isMenuOpen) {
          openMenu();
        } else {
          moveBykey(key);
        }
      }

      if (key === "ArrowUp" && isMenuOpen) {
        if (position === 0) {
          closeMenu();
        } else {
          moveBykey(key);
        }
      }

      if (key === "ArrowRight" || key === "ArrowLeft" || key === "Escape") {
        closeMenu();
      }
    },
    [children, closeMenu, isMenuOpen, moveBykey, openMenu, position],
  );

  const renderChild = useCallback(
    (child: ReactElement, childIndex: number) => {
      return cloneElement(child, {
        classModifier:
          childIndex === position && isMenuOpen ? " active" : undefined,
        tabIndex: childIndex === position && isMenuOpen ? 0 : -1,
        key: `child${childIndex}`,
        hasFocus: hasFocus && position === childIndex && isMenuOpen,
      });
    },
    [hasFocus, isMenuOpen, position],
  );

  return (
    <NavBarItemBase
      className={className}
      role={role}
      hasFocus={hasFocus}
      tabIndex={tabIndex}
      isMenuOpen={isMenuOpen}
      handleKeys={handleKeys}
      actionElt={actionElt}
      {...otherProps}
    >
      {children && (
        <>
          <i
            key={`icon${tabIndex}`}
            className="glyphicon glyphicon-arrow-xs-down"
          />
          <ul
            key={`list${tabIndex}`}
            className="af-nav__list af-nav__list--children"
            role="menu"
            aria-label={ariaLabel}
          >
            {Children.map(validChildren, renderChild)}
          </ul>
        </>
      )}
    </NavBarItemBase>
  );
};

export { NavBarItem };
