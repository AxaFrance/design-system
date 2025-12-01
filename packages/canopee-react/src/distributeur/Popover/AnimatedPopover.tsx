/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import {
  arrow,
  FloatingArrow,
  offset,
  Placement,
  useFloating,
} from "@floating-ui/react";
import { getComponentClassName } from "../utilities";

const defaultClassName = "af-popover__container";

type PropsAnimatedPopover = {
  placement: Placement;
  children: React.ReactNode;
  isOpen: boolean;
  target: React.ReactNode;
  className?: string;
  classModifier?: string;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

export const AnimatedPopover = ({
  placement,
  children,
  isOpen,
  target,
  className,
  classModifier,
  onMouseEnter,
  onMouseLeave,
}: PropsAnimatedPopover) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const arrowRef = useRef(null);

  const { floatingStyles, context } = useFloating({
    placement,
    elements: { reference: referenceElement, floating: popperElement },
    middleware: [offset(12), arrow({ element: arrowRef })],
  });

  return (
    <div className={componentClassName}>
      <div
        ref={setReferenceElement as any}
        className="af-popover__container-over"
        role="presentation"
      >
        {target}
      </div>

      {isOpen ? (
        <div
          ref={setPopperElement as any}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={floatingStyles}
          data-popper-placement={placement}
          className="af-popover__container-pop"
        >
          <div>{children}</div>
          <FloatingArrow ref={arrowRef} context={context} fill="white" />
        </div>
      ) : null}
    </div>
  );
};
