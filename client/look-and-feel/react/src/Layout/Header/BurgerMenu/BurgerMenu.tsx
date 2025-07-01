import {
  type ComponentPropsWithoutRef,
  type Dispatch,
  type ReactElement,
  ReactNode,
  type SetStateAction,
} from "react";

import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/BurgerMenu/BurgerMenu.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Card/Card.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/ClickItem/ClickItem.scss";
import classNames from "classnames";
import { ClickItem, createClickItemParent } from "../../../List/ClickItem";

type BurgerMenuProps = {
  refModal: React.RefObject<HTMLDialogElement | null>;
  items: ReactElement[];
  setActiveLink: Dispatch<SetStateAction<number | undefined>>;
} & ComponentPropsWithoutRef<"nav">;

const BurgerMenu = ({
  items,
  setActiveLink,
  refModal,
  ...props
}: BurgerMenuProps) => {
  const handleOnClick = (index: number) => () => {
    setActiveLink(index);
    refModal.current?.close();
  };

  if (items.length === 0) return null;

  return (
    <nav
      role="navigation"
      aria-label="Menu principal mobile"
      aria-hidden={!refModal.current?.open}
      className={classNames("af-card", "af-card--list", "af-burger-menu", {
        open: refModal.current?.open,
      })}
      {...props}
    >
      <ul role="menubar">
        {items.map((item, index) => {
          const { key, props: itemProps, type } = item;
          const { children, ...otherProps } = itemProps as {
            children: ReactNode;
          } & Record<string, unknown>;

          return (
            <li
              key={key ?? `list item ${index}`}
              className="af-list__item"
              role="none"
            >
              <ClickItem
                classModifier="small"
                onClick={handleOnClick(index)}
                parentClickComponent={createClickItemParent(type, {
                  ...otherProps,
                  role: "menuitem",
                })}
              >
                {children}
              </ClickItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { BurgerMenu };
