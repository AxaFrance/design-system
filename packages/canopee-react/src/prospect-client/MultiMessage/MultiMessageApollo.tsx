import "@axa-fr/canopee-css/prospect/MultiMessage/MultiMessageApollo.css";
import { Message } from "../Message/MessageApollo";
import { Pagination } from "../Pagination/PaginationApollo";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "./MultiMessageCommon";

export {
  messageVariants,
  type MessageVariants,
} from "../Message/MessageApollo";
export type { MultiMessageItem } from "./types";

export const MultiMessage = (props: MultiMessageProps) => (
  <MultiMessageCommon
    {...props}
    MessageComponent={Message}
    PaginationComponent={Pagination}
  />
);
