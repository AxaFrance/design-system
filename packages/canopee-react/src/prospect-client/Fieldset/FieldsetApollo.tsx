import "@axa-fr/canopee-css/prospect/Fieldset/FieldsetApollo.css";
import { Icon } from "../Icon/IconApollo";
import { FieldsetCommon, type FieldsetProps } from "./FieldsetCommon";

export type { FieldsetProps };

export const Fieldset = (props: FieldsetProps) => (
  <FieldsetCommon {...props} IconComponent={Icon} />
);
