import { messageVariants } from "./constants";
import type { MessageVariants } from "./types";

/**
 * Returns the appropriate ARIA role for a message variant
 */
export const getAriaRole = (variant: MessageVariants): "alert" | "status" =>
  variant === messageVariants.error || variant === messageVariants.warning
    ? "alert"
    : "status";
