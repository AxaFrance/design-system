import { getClassName } from "../../utilities/helpers/getClassName";

export type HeaderBaseProps = React.HTMLAttributes<HTMLDivElement> & {};

const HeaderBase = ({ className, ...rest }: HeaderBaseProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__header",
    className,
  });

  return <header {...rest} className={componentClassName} />;
};

export { HeaderBase };
