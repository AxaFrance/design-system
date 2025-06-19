import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileApollo.scss";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import type { ItemFileProps } from "./types";
import { ItemFileCommon } from "./ItemFileCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Icon } from "../../Icon/IconApollo";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { Spinner } from "../../Spinner/SpinnerApollo";

export { itemFileVariants } from "./ItemFileCommon";

export const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemClickIconComponent={ClickIcon}
    ItemSpinnerComponent={Spinner}
    deleteIcon={deleteIcon}
    {...props}
  />
);
