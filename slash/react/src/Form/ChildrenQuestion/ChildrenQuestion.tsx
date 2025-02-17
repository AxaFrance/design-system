import "@axa-fr/design-system-slash-css/dist/Form/ChildrenQuestion/ChildrenQuestion.scss";

export const ChildrenQuestion = ({ content }: { content: React.ReactNode }) => {
  const componentClassName = "af-form__children-question";

  return (
    <section className={componentClassName}>
      <div className={`${componentClassName}-arrow`} />
      <section>{content}</section>
    </section>
  );
};
