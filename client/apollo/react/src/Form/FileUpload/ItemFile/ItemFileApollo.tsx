import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import { ClickIcon } from "../../../ClickIcon/ClickIconApollo";
import { Icon } from "../../../Icon/IconApollo";
import { Spinner } from "../../../Spinner/SpinnerApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { ItemFileCommon, type ItemFileProps } from "./ItemFileCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/FileUpload/ItemFile/ItemFileApollo.css";

export { itemFileVariants } from "./ItemFileCommon";

export const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    deleteIcon={deleteIcon}
    visibilityIcon={visibilityIcon}
    {...props}
  />
);
