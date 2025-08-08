import React from "react";
import { Svg } from "@axa-fr/design-system-slash-react";
import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import toDoSvg from "@material-symbols/svg-400/outlined/circle.svg";
import wipSvg from "@material-symbols/svg-400/outlined/circle-fill.svg";
import "@axa-fr/design-system-slash-css/dist/ItemFormHelper/ItemFormHelper.scss";

interface ItemFormHelperProps {
  variant: "to-do" | "wip" | "validation";
  label?: string;
}

const variants = {
  "to-do": {
    icon: toDoSvg,
    defaultLabel: "à compléter",
  },
  wip: {
    icon: wipSvg,
    defaultLabel: "en cours",
  },
  validation: {
    icon: checkSvg,
    defaultLabel: "validé",
  },
};

export const ItemFormHelper: React.FC<ItemFormHelperProps> = ({
  variant,
  label,
}) => {
  const { icon, defaultLabel } = variants[variant];
  const displayLabel = label || defaultLabel;

  return (
    <div className={`item__${variant}`}>
      <Svg src={icon} width={12} height={12} style={{ marginRight: 8 }} />
      <span>{displayLabel}</span>
    </div>
  );
};
