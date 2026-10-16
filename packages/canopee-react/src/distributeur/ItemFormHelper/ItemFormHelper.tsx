import "@axa-fr/canopee-css/distributeur/ItemFormHelper/ItemFormHelper.css";
import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import toDoSvg from "@material-symbols/svg-400/outlined/circle.svg";
import wipSvg from "@material-symbols/svg-400/outlined/circle-fill.svg";
import type { ComponentPropsWithoutRef } from "react";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

export type ItemFormHelperVariant = "todo" | "inprogress" | "validated";

export type ItemFormHelperProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  /**
   * State of the step. Figma "Step state": Todo = `todo`,
   * Active = `inprogress`, Done = `validated`.
   */
  variant: ItemFormHelperVariant;
  /**
   * Name of the step, e.g. "Informations clients".
   * Without it, the item shows its state (legend usage).
   */
  label?: string;
  /**
   * Text of the state. Visible when there is no `label`; otherwise visually
   * hidden and read by screen readers after the label.
   * @default "à compléter" | "en cours" | "validé"
   */
  stateLabel?: string;
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
  stateLabel,
  className,
  ...otherProps
}: ItemFormHelperProps) => {
  const { icon, defaultLabel } = variants[variant];
  const state = stateLabel ?? defaultLabel;
  const componentClassName = getClassName({
    baseClassName: "af-item-form-helper",
    modifiers: [variant],
    className,
  });

  return (
    <span className={componentClassName} {...otherProps}>
      <Svg src={icon} width={12} height={12} aria-hidden="true" />
      <span className="af-item-form-helper__label">{label ?? state}</span>
      {label ? (
        <span className="af-item-form-helper__state">, {state}</span>
      ) : null}
    </span>
  );
};
