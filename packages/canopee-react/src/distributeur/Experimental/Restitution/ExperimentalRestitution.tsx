import { type ComponentProps, type PropsWithChildren, useId } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";
import {
  ExperimentalRestitutionHeader,
  type ExperimentalRestitutionHeaderProps,
} from "./ExperimentalRestitutionHeader";

type ExperimentalRestitutionProps = PropsWithChildren &
  (ExperimentalRestitutionHeaderProps | Record<string, never>) &
  ComponentProps<"article">;

export const ExperimentalRestitution = ({
  title,
  children,
  rightElement,
  subtitle,
  className,
  ...otherProps
}: ExperimentalRestitutionProps) => {
  const headerId = useId();
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution",
    className,
  });

  return (
    <article
      className={componentClassName}
      aria-labelledby={headerId}
      {...otherProps}
    >
      {title ? (
        <ExperimentalRestitutionHeader
          rightElement={rightElement}
          subtitle={subtitle}
          title={title}
          id={headerId}
        />
      ) : null}

      <div className="experimental-af-restitution__content">{children}</div>
    </article>
  );
};
