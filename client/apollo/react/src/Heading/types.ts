import type { TagProps } from "../Tag/TagCommon";
import type { HeadingCommonProps } from "./HeadingCommon";

export type HeadingLevel = 1 | 2 | 3;

export type HeadingProps = HeadingCommonProps & {
  tagProps?: Omit<TagProps, "children">;
};
