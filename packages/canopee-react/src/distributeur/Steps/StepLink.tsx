import type { ReactNode } from "react";
import { VisuallyHidden } from "../utilities/VisuallyHidden";
import { StepBase, type StepBaseProps } from "./StepBase";
import type { StepLinkOnClickHandler } from "./types";

export type StepLinkProps = StepBaseProps & {
  href: string;
  number?: ReactNode;
  onClick?: StepLinkOnClickHandler;
};

const StepLink = ({
  id,
  href,
  number,
  title,
  className = "past af-steps-list-step",
  onClick,
  stateLabel,
  ...otherProps
}: StepLinkProps) => (
  <StepBase
    id={id}
    className={`${className} ${number ? "number" : ""}`}
    title={title}
    stateLabel={stateLabel}
    {...otherProps}
  >
    <a
      className="af-steps-list-step__label"
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick?.({ href, id, title, number });
        }
      }}
    >
      {Boolean(number) && (
        <div className="af-steps-list-step__number">{number}</div>
      )}
      <div className="af-steps-list-step__title">{title}</div>
      {stateLabel ? <VisuallyHidden> ({stateLabel})</VisuallyHidden> : null}
    </a>
  </StepBase>
);

export { StepLink };
