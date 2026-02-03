import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionColumnProps = PropsWithChildren &
  ComponentProps<"div">;

export const ExperimentalRestitutionColumn = ({
  children,
  className,
  ...props
}: ExperimentalRestitutionColumnProps) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__column",
    className,
  });

  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};
