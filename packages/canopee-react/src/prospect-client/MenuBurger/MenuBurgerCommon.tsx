import keyboardArrowDown from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import person from "@material-symbols/svg-400/outlined/person.svg";
import {
  useId,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
  type PropsWithChildren,
} from "react";

import type { ButtonProps } from "../Button/ButtonCommon";
import type { IconProps } from "../Icon/IconCommon";
import type { ClickItemProps } from "../List/ClickItem/ClickItemCommon";
import type { ListProps } from "../List/List/ListCommon";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";
import { BREAKPOINT } from "../utilities/constants";

export const menuBurgerVariants = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type MenuBurgerVariants = keyof typeof menuBurgerVariants;

export type MenuBurgerClickItemProps = Omit<ClickItemProps, "variant"> & {
  variant?: ClickItemProps["variant"];
};

/**
 * Props for the MenuBurger component.
 */
export type MenuBurgerProps = {
  /**
   * Label displayed inside the trigger button.
   */
  buttonLabel: string;
  /**
   * Extra content rendered below the ClickItem list.
   */
  children?: ReactNode;
  /**
   * Icon displayed on the left side of the trigger button.
   * @default person
   */
  icon?: IconProps["src"];
  /**
   * Visual variant of the trigger button.
   * @default primary
   */
  variant?: MenuBurgerVariants;
  /**
   * ClickItem list rendered inside the popover panel.
   */
  clickItems?: MenuBurgerClickItemProps[];
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

type MenuBurgerCommonProps = PropsWithChildren<MenuBurgerProps> & {
  ButtonComponent: ComponentType<ButtonProps>;
  ClickItemComponent: ComponentType<ClickItemProps>;
  IconComponent: ComponentType<IconProps>;
  ListComponent: ComponentType<ListProps>;
};

/**
 * Renders a burger-style menu button opening a popover panel with navigation and actions.
 *
 * @component
 * @param {PropsWithChildren<MenuBurgerProps>} props - MenuBurger props.
 * @param {string} props.buttonLabel - Label shown in the trigger button.
 * @param {IconProps["src"]} [props.icon=person] - Icon shown on the left of the trigger button.
 * @param {MenuBurgerVariants} [props.variant=primary] - Visual variant of the trigger button.
 * @param {ClickItemProps[]} [props.clickItems] - Click items displayed under the links.
 * @param {React.ReactNode} [props.children] - Extra content rendered below the ClickItem list.
 * @returns {JSX.Element} The rendered MenuBurger component.
 */
export const MenuBurgerCommon = ({
  buttonLabel,
  icon = person,
  variant = "primary",
  clickItems,
  children,
  className,
  ButtonComponent,
  ClickItemComponent,
  IconComponent,
  ListComponent,
  ...props
}: MenuBurgerCommonProps) => {
  const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);
  const isDesktop = !isSmallScreen;

  const popoverId = useId();
  const triggerId = `${popoverId}-trigger`;
  const iconVariant = variant === "primary" ? "secondary" : "primary";

  return (
    <div
      className={getClassName({
        baseClassName: "af-menu-burger",
        className,
      })}
      {...props}
    >
      {isDesktop ? (
        <ButtonComponent
          id={triggerId}
          className="af-menu-burger__button"
          variant={variant}
          iconLeft={
            <IconComponent
              src={icon}
              alt=""
              role="presentation"
              size="S"
              variant={iconVariant}
            />
          }
          iconRight={
            <IconComponent
              className="af-menu-burger__button-icon--suffix"
              src={keyboardArrowDown}
              alt=""
              role="presentation"
              size="S"
              variant={iconVariant}
            />
          }
          popoverTarget={popoverId}
          popoverTargetAction="toggle"
          aria-haspopup="true"
        >
          {buttonLabel}
        </ButtonComponent>
      ) : null}

      <section
        id={isDesktop ? popoverId : undefined}
        popover={isDesktop ? "auto" : undefined}
        className="af-menu-burger__panel"
        aria-labelledby={isDesktop ? triggerId : undefined}
      >
        {clickItems && clickItems.length > 0 ? (
          <div className="af-menu-burger__section af-menu-burger__section--actions">
            <ListComponent
              className="af-menu-burger__click-items"
              variant="unstyled"
            >
              {clickItems.map((clickItem) => (
                <ClickItemComponent
                  key={clickItem.title}
                  variant={clickItem.variant ?? "small"}
                  {...clickItem}
                />
              ))}
            </ListComponent>
          </div>
        ) : null}

        {children ? (
          <div className="af-menu-burger__section af-menu-burger__content">
            {children}
          </div>
        ) : null}
      </section>
    </div>
  );
};
