import { Skeleton } from "../Skeleton/SkeletonLF";
import { List } from "../List/List/ListLF";
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
