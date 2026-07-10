import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionValueProps = PropsWithChildren &
  ComponentProps<"dd">;

export const ExperimentalRestitutionValue = ({
  children,
  className,
  ...props
}: ExperimentalRestitutionValueProps) => {
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
