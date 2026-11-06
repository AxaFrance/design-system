import type { ComponentProps, CSSProperties, ReactNode } from "react";
import "@axa-fr/canopee-css/prospect/Layout/PatternMozaicFree/PatternMozaicFreeAll.css";
import { getClassName } from "../../utilities/getClassName";

export type PatternMozaicFreeProps = Omit<
  ComponentProps<"section">,
  "children"
> & {
  /** Content arranged in equal-width columns, independently of the application grid. */
  children: ReactNode;
  /** Number of columns above 1023px. Below this breakpoint, uses one column. Defaults to 2. */
  cols?: number;
};

export const PatternMozaicFree = ({
  children,
  cols = 2,
  className,
  style,
  ...sectionProps
}: PatternMozaicFreeProps) => {
  const gridStyle: CSSProperties & { "--mozaic-free-cols": number } = {
    ...style,
    "--mozaic-free-cols": cols,
  };

  return (
    <section
      {...sectionProps}
      className={getClassName({
        baseClassName: "af-pattern-mozaic-free",
        className,
      })}
      style={gridStyle}
    >
      {children}
    </section>
  );
};
