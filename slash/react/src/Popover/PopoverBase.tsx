import { Placement } from "@floating-ui/react";
import React from "react";
import { AnimatedPopover } from "./AnimatedPopover";

import "@axa-fr/design-system-slash-css/dist/Popover/Popover.css";

const defaultClassName = "af-popover__container";

type Props = {
  placement?: Placement;
  className?: string;
  classModifier?: string;
  element: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

const PopoverBase = ({
  children,
  isOpen,
  placement = "right",
  className = defaultClassName,
  classModifier,
  element,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <AnimatedPopover
      target={children}
      placement={placement}
      isOpen={isOpen}
      className={className}
      classModifier={classModifier}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {element}
    </AnimatedPopover>
  );
};

export { PopoverBase };
