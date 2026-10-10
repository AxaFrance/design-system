import React from "react";
import type { PopoverProps } from "./Popover.types";
import { PopoverBase } from "./PopoverBase";

export const PopoverOver = ({
  children,
  placement,
  className,
  element: content,
  triggerAriaLabel,
}: PopoverProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const contentId = React.useId();

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
      aria-label={triggerAriaLabel}
      // The open popover sits in the trigger, whose content a fixed name hides
      aria-describedby={isOpen && triggerAriaLabel ? contentId : undefined}
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
        contentId={contentId}
      >
        {children}
      </PopoverBase>
    </div>
  );
};
