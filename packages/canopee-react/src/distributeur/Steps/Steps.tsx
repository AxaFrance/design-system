import type { ReactNode } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

const defaultClassName = "af-steps-new";

type Props = {
  children: ReactNode;
  className?: string;
};
const Steps = ({ children, className }: Props) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: [],
    className,
  });

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
};

export { Steps };
