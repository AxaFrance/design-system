import type { ClickIconProps } from "../../ClickIcon/ClickIconCommon";
import type { ItemFileCommonProps } from "./ItemFileCommon";

export type ItemFileProps = Omit<
  ItemFileCommonProps,
  | "ItemMessageComponent"
  | "ItemIconComponent"
  | "ItemClickIconComponent"
  | "ItemSpinnerComponent"
  | "deleteIcon"
  | "visibilityIcon"
> & {
  onDeleteClick?: Partial<ClickIconProps>;
  onVisibilityClick?: Partial<ClickIconProps>;
};
