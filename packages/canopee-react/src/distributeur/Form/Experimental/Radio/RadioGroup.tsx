import { getClassName } from "../../../utilities/helpers/getClassName";

export type RadioGroupProps = {
  className?: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  variant?: "button" | "card";
};

export const RadioGroup = ({
  children,
  orientation = "horizontal",
  variant = "button",
  className,
}: RadioGroupProps) => {
  const finalClassName = getClassName({
    baseClassName: "af-radio__group",
    modifiers: [orientation, variant],
    className,
  });

  return <div className={finalClassName}>{children}</div>;
};
