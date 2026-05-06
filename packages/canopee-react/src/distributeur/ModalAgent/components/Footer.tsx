import { getClassName } from "../../utilities/helpers/getClassName";

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const Footer = ({ classModifier, className, ...rest }: FooterProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__footer",
    modifiers: classModifier?.split(" "),
    className,
  });

  return <footer {...rest} className={componentClassName} />;
};

export { Footer };
