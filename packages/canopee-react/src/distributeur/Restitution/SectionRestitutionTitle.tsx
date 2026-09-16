import { getClassName } from "../utilities/helpers/getClassName";

export type SectionRestitutionTitleProps = {
  title: React.ReactNode;
  className?: string;
};

export const SectionRestitutionTitle = ({
  title,
  className,
}: SectionRestitutionTitleProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-restitution__content-title",
    className,
  });
  return <h4 className={componentClassName}>{title}</h4>;
};
