import React from "react";
import { PopoverProps } from "./Popover.types";
import { PopoverBase } from "./PopoverBase";

export const PopoverOver = ({
  children,
  placement,
  className,
  classModifier,
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
        classModifier={classModifier}
        element={content}
      >
        {children}
      </PopoverBase>
    </div>
  );
};
