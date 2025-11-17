import "@axa-fr/canopee-css/client/Form/ItemLabel/ItemLabelLF.css";
import { Button } from "../../Button/ButtonLF";
import { ItemLabelCommon, type ItemLabelProps } from "./ItemLabelCommon";

export const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={Button} />
);
