import { getComponentClassName } from "../utilities";

export type SectionRestitutionTitleProps = {
  title: React.ReactNode;
  className?: string;
  classModifier?: string;
};

export const SectionRestitutionTitle = ({
  title,
  className,
  classModifier,
}: SectionRestitutionTitleProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-restitution__content-title",
  );
  return <h4 className={componentClassName}>{title}</h4>;
};
