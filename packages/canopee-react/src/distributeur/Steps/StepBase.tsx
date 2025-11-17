import { ReactNode } from "react";
import chevronSvg from "@material-symbols/svg-400/outlined/chevron_right.svg";
import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import { getComponentClassName, Svg } from "../../distributeur";

type Props = {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
};
const StepBase = ({ children, id, title, className, classModifier }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-steps-list-step",
  );
  return (
    <li key={id} className={componentClassName} title={title}>
      <Svg src={checkSvg} />

      {children}

      <Svg src={chevronSvg} />
    </li>
  );
};

export { StepBase };
