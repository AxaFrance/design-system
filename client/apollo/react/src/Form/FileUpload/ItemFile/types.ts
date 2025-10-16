import { type MouseEvent } from "react";
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
  onDeleteClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onVisibilityClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
