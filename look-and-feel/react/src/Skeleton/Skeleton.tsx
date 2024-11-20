/* eslint-disable react/no-array-index-key */
import "@axa-fr/design-system-look-and-feel-css/dist/Skeleton/Skeleton.scss";

export type SkeletonProps = {
  className?: string;
  grid: number[][];
  ariaBusy?: boolean;
  ariaLabel?: string;
  maxCols?: number;
  colGap?: number;
  rowGap?: number;
};

export const Skeleton = ({
  className = "af-skeleton",
  grid = [],
  ariaBusy = true,
  ariaLabel = "Chargement",
  maxCols = 12,
  colGap = 1,
  rowGap = 0.5,
}: SkeletonProps) => (
  <div
    className={`${className}-container`}
    aria-label={ariaLabel}
    role="status"
    aria-live="polite"
    aria-busy={ariaBusy}
    style={
      {
        "--max-cols": maxCols,
        "--col-gap": `${colGap}rem`,
        "--row-gap": `${rowGap}rem`,
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
);
