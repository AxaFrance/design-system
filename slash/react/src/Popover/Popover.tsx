import { Placement } from "@popperjs/core";
import React from "react";
import { PopoverModes } from "./Popover.types";
import { PopoverClick } from "./PopoverClick";
import { PopoverOver } from "./PopoverOver";

type Props = {
  className?: string;
  classModifier?: string;
  placement?: Placement;
  mode: PopoverModes;
  popoverElement: React.ReactNode;
  children: React.ReactNode;
};

const Popover = ({
  children,
  placement = "top",
  className,
  classModifier,
  mode = "click",
  popoverElement: content,
}: Props) => {
  const Component = mode === "click" ? PopoverClick : PopoverOver;
  return (
    <Component
      className={className}
      classModifier={classModifier}
      placement={placement}
      element={content}
    >
      {children}
    </Component>
  );
};

export { Popover };
