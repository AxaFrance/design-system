import "@axa-fr/canopee-css/distributeur/Form/NestedQuestion/NestedQuestion.css";
import type { PropsWithChildren } from "react";
import { getClassName } from "../../utilities";

export const NestedQuestion = ({
  children,
  className,
}: { className?: string } & PropsWithChildren) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__nested-question",
    className,
  });

  return (
    <section className={componentClassName}>
      <div className="af-form__nested-question-arrow" />
      <section>{children}</section>
    </section>
  );
};
