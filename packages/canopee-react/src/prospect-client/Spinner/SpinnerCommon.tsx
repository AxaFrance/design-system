import type { ComponentPropsWithoutRef } from "react";
import { VisuallyHidden } from "../utilities/VisuallyHidden";

export const spinnerVariants = {
  blue: "blue",
  gray: "gray",
  white: "white",
} as const;

export type SpinnerVariants = keyof typeof spinnerVariants;

const DEFAULT_CLASSNAME = "af-spinner";

export type SpinnerProps = {
  size?: 24 | 32 | 40;
  variant?: SpinnerVariants;
  text?: string;
} & ComponentPropsWithoutRef<"div">;

const Spinner = ({
  size = 40,
  variant = "blue",
  text = "Chargement en cours",
  className,
  ...props
}: SpinnerProps) => (
  <div
    role="status"
    {...props}
    aria-label={text}
    className={[
      DEFAULT_CLASSNAME,
      `${DEFAULT_CLASSNAME}--${variant}`,
      `${DEFAULT_CLASSNAME}--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={
      {
        "--spinner-size": size,
      } as React.CSSProperties
    }
  >
    <VisuallyHidden>{text}</VisuallyHidden>
  </div>
);

Spinner.displayName = "Spinner";

export { Spinner };
