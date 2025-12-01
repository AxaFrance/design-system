import "@axa-fr/canopee-css/prospect/TimelineVertical/TimelineVerticalApollo.css";

import { TimelineVerticalCommon } from "./TimelineVerticalCommon";
import { Tag } from "../Tag/TagApollo";
import type { TimelineVerticalProps } from "./types";

export type { TimelineVerticalProps } from "./types";

export const TimelineVertical = ({
  tag,
  tagProps = {},
  ...props
}: TimelineVerticalProps) => (
  <TimelineVerticalCommon tag={<Tag {...tagProps}>{tag}</Tag>} {...props} />
);
