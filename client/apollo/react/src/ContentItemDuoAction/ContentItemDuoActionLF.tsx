import "@axa-fr/design-system-apollo-css/dist/List/ContentItemDuoAction/ContentItemDuoActionAll.css";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.css";
import {
  ContentItemDuoActionCommon,
  type ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Toggle } from "../Toggle/ToggleLF";

export { type ContentItemDuoActionState } from "./ContentItemDuoActionCommon";

export const ContentItemDuoAction = (props: ContentItemDuoActionProps) => (
  <ContentItemDuoActionCommon
    {...props}
    ContentItemMonoComponent={ContentItemMono}
    ToggleComponent={Toggle}
  />
);
