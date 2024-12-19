import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Skeleton.scss";
import { div } from "../utils";

const meta: Meta = {
  title: "Components/Skeleton",
};

export default meta;

const args = {
  className: "af-skeleton",
  grid: [[12], [12]],
  ariaBusy: true,
  ariaLabel: "Chargement",
  maxCols: 12,
  colGap: 16,
  rowGap: 8,
};

const render = ({
  className,
  grid,
  ariaBusy,
  ariaLabel,
  maxCols,
  colGap,
  rowGap,
}: Args) => {
  const addSkeleton = (colSize: number) =>
    div([], {
      style: `--col-size: ${colSize};`,
      class: className,
    });

  const skeletons = grid.map((cols: number[]) =>
    cols.map((colSize) => addSkeleton(colSize)),
  );

  return div([...skeletons.flat()], {
    style: `--max-cols: ${maxCols}; --col-gap: calc(${colGap} / var(--font-size-base) * 1rem); --row-gap: calc(${rowGap} / var(--font-size-base) * 1rem);`,
    class: `${className}-container`,
    "aria-busy": ariaBusy,
    "aria-label": ariaLabel,
  });
};

export const Default: StoryObj = {
  render,
  args,
};

export const MaxCols: StoryObj = {
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8,
  },
};

export const ColGap: StoryObj = {
  render,
  args: {
    ...args,
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4],
      [6, 6],
    ],
    colGap: 32,
  },
};

export const RowGap: StoryObj = {
  render,
  args: {
    ...args,
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4],
      [6, 6],
    ],
    rowGap: 32,
  },
};
