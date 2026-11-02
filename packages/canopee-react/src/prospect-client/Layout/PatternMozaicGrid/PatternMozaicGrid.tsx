import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ComponentProps,
  type ReactNode,
} from "react";
import "@axa-fr/canopee-css/prospect/Layout/PatternMozaicGrid/PatternMozaicGridAll.css";
import { getClassName } from "../../utilities/getClassName";

export type PatternMozaicGridProps = Omit<
  ComponentProps<"section">,
  "children"
> & {
  /** Direct elements sharing the same responsive column spans. Must forward style to their root. */
  children: ReactNode;
  /** Initial span for every child, used when no mobile span is provided. Defaults to 2. */
  cols?: number;
  /** Columns per child on mobile. Defaults to cols. */
  "data-cols-mobile"?: number;
  /** Columns per child above 667px. Defaults to the mobile span. */
  "data-cols-tablet"?: number;
  /** Columns per child above 1023px. Defaults to the tablet span. */
  "data-cols-desktop-small"?: number;
  /** Columns per child above 1279px. Defaults to the small desktop span. */
  "data-cols-desktop-medium"?: number;
  /** Columns per child above 1599px. Defaults to the medium desktop span. */
  "data-cols-desktop-large"?: number;
};

export const PatternMozaicGrid = ({
  children,
  cols = 2,
  "data-cols-mobile": colsMobile = cols,
  "data-cols-tablet": colsTablet = colsMobile,
  "data-cols-desktop-small": colsDesktopSmall = colsTablet,
  "data-cols-desktop-medium": colsDesktopMedium = colsDesktopSmall,
  "data-cols-desktop-large": colsDesktopLarge = colsDesktopMedium,
  className,
  ...sectionProps
}: PatternMozaicGridProps) => {
  const responsiveStyle: CSSProperties & Record<`--cols-${string}`, number> = {
    "--cols-mobile": colsMobile,
    "--cols-tablet": colsTablet,
    "--cols-desktop-small": colsDesktopSmall,
    "--cols-desktop-medium": colsDesktopMedium,
    "--cols-desktop-large": colsDesktopLarge,
  };

  const childrenWithCols = Children.map(children, (child) => {
    if (!isValidElement<{ style?: CSSProperties }>(child)) {
      return child;
    }

    return cloneElement(child, {
      style: {
        ...child.props.style,
        ...responsiveStyle,
      },
    });
  });

  return (
    <section
      {...sectionProps}
      className={getClassName({
        baseClassName: "af-pattern-mozaic-grid",
        className: `subgrid ${className ?? ""}`,
      })}
    >
      {childrenWithCols}
    </section>
  );
};
