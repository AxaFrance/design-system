import { render, screen } from "@testing-library/react";
import { SkeletonGrid, type SkeletonGridProps } from "../SkeletonGrid";

const defaultProps = {
  grid: [[{ colSize: 12 }]],
};

describe("<SkeletonGrid/>", () => {
  it("Render <SkeletonGrid/> with default className", () => {
    render(<SkeletonGrid {...defaultProps} />);
    const skeleton = screen.getByRole("status");
    expect(skeleton).toHaveAccessibleName();
    expect(skeleton).toHaveClass("af-skeleton-grid-container");
  });

  it("Render <SkeletonGrid/> with other className", () => {
    render(<SkeletonGrid {...defaultProps} className="other" />);
    const skeleton = screen.getByRole("status");
    expect(skeleton).toHaveAccessibleName();
    expect(skeleton).toHaveClass("other");
  });

  it.each`
    grid                                                                    | nbChild
    ${undefined}                                                            | ${0}
    ${[]}                                                                   | ${0}
    ${[[{ colSize: 3 }, { colSize: 9 }]]}                                   | ${2}
    ${[[{ colSize: 3 }, { colSize: 9 }], [{ colSize: 3 }, { colSize: 9 }]]} | ${4}
  `(
    `Render <SkeletonGrid/> with $grid to have $nbChild children`,
    ({
      grid,
      nbChild,
    }: {
      grid: SkeletonGridProps["grid"];
      nbChild: number;
    }) => {
      render(<SkeletonGrid className="other" grid={grid} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAccessibleName();
      expect(skeleton).toHaveClass("other");
      expect(skeleton.children.length).toEqual(nbChild);
    },
  );

  it("Should display content when isLoading false", () => {
    render(
      <SkeletonGrid {...defaultProps} isLoading={false}>
        My content
      </SkeletonGrid>,
    );

    expect(screen.getByText("My content")).toBeInTheDocument();
  });

  it("Should not display content when isLoading true", () => {
    render(
      <SkeletonGrid {...defaultProps} isLoading>
        My content
      </SkeletonGrid>,
    );
    expect(screen.queryByText("My content")).not.toBeInTheDocument();
  });

  it("renders custom Skeleton props for each cell", () => {
    render(
      <SkeletonGrid
        grid={[
          [
            { colSize: 4, rowSize: 2, size: "L", variant: "rectangle" },
            { colSize: 1, size: "S", variant: "circle", className: "avatar" },
          ],
        ]}
      />,
    );

    const cells = screen.getByRole("status").children;

    expect(cells[0]).toHaveClass("af-skeleton--large");
    expect(cells[0]).toHaveStyle({ "--row-size": "2" });
    expect(cells[1]).toHaveClass("af-skeleton--circle");
    expect(cells[1]).toHaveClass("avatar");
  });
});
