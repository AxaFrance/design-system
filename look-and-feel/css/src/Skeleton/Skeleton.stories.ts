import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Skeleton.scss";

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
  colGap: 1,
  rowGap: 0.5,
};

function createNode(
  node: keyof HTMLElementTagNameMap,
  attributes: Record<string, string>,
) {
  const el = document.createElement(node);
  for (const key in attributes) {
    if (attributes[key]) {
      el.setAttribute(key, attributes[key]);
    }
  }
  return el;
}

const render = ({
  className,
  grid,
  ariaBusy,
  ariaLabel,
  maxCols,
  colGap,
  rowGap,
}: Args) => {
  const skelelonContainer = createNode("div", {
    style: `--max-cols: ${maxCols}; --col-gap: ${colGap}rem; --row-gap: ${rowGap}rem;`,
    class: `${className}-container`,
    "aria-busy": ariaBusy,
    "aria-label": ariaLabel,
  });

  const addSkeleton = (colSize: number) =>
    createNode("div", {
      style: `--col-size: ${colSize};`,
      class: className,
    });

  grid.forEach((cols: number[]) => {
    cols.forEach((colSize) => {
      skelelonContainer.appendChild(addSkeleton(colSize));
    });
  });

  return skelelonContainer;
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
