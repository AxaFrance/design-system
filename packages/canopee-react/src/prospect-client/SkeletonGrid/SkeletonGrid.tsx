/* eslint-disable react/no-array-index-key */
import type { ReactNode } from "react";
import { Skeleton, type SkeletonProps } from "../Skeleton/Skeleton";
import "@axa-fr/canopee-css/prospect/SkeletonGrid/SkeletonGridAll.css";
import { getClassName } from "../utilities/getClassName";

const CLASS_NAME = "af-skeleton-grid";

/**
 * One skeleton cell rendered inside a `SkeletonGrid` row.
 */
export type SkeletonGridItem = SkeletonProps;

type isLoadingAndChildrenProps =
  | { children: ReactNode; isLoading: boolean }
  | { children?: undefined; isLoading?: boolean };

/**
 * Props for the `SkeletonGrid` component.
 *
 * `grid` is a two-level array where:
 * - first level represents rows
 * - second level represents skeleton cells rendered in each row
 */
export type SkeletonGridProps = {
  className?: string;
  grid: SkeletonGridItem[][];
  "aria-busy"?: boolean;
  "aria-label"?: string;
  maxCols?: number;
  colGap?: number;
  rowGap?: number;
} & isLoadingAndChildrenProps;

/**
 * Renders a responsive grid of skeleton placeholders.
 *
 * When `isLoading` is `false`, the component returns its `children` instead of
 * the skeleton grid.
 *
 * @component
 * @param {SkeletonGridProps} props - SkeletonGrid props.
 * @param {SkeletonGridItem[][]} props.grid - Grid definition where each row contains one or more skeleton cells.
 * @param {number} [props.maxCols=12] - Number of columns used to build the grid template.
 * @param {number} [props.colGap=16] - Horizontal gap between grid columns, in pixels.
 * @param {number} [props.rowGap=8] - Vertical gap between grid rows, in pixels.
 * @param {boolean} [props.isLoading=true] - When `true`, displays the skeleton placeholders.
 * @param {ReactNode} [props.children] - Content rendered when `isLoading` is `false`.
 * @param {string} [props.className] - Additional CSS class applied to the root element.
 * @param {string} [props.aria-label="Chargement"] - Accessible label for the loading region.
 * @param {boolean} [props.aria-busy=true] - Announces the loading region as busy to assistive technologies.
 * @returns {JSX.Element | ReactNode} The rendered skeleton grid or the fallback children.
 */
export const SkeletonGrid = ({
  className,
  grid = [],
  "aria-busy": ariaBusy = true,
  "aria-label": ariaLabel = "Chargement",
  maxCols = 12,
  colGap = 16,
  rowGap = 8,
  isLoading = true,
  children,
}: SkeletonGridProps) =>
  isLoading ? (
    <div
      className={getClassName({
        baseClassName: CLASS_NAME,
        className,
      })}
      aria-label={ariaLabel}
      role="status"
      aria-busy={ariaBusy}
      style={
        {
          "--max-cols": maxCols,
          "--col-gap": `calc(${colGap} / var(--font-size-base) * 1rem)`,
          "--row-gap": `calc(${rowGap} / var(--font-size-base) * 1rem)`,
        } as React.CSSProperties
      }
    >
      {grid.map((cols, indexRow) =>
        cols.map((skeletonProps, indexCol) => (
          <Skeleton key={`${indexRow}-${indexCol}`} {...skeletonProps} />
        )),
      )}
    </div>
  ) : (
    children
  );
