import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StepBase } from "./StepBase";

type Props = ComponentPropsWithoutRef<typeof StepBase> & {
  number?: ReactNode;
};
const StepNoLink = ({
  number,
  title,
  className = "af-steps-list-step",
  ...otherProps
}: Props) => (
  <StepBase
    className={`${className} ${number ? "number" : ""}`}
    title={title}
    {...otherProps}
  >
    <div className="af-steps-list-step__label">
      {Boolean(number) && (
        <div className="af-steps-list-step__number">{number}</div>
      )}
      <div className="af-steps-list-step__title">{title}</div>
    </div>
  </StepBase>
);

export { StepNoLink };
