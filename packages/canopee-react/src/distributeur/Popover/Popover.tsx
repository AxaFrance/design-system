import type { Placement } from "@floating-ui/react";
import React from "react";
import type { PopoverModes } from "./Popover.types";
import { PopoverClick } from "./PopoverClick";
import { PopoverOver } from "./PopoverOver";

type Props = {
  className?: string;
  /** @deprecated Use `className` instead. */
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
