import { Heading } from "../../Heading/HeadingLF";
import {
  Action,
  PatternWithActionCommon,
  type PatternWithActionProps,
} from "./PatternWithActionCommon";

export { type PatternWithActionProps } from "./PatternWithActionCommon";

/** Client section with an optional heading, a call to action and content. */
export const PatternWithAction = (props: PatternWithActionProps) => (
  <PatternWithActionCommon {...props} HeadingComponent={Heading} />
);

PatternWithAction.Action = Action;
