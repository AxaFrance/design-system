import {
  useId,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
} from "react";
import type { AccordionCoreProps } from "../AccordionCore/AccordionCoreCommon";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { IconProps, IconVariants } from "../Icon/IconCommon";
import { BREAKPOINT } from "../utilities/constants";
import { getClassName } from "../utilities/getClassName";
import { useIsSmallScreen } from "../utilities/hook/useIsSmallScreen";
import { MessageBarAction } from "./MessageBarAction";
import { MessageBarDescription } from "./MessageBarDescription";
import { MessageBarSummary } from "./MessageBarSummary";
import type { MessageBarVariant } from "./types";

export type MessageBarProps = {
  /** Message title. */
  title: string;
  /** Description. Always visible on desktop and collapsible on mobile. */
  description?: ReactNode;
  /** Icon displayed before the title. */
  icon: string;
  /** Visual variant. */
  variant?: MessageBarVariant;
  /** Initial mobile expanded state for the description. */
  defaultDescriptionOpen?: boolean;
  /** Action button props. No button is rendered when omitted. */
  buttonProps?: ButtonProps;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

const iconVariantByMessageBarVariant: Record<MessageBarVariant, IconVariants> =
  {
    blue: "primary",
    red: "error",
  };

type MessageBarCommonProps = MessageBarProps & {
  AccordionCoreComponent: ComponentType<AccordionCoreProps>;
  ButtonComponent: ComponentType<ButtonProps>;
  IconComponent: ComponentType<IconProps>;
};

export const MessageBarCommon = ({
  title,
  description,
  icon,
  variant = "blue",
  defaultDescriptionOpen = false,
  buttonProps,
  className,
  AccordionCoreComponent,
  ButtonComponent,
  IconComponent,
  ...sectionProps
}: MessageBarCommonProps) => {
  const titleId = useId();
  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const hasDescription = Boolean(description);
  const sectionAriaLabelledBy =
    sectionProps["aria-label"] || sectionProps["aria-labelledby"]
      ? undefined
      : titleId;
  const iconVariant = iconVariantByMessageBarVariant[variant];
  const componentClassName = getClassName({
    baseClassName: "af-message-bar",
    modifiers: [variant],
    className,
  });
  const summary = (
    <MessageBarSummary
      title={title}
      titleId={titleId}
      icon={icon}
      iconVariant={iconVariant}
      IconComponent={IconComponent}
    />
  );
  const action = (
    <MessageBarAction
      buttonProps={buttonProps}
      ButtonComponent={ButtonComponent}
    />
  );
  const body = <MessageBarDescription description={description} />;

  if (hasDescription && isMobile) {
    return (
      <AccordionCoreComponent
        className={componentClassName}
        role="region"
        aria-labelledby={sectionAriaLabelledBy}
        open={defaultDescriptionOpen}
        summary={summary}
        summaryProps={{ className: "af-message-bar__header" }}
        arrowClickIconVariant="ghost"
        arrowIconVariant={iconVariant}
        {...sectionProps}
      >
        {body}
        {action}
      </AccordionCoreComponent>
    );
  }

  return (
    <section
      className={componentClassName}
      aria-labelledby={sectionAriaLabelledBy}
      {...sectionProps}
    >
      <div className="af-message-bar__header">{summary}</div>
      {body}
      {action}
    </section>
  );
};
