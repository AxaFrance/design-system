import type { ItemFileCommonProps } from "./ItemFileCommon";

export type ItemFileProps = Omit<
  ItemFileCommonProps,
  | "ItemMessageComponent"
  | "ItemIconComponent"
  | "ItemClickIconComponent"
  | "ItemSpinnerComponent"
>;
