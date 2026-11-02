import { Heading } from "../../Heading/HeadingApollo";
import {
  Action,
  PatternWithActionCommon,
  type PatternWithActionProps,
} from "./PatternWithActionCommon";

export { type PatternWithActionProps } from "./PatternWithActionCommon";

/** Prospect section with an optional heading, a call to action and content. */
export const PatternWithAction = (props: PatternWithActionProps) => (
  <PatternWithActionCommon {...props} HeadingComponent={Heading} />
);

PatternWithAction.Action = Action;
