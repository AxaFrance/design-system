import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileLF.scss";
import deleteIconFilled from "@material-symbols/svg-400/outlined/delete-fill.svg";
import { ItemFileCommon } from "./ItemFileCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Icon } from "../../Icon/IconLF";
import { ClickIcon } from "../../ClickIcon/ClickIconLF";
import { Spinner } from "../../Spinner/SpinnerLF";
import type { ItemFileProps } from "./types";

export { itemFileVariants } from "./ItemFileCommon";

export const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemClickIconComponent={ClickIcon}
    ItemSpinnerComponent={Spinner}
    deleteIcon={deleteIconFilled}
    {...props}
  />
);
