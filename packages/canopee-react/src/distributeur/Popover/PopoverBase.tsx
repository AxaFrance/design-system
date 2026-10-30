import type { Placement } from "@floating-ui/react";
import React from "react";
import { AnimatedPopover } from "./AnimatedPopover";

import "@axa-fr/canopee-css/distributeur/Popover/Popover.css";

type Props = {
  placement?: Placement;
  className?: string;
  element: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  contentId?: string;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

const PopoverBase = ({
  children,
  isOpen,
  placement = "right",
  className,
  element,
  contentId,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <AnimatedPopover
      target={children}
      placement={placement}
      isOpen={isOpen}
      className={className}
      contentId={contentId}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {element}
    </AnimatedPopover>
  );
};

export { PopoverBase };
