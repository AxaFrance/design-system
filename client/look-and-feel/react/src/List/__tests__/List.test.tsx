import { render, screen } from "@testing-library/react";
import { List } from "../List";

describe("List", () => {
  it("should render children", () => {
    const children = <div>Child 1</div>;

    render(<List>{children}</List>);

    expect(screen.getByRole("list")).toHaveClass("af-list");
    expect(screen.getByText("Child 1")).toBeInTheDocument();
  });

  it("should render with empty children", () => {
    const children = undefined;

    render(<List>{children}</List>);

    expect(screen.getByRole("list")).toHaveClass("af-list");
  });

  it("should render multiple children", () => {
    const children = [
      <div key="1">Child 1</div>,
      <div key="2">Child 2</div>,
      <div key="3">Child 3</div>,
    ];

    render(<List>{children}</List>);

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });
});
