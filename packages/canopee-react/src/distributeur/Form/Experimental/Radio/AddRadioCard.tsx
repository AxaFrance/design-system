import "@axa-fr/canopee-css/distributeur/Form/Experimental/Radio.css";
import "@axa-fr/canopee-css/distributeur/Form/Experimental/Radio/AddRadioCard.css";

import AddIcon from "@material-symbols/svg-400/rounded/add_circle-fill.svg";
import { CardButton } from "../../../CardButton/CardButton";
import { Svg } from "../../../Svg";
import { getClassName } from "../../../utilities/helpers/getClassName";

export type AddRadioCardProps = {
  orientation?: "horizontal" | "vertical";
};

export const AddRadioCard = ({
  orientation = "horizontal",
}: AddRadioCardProps) => {
  const addRadioCardClassName = getClassName({
    baseClassName: "af-radio-add-card",
    modifiers: [orientation],
  });

  return (
    <CardButton
      className={addRadioCardClassName}
      icon={
        <Svg src={AddIcon} aria-hidden="true" className="af-basecard__icon" />
      }
      orientation={orientation}
    >
      <span className="af-radiocard__label">Ajouter</span>
    </CardButton>
  );
};
