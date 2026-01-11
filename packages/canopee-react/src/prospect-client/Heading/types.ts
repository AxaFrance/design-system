import type { TagProps } from "../Tag/TagCommon";
import type { HeadingCommonProps } from "./HeadingCommon";

export type HeadingLevel = 1 | 2 | 3 | 4;

export const headingLevelToIconSizeDesktop = {
  1: "L",
  2: "M",
  3: "S",
  4: "S",
} as const;

export const headingLevelToIconSizeMobile = {
  1: "S",
  2: "S",
  3: "S",
  4: "XS",
} as const;

export type HeadingProps = HeadingCommonProps & {
  tagProps?: Omit<TagProps, "children">;
};
