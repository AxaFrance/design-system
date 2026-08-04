import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
} from "react";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import { BREAKPOINT } from "../utilities/constants";
import { type ClickIconProps } from "../ClickIcon/ClickIconCommon";
import { TabMenu } from "../TabMenu/TabMenu";
import { type AppNameProps } from "../AppName/AppName";
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
      <AppNameComponent {...parsedAppNameProps} />

      {Boolean(parsedMenuBurgerProps) ||
      Boolean(parsedTabMenuProps) ||
      Boolean(actionChildren) ? (
        <ClickIconComponent
          {...clickIconProps}
          src={menu}
          size="S"
          variant="ghost"
          className="af-header__menu-icon"
          aria-haspopup={isSmallScreen ? "menu" : undefined}
          aria-label={clickIconProps?.["aria-label"] ?? "Ouvrir le menu"}
          popoverTarget={isSmallScreen ? "af-header-menu" : undefined}
          popoverTargetAction={isSmallScreen ? "toggle" : undefined}
        />
      ) : null}

      <div
        id="af-header-menu"
        popover={isSmallScreen ? "auto" : undefined}
        className="af-header__menu"
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
