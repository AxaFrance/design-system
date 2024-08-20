import { ReactNode } from "react";
import { getComponentClassName } from "../slash";

const defaultClassName = "af-steps-new";

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
};
const Steps = ({
  children,
  className = defaultClassName,
  classModifier,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
};

export { Steps };
