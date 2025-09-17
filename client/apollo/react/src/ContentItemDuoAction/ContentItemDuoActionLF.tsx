import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Toggle } from "../Toggle/ToggleLF";

export const ContentItemDuoAction = ({
  ...props
}: ContentItemDuoActionProps) => (
  <ContentItemDuoActionCommon
    {...props}
    ButtonComponent={Button}
    ContentItemMonoComponent={ContentItemMono}
    ToggleComponent={Toggle}
  />
);
