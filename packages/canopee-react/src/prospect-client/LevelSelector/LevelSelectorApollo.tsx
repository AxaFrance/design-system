import "@axa-fr/canopee-css/prospect/LevelSelector/LevelSelectorApollo.css";
import { ClickIcon } from "../ClickIcon/ClickIconApollo";
import { Card } from "../Card/CardApollo";
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
