import type { PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionRowProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

export const ExperimentalRestitutionRow = ({
  children,
  className,
  ...props
}: ExperimentalRestitutionRowProps) => {
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
