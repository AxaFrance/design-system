import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import warningIcon from "@material-symbols/svg-400/outlined/warning-fill.svg";
import neutralIcon from "@material-symbols/svg-400/outlined/info-fill.svg";
import infoIcon from "@material-symbols/svg-400/outlined/emoji_objects-fill.svg";
import {
  type ComponentPropsWithoutRef,
  ComponentType,
  type PropsWithChildren,
  type ReactElement,
  useMemo,
} from "react";

import type { ButtonProps } from "../Button/ButtonCommon";
import { Link } from "../Link/LinkCommon";
import { Svg } from "../Svg/Svg";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export const messageVariants = {
  validation: "validation",
  error: "error",
  warning: "warning",
  information: "information",
  neutral: "neutral",
} as const;

export type MessageVariants = keyof typeof messageVariants;

export type MessageProps = {
  variant: MessageVariants;
  title?: string;
  action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
  iconSize?: number;
  heading?: Headings;
  role?: string;
} & ComponentPropsWithoutRef<"div">;

const getDefaultRole = (variant: MessageVariants): string | undefined => {
  if (
    variant === messageVariants.error ||
    variant === messageVariants.warning
  ) {
    return "alert";
  }
  if (
    variant === messageVariants.information ||
    variant === messageVariants.validation ||
    variant === messageVariants.neutral
  ) {
    return "status";
  }
  return undefined;
};

const getIconFromType = (variant: MessageVariants) =>
  ({
    [messageVariants.validation]: validationIcon,
    [messageVariants.error]: errorIcon,
    [messageVariants.neutral]: neutralIcon,
    [messageVariants.warning]: warningIcon,
    [messageVariants.information]: infoIcon,
  })[variant] || infoIcon;

export const Message = ({
  variant = messageVariants.information,
  className,
  title,
  children,
  action,
  iconSize = 24,
  heading: Heading = "h4",
  role,
}: PropsWithChildren<MessageProps>) => {
  const icon = useMemo(() => getIconFromType(variant), [variant]);

  const roleToUse = role ?? getDefaultRole(variant);

  return (
    <div
      className={["af-message", `af-message--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      role={roleToUse}
    >
      <Svg
        src={icon}
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
    </div>
  );
};
