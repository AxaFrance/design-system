import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import menuIcon from "@material-symbols/svg-400/outlined/menu.svg";
import {
  useCallback,
  useId,
  useRef,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type MouseEvent,
  type ReactNode,
} from "react";
import { type AppNameProps } from "../AppName/AppName";
import { type ClickIconProps } from "../ClickIcon/ClickIconCommon";
import { type HeadingProps } from "../Heading/types";
import { type ClickItemProps } from "../List/ClickItem/ClickItemCommon";
import { type MenuBurgerProps } from "../MenuBurger/MenuBurgerCommon";
import { TabMenu, type TabMenuProps } from "../TabMenu/TabMenu";
import { BREAKPOINT } from "../utilities/constants";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";
import { getKeyedItems } from "./Header.helpers";
import { useHeaderMenu } from "./useHeaderMenu";

/**
 * Props for the Header component.
 */
export type HeaderProps = Omit<ComponentPropsWithoutRef<"header">, "title"> & {
  /**
   * AXA logo and application name.
   */
  appNameProps: AppNameProps;
  /**
   * Account menu: a primary button and its panel on large screens; its
   * entries and its content go in the menu panel on small screens.
   */
  menuBurgerProps?: MenuBurgerProps;
  /**
   * Main navigation: Item Menu tabs on large screens, ClickItem links in the
   * menu panel on small screens. The item with `isActive` is the current
   * page.
   */
  tabMenuProps?: TabMenuProps;
  /**
   * Props forwarded to the menu button of small screens.
   * Its accessible name defaults to "Menu".
   */
  clickIconProps?: ClickIconProps;
  /**
   * Title of the "Parcours" style, displayed at the end of the header.
   */
  title?: string;
  /**
   * Free content, such as a secondary button: before the account menu on
   * large screens, under the entries of the menu panel on small screens.
   */
  actionChildren?: ReactNode;
};

type HeaderCommonProps = HeaderProps & {
  AppNameComponent: ComponentType<AppNameProps>;
  HeadingComponent: ComponentType<HeadingProps>;
  MenuBurgerComponent: ComponentType<MenuBurgerProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
  ClickItemComponent: ComponentType<ClickItemProps>;
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
 * - Large screens: logo, Item Menu navigation, free content, account menu
 *   and title on one line.
 * - Small screens: logo, title and a menu button. The button opens a panel
 *   right under the header, with a veil on the rest of the page: navigation
 *   and account entries as ClickItems, then the free content and the account
 *   menu content. While it is open, the rest of the page is inert and does
 *   not scroll; Escape, the veil, a link or an entry closes it and gives the
 *   focus back to the button.
 */
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
  ClickItemComponent,
  actionChildren,
  onClickCapture,
  ...props
}: HeaderCommonProps) => {
  const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const clickIconRef = clickIconProps?.ref;

  const navEntries = getKeyedItems(
    tabMenuProps?.items ?? [],
    (item) => item.href ?? item.label,
  );
  const accountEntries = getKeyedItems(
    menuBurgerProps?.clickItems ?? [],
    (item) => item.title,
  );
  const accountChildren = menuBurgerProps?.children;
  const hasMenuEntries = navEntries.length > 0 || accountEntries.length > 0;
  const hasMenuContent =
    hasMenuEntries || Boolean(actionChildren) || Boolean(accountChildren);

  const { isOpen, toggle, closeOnChoice, closeOnOverlay } = useHeaderMenu({
    isEnabled: isSmallScreen && hasMenuContent,
    headerRef,
    panelRef,
    toggleRef,
  });

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

  const titleElement = title ? (
    <HeadingComponent level={1} className="af-header__title">
      {title}
    </HeadingComponent>
  ) : null;

  // The toggle ref is shared with the one of clickIconProps, if any.
  const setToggleRef = useCallback(
    (node: HTMLButtonElement | null) => {
      toggleRef.current = node;
      if (typeof clickIconRef === "function") {
        clickIconRef(node);
      } else if (clickIconRef) {
        clickIconRef.current = node;
      }
    },
    [clickIconRef],
  );

  const handleToggleClick = (event: MouseEvent<HTMLButtonElement>) => {
    clickIconProps?.onClick?.(event);
    toggle();
  };

  const handleClickCapture = (event: MouseEvent<HTMLElement>) => {
    onClickCapture?.(event);
    closeOnChoice(event);
  };

  return (
    <header
      ref={headerRef}
      className={getClassName({
        baseClassName: "af-header",
        className,
      })}
      onClickCapture={handleClickCapture}
      {...props}
    >
      <AppNameComponent {...parsedAppNameProps} />

      {isSmallScreen ? titleElement : null}

      {isSmallScreen && hasMenuContent ? (
        <>
          <ClickIconComponent
            {...clickIconProps}
            ref={setToggleRef}
            src={isOpen ? closeIcon : menuIcon}
            size="S"
            variant="ghost"
            className="af-header__menu-icon"
            aria-label={clickIconProps?.["aria-label"] ?? "Menu"}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={handleToggleClick}
          />

          <div
            className="af-header__overlay"
            role="presentation"
            hidden={!isOpen}
            onClick={closeOnOverlay}
          >
            <div id={panelId} ref={panelRef} className="af-header__panel">
              {hasMenuEntries ? (
                <nav
                  className="af-header__panel-nav"
                  aria-label={tabMenuProps?.["aria-label"]}
                >
                  <ul className="af-header__panel-list">
                    {navEntries.map(({ key, item }) => {
                      const {
                        label,
                        isActive,
                        className: itemClassName,
                        ...linkProps
                      } = item;

                      return (
                        <li key={key} className="af-header__panel-item">
                          <a
                            {...linkProps}
                            className={getClassName({
                              baseClassName: "af-header__panel-link",
                              className: itemClassName,
                            })}
                            aria-current={
                              isActive ? "page" : linkProps["aria-current"]
                            }
                          >
                            <ClickItemComponent variant="small" title={label} />
                          </a>
                        </li>
                      );
                    })}
                    {accountEntries.map(({ key, item }) => (
                      <li key={key} className="af-header__panel-item">
                        <ClickItemComponent
                          {...item}
                          variant={item.variant ?? "small"}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {actionChildren ? (
                <div className="af-header__panel-actions">{actionChildren}</div>
              ) : null}

              {accountChildren ? (
                <div className="af-header__panel-footer">{accountChildren}</div>
              ) : null}
            </div>
          </div>
        </>
      ) : null}

      {isSmallScreen ? null : (
        <div className="af-header__menu">
          {parsedTabMenuProps ? <TabMenu {...parsedTabMenuProps} /> : null}

          {titleElement || actionChildren || parsedMenuBurgerProps ? (
            <div className="af-header__actions">
              {titleElement}

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
      )}
    </header>
  );
};
