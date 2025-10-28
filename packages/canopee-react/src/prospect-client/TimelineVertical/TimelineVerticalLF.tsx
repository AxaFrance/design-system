import "@axa-fr/design-system-apollo-css/dist/TimelineVertical/TimelineVerticalLF.css";

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
