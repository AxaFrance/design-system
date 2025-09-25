import "@axa-fr/design-system-apollo-css/dist/List/ContentItemDuoAction/ContentItemDuoActionAll.css";

import {
  ContentItemDuoActionCommon,
  type ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Toggle } from "../Toggle/ToggleApollo";

export { type ContentItemDuoActionState } from "./ContentItemDuoActionCommon";

export const ContentItemDuoAction = (props: ContentItemDuoActionProps) => (
  <ContentItemDuoActionCommon
    {...props}
    ContentItemMonoComponent={ContentItemMono}
    ToggleComponent={Toggle}
  />
);
