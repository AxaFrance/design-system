import "@axa-fr/canopee-css/client/List/ContentItemDuoAction/ContentItemDuoActionAll.css";
import "@axa-fr/canopee-css/client/ContentItemMono/ContentItemMonoLF.css";
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
