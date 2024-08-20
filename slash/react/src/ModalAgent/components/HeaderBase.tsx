import { getComponentClassName } from "../../slash";

export type HeaderBaseProps = React.HTMLAttributes<HTMLDivElement> & {
  classModifier?: string;
};

const HeaderBase = ({ classModifier, className, ...rest }: HeaderBaseProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-modal__header",
  );

  return <header {...rest} className={componentClassName} />;
};

export { HeaderBase };
