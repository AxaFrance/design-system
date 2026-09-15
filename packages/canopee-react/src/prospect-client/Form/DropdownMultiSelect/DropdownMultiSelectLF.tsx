import "@axa-fr/canopee-css/client/Form/DropdownMultiSelect/DropdownMultiSelectLF.css";
import { Tag } from "../../Tag/TagCommon";
import { TagList } from "../../TagList/TagListLF";
import { MultiSelectList } from "../MultiSelectList/MultiSelectListLF";
import {
  DropdownMultiSelectCommon,
  type DropdownMultiSelectProps,
} from "./DropdownMultiSelectCommon";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";

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
