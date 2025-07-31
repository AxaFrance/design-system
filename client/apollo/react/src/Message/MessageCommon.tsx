import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { Icon } from "../Icon/IconCommon";
import { Link } from "../Link/LinkCommon";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { iconByVariant, messageVariants } from "./constants";
import { getAriaRole } from "./Message.helpers";
import type { MessageVariants } from "./types";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export type MessageProps = {
  /** Message variant (validation, error, warning, information, neutral) */
  variant: MessageVariants;
  /** Title displayed in the message */
  title?: string;
  /** Main content of the message */
  children?: ReactNode;
  /** Action (link or button) displayed on the right side of the message */
  action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
  /** Icon size in pixels */
  iconSize?: number;
  /** HTML heading level used for the title */
  heading?: Headings;
} & ComponentPropsWithoutRef<"section">;

type MessagePropsWithComponents = MessageProps & {
  IconComponent: typeof Icon;
};

export const MessageCommon = ({
  variant = messageVariants.information,
  className,
  title,
  children,
  action,
  iconSize = 24,
  heading: Heading = "h4",
  IconComponent,
  ...sectionProps
}: MessagePropsWithComponents) => {
  const role = getAriaRole(variant);

  return (
    <section
      className={getComponentClassName("af-message", className, variant)}
      role={role}
      {...sectionProps}
    >
      <IconComponent
        src={iconByVariant[variant]}
        width={iconSize}
        height={iconSize}
        className="af-message__icon"
        role="presentation"
      />
      <div className="af-message__content">
        {title && <Heading className="af-message__title">{title}</Heading>}
        {children}
        {action && <div className="af-message__action">{action}</div>}
      </div>
    </section>
  );
};
