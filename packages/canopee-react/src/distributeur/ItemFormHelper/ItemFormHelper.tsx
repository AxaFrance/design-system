import "@axa-fr/canopee-css/distributeur/ItemFormHelper/ItemFormHelper.css";
import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import toDoSvg from "@material-symbols/svg-400/outlined/circle.svg";
import wipSvg from "@material-symbols/svg-400/outlined/circle-fill.svg";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

export type ItemFormHelperVariant = "todo" | "inprogress" | "validated";

export type ItemFormHelperProps = {
  variant: ItemFormHelperVariant;
  label?: string;
  className?: string;
};

const variants: Record<
  ItemFormHelperVariant,
  { icon: string; defaultLabel: string }
> = {
  todo: {
    icon: toDoSvg,
    defaultLabel: "à compléter",
  },
  inprogress: {
    icon: wipSvg,
    defaultLabel: "en cours",
  },
  validated: {
    icon: checkSvg,
    defaultLabel: "validé",
  },
};

export const ItemFormHelper = ({
  variant,
  label,
  className,
}: ItemFormHelperProps) => {
  const { icon, defaultLabel } = variants[variant];
  const displayLabel = label ?? defaultLabel;
  const componentClassName = getClassName({
    baseClassName: "af-item-form-helper",
    modifiers: [variant],
    className,
  });

  return (
    <div className={componentClassName}>
      <Svg src={icon} width={12} height={12} />
      <span>{displayLabel}</span>
    </div>
  );
};
