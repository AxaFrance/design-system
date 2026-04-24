import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export const ExperimentalRestitutionColumn = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"div">) => {
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
