import "@axa-fr/canopee-css/client/MultiMessage/MultiMessageLF.css";
import { Message } from "../Message/MessageLF";
import { Pagination } from "../Pagination/PaginationLF";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "./MultiMessageCommon";

export { messageVariants, type MessageVariants } from "../Message/MessageLF";
export type { MultiMessageItem } from "./types";

export const MultiMessage = (props: MultiMessageProps) => (
  <MultiMessageCommon
    {...props}
    MessageComponent={Message}
    PaginationComponent={Pagination}
  />
);
