import type { ComponentType } from "react";
import { getClassName } from "../utilities/getClassName";
import type { AccordionTagDateContainerProps } from "./AccordionTagDateContainer/AccordionTagDateContainerCommon";
import type { IconProps } from "../Icon/IconCommon";
import type { AccordionCoreProps } from "../AccordionCore/AccordionCoreCommon";

export const accordionVariants = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type AccordionVariants =
  (typeof accordionVariants)[keyof typeof accordionVariants];

export type AccordionProps = {
  variant?: AccordionVariants;
  title: string;
  subtitle?: string;
  icon?: string;
  info1: string;
  info2: string;
} & AccordionTagDateContainerProps &
  Partial<AccordionCoreProps>;

type AccordionCommonProps = AccordionProps & {
  AccordionCoreComponent: ComponentType<AccordionCoreProps>;
  AccordionTagDateContainerComponent: ComponentType<
    Omit<AccordionTagDateContainerProps, "TagComponent">
  >;
  IconComponent: ComponentType<IconProps>;
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
}: AccordionCommonProps) => (
  <AccordionCoreComponent
    className={getClassName({
      baseClassName: "af-apollo-accordion",
      modifiers: [variant],
      className,
    })}
    summary={
      <>
        {icon ? (
          <IconComponent
            role="presentation"
            src={icon}
            variant="primary"
            size="S"
            className="af-accordion__icon"
          />
        ) : null}
        {title ? <p className="af-accordion__title">{title}</p> : null}
        {subtitle ? <p className="af-accordion__subtitle">{subtitle}</p> : null}
        <AccordionTagDateContainerComponent
          tagLabel={tagLabel}
          dateLabel={dateLabel}
          tagProps={tagProps}
          dateProps={dateProps}
        />
        {info1 ? <p className="af-accordion__info1">{info1}</p> : null}
        {info2 ? <p className="af-accordion__info2">{info2}</p> : null}
      </>
    }
    {...accordionCoreProps}
  >
    {children}
  </AccordionCoreComponent>
);
