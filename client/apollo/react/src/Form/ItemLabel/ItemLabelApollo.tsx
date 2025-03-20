import "@axa-fr/design-system-apollo-css/dist/Form/ItemLabel/ItemLabelApollo.scss";
import type { ComponentProps } from "react";
import { Button } from "../../Button/ButtonApollo";
import { ItemLabel as ItemLabelCommon } from "./ItemLabelCommon";

export const ItemLabel = (
  props: Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">,
) => <ItemLabelCommon {...props} ButtonComponent={Button} />;
