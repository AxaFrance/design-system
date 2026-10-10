import type { ComponentProps, CSSProperties } from "react";

const visuallyHiddenStyle: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: 0,
  border: 0,
  overflow: "hidden",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
};

/**
 * Text announced by assistive technologies but not displayed.
 * Internal helper: not exported by the package entry points.
 */
export const VisuallyHidden = (
  props: Omit<ComponentProps<"span">, "style">,
) => <span style={visuallyHiddenStyle} {...props} />;
