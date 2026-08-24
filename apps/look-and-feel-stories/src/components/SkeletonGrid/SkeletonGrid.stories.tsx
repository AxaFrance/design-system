import { SkeletonGrid } from "@axa-fr/canopee-react/client";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs, useEffect, useState } from "storybook/preview-api";
import { type ChangeEvent, ComponentPropsWithoutRef } from "react";
import "./SkeletonGrid.stories.css?inline";

type SkeletonGridProps = ComponentPropsWithoutRef<typeof SkeletonGrid>;

const repeatRows = (
  lines: number,
  colSize: number,
  size?: SkeletonGridProps["grid"][number][number]["size"],
): SkeletonGridProps["grid"] =>
  Array.from({ length: lines }, () => [{ colSize, size }]);

const meta: Meta<typeof SkeletonGrid> = {
  title: "Components/SkeletonGrid",
  component: SkeletonGrid,
};

export default meta;

const Render = ({ grid, ...props }: SkeletonGridProps) => {
  const [, updateArgs] = useArgs<SkeletonGridProps>();
  const [nbLines, setLines] = useState("3");
  const [nbCols, setCols] = useState("12");
  const [gridState, setGrid] = useState(grid);

  const onChangeLines = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLines(value);
  };

  const onChangeCols = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCols(value);
  };

  useEffect(() => {
    const nextGrid = repeatRows(Number(nbLines), Number(nbCols), "XS");
    setGrid(nextGrid);
    updateArgs({ grid: nextGrid });
  }, [nbCols, nbLines, updateArgs]);

  return (
    <div className="skeleton-demo">
      <form>
        <label htmlFor="input-lines">
          Lines : <strong>{nbLines}</strong>
        </label>

        <input
          id="input-lines"
          type="range"
          min="1"
          max="10"
          value={nbLines}
          onChange={onChangeLines}
        />
        <label htmlFor="input-cols">
          Cols : <strong>{nbCols}</strong>
        </label>

        <input
          id="input-cols"
          type="range"
          min="1"
          max="12"
          value={nbCols}
          onChange={onChangeCols}
        />
      </form>
      <SkeletonGrid grid={gridState} {...props} />
    </div>
  );
};

export const Default: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: repeatRows(3, 12, "XS"),
    maxCols: 12,
  },
  render: Render,
};

export const Mixed: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: [
      [
        { colSize: 1, variant: "circle", size: "L" },
        { colSize: 11, size: "M" },
      ],
      [
        { colSize: 8, size: "S" },
        { colSize: 4, variant: "action", size: "M" },
      ],
      [
        { colSize: 4, size: "XL" },
        { colSize: 8, size: "L" },
      ],
    ],
  },
};

export const MaxColumns: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: [
      [
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
      ],
      [{ colSize: 2 }, { colSize: 2 }, { colSize: 2 }, { colSize: 2 }],
      [{ colSize: 4 }, { colSize: 4 }],
      [{ colSize: 8 }],
    ],
    maxCols: 8,
  },
};

export const ColumnGap: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: [
      [
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
      ],
      [
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
      ],
      [{ colSize: 3 }, { colSize: 3 }, { colSize: 3 }, { colSize: 3 }],
      [{ colSize: 4 }, { colSize: 4 }, { colSize: 4 }],
      [{ colSize: 6 }, { colSize: 6 }],
    ],
    colGap: 32,
  },
};

export const RowGapSpacing: StoryObj<typeof SkeletonGrid> = {
  args: {
    grid: [
      [
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
        { colSize: 1 },
      ],
      [
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
        { colSize: 2 },
      ],
      [{ colSize: 3 }, { colSize: 3 }, { colSize: 3 }, { colSize: 3 }],
      [{ colSize: 4 }, { colSize: 4 }, { colSize: 4 }],
      [{ colSize: 6 }, { colSize: 6 }],
    ],
    rowGap: 32,
  },
};
