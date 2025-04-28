import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileLF.scss";
import { ItemFile as ItemFileCommon } from "./ItemFileCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Icon } from "../../Icon/IconLF";
import { ClickIcon } from "../../ClickIcon/ClickIconLF";
import { Spinner } from "../../Spinner/SpinnerLF";

export const ItemFile = () => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemClickIconComponent={ClickIcon}
    ItemSpinnerComponent={Spinner}
  />
);
