import checkCircleOutline from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import warningIcon from "@material-symbols/svg-400/outlined/warning-fill.svg";
import infoIcon from "@material-symbols/svg-400/outlined/info-fill.svg";
import wbIncandescentOutlined from "@material-symbols/svg-400/outlined/emoji_objects-fill.svg";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactElement,
  useMemo,
} from "react";

import { Button } from "../Button/ButtonCommon";
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
  action?: ReactElement<typeof Link | typeof Button>;
  iconSize?: number;
  heading?: Headings;
} & ComponentPropsWithoutRef<"div">;

const getIconFromType = (variant: MessageVariants) =>
  ({
    [messageVariants.validation]: checkCircleOutline,
    [messageVariants.error]: errorIcon,
    [messageVariants.neutral]: infoIcon,
    [messageVariants.warning]: warningIcon,
    [messageVariants.information]: wbIncandescentOutlined,
  })[variant] || wbIncandescentOutlined;

export const Message = ({
  variant = messageVariants.information,
  className,
  title,
  children,
  action,
  iconSize = 24,
  heading: Heading = "h4",
}: PropsWithChildren<MessageProps>) => {
  const icon = useMemo(() => getIconFromType(variant), [variant]);

  return (
    <div
      className={["af-message", `af-message--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      role="alert"
    >
      <Svg
        src={icon}
        width={iconSize}
        height={iconSize}
        className="af-message__icon"
        aria-hidden
      />
      <div className="af-message__content">
        {title && <Heading className="af-message__title">{title}</Heading>}
        {children}
        {action && <div className="af-message__action">{action}</div>}
      </div>
    </div>
  );
};
