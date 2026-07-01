import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export const ExperimentalRestitutionValue = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"dd">) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__listdef-value",
    className,
  });

  return (
    <dd className={componentClassName} {...props}>
      {children}
    </dd>
  );
};
