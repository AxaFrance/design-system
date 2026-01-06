import type { ComponentType } from "react";
import { getClassName } from "../utilities/getClassName";
import type { IconProps } from "../Icon/IconCommon";
import type { AccordionCoreProps } from "../AccordionCore/AccordionCoreCommon";

export const accordionContextualVariants = {
  info: "info",
  warning: "warning",
  reverse: "reverse",
} as const;

export type AccordionContextualVariants =
  (typeof accordionContextualVariants)[keyof typeof accordionContextualVariants];

export type AccordionContextualProps = {
  variant?: AccordionContextualVariants;
  title: string;
  icon?: string;
} & Omit<AccordionCoreProps, "summary">;

type AccordionContextualCommonProps = AccordionContextualProps & {
  AccordionCoreComponent: ComponentType<AccordionCoreProps>;
  IconComponent: ComponentType<IconProps>;
};

const getIconVariant = (variant: AccordionContextualVariants) => {
  if (variant === "info") return "primary";
  if (variant === "warning") return "error";
  if (variant === "reverse") return "secondary";
  return undefined;
};

export const AccordionContextualCommon = ({
  variant = accordionContextualVariants.info,
  className,
  children,
  icon,
  title,
  AccordionCoreComponent,
  IconComponent,
  ...accordionCoreProps
}: AccordionContextualCommonProps) => (
  <AccordionCoreComponent
    className={getClassName({
      baseClassName: "af-apollo-accordion-contextual",
      modifiers: [variant],
      className,
    })}
    showArrowAsClickIcon={false}
    arrowIconVariant={getIconVariant(variant)}
    summary={
      <>
        {icon ? (
          <IconComponent
            role="presentation"
            src={icon}
            variant={getIconVariant(variant)}
            size="S"
            className="af-accordion__icon"
          />
        ) : null}
        <p className="af-accordion__title">{title}</p>
      </>
    }
    {...accordionCoreProps}
  >
    {children}
  </AccordionCoreComponent>
);
