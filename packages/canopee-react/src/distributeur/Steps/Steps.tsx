import type { ReactNode } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

const defaultClassName = "af-steps-new";

type Props = {
  children: ReactNode;
  className?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};
const Steps = ({ children, className, classModifier }: Props) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: classModifier?.split(" "),
    className,
  });

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
};

export { Steps };
