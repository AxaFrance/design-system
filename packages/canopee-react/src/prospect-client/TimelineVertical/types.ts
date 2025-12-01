import { TagProps } from "../Tag/TagCommon";
import type { TimelineVerticalProps as TimelineVerticalCommonProps } from "./TimelineVerticalCommon";

export type TimelineVerticalProps = TimelineVerticalCommonProps & {
  tagProps?: Omit<TagProps, "children">;
};
