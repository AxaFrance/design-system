import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Toggle } from "../Toggle/ToggleApollo";
import { Button } from "../Button/ButtonApollo";

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
