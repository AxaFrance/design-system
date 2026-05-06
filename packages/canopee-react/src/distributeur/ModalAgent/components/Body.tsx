import { getClassName } from "../../utilities/helpers/getClassName";

export type BodyProps = React.HTMLAttributes<HTMLDivElement> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const Body = ({
  children,
  className,
  classModifier,
  ...otherProps
}: BodyProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__body",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <section className={componentClassName} {...otherProps}>
      {children}
    </section>
  );
};

export { Body };
