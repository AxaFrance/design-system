import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { Skeleton, List } from "..";

export type SkeletonListProps = {
  lists: {
    lines?: number;
    grid: ComponentPropsWithRef<typeof Skeleton>["grid"];
  }[];
  classModifierList?: ComponentPropsWithRef<typeof List>["classModifier"];
  isLoading: boolean;
} & PropsWithChildren;

export const SkeletonList = ({
  children,
  isLoading,
  lists = [],
  classModifierList,
}: SkeletonListProps) =>
  isLoading
    ? lists.map(({ lines = 1, grid }) => (
        <List key={crypto.randomUUID()} classModifier={classModifierList}>
          {[...Array(lines).keys()].map(() => (
            <Skeleton key={crypto.randomUUID()} grid={grid} />
          ))}
        </List>
      ))
    : children;
