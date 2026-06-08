import type { PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export const ExperimentalRestitutionRow = ({
  children,
  className,
  ...props
}: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__row",
    className,
  });

  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};
