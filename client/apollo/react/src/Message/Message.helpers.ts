import infoIcon from "@material-symbols/svg-400/outlined/emoji_objects-fill.svg";
import { iconByVariant, messageVariants } from "./constants";
import type { MessageVariants } from "./types";

/**
 * Returns the appropriate ARIA role for a message variant
 */
export const getAriaRole = (variant: MessageVariants): "alert" | "status" =>
  variant === messageVariants.error || variant === messageVariants.warning
    ? "alert"
    : "status";

/**
 * Returns the icon associated with the message variant.
 * If the variant is not recognized, it defaults to the information icon.
 */
export const getIconFromVariant = (variant: MessageVariants) =>
  iconByVariant[variant] || infoIcon;
