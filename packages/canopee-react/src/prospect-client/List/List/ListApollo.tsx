import "@axa-fr/canopee-css/prospect/List/List/ListApollo.css";
import { Card } from "../../Card/CardApollo";
import { ListCommon, type ListProps } from "./ListCommon";

export { type ListProps } from "./ListCommon";

export const List = (props: ListProps) => (
  <ListCommon {...props} CardComponent={Card} />
);
