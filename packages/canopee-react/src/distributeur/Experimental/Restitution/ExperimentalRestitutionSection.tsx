import {
  useId,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionSectionProps = PropsWithChildren<{
  title: ReactNode;
  children: ReactNode;
}> &
  ComponentProps<"section">;

export const ExperimentalRestitutionSection = ({
  title,
  children,
  className,
  ...props
}: ExperimentalRestitutionSectionProps) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__section",
    className,
  });

  const id = useId();

  return (
    <section className={componentClassName} aria-labelledby={id} {...props}>
      <h2 id={id} className="experimental-af-restitution__section-title">
        {title}
      </h2>
      <div className="experimental-af-restitution__row-content">{children}</div>
    </section>
  );
};
