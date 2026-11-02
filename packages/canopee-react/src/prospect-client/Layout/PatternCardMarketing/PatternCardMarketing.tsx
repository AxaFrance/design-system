import type { ComponentProps, ReactNode } from "react";
import "@axa-fr/canopee-css/prospect/Layout/PatternCardMarketing/PatternCardMarketingAll.css";
import { getClassName } from "../../utilities/getClassName";

export type PatternCardMarketingProps = Omit<
  ComponentProps<"section">,
  "children"
> & {
  /** Direct cards to arrange. With exactly three cards, the first spans both rows on desktop. */
  children: ReactNode;
};

export const PatternCardMarketing = ({
  children,
  className,
  ...sectionProps
}: PatternCardMarketingProps) => (
  <section
    {...sectionProps}
    className={getClassName({
      baseClassName: "af-pattern-card-marketing",
      className,
    })}
  >
    {children}
  </section>
);
