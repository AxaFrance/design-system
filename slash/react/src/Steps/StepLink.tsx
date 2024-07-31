import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StepBase } from "./StepBase";
import type { CustomClickEvent } from "./types";

type Props = ComponentPropsWithoutRef<typeof StepBase> & {
  href: string;
  number?: ReactNode;
  onClick?: (e: CustomClickEvent) => void;
};
const StepLink = ({
  id,
  href,
  number,
  title,
  className = "past af-steps-list-step",
  onClick,
  ...otherProps
}: Props) => (
  <StepBase
    id={id}
    className={`${className} ${number ? "number" : ""}`}
    title={title}
    {...otherProps}
  >
    <a
      className="af-steps-list-step__label"
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.({ href, id, title, number });
      }}
    >
      {Boolean(number) && (
        <div className="af-steps-list-step__number">{number}</div>
      )}
      <div className="af-steps-list-step__title">{title}</div>
    </a>
  </StepBase>
);

export { StepLink };
