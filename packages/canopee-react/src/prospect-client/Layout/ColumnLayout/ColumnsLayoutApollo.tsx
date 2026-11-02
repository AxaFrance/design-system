import { Heading } from "@axa-fr/canopee-react/prospect";
import {
  Right,
  Left,
  Content,
  Top,
  ColumnsLayoutCommon,
  type ColumnsLayoutProps,
  type ColumnsLayoutWithSubComponents,
} from "./ColumnsLayoutCommon";

export { type ColumnsLayoutProps } from "./ColumnsLayoutCommon";

/**
 * Prospect columns layout with its `top`, `Left`, `Content`, and `Right` slots.
 *
 * @param props - Layout options, including the optional heading configuration.
 */
export const ColumnsLayout: ColumnsLayoutWithSubComponents = (
  props: ColumnsLayoutProps,
) => <ColumnsLayoutCommon {...props} HeadingComponent={Heading} />;

ColumnsLayout.Right = Right;
ColumnsLayout.Left = Left;
ColumnsLayout.Content = Content;
ColumnsLayout.Top = Top;
