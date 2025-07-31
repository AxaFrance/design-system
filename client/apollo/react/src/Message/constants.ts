import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import infoIcon from "@material-symbols/svg-400/outlined/emoji_objects-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import neutralIcon from "@material-symbols/svg-400/outlined/info-fill.svg";
import warningIcon from "@material-symbols/svg-400/outlined/warning-fill.svg";
import type { MessageVariants } from "./types";

export const messageVariants: Record<MessageVariants, MessageVariants> = {
  validation: "validation",
  error: "error",
  warning: "warning",
  information: "information",
  neutral: "neutral",
};

export const iconByVariant: Record<MessageVariants, string> = {
  validation: validationIcon,
  error: errorIcon,
  neutral: neutralIcon,
  warning: warningIcon,
  information: infoIcon,
};
