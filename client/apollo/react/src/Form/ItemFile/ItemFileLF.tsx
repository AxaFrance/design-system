import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileLF.scss";
import deleteIconFilled from "@material-symbols/svg-400/outlined/delete-fill.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import { ClickIcon } from "../../ClickIcon/ClickIconLF";
import { Icon } from "../../Icon/IconLF";
import { Spinner } from "../../Spinner/SpinnerLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { ItemFileCommon } from "./ItemFileCommon";
import type { ItemFileProps } from "./types";

export { itemFileVariants } from "./ItemFileCommon";

export const ItemFile = ({
  deleteIconProps = {},
  visibilityIconProps = {},
  ...props
}: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    deleteIcon={<ClickIcon src={deleteIconFilled} {...deleteIconProps} />}
    visibilityIcon={<ClickIcon src={visibilityIcon} {...visibilityIconProps} />}
    {...props}
  />
);
