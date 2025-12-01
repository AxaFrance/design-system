import { Tag } from "../../../Tag/TagLF";
import {
  ClickItemContentCommon,
  type ClickItemContentProps,
} from "./ClickItemContentCommon";

export const ClickItemContent = (props: ClickItemContentProps) => (
  <ClickItemContentCommon {...props} TagComponent={Tag} />
);
