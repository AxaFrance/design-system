import type { Placement } from "@floating-ui/react";
import React from "react";
import type { PopoverModes } from "./Popover.types";
import { PopoverClick } from "./PopoverClick";
import { PopoverOver } from "./PopoverOver";

type Props = {
  className?: string;
  placement?: Placement;
  mode: PopoverModes;
  popoverElement: React.ReactNode;
  children: React.ReactNode;
  /** Accessible name of the trigger, when its content does not give one */
  triggerAriaLabel?: string;
};

const Popover = ({
  children,
  placement = "top",
  className,
  mode = "click",
  popoverElement: content,
  triggerAriaLabel,
}: Props) => {
  const Component = mode === "click" ? PopoverClick : PopoverOver;
  return (
    <Component
      className={className}
      placement={placement}
      element={content}
      triggerAriaLabel={triggerAriaLabel}
    >
      {children}
    </Component>
  );
};

export { Popover };
