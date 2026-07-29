import { Tag } from "../Tag/TagCommon";
import {
  TagListCommon,
  type TagListProps as TagListCommonProps,
} from "./TagListCommon";
import "@axa-fr/canopee-css/prospect/TagList/TagListAll.css";

export type TagListProps = Omit<TagListCommonProps, "OverflowTag">;

export const TagList = (props: TagListProps) => (
  <TagListCommon {...props} OverflowTag={Tag} />
);
