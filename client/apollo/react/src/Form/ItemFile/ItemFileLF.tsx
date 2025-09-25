import "@axa-fr/design-system-apollo-css/dist/Form/ItemFile/ItemFileLF.css";
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
  onDeleteClick,
  onVisibilityClick,
  ariaLabelVisibility,
  ariaLabelDelete,
  filename,
  ...props
}: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    deleteIcon={
      <ClickIcon
        src={deleteIconFilled}
        onClick={onDeleteClick}
        aria-label={ariaLabelDelete || `Suppression du fichier ${filename}`}
      />
    }
    visibilityIcon={
      <ClickIcon
        src={visibilityIcon}
        onClick={onVisibilityClick}
        aria-label={ariaLabelVisibility || `Observer le fichier ${filename}`}
      />
    }
    {...props}
  />
);
