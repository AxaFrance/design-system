import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileApollo.scss";
import { ItemFile as ItemFileCommon } from "./ItemFileCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Icon } from "../../Icon/IconApollo";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { Spinner } from "../../Spinner/SpinnerApollo";

export const ItemFile = () => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemClickIconComponent={ClickIcon}
    ItemSpinnerComponent={Spinner}
  />
);
