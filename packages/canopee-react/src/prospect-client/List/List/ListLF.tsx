import "@axa-fr/canopee-css/client/List/List/ListLF.css";
import { Card } from "../../Card/CardLF";
import { ListCommon, type ListProps } from "./ListCommon";

export { type ListProps } from "./ListCommon";

export const List = (props: ListProps) => (
  <ListCommon {...props} CardComponent={Card} />
);
