import { messageBarVariants } from "./constants";
import type { MessageBarVariants } from "./types";

/**
 * Returns the appropriate ARIA role for a message variant
 */
export const getAriaRole = (variant: MessageBarVariants): "alert" | "status" =>
  variant === messageBarVariants.error || variant === messageBarVariants.warning
    ? "alert"
    : "status";
