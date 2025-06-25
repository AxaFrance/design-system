import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileApollo.scss";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { Icon } from "../../Icon/IconApollo";
import { Spinner } from "../../Spinner/SpinnerApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { ItemFileCommon } from "./ItemFileCommon";
import type { ItemFileProps } from "./types";

export { itemFileVariants } from "./ItemFileCommon";

export const ItemFile = ({
  onDeleteClick,
  onVisibilityClick,
  ...props
}: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    deleteIcon={
      <ClickIcon
        src={deleteIcon}
        aria-label="Delete file"
        onClick={onDeleteClick}
      />
    }
    visibilityIcon={
      <ClickIcon
        src={visibilityIcon}
        aria-label="Toggle file visibility"
        onClick={onVisibilityClick}
      />
    }
    {...props}
  />
);
