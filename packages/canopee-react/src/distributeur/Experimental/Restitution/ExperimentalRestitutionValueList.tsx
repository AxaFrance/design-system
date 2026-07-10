import type { ReactNode } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionValueListProps = {
  items: ReactNode[];
} & React.ComponentProps<"ul">;

export const ExperimentalRestitutionValueList = ({
  items,
  className,
  ...props
}: ExperimentalRestitutionValueListProps) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__listdef-value-list",
    className,
  });

  return (
    <ul className={componentClassName} {...props}>
      {items.map((item) => (
        <li key={null}>{item}</li>
      ))}
    </ul>
  );
};
