import React from "react";
import type { PopoverProps } from "./Popover.types";
import { PopoverBase } from "./PopoverBase";

export const PopoverOver = ({
  children,
  placement,
  className,
  element: content,
}: PopoverProps) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="af-popover__wrapper af-popover__wrapper--over"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <PopoverBase
        isOpen={isOpen}
        placement={placement}
        className={className}
        element={content}
      >
        {children}
      </PopoverBase>
    </div>
  );
};
