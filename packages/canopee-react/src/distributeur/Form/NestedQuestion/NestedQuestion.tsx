import "@axa-fr/canopee-css/distributeur/Form/NestedQuestion/NestedQuestion.css";
import type { PropsWithChildren } from "react";
import { getClassName } from "../../utilities";

const baseClassName = "af-form__nested-question";

export const NestedQuestion = ({
  children,
  className,
}: { className?: string } & PropsWithChildren) => {
  const componentClassName = getClassName({
    baseClassName,
    className,
  });

  return (
    <section className={componentClassName}>
      <div className={`${baseClassName}-arrow`} />
      <section>{children}</section>
    </section>
  );
};
