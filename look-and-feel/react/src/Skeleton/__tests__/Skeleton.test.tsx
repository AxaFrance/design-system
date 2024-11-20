import { render, screen } from "@testing-library/react";
import { Skeleton } from "../Skeleton";

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
    expect(skeleton).toHaveClass("other-container");
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
      expect(skeleton).toHaveClass("other-container");
      expect(skeleton.children.length).toEqual(nbChild);
    },
  );
});
