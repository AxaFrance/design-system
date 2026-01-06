import { render, screen } from "@testing-library/react";
import { Skeleton } from "../SkeletonCommon";

const defaultProps = {
  grid: [[12]],
};

describe("<Skeleton/>", () => {
  it("Render <Skeleton/> with default className", () => {
    render(<Skeleton {...defaultProps} />);
    const skeleton = screen.getByRole("status");
    expect(skeleton).toHaveAccessibleName();
    expect(skeleton).toHaveClass("af-skeleton-container");
  });

  it("Render <Skeleton/> with other className", () => {
    render(<Skeleton {...defaultProps} className="other" />);
    const skeleton = screen.getByRole("status");
    expect(skeleton).toHaveAccessibleName();
    expect(skeleton).toHaveClass("other");
  });

  it.each`
    grid                | nbChild
    ${undefined}        | ${0}
    ${[]}               | ${0}
    ${[[3, 9]]}         | ${2}
    ${[[3, 9], [3, 9]]} | ${4}
  `(
    `Render <Skeleton/> with $grid to have $nbChild children`,
    ({ grid, nbChild }: { grid: number[][]; nbChild: number }) => {
      render(<Skeleton className="other" grid={grid} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAccessibleName();
      expect(skeleton).toHaveClass("other");
      expect(skeleton.children.length).toEqual(nbChild);
    },
  );

  it("Should display content when isLoading false", () => {
    render(
      <Skeleton {...defaultProps} isLoading={false}>
        My content
      </Skeleton>,
    );

    expect(screen.getByText("My content")).toBeInTheDocument();
  });

  it("Should not display content when isLoading true", () => {
    render(
      <Skeleton {...defaultProps} isLoading>
        My content
      </Skeleton>,
    );
    expect(screen.queryByText("My content")).not.toBeInTheDocument();
  });
});
