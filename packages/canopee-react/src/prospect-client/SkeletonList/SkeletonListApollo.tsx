import { List } from "../List/List/ListApollo";
import {
  SkeletonListCommon,
  type SkeletonListProps,
} from "./SkeletonListCommon";

export { type SkeletonListProps } from "./SkeletonListCommon";

/**
 * Apollo-themed `SkeletonList` component.
 *
 * @component
 * @param {SkeletonListProps} props - SkeletonList props.
 * @returns {JSX.Element | ReactNode[]} The rendered Apollo-themed SkeletonList.
 */
export const SkeletonList = (props: SkeletonListProps) => (
  <SkeletonListCommon {...props} ListComponent={List} />
);
