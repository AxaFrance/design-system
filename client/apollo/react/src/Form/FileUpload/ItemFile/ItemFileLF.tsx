import deleteIconFilled from "@material-symbols/svg-400/outlined/delete-fill.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import { ClickIcon } from "../../../ClickIcon/ClickIconLF";
import { Icon } from "../../../Icon/IconLF";
import { Spinner } from "../../../Spinner/SpinnerLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { ItemFileCommon, type ItemFileProps } from "./ItemFileCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/FileUpload/ItemFile/ItemFileLF.css";

export const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    removeIcon={deleteIconFilled}
    previewIcon={visibilityIcon}
    {...props}
  />
);
