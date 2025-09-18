import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Toggle } from "../Toggle/ToggleLF";

export { type ActionStates } from "./ContentItemDuoActionCommon";

export const ContentItemDuoAction = ({
  ...props
}: ContentItemDuoActionProps) => (
  <ContentItemDuoActionCommon
    {...props}
    ContentItemMonoComponent={ContentItemMono}
    ToggleComponent={Toggle}
  />
);
