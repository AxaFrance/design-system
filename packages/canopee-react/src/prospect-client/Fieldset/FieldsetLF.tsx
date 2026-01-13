import "@axa-fr/canopee-css/client/Fieldset/FieldsetLF.css";
import { Icon } from "../Icon/IconLF";
import { Card } from "../Card/CardLF";
import { FieldsetCommon, type FieldsetProps } from "./FieldsetCommon";

export type { FieldsetProps };

export const Fieldset = (props: FieldsetProps) => (
  <FieldsetCommon {...props} IconComponent={Icon} CardComponent={Card} />
);
