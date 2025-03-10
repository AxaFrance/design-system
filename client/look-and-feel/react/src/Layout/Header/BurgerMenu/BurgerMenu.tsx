import { useCallback } from "react";

import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/BurgerMenu/BurgerMenu.scss";
import classNames from "classnames";
import {
  ClickItem,
  createClickItemParent,
} from "../../../List/ClickList/ClickItem";
import { BurgerMenuProps } from "./types";
import { HeaderItemProps } from "../types";

export const BurgerMenu = ({
  isOpen,
  links,
  rightItems,
  setActiveLink,
  setIsOpen,
}: BurgerMenuProps) => {
  const handleOnClick = useCallback(
    (index: number) => () => {
      setActiveLink(index);
      setIsOpen(false);
    },
    [setActiveLink, setIsOpen],
  );

  const renderListOfElements = useCallback(
    ({
      elements,
      hasOnClickHandler = false,
    }: {
      elements?: HeaderItemProps[];
      hasOnClickHandler: boolean;
    }) =>
      elements?.map(
        ({ props: { children, id, ...otherProps }, Wrapper }, index) => (
          <li key={id} className="af-list__item" role="none">
            <ClickItem
              classModifier="small"
              onClick={hasOnClickHandler ? handleOnClick(index) : undefined}
              parentClickComponent={createClickItemParent(Wrapper, {
                ...otherProps,
                role: "menuitem",
              })}
            >
              {children}
            </ClickItem>
          </li>
        ),
      ),
    [handleOnClick],
  );

  if (
    (!links || links.length === 0) &&
    (!rightItems || rightItems.length === 0)
  ) {
    return null;
  }

  return (
    <nav
      role="navigation"
      aria-label="menu principal mobile"
      className={classNames("af-card", "af-card--list", "af-burger-menu", {
        open: isOpen,
      })}
    >
      <ul role="menubar">
        {renderListOfElements({ elements: links, hasOnClickHandler: true })}
        {renderListOfElements({
          elements: rightItems,
          hasOnClickHandler: false,
        })}
      </ul>
    </nav>
  );
};
