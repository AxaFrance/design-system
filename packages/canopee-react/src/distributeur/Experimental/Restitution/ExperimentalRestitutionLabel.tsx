import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionLabelProps = PropsWithChildren<
  ComponentProps<"dt">
>;

export const ExperimentalRestitutionLabel = ({
  children,
  className,
  ...props
}: ExperimentalRestitutionLabelProps) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__listdef-item",
    className,
  });

  return (
    <dt className={componentClassName} {...props}>
      {children}
    </dt>
  );
};
