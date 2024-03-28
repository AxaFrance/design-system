import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "@axa-fr/design-system-css/dist/Restitution/Restitution.scss";
import { getComponentClassName } from "../Form/core";

export type RestitutionProps = ComponentPropsWithoutRef<"dl"> & {
  label: string;
  classModifier?: string;
};

export const Restitution = ({
  label,
  children = "-",
  className,
  classModifier,
}: PropsWithChildren<RestitutionProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-restitution__listdef",
  );
  return (
    <dl className={componentClassName}>
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{children}</dd>
    </dl>
  );
};
