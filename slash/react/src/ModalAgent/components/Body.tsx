import { getComponentClassName } from "../..";

export type BodyProps = React.HTMLAttributes<HTMLDivElement> & {
  classModifier?: string;
};

const Body = ({
  children,
  className,
  classModifier,
  ...otherProps
}: BodyProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-modal__body",
  );
  return (
    <section className={componentClassName} {...otherProps}>
      {children}
    </section>
  );
};

export { Body };
