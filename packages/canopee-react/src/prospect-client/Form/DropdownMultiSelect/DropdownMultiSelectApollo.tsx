import "@axa-fr/canopee-css/prospect/Form/DropdownMultiSelect/DropdownMultiSelectApollo.css";
import { Tag } from "../../Tag/TagCommon";
import { TagList } from "../../TagList/TagListApollo";
import { MultiSelectList } from "../MultiSelectList/MultiSelectListApollo";
import {
  DropdownMultiSelectCommon,
  type DropdownMultiSelectProps,
} from "./DropdownMultiSelectCommon";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";

export type { DropdownMultiSelectProps } from "./DropdownMultiSelectCommon";

export const DropdownMultiSelect = (props: DropdownMultiSelectProps) => (
  <DropdownMultiSelectCommon
    {...props}
    MultiSelectListComponent={MultiSelectList}
    TagListComponent={TagList}
    TagComponent={Tag}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
