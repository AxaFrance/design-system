import "@axa-fr/design-system-apollo-css/dist/Heading/HeadingLF.scss";

import { DEFAULT_TAG_PROPS, HeadingCommon } from "./HeadingCommon";
import { Tag } from "../Tag/TagLF";
import { HeadingProps } from "./types";

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
