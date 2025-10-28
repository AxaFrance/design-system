import { forwardRef, type ComponentProps } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, isInvalid, ...props }, ref) => (
    <input
      {...props}
      className={["af-radio", isInvalid && "af-radio--invalid", className]
        .filter(Boolean)
        .join(" ")}
      type="radio"
      ref={ref}
    />
  ),
);

Radio.displayName = "Radio";
