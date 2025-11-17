import React from "react";
import { PopoverProps } from "./Popover.types";
import { PopoverBase } from "./PopoverBase";

export const PopoverClick = ({
  children,
  placement,
  className,
  classModifier,
  element,
}: PopoverProps) => {
  const wrapperRef = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const [isPopoverHover, setPopoverHover] = React.useState(false);

  const handleClick = (
    event:
      | MouseEvent
      | React.MouseEvent
      | React.KeyboardEvent<HTMLDivElement>
      | React.FocusEvent,
    isOpenValue?: boolean,
  ) => {
    if (isPopoverHover || !wrapperRef.current || isOpenValue === isOpen) {
      event.stopPropagation();
      return;
    }

    setOpen((oldIsOpen) => isOpenValue ?? !oldIsOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  };

  const handleMouseEnterPopover = () => {
    setPopoverHover(true);
  };

  const handleMouseLeavePopover = () => {
    setPopoverHover(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      ref={wrapperRef}
      className="af-popover__wrapper af-popover__wrapper--click"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onBlur={(event) => handleClick(event, false)}
    >
      <PopoverBase
        onMouseEnter={handleMouseEnterPopover}
        onMouseLeave={handleMouseLeavePopover}
        isOpen={isOpen}
        placement={placement}
        className={className}
        classModifier={classModifier}
        element={element}
      >
        {children}
      </PopoverBase>
    </div>
  );
};
