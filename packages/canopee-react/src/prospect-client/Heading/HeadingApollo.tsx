import "@axa-fr/canopee-css/prospect/Heading/HeadingApollo.css";

import { Tag } from "../Tag/TagApollo";
import { DEFAULT_TAG_PROPS, HeadingCommon } from "./HeadingCommon";
import type { HeadingProps } from "./types";

export type { HeadingLevel, HeadingProps } from "./types";

export const Heading = ({ tag, tagProps = {}, ...props }: HeadingProps) => (
  <HeadingCommon
    {...props}
    tag={
      tag ? (
        <Tag {...DEFAULT_TAG_PROPS} {...tagProps}>
          {tag}
        </Tag>
      ) : null
    }
  />
);
