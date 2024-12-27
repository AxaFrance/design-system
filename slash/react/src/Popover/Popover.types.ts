import { Placement } from "@floating-ui/react";

export type PopoverModes = "hover" | "click";

export type PopoverProps = {
  className?: string;
  classModifier?: string;
  placement?: Placement;
  children?: React.ReactNode;
  element: React.ReactNode;
};
