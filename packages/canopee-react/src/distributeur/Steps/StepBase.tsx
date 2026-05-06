import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import chevronSvg from "@material-symbols/svg-400/outlined/chevron_right.svg";
import type { ReactNode } from "react";
import { Svg } from "../../distributeur";
import { getClassName } from "../utilities/helpers/getClassName";

export type StepBaseProps = {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  /**
   * Label to add to the title as state indication (e.g. "in progress", "to come"...)
   * Will be wrapped in parentheses, next to the `title` in the `title` attribute of the <li> element.
   * @example
   * stateLabel="In progress"
   * title="Step 1"
   * => title attribute will be "Step 1 (In progress)"
   */
  stateLabel?: string;
};

const StepBase = ({
  children,
  id,
  title,
  className,
  classModifier,
  stateLabel,
}: StepBaseProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-steps-list-step",
    modifiers: classModifier?.split(" "),
    className,
  });

  const outputTitle = stateLabel ? `${title} (${stateLabel})` : title;
  return (
    <li key={id} className={componentClassName} title={outputTitle}>
      <Svg src={checkSvg} />

      {children}

      <Svg src={chevronSvg} />
    </li>
  );
};

export { StepBase };
