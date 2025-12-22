import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { Icon } from "../Icon/IconCommon";
import { Link } from "../Link/LinkCommon";
import { messageBarVariants } from "./constants";
import type { MessageBarVariants } from "./types";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export type MessageBarProps = {
  /** Message variant (validation, error, warning, information, neutral) */
  variant: MessageBarVariants;
  /** Title displayed in the message */
  title?: string;
  /** Main content of the message */
  children?: ReactNode;
  /** Action (link or button) displayed on the right side of the message */
  action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
  /** Icon source */
  icon: string;
  /** Icon size in pixels */
  iconSize?: number;
  /** HTML heading level used for the title */
  heading?: Headings;
} & ComponentPropsWithoutRef<"section">;

type MessageBarPropsWithComponents = MessageBarProps & {
  IconComponent: typeof Icon;
};

const defaultClassName = "af-message-bar";

export const MessageBarCommon = ({
  variant = messageBarVariants.blue,
  className,
  title,
  children,
  action,
  icon,
  heading: Heading = "h4",
  IconComponent,
  ...sectionProps
}: MessageBarPropsWithComponents) => {
  return (
    <section
      className={[
        defaultClassName,
        variant && `${defaultClassName}--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...sectionProps}
    >
      <IconComponent
        src={icon}
        size="S"
        className="af-message-bar__icon"
        role="presentation"
      />
      <div className="af-message-bar__content">
        {title ? (
          <Heading className="af-message-bar__title">{title}</Heading>
        ) : null}
        {children}
        {action ? <div className="af-message-bar__action">{action}</div> : null}
      </div>
    </section>
  );
};
