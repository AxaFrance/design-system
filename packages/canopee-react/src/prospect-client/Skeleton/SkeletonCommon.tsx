/* eslint-disable react/no-array-index-key */
import type { ReactNode } from "react";

type isLoadingAndChildrenProps =
  | { children: ReactNode; isLoading: boolean }
  | { children?: undefined; isLoading?: boolean };

export type SkeletonProps = {
  className?: string;
  grid: number[][];
  ariaBusy?: boolean;
  ariaLabel?: string;
  maxCols?: number;
  colGap?: number;
  rowGap?: number;
} & isLoadingAndChildrenProps;

export const Skeleton = ({
  className = "af-skeleton",
  grid = [],
  ariaBusy = true,
  ariaLabel = "Chargement",
  maxCols = 12,
  colGap = 16,
  rowGap = 8,
  isLoading = true,
  children,
}: SkeletonProps) =>
  isLoading ? (
    <div
      className={`${className}-container`}
      aria-label={ariaLabel}
      role="status"
      aria-live="polite"
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
        cols.map((colSize, indexCol) => (
          <div
            key={`${indexRow}-${indexCol}`}
            style={{ "--col-size": colSize } as React.CSSProperties}
            className={className}
          />
        )),
      )}
    </div>
  ) : (
    children
  );
