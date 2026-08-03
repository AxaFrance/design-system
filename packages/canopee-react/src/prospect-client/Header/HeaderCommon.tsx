import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import close from "@material-symbols/svg-400/rounded/close.svg";
import { BREAKPOINT } from "../utilities/constants";
import { type ClickIconProps } from "../ClickIcon/ClickIconCommon";
import { TabMenu } from "../TabMenu/TabMenu";
import { type AppNameProps } from "../AppName/AppNameCommon";
import { type HeadingProps } from "../Heading/types";
import { type MenuBurgerProps } from "../MenuBurger/MenuBurgerCommon";
import { type TabMenuProps } from "../TabMenu/TabMenu";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";

export type HeaderProps = Omit<ComponentPropsWithoutRef<"header">, "title"> & {
  appNameProps: AppNameProps;
  menuBurgerProps?: MenuBurgerProps;
  tabMenuProps?: TabMenuProps;
  clickIconProps?: ClickIconProps;
  title?: string;
  actionChildren?: ReactNode;
};

type HeaderCommonProps = HeaderProps & {
  AppNameComponent: ComponentType<AppNameProps>;
  HeadingComponent: ComponentType<HeadingProps>;
  MenuBurgerComponent: ComponentType<MenuBurgerProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
};

const withElementClass = <T extends { className?: string }>(
  props: T,
  baseClassName: string,
): T => ({
  ...props,
  className: getClassName({
    baseClassName,
    className: props.className,
  }),
});

export const HeaderCommon = ({
  appNameProps,
  menuBurgerProps,
  tabMenuProps,
  clickIconProps,
  title,
  className,
  AppNameComponent,
  HeadingComponent,
  MenuBurgerComponent,
  ClickIconComponent,
  actionChildren,
  ...props
}: HeaderCommonProps) => {
  const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const parsedAppNameProps = withElementClass(
    appNameProps,
    "af-header__app-name",
  );
  const parsedMenuBurgerProps = menuBurgerProps
    ? withElementClass(menuBurgerProps, "af-header__menu-burger")
    : undefined;

  const parsedTabMenuProps = tabMenuProps
    ? withElementClass(tabMenuProps, "af-header__tab-menu")
    : undefined;

  useEffect(() => {
    if (!isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen]);

  const handleMenuIconClick = (event: MouseEvent<HTMLButtonElement>) => {
    clickIconProps?.onClick?.(event);

    if (!isSmallScreen) {
      return;
    }

    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleMenuIconKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    clickIconProps?.onKeyDown?.(event);

    if (!isSmallScreen) {
      return;
    }

    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={getClassName({
        baseClassName: "af-header",
        className,
      })}
      {...props}
    >
      <AppNameComponent {...parsedAppNameProps} />

      {Boolean(parsedMenuBurgerProps) ||
      Boolean(parsedTabMenuProps) ||
      Boolean(actionChildren) ? (
        <ClickIconComponent
          {...clickIconProps}
          src={isMenuOpen ? close : menu}
          size="S"
          variant="ghost"
          className="af-header__menu-icon"
          aria-controls={isSmallScreen ? "af-header-menu" : undefined}
          aria-expanded={isSmallScreen ? isMenuOpen : undefined}
          aria-haspopup={isSmallScreen ? "menu" : undefined}
          aria-label={clickIconProps?.["aria-label"] ?? "Ouvrir le menu"}
          onClick={handleMenuIconClick}
          onKeyDown={handleMenuIconKeyDown}
        />
      ) : null}

      <div
        id="af-header-menu"
        className={getClassName({
          baseClassName: "af-header__menu",
          modifiers: [isSmallScreen && isMenuOpen && "open"],
        })}
      >
        {parsedTabMenuProps ? <TabMenu {...parsedTabMenuProps} /> : null}

        {(title && !isSmallScreen) ||
        actionChildren ||
        parsedMenuBurgerProps ? (
          <div className="af-header__actions">
            {title ? (
              <HeadingComponent level={1} className="af-header__title">
                {title}
              </HeadingComponent>
            ) : null}

            {actionChildren ? (
              <div className="af-header__actions-children">
                {actionChildren}
              </div>
            ) : null}

            {parsedMenuBurgerProps ? (
              <MenuBurgerComponent {...parsedMenuBurgerProps} />
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
};
