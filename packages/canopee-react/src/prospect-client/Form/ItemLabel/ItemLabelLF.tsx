import "@axa-fr/design-system-apollo-css/dist/Form/ItemLabel/ItemLabelLF.css";
import { Button } from "../../Button/ButtonLF";
import { ItemLabelCommon, type ItemLabelProps } from "./ItemLabelCommon";

export const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={Button} />
);
