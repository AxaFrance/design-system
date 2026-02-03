import type { ComponentProps, PropsWithChildren } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export const ExperimentalRestitutionListDef = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"dl">>) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__listdef",
    className,
  });

  return (
    <dl className={componentClassName} {...props}>
      {children}
    </dl>
  );
};
