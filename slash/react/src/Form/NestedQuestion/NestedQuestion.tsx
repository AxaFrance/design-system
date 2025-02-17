import "@axa-fr/design-system-slash-css/dist/Form/NestedQuestion/NestedQuestion.scss";
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
