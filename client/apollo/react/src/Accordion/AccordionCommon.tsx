import type { ComponentProps, ComponentType } from "react";
import type { TagProps } from "../Tag/TagCommon";
import { getClassName } from "../utilities/getClassName";
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
  dateLabel?: string;
  dateProps?: Omit<ComponentProps<"time">, "children">;
  tagLabel?: string;
  tagProps?: Omit<TagProps, "children">;
  isPlain?: boolean;
} & Omit<AccordionCoreProps, "summary">;

type AccordionCommonProps = AccordionProps & {
  AccordionCoreComponent: ComponentType<AccordionCoreProps>;
  TagComponent: ComponentType<TagProps>;
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
  TagComponent,
  IconComponent,
  isPlain,
  ...accordionCoreProps
}: AccordionCommonProps) => (
  <AccordionCoreComponent
    className={getClassName({
      baseClassName: "af-apollo-accordion",
      modifiers: [variant, isPlain && "plain"],
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
        <p className="af-accordion__title">{title}</p>
        {subtitle ? <p className="af-accordion__subtitle">{subtitle}</p> : null}
        {tagLabel ? (
          <TagComponent
            variant="warning"
            {...tagProps}
            className={getClassName({
              baseClassName: "af-accordion__tag-container",
              className: tagProps?.className,
            })}
          >
            {tagLabel}
          </TagComponent>
        ) : null}
        {dateLabel ? (
          <time
            {...dateProps}
            className={getClassName({
              baseClassName: "af-accordion__date",
              className: dateProps?.className,
            })}
          >
            {dateLabel}
          </time>
        ) : null}
        {info1 ? <p className="af-accordion__info1">{info1}</p> : null}
        {info2 ? <p className="af-accordion__info2">{info2}</p> : null}
      </>
    }
    {...accordionCoreProps}
  >
    {children}
  </AccordionCoreComponent>
);
