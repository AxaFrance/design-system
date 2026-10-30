import "@axa-fr/canopee-css/distributeur/VisuallyHidden/VisuallyHidden.css";
import type { ComponentProps } from "react";

/**
 * Text announced by assistive technologies but not displayed.
 * Internal helper: not exported by the package entry points.
 */
export const VisuallyHidden = (
  props: Omit<ComponentProps<"span">, "className" | "style">,
) => <span className="af-visually-hidden" {...props} />;
