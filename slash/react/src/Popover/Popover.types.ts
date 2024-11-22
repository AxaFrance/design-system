import { Placement } from "@popperjs/core";

export type PopoverModes = "hover" | "click";

export type PopoverProps = {
  className?: string;
  classModifier?: string;
  placement?: Placement;
  children?: React.ReactNode;
  element: React.ReactNode;
};
