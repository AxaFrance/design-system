import { ComponentPropsWithoutRef, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

export const cardMessageVariants = {
  info: "info",
  warning: "warning",
  error: "error",
  neutral: "neutral",
} as const;
export type CardMessageVariants = keyof typeof cardMessageVariants;

export type CardMessageProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardMessageVariants;
  title?: string;
  text: string;
};

export const CardMessage = ({
  variant = "info",
  title,
  text,
  className,
  ...props
}: CardMessageProps) => {
  const componentClassName = useMemo(() => {
    const newClassModifier = [variant].filter(Boolean).join(" ");

    return getComponentClassName(
      "af-card-message",
      className,
      newClassModifier,
    );
  }, [className, variant]);

  return (
    <div {...props} className={componentClassName}>
      {title && <span className="af-card-message--title">{title}</span>}
      <span className="af-card-message--text">{text}</span>
    </div>
  );
};
