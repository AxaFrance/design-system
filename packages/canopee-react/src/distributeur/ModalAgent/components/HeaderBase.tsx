import { getClassName } from "../../utilities/helpers/getClassName";

export type HeaderBaseProps = React.HTMLAttributes<HTMLDivElement> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const HeaderBase = ({ classModifier, className, ...rest }: HeaderBaseProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__header",
    modifiers: classModifier?.split(" "),
    className,
  });

  return <header {...rest} className={componentClassName} />;
};

export { HeaderBase };
