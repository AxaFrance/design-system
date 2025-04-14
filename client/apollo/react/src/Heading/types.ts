import type { TagProps } from "../Tag/TagCommon";
import type { HeadingProps as HeadingCommonProps } from "./HeadingCommon";

export type HeadingLevel = 1 | 2 | 3;

export type HeadingProps = Omit<
  HeadingCommonProps,
  "tagComponent" | "tagProps"
> & {
  tag?: React.ReactNode;
  tagProps?: Omit<TagProps, "children">;
};
