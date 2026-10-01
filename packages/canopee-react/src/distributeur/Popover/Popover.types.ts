import type { Placement } from "@floating-ui/react";

export type PopoverModes = "hover" | "click";

export type PopoverProps = {
  className?: string;
  size?: "small";
  placement?: Placement;
  children?: React.ReactNode;
  element: React.ReactNode;
};
