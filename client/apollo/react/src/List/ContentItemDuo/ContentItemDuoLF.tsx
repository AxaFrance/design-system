import "@axa-fr/design-system-apollo-css/dist/List/ContentItemDuo/ContentItemDuoLF.scss";
import type { ComponentProps } from "react";
import { Button } from "../../Button/ButtonLF";
import { ContentItemDuo as ContentItemDuoCommon } from "./ContentItemDuoCommon";

export const ContentItemDuo = (
  props: Omit<ComponentProps<typeof ContentItemDuoCommon>, "ButtonComponent">,
) => <ContentItemDuoCommon {...props} ButtonComponent={Button} />;
