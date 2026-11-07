import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import menuIcon from "@material-symbols/svg-400/outlined/menu.svg";
import {
  useId,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { type AppNameProps } from "../AppName/AppName";
import { type ClickIconProps } from "../ClickIcon/ClickIconCommon";
import { type HeadingProps } from "../Heading/types";
import { type MenuBurgerProps } from "../MenuBurger/MenuBurgerCommon";
import { TabMenu, type TabMenuProps } from "../TabMenu/TabMenu";
import { BREAKPOINT } from "../utilities/constants";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";

/**
 * AXA logo of the header, a link to the home page with `logoLinkProps`.
 */
export type HeaderAppNameProps = Omit<AppNameProps, "label"> & {
  /**
   * Application name displayed next to the logo on large screens.
   * @deprecated The Header mockup shows the AXA logo alone, without any name
   * next to it. The title of the "Parcours" style goes in `title`, at the end
   * of the header.
   */
  label?: string;
};

/**
 * Props for the Header component.
 */
export type HeaderProps = Omit<ComponentPropsWithoutRef<"header">, "title"> & {
  /**
   * AXA logo of the header.
   */
  appNameProps: HeaderAppNameProps;
  /**
   * Account menu: a primary button and its panel on large screens; its
   * entries and its content go in the menu on small screens.
   */
  menuBurgerProps?: MenuBurgerProps;
  /**
   * Main navigation: Item Menu tabs on large screens, links at the top of
   * the menu on small screens.
   */
  tabMenuProps?: TabMenuProps;
  /**
   * Props forwarded to the menu button of small screens.
   * Its accessible name defaults to "Menu".
   */
  clickIconProps?: ClickIconProps;
  /**
   * Accessible name of the close button of the small screen menu.
   * @default "Fermer le menu"
   */
  closeButtonAriaLabel?: string;
  /**
   * Title of the "Parcours" style, displayed at the end of the header.
   */
  title?: string;
  /**
   * Free content, such as a secondary button: before the account menu on
   * large screens, at the bottom of the menu on small screens.
   */
  actionChildren?: ReactNode;
};

type HeaderCommonProps = HeaderProps & {
  AppNameComponent: ComponentType<AppNameProps>;
  HeadingComponent: ComponentType<HeadingProps>;
  MenuBurgerComponent: ComponentType<MenuBurgerProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
};

// Choosing one of them leaves the page or changes it: the menu closes.
const MENU_CHOICES = "a[href], .af-menu-burger__click-items button";

// The menu is a popover on small screens only.
const hideMenu = (menu: HTMLElement) => {
  if (menu.hasAttribute("popover")) {
    menu.hidePopover();
  }
};

// The focus leaves the menu for the page under it: the menu closes. It stays
// open when the focus goes back to the menu button or leaves the window.
const handleMenuBlur = (event: FocusEvent<HTMLDivElement>) => {
  const next = event.relatedTarget;
  const menu = event.currentTarget;

  if (
    next &&
    !menu.contains(next) &&
    next.getAttribute("popovertarget") !== menu.id
  ) {
    hideMenu(menu);
  }
};

const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
  if (event.target instanceof Element && event.target.closest(MENU_CHOICES)) {
    hideMenu(event.currentTarget);
  }
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

/**
 * Page header of the Prospect and Client looks.
 *
 * The same elements serve every screen size; CSS lays them out.
 * - Large screens: logo, Item Menu navigation, free content, account menu
 *   and title on one line.
 * - Small screens: logo, title and a menu button. The button opens the menu
 *   as a native popover under the header: the browser handles Escape, light
 *   dismiss and the return of the focus. The close button of the menu sits on
 *   the menu button. A link, an entry or a focus that leaves the menu closes
 *   it too.
 */
export const HeaderCommon = ({
  appNameProps,
  menuBurgerProps,
  tabMenuProps,
  clickIconProps,
  closeButtonAriaLabel = "Fermer le menu",
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
  const menuId = useId();

  const hasMenu =
    Boolean(tabMenuProps?.items?.length) ||
    Boolean(menuBurgerProps) ||
    Boolean(actionChildren);

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

  return (
    <header
      className={getClassName({
        baseClassName: "af-header",
        className,
      })}
      {...props}
    >
      <AppNameComponent
        {...parsedAppNameProps}
        label={appNameProps.label ?? ""}
      />

      {title ? (
        <HeadingComponent level={1} className="af-header__title">
          {title}
        </HeadingComponent>
      ) : null}

      {hasMenu ? (
        <>
          <ClickIconComponent
            {...clickIconProps}
            src={menuIcon}
            size="M"
            variant="ghost"
            className={getClassName({
              baseClassName: "af-header__menu-icon",
              className: clickIconProps?.className,
            })}
            aria-label={clickIconProps?.["aria-label"] ?? "Menu"}
            aria-controls={menuId}
            popoverTarget={menuId}
            popoverTargetAction="toggle"
          />

          {/* Delegated click of the links and buttons of the menu, which the
              keyboard activates too. */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            id={menuId}
            popover={isSmallScreen ? "auto" : undefined}
            className="af-header__menu"
            onBlur={handleMenuBlur}
            onClick={handleMenuClick}
          >
            <ClickIconComponent
              src={closeIcon}
              size="M"
              variant="ghost"
              className="af-header__menu-close"
              aria-label={closeButtonAriaLabel}
              popoverTarget={menuId}
              popoverTargetAction="hide"
            />

            {parsedTabMenuProps ? <TabMenu {...parsedTabMenuProps} /> : null}

            {actionChildren || parsedMenuBurgerProps ? (
              <div className="af-header__actions">
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
        </>
      ) : null}
    </header>
  );
};
