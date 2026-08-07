import { List } from "../List/List/ListLF";
import {
  SkeletonListCommon,
  type SkeletonListProps,
} from "./SkeletonListCommon";

export { type SkeletonListProps } from "./SkeletonListCommon";

/**
 * Look and Feel-themed `SkeletonList` component.
 *
 * @component
 * @param {SkeletonListProps} props - SkeletonList props.
 * @returns {JSX.Element | ReactNode[]} The rendered Look and Feel SkeletonList.
 */
export const SkeletonList = (props: SkeletonListProps) => (
  <SkeletonListCommon {...props} ListComponent={List} />
);
