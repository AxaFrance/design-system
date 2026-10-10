import { Tag } from "../../../Tag/TagApollo";
import {
  ClickItemContentCommon,
  type ClickItemContentComponentProps,
} from "./ClickItemContentCommon";

export const ClickItemContent = (props: ClickItemContentComponentProps) => (
  <ClickItemContentCommon {...props} TagComponent={Tag} />
);
