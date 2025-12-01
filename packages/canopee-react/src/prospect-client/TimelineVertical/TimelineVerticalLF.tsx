import "@axa-fr/canopee-css/client/TimelineVertical/TimelineVerticalLF.css";

import { TimelineVerticalCommon } from "./TimelineVerticalCommon";
import { Tag } from "../Tag/TagLF";
import type { TimelineVerticalProps } from "./types";

export type { TimelineVerticalProps } from "./types";

export const TimelineVertical = ({
  tag,
  tagProps = {},
  ...props
}: TimelineVerticalProps) => (
  <TimelineVerticalCommon tag={<Tag {...tagProps}>{tag}</Tag>} {...props} />
);
