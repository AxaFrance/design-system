import { type ComponentProps, type ComponentType, useMemo } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { AccordionTagDateContainer } from "./AccordionTagDateContainerCommon";
import { Icon } from "../Icon/IconCommon";

export const accordionVariants = {
  primary: "primary",
  secondary: "secondary",
  inverse: "inverse",
  message_bar_info: "message_bar_info",
  message_bar_warning: "message_bar_warning",
} as const;

export type AccordionVariants = keyof typeof accordionVariants;

type AccordionProps = {
  variant?: AccordionVariants;
  title: string;
  subtitle?: string;
  icon?: string;
  value?: string;
  isTitleFirst?: boolean;
  AccordionCoreComponent: ComponentType<
    Omit<ComponentProps<typeof AccordionCore>, "ClickIconComponent">
  >;
  AccordionTagDateContainerComponent: ComponentType<
    Omit<ComponentProps<typeof AccordionTagDateContainer>, "TagComponent">
  >;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
} & Omit<ComponentProps<typeof AccordionTagDateContainer>, "TagComponent"> &
  Partial<ComponentProps<typeof AccordionCore>>;

export const Accordion = ({
  variant = accordionVariants.primary,
  children,
  icon,
  title,
  subtitle,
  tagLabel,
  tagProps,
  dateLabel,
  dateProps,
  value,
  AccordionCoreComponent,
  AccordionTagDateContainerComponent,
  IconComponent,
  ...accordionCoreProps
}: AccordionProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-accordion__summary", variant),
    [variant],
  );

  return (
    <AccordionCoreComponent
      summary={
        <>
          {icon && (
            <IconComponent
              src={icon}
              variant="primary"
              size="S"
              className="af-accordion__icon"
            />
          )}
          <div className="af-accordion__title-container">
            {title && <p className="af-accordion__title">{title}</p>}
            {subtitle && <p className="af-accordion__subtitle">{subtitle}</p>}
          </div>
          <AccordionTagDateContainerComponent
            tagLabel={tagLabel}
            dateLabel={dateLabel}
            tagProps={tagProps}
            dateProps={dateProps}
          />
          {value && <p className="af-accordion__value">{value}</p>}
        </>
      }
      summaryProps={{ className: componentClassName }}
      {...accordionCoreProps}
    >
      {children}
    </AccordionCoreComponent>
  );
};
