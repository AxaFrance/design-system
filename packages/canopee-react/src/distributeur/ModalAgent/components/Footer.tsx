import { getClassName } from "../../utilities/helpers/getClassName";

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {};

const Footer = ({ className, ...rest }: FooterProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__footer",
    className,
  });

  return <footer {...rest} className={componentClassName} />;
};

export { Footer };
