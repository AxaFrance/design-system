/* eslint-disable react/no-array-index-key */
import type { ComponentType, PropsWithChildren } from "react";
import type { SkeletonProps } from "../Skeleton/SkeletonCommon";
import type { ListProps } from "../List/List/ListCommon";

export type SkeletonListProps = {
  lists: {
    lines?: number;
    grid: SkeletonProps["grid"];
  }[];
  isLoading?: boolean;
  className?: string;
} & PropsWithChildren;

type SkeletonListPropsCommon = SkeletonListProps & {
  ListComponent: ComponentType<ListProps>;
  SkeletonComponent: ComponentType<SkeletonProps>;
};

export const SkeletonListCommon = ({
  children,
  isLoading,
  lists = [],
  className,
  ListComponent,
  SkeletonComponent,
}: SkeletonListPropsCommon) =>
  isLoading
    ? lists.map(({ lines = 1, grid }, linesIndex) => (
        <ListComponent key={linesIndex} className={className}>
          {[...Array(lines).keys()].map((_, lineIndex) => (
            <SkeletonComponent key={lineIndex} grid={grid} />
          ))}
        </ListComponent>
      ))
    : children;
