import {
  isValidElement,
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import type { DebugGridProps } from "../../Grid/DebugGridCommon";
import { type HeaderProps } from "../../Header/HeaderCommon";
import { type FooterProps } from "../Footer/FooterCommon";
import { type LinkProps } from "../../Link/LinkCommon";
import { type IconProps } from "../../Icon/IconCommon";

import { getClassName } from "../../utilities/getClassName";
import { flattenFragments } from "../../utilities/flattenFragments";

export type MainLayoutSlotProps = PropsWithChildren<{
  /** Additional class applied to the element wrapping the slot. */
  className?: string;
}>;

/** Content rendered on the grid between the header and the main content. */
export const Top = ({ children }: MainLayoutSlotProps) => children;
/** Content rendered on the grid between the main content and the footer. */
export const Bottom = ({ children }: MainLayoutSlotProps) => children;

export type MainLayoutProps = {
  /** Props of the back link displayed under the header. Omit it to render no back link. */
  backLinkProps?: LinkProps;
  /** Props passed to `Header`. Omit it to render no header. */
  headerProps?: HeaderProps;
  /** Props passed to `Footer`. Omit it to render no footer. */
  footerProps?: FooterProps;
  /** Props passed to `DebugGrid`. Omit it to render no debug grid. */
  debugGridProps?: DebugGridProps;
  /** Additional class applied to the layout root element. */
  className?: string;
  /** Native props passed to `<main>` when main content is present. */
  mainProps?: Omit<ComponentProps<"main">, "children">;
  /**
   * Main page content, rendered in `<main className="grid">`.
   * Use `MainLayout.Top` and `MainLayout.Bottom` to render content around it.
   */
  children?: ReactNode;
};

type MainLayoutCommonProps = MainLayoutProps & {
  HeaderComponent: ComponentType<HeaderProps>;
  FooterComponent: ComponentType<FooterProps>;
  DebugGridComponent: ComponentType<DebugGridProps>;
  LinkComponent: ComponentType<LinkProps>;
  IconComponent: ComponentType<IconProps>;
};

const DEFAULT_CLASS = "af-main-layout";

const isSlot = (
  child: ReactNode,
  slot: ComponentType<MainLayoutSlotProps>,
): child is ReactElement<MainLayoutSlotProps> =>
  isValidElement(child) && child.type === slot;

export const MainLayoutCommon = ({
  debugGridProps,
  headerProps,
  footerProps,
  backLinkProps,
  className,
  mainProps,
  children,
  HeaderComponent,
  FooterComponent,
  DebugGridComponent,
  LinkComponent,
  IconComponent,
}: MainLayoutCommonProps) => {
  const childrenArray = flattenFragments(children);

  const top = childrenArray.filter((child) => isSlot(child, Top));
  const bottom = childrenArray.filter((child) => isSlot(child, Bottom));
  const mainChildren = childrenArray.filter(
    (child) => !isSlot(child, Top) && !isSlot(child, Bottom),
  );

  return (
    <>
      {debugGridProps ? <DebugGridComponent {...debugGridProps} /> : null}
      <div
        className={getClassName({
          baseClassName: DEFAULT_CLASS,
          className,
        })}
      >
        {headerProps ? <HeaderComponent {...headerProps} /> : null}
        <div className={`${DEFAULT_CLASS}__content`}>
          {backLinkProps ? (
            <div className={`grid ${DEFAULT_CLASS}__back-link`}>
              <LinkComponent
                leftIcon={<IconComponent src={arrowLeftAlt} />}
                {...backLinkProps}
              />
            </div>
          ) : null}
          {top.map((slot) => (
            <div
              key={slot.key}
              className={getClassName({
                baseClassName: `${DEFAULT_CLASS}__top`,
                className: slot.props.className,
              })}
            >
              {slot}
            </div>
          ))}
          {mainChildren.length > 0 ? (
            <main
              {...mainProps}
              className={getClassName({
                baseClassName: `${DEFAULT_CLASS}__center`,
                className: `grid ${mainProps?.className ?? ""}`,
              })}
            >
              {mainChildren}
            </main>
          ) : null}
          {bottom.map((slot) => (
            <div
              key={slot.key}
              className={getClassName({
                baseClassName: `${DEFAULT_CLASS}__bottom`,
                className: slot.props.className,
              })}
            >
              {slot}
            </div>
          ))}
        </div>
        {footerProps ? <FooterComponent {...footerProps} /> : null}
      </div>
    </>
  );
};

MainLayoutCommon.Top = Top;
MainLayoutCommon.Bottom = Bottom;

type MainLayoutSubComponents = Pick<typeof MainLayoutCommon, "Top" | "Bottom">;

export type MainLayoutWithSubComponents = ((
  props: MainLayoutProps,
) => ReactElement) &
  MainLayoutSubComponents;
