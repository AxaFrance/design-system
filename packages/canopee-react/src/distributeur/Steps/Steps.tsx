import { ReactNode } from "react";
import { getClassName } from "../utilities";

const defaultClassName = "af-steps-new";

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
  showLastStepCheck?: boolean;
};
const Steps = ({
  children,
  className = defaultClassName,
  classModifier,
  showLastStepCheck = true, // Par défaut à true pour comportement actuel
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: [
      classModifier,
      !showLastStepCheck ? "no-last-check" : undefined,
    ],
    className,
  });

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
};

export { Steps };
