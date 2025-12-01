import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button component", () => {
  it("should renders with default props", () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("af-btn");
  });

  it("should renders with a custom variant and size", () => {
    render(
      <Button variant="danger" small>
        Click me
      </Button>,
    );

    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toHaveClass("af-btn--danger");
    expect(buttonElement).toHaveClass("af-btn--small");
  });

  it("should renders with left and right icons", () => {
    render(
      <Button leftIcon={<span>Left</span>} rightIcon={<span>Right</span>}>
        Click me
      </Button>,
    );

    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement.childNodes).toHaveLength(3);
    expect(buttonElement.childNodes[0]).toHaveTextContent("Left");
    expect(buttonElement.childNodes[1]).toHaveTextContent("Click me");
    expect(buttonElement.childNodes[2]).toHaveTextContent("Right");
  });
});
