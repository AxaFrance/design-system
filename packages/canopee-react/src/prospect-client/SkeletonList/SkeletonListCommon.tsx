/* eslint-disable react/no-array-index-key */
import type { ComponentType, PropsWithChildren } from "react";
import type { SkeletonGridProps } from "../SkeletonGrid/SkeletonGrid";
import type { ListProps } from "../List/List/ListCommon";
import { SkeletonGrid } from "../SkeletonGrid/SkeletonGrid";

/**
 * Props for the themed `SkeletonList` components.
 */
export type SkeletonListProps = {
  lists: {
    lines?: number;
    grid: SkeletonGridProps["grid"];
  }[];
  isLoading?: boolean;
  className?: string;
} & PropsWithChildren;

type SkeletonListPropsCommon = SkeletonListProps & {
  ListComponent: ComponentType<ListProps>;
};

/**
 * Shared implementation rendering repeated `SkeletonGrid` rows inside a `List`.
 *
 * The visual list container is injected through `ListComponent` to allow
 * Apollo and Look and Feel theming.
 *
 * @component
 * @param {SkeletonListPropsCommon} props - SkeletonList props.
 * @param {{ lines?: number; grid: SkeletonGridProps["grid"] }[]} props.lists - Groups of skeleton rows to render while loading.
 * @param {boolean} [props.isLoading=true] - When `true`, renders the list of skeleton placeholders.
 * @param {string} [props.className] - Additional CSS class applied to each injected list container.
 * @param {ReactNode} [props.children] - Content rendered when `isLoading` is `false`.
 * @param {ComponentType<ListProps>} props.ListComponent - Theme-specific list component used to wrap each skeleton block.
 * @returns {JSX.Element | ReactNode[]} The rendered skeleton list or the fallback children.
 */
export const SkeletonListCommon = ({
  children,
  isLoading,
  lists = [],
  className,
  ListComponent,
}: SkeletonListPropsCommon) =>
  isLoading
    ? lists.map(({ lines = 1, grid }, linesIndex) => (
        <ListComponent key={linesIndex} className={className}>
          {[...Array(lines).keys()].map((_, lineIndex) => (
            <SkeletonGrid key={lineIndex} grid={grid} />
          ))}
        </ListComponent>
      ))
    : children;
