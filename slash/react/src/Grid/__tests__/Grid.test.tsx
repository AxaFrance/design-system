import { render, screen } from "@testing-library/react";
import { Grid } from "../Grid";

describe("Grid component", () => {
  it("should render with default props", () => {
    render(<Grid>Content</Grid>);

    const element = screen.getByText("Content");

    expect(element).toHaveClass("af-grid");
  });

  it("should render with custom component", () => {
    render(<Grid component="section">Content</Grid>);

    const element = screen.getByText("Content");

    expect(element.tagName).toStrictEqual("SECTION");
  });

  it("should apply additional class names", () => {
    render(<Grid className="custom-class">Content</Grid>);

    const element = screen.getByText("Content");

    expect(element).toHaveClass("af-grid");
    expect(element).toHaveClass("custom-class");
  });
});
