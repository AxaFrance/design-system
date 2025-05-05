import { type ComponentProps, type ComponentType, useMemo } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { AccordionTagDateContainer } from "./AccordionTagDateContainerCommon";
import { Icon } from "../Icon/IconCommon";

export const accordionVariants = {
  primary: "primary",
  secondary: "secondary",
  inverse: "inverse",
  "message-bar-info": "message-bar-info",
  "message-bar-warning": "message-bar-warning",
} as const;

export type AccordionVariants = keyof typeof accordionVariants;

type AccordionProps = {
  variant?: AccordionVariants;
  title: string;
  subtitle?: string;
  icon?: string;
  info1: string;
  info2: string;
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
  className,
  children,
  icon,
  title,
  subtitle,
  tagLabel,
  tagProps,
  dateLabel,
  dateProps,
  info1,
  info2,
  AccordionCoreComponent,
  AccordionTagDateContainerComponent,
  IconComponent,
  ...accordionCoreProps
}: AccordionProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-accordion", className, variant),
    [className, variant],
  );

  return (
    <AccordionCoreComponent
      className={componentClassName}
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
          {info1 && <p className="af-accordion__info1">{info1}</p>}
          {info2 && <p className="af-accordion__info2">{info2}</p>}
        </>
      }
      // summaryProps={{ className: componentClassName }}
      {...accordionCoreProps}
    >
      {children}
    </AccordionCoreComponent>
  );
};
