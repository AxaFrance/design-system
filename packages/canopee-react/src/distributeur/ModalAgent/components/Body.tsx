import { getClassName } from "../../utilities/helpers/getClassName";

export type BodyProps = React.HTMLAttributes<HTMLDivElement> & {};

const Body = ({ children, className, ...otherProps }: BodyProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__body",
    className,
  });
  return (
    <section className={componentClassName} {...otherProps}>
      {children}
    </section>
  );
};

export { Body };
