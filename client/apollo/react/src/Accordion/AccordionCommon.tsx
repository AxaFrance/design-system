import { type ComponentProps, type ComponentType, useMemo } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";
import {
  AccordionTagDateContainerCommon,
  type AccordionTagDateContainerProps,
} from "./AccordionTagDateContainer/AccordionTagDateContainerCommon";
import { Icon } from "../Icon/IconCommon";

export const accordionVariants = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type AccordionVariants = keyof typeof accordionVariants;

export type AccordionProps = {
  variant?: AccordionVariants;
  title: string;
  subtitle?: string;
  icon?: string;
  info1: string;
  info2: string;
} & AccordionTagDateContainerProps &
  Partial<ComponentProps<typeof AccordionCore>>;

type AccordionCommonProps = AccordionProps & {
  AccordionCoreComponent: ComponentType<ComponentProps<typeof AccordionCore>>;
  AccordionTagDateContainerComponent: ComponentType<
    Omit<ComponentProps<typeof AccordionTagDateContainerCommon>, "TagComponent">
  >;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

export const AccordionCommon = ({
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
}: AccordionCommonProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-apollo-accordion", className, variant),
    [className, variant],
  );

  return (
    <AccordionCoreComponent
      className={componentClassName}
      summary={
        <>
          {icon && (
            <IconComponent
              role="presentation"
              src={icon}
              variant="primary"
              size="S"
              className="af-accordion__icon"
            />
          )}
          {title && <p className="af-accordion__title">{title}</p>}
          {subtitle && <p className="af-accordion__subtitle">{subtitle}</p>}
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
      {...accordionCoreProps}
    >
      {children}
    </AccordionCoreComponent>
  );
};
