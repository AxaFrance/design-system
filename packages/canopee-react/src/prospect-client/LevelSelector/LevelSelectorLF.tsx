import "@axa-fr/canopee-css/client/LevelSelector/LevelSelectorLF.css";
import { ClickIcon } from "../ClickIcon/ClickIconLF";
import { Card } from "../Card/CardLF";
import {
  LevelSelectorCommon,
  type LevelSelectorProps,
} from "./LevelSelectorCommon";

export const LevelSelector = (props: LevelSelectorProps) => {
  return (
    <LevelSelectorCommon
      {...props}
      ClickIconComponent={ClickIcon}
      CardComponent={Card}
    />
  );
};

export { type LevelSelectorProps };
