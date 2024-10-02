import { useMemo, type ComponentProps, type ReactNode } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCore";
import {
  BREAKPOINT,
  getComponentClassName,
  useIsSmallScreen,
} from "../utilities";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer";

type AccordionProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  value?: string;
  isTitleFirst?: boolean;
} & ComponentProps<typeof AccordionTagDateContainer> &
  Partial<ComponentProps<typeof AccordionCore>>;

export const Accordion = ({
  title,
  children,
  icon,
  subtitle,
  tagLabel,
  tagProps,
  dateLabel,
  dateProps,
  value,
  isTitleFirst = true,
  ...accordionCoreProps
}: AccordionProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const isShowingIcon = Boolean(icon && isTitleFirst);
  const summaryClassName = useMemo(
    () =>
      getComponentClassName(
        "af-accordion__summary",
        isTitleFirst ? "title-first" : "",
      ),
    [isTitleFirst],
  );
  const TagDateContainer = useMemo(
    () => (
      <AccordionTagDateContainer
        tagLabel={tagLabel}
        dateLabel={dateLabel}
        tagProps={tagProps}
        dateProps={dateProps}
      />
    ),
    [tagLabel, dateLabel, tagProps, dateProps],
  );

  return (
    <AccordionCore
      summary={
        <>
          {isShowingIcon && isMobile && (
            <div className="af-accordion__icon">{icon}</div>
          )}
          {!isTitleFirst && TagDateContainer}
          <div className="af-accordion__title-container">
            {isShowingIcon && !isMobile && (
              <div className="af-accordion__icon">{icon}</div>
            )}
            <p className="af-accordion__title">{title}</p>
            {subtitle && <p className="af-accordion__subtitle">{subtitle}</p>}
          </div>
          {isTitleFirst && TagDateContainer}
          {value && <p className="af-accordion__value">{value}</p>}
        </>
      }
      summaryProps={{ className: summaryClassName }}
      {...accordionCoreProps}
    >
      {children}
    </AccordionCore>
  );
};
