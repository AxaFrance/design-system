import { ReactNode } from "react";
import { getComponentClassName } from "..";

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
      <ul className="af-steps-list">{children}</ul>
    </div>
  );
};

export { Steps };
