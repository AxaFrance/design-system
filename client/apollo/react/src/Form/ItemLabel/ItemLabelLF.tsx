import "@axa-fr/design-system-apollo-css/dist/Form/ItemLabel/ItemLabelLF.scss";
import type { ComponentProps } from "react";
import { Button } from "../../Button/ButtonLF";
import { ItemLabel as ItemLabelCommon } from "./ItemLabelCommon";

export const ItemLabel = (
  props: Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">,
) => <ItemLabelCommon {...props} ButtonComponent={Button} />;
