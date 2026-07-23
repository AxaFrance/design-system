import { forwardRef, type ComponentProps } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;
  hasWarning?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, isInvalid, hasWarning, ...props }, ref) => (
    <input
      {...props}
      className={[
        "af-radio",
        isInvalid && "af-radio--invalid",
        hasWarning && "af-radio--warning",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type="radio"
      ref={ref}
    />
  ),
);

Radio.displayName = "Radio";
