import successIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import warningIcon from "@material-symbols/svg-400/outlined/warning-fill.svg";
import type { ReactNode } from "react";
import { Svg } from "../../Svg/Svg";

export const itemMessageVariants = {
  error: "error",
  success: "success",
  warning: "warning",
} as const;

export type ItemMessageVariants = keyof typeof itemMessageVariants;

export type ItemMessageProps = {
  message?: ReactNode;
  id?: string;
  messageType?: ItemMessageVariants;
};

export const ItemMessage = ({
  message,
  id,
  messageType = "error",
}: ItemMessageProps) => {
  if (!message) {
    return null;
  }

  const getIcon = () => {
    if (messageType === "success") return successIcon;
    if (messageType === "warning") return warningIcon;

    return errorIcon;
  };

  return (
    <small
      id={id}
      className={`af-item-message af-item-message--${messageType}`}
      role={messageType === "success" ? undefined : "alert"}
      aria-live="assertive"
    >
      <Svg
        src={getIcon()}
        className="af-item-message__icon"
        aria-hidden="true"
      />
      <span className="af-item-message__message">{message}</span>
    </small>
  );
};
