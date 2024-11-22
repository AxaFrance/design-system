/* eslint-disable @typescript-eslint/no-explicit-any */
import { Placement } from "@popperjs/core";
import React from "react";
import { usePopper } from "react-popper";
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
  const [arrowElement, setArrowElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement,
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

      {isOpen && (
        <div
          ref={setPopperElement as any}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styles.popper}
          data-popper-placement={placement}
          className="af-popover__container-pop"
          {...attributes.popper}
        >
          <div>{children}</div>
          <div
            ref={setArrowElement as any}
            style={styles.arrow}
            className="af-popover__arrow"
          />
        </div>
      )}
    </div>
  );
};
