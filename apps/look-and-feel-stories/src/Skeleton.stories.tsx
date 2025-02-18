import { Skeleton } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import "./Skeleton-demo.scss";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;

const Render = ({
  grid,
  ...props
}: ComponentPropsWithoutRef<typeof Skeleton>) => {
  const [nbLines, setLines] = useState("3");
  const [nbCols, setCols] = useState("12");
  const [gridState, setGrid] = useState(grid);

  const onChangeLines = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLines(value);
  };

  const onChangeCols = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCols(value);
  };

  useEffect(() => {
    let newGrid = [] as typeof grid;
    for (let i = 1; i <= Number(nbLines); i++) {
      newGrid = [...newGrid, [Number(nbCols)]];
    }
    setGrid(newGrid);
  }, [nbCols, nbLines]);

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
          onInput={onChangeLines}
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
          onInput={onChangeCols}
        />
      </form>
      <Skeleton grid={gridState} {...props} />
    </div>
  );
};

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    grid: [[12], [12], [12]],
    maxCols: 12,
  },
  render: Render,
};

export const Mixed: StoryObj<typeof Skeleton> = {
  args: {
    grid: [
      [12, 10, 2, 8, 4],
      [6, 6],
      [12, 12, 12, 6],
    ],
  },
};

export const MaxCol: StoryObj<typeof Skeleton> = {
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8,
  },
};

export const ColGap: StoryObj<typeof Skeleton> = {
  args: {
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

export const RowGap: StoryObj<typeof Skeleton> = {
  args: {
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
