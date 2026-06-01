import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type RestitutionProps = ComponentPropsWithoutRef<"dl"> & {
  label: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  variant?: "marge";
};

export const Restitution = ({
  label,
  children = "-",
  className,
  classModifier,
  variant,
}: PropsWithChildren<RestitutionProps>) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__listdef",
    modifiers: [variant, ...(classModifier?.split(" ") ?? [])],
    className,
  });
  return (
    <dl className={componentClassName}>
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{children}</dd>
    </dl>
  );
};
