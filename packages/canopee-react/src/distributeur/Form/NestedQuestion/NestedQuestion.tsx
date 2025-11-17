import "@axa-fr/canopee-css/distributeur/Form/NestedQuestion/NestedQuestion.css";
import { PropsWithChildren } from "react";
import { getComponentClassName } from "../../utilities";

export const NestedQuestion = ({
  children,
  className,
}: { className?: string } & PropsWithChildren) => {
  const componentClassName = getComponentClassName(
    className,
    "",
    "af-form__nested-question",
  );

  return (
    <section className={componentClassName}>
      <div className={`${componentClassName}-arrow`} />
      <section>{children}</section>
    </section>
  );
};
