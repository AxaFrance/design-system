import "@axa-fr/canopee-css/prospect/Form/ItemLabel/ItemLabelApollo.css";
import { Button } from "../../Button/ButtonApollo";
import { ItemLabelCommon, type ItemLabelProps } from "./ItemLabelCommon";

export const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={Button} />
);
