import type { ComponentType, PropsWithChildren } from "react";
import type { SkeletonProps } from "../Skeleton/SkeletonCommon";
import type { ListProps } from "../List/List/ListCommon";

export type SkeletonListProps = {
  lists: {
    lines?: number;
    grid: SkeletonProps["grid"];
  }[];
  isLoading: boolean;
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
    ? lists.map(({ lines = 1, grid }) => (
        <ListComponent key={crypto.randomUUID()} className={className}>
          {[...Array(lines).keys()].map(() => (
            <SkeletonComponent key={crypto.randomUUID()} grid={grid} />
          ))}
        </ListComponent>
      ))
    : children;
