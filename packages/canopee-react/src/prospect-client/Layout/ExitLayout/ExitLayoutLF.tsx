import { Heading } from "../../Heading/HeadingLF";
import { Icon } from "../../Icon/IconLF";
import {
  Agent,
  Action,
  Content,
  ExitLayoutCommon,
  type ExitLayoutProps,
} from "./ExitLayoutCommon";

export {
  type ExitLayoutWithSubComponents,
  type ExitLayoutProps,
} from "./ExitLayoutCommon";

export {
  ExitLayoutSkeleton,
  type ExitLayoutSkeletonProps,
} from "./ExitLayoutSkeleton";

/**
 * Look and Feel-themed `ExitLayout` component with `Agent`, `Action`, and
 * `Content` static slots.
 *
 * @component
 * @param {ExitLayoutProps} props - ExitLayout props.
 * @param {HeadingProps} [props.headingProps] - Props forwarded to the heading displayed in the content column.
 * @param {Pick<IconProps, "variant" | "src" | "hasBackground">} [props.iconProps] - Props forwarded to the icon displayed in the content column.
 * @param {React.ReactNode} [props.children] - Slots composed with `ExitLayout.Content`, `ExitLayout.Agent`, and `ExitLayout.Action`.
 * @returns {JSX.Element} The rendered Look and Feel ExitLayout.
 */
export const ExitLayout = (props: ExitLayoutProps) => (
  <ExitLayoutCommon
    {...props}
    HeadingComponent={Heading}
    IconComponent={Icon}
  />
);

ExitLayout.Agent = Agent;
ExitLayout.Action = Action;
ExitLayout.Content = Content;
