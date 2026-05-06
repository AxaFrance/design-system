import { getClassName } from "../utilities/helpers/getClassName";

export type SectionRestitutionTitleProps = {
  title: React.ReactNode;
  className?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const SectionRestitutionTitle = ({
  title,
  className,
  classModifier,
}: SectionRestitutionTitleProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__content-title",
    modifiers: classModifier?.split(" "),
    className,
  });
  return <h4 className={componentClassName}>{title}</h4>;
};
