import {
  type ComponentProps,
  type ComponentType,
  type ReactNode,
  useMemo,
} from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { AccordionTagDateContainer } from "./AccordionTagDateContainerCommon";

type AccordionProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  value?: string;
  isTitleFirst?: boolean;
  AccordionCoreComponent: ComponentType<
    Omit<ComponentProps<typeof AccordionCore>, "ClickIconComponent">
  >;
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
  AccordionCoreComponent,
  ...accordionCoreProps
}: AccordionProps) => {
  const isMobile = true;
  const isShowingIcon = Boolean(icon && isTitleFirst);
  const summaryClassName = useMemo(
    () =>
      getComponentClassName(
        "af-accordion__summary",
        isTitleFirst ? "title-first" : "",
      ),
    [isTitleFirst],
  );

  return (
    <AccordionCoreComponent
      summary={
        <>
          {isShowingIcon && isMobile && (
            <div className="af-accordion__icon">{icon}</div>
          )}
          {!isTitleFirst && (
            <AccordionTagDateContainer
              tagLabel={tagLabel}
              dateLabel={dateLabel}
              tagProps={tagProps}
              dateProps={dateProps}
            />
          )}
          <div className="af-accordion__title-container">
            {isShowingIcon && !isMobile && (
              <div className="af-accordion__icon">{icon}</div>
            )}
            <p className="af-accordion__title">{title}</p>
            {subtitle && <p className="af-accordion__subtitle">{subtitle}</p>}
          </div>
          {isTitleFirst && (
            <AccordionTagDateContainer
              tagLabel={tagLabel}
              dateLabel={dateLabel}
              tagProps={tagProps}
              dateProps={dateProps}
            />
          )}
          {value && <p className="af-accordion__value">{value}</p>}
        </>
      }
      summaryProps={{ className: summaryClassName }}
      {...accordionCoreProps}
    >
      {children}
    </AccordionCoreComponent>
  );
};
