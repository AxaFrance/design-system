import { type ComponentProps } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;
};

export const Radio = ({ className, isInvalid, ...props }: RadioProps) => (
  <input
    {...props}
    className={["af-radio", isInvalid && "af-radio--invalid", className]
      .filter(Boolean)
      .join(" ")}
    type="radio"
  />
);

Radio.displayName = "Radio";
