import { render } from "@testing-library/react";
import { Skeleton } from "../Skeleton";

describe("<Skeleton/>", () => {
  it("Render <Skeleton/> with default className", () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild;
    expect(skeleton).toHaveClass("af-skeleton");
    expect(skeleton).toHaveClass("af-skeleton--rectangle");
    expect(skeleton).toHaveClass("af-skeleton--medium");
  });

  it("Render <Skeleton/> with other className", () => {
    const { container } = render(<Skeleton className="other" />);
    const skeleton = container.firstChild;
    expect(skeleton).toHaveClass("other");
  });

  it("renders correctly with variant 'circle'", () => {
    const { container } = render(<Skeleton variant="circle" />);
    const skeleton = container.firstChild;
    expect(skeleton).toHaveClass("af-skeleton--circle");
  });

  it("renders correctly with size 'XXL'", () => {
    const { container } = render(<Skeleton size="XXL" />);
    const skeleton = container.firstChild;
    expect(skeleton).toHaveClass("af-skeleton--extra-extra-large");
  });
});
