import { Skeleton } from "../Skeleton/SkeletonApollo";
import { List } from "../List/List/ListApollo";
import {
  SkeletonListCommon,
  type SkeletonListProps,
} from "./SkeletonListCommon";

export { type SkeletonListProps } from "./SkeletonListCommon";

export const SkeletonList = (props: SkeletonListProps) => (
  <SkeletonListCommon
    {...props}
    SkeletonComponent={Skeleton}
    ListComponent={List}
  />
);
