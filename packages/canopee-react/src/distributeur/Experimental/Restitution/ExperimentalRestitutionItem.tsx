import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export const ExperimentalRestitutionItem = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"dt">>) => {
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
